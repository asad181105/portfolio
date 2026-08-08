"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle, Send } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { MagneticButton } from "@/components/effects/magnetic-button";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const formData = new FormData(e.currentTarget);
    const payload = {
      name: String(formData.get("name") ?? ""),
      email: String(formData.get("email") ?? ""),
      subject: String(formData.get("subject") ?? ""),
      message: String(formData.get("message") ?? ""),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.error ?? "Failed to send message.");
      }

      setSubmitted(true);
      e.currentTarget.reset();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to send message.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative">
      <AnimatePresence mode="wait">
        {submitted ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex flex-col items-center justify-center rounded-2xl border border-sky/40 bg-sky-light/40 p-12 text-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 200, delay: 0.1 }}
            >
              <CheckCircle className="h-16 w-16 text-sky-dark mb-4" />
            </motion.div>
            <h3 className="text-xl font-semibold mb-2 text-coffee">Message sent!</h3>
            <p className="text-muted text-sm">
              Thanks for reaching out. I&apos;ll get back to you soon.
            </p>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            onSubmit={handleSubmit}
            className="space-y-5"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="text-sm text-muted mb-2 block">
                  Name
                </label>
                <Input id="name" name="name" required placeholder="Your name" />
              </div>
              <div>
                <label htmlFor="email" className="text-sm text-muted mb-2 block">
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="you@company.com"
                />
              </div>
            </div>
            <div>
              <label htmlFor="subject" className="text-sm text-muted mb-2 block">
                Subject
              </label>
              <Input id="subject" name="subject" required placeholder="Project inquiry" />
            </div>
            <div>
              <label htmlFor="message" className="text-sm text-muted mb-2 block">
                Message
              </label>
              <Textarea
                id="message"
                name="message"
                required
                placeholder="Tell me about your opportunity..."
                rows={5}
              />
            </div>
            {error && (
              <p className="text-sm text-red-600">{error}</p>
            )}
            <MagneticButton>
              <Button
                type="submit"
                variant="gradient"
                size="lg"
                className="w-full sm:w-auto"
                disabled={loading}
              >
                {loading ? (
                  "Sending..."
                ) : (
                  <>
                    <Send className="h-4 w-4" />
                    Send Message
                  </>
                )}
              </Button>
            </MagneticButton>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
