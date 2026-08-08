"use client";

import { useCallback, useEffect, useState } from "react";
import { LogOut, Mail, RefreshCw } from "lucide-react";
import type { ContactSubmission } from "@/lib/supabase/server";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SectionShell } from "@/components/layout/section-shell";

function formatDate(value: string) {
  return new Intl.DateTimeFormat("en-IN", {
    dateStyle: "medium",
    timeStyle: "short",
  }).format(new Date(value));
}

export function AdminDashboard() {
  const [authenticated, setAuthenticated] = useState(false);
  const [checkingAuth, setCheckingAuth] = useState(true);
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");
  const [loginLoading, setLoginLoading] = useState(false);

  const [submissions, setSubmissions] = useState<ContactSubmission[]>([]);
  const [loading, setLoading] = useState(false);
  const [fetchError, setFetchError] = useState("");

  const loadSubmissions = useCallback(async () => {
    setLoading(true);
    setFetchError("");

    try {
      const response = await fetch("/api/admin/submissions");
      if (response.status === 401) {
        setAuthenticated(false);
        return;
      }

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.error ?? "Failed to load submissions.");
      }

      setAuthenticated(true);
      setSubmissions(data.submissions ?? []);
    } catch (error) {
      setFetchError(
        error instanceof Error ? error.message : "Failed to load submissions."
      );
    } finally {
      setLoading(false);
      setCheckingAuth(false);
    }
  }, []);

  useEffect(() => {
    loadSubmissions();
  }, [loadSubmissions]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoginLoading(true);
    setLoginError("");

    try {
      const response = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.error ?? "Login failed.");
      }

      setPassword("");
      await loadSubmissions();
    } catch (error) {
      setLoginError(error instanceof Error ? error.message : "Login failed.");
    } finally {
      setLoginLoading(false);
    }
  };

  const handleLogout = async () => {
    await fetch("/api/admin/logout", { method: "POST" });
    setAuthenticated(false);
    setSubmissions([]);
  };

  const toggleRead = async (submission: ContactSubmission) => {
    const response = await fetch("/api/admin/submissions", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id: submission.id, read: !submission.read }),
    });

    if (!response.ok) return;

    setSubmissions((current) =>
      current.map((item) =>
        item.id === submission.id ? { ...item, read: !item.read } : item
      )
    );
  };

  if (checkingAuth) {
    return (
      <SectionShell>
        <div className="flex min-h-[40vh] items-center justify-center p-10 text-muted">
          Loading admin dashboard...
        </div>
      </SectionShell>
    );
  }

  if (!authenticated) {
    return (
      <SectionShell>
        <div className="mx-auto max-w-md p-8 md:p-10">
          <h1 className="text-2xl font-bold text-coffee mb-2">Admin Login</h1>
          <p className="text-sm text-muted mb-6">
            Sign in to view contact form submissions.
          </p>
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label htmlFor="password" className="text-sm text-muted mb-2 block">
                Password
              </label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                placeholder="Enter admin password"
              />
            </div>
            {loginError && (
              <p className="text-sm text-red-600">{loginError}</p>
            )}
            <Button type="submit" variant="gradient" disabled={loginLoading}>
              {loginLoading ? "Signing in..." : "Sign in"}
            </Button>
          </form>
        </div>
      </SectionShell>
    );
  }

  const unreadCount = submissions.filter((item) => !item.read).length;

  return (
    <SectionShell>
      <div className="p-6 md:p-10">
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-2xl font-bold text-coffee md:text-3xl">
              Contact Submissions
            </h1>
            <p className="mt-1 text-sm text-muted">
              {submissions.length} total · {unreadCount} unread
            </p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="sm" onClick={loadSubmissions} disabled={loading}>
              <RefreshCw className={`h-4 w-4 ${loading ? "animate-spin" : ""}`} />
              Refresh
            </Button>
            <Button variant="outline" size="sm" onClick={handleLogout}>
              <LogOut className="h-4 w-4" />
              Logout
            </Button>
          </div>
        </div>

        {fetchError && (
          <p className="mb-6 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
            {fetchError}
          </p>
        )}

        {submissions.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-border bg-cream/30 p-12 text-center text-muted">
            <Mail className="mx-auto mb-3 h-8 w-8 text-sky-dark" />
            No contact submissions yet.
          </div>
        ) : (
          <div className="space-y-4">
            {submissions.map((submission) => (
              <article
                key={submission.id}
                className={`rounded-2xl border p-5 shadow-sm transition ${
                  submission.read
                    ? "border-border bg-white/70"
                    : "border-sky/30 bg-sky-light/20"
                }`}
              >
                <div className="mb-3 flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <h2 className="text-lg font-semibold text-coffee">
                      {submission.name}
                    </h2>
                    <p className="text-sm text-muted">{submission.email}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-xs text-muted">
                      {formatDate(submission.created_at)}
                    </span>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => toggleRead(submission)}
                    >
                      {submission.read ? "Mark unread" : "Mark read"}
                    </Button>
                  </div>
                </div>
                <p className="mb-2 text-sm font-medium text-coffee">
                  {submission.subject}
                </p>
                <p className="whitespace-pre-wrap text-sm leading-relaxed text-muted">
                  {submission.message}
                </p>
              </article>
            ))}
          </div>
        )}
      </div>
    </SectionShell>
  );
}
