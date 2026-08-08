import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SectionShell } from "@/components/layout/section-shell";

export default function NotFound() {
  return (
    <SectionShell>
      <div className="flex min-h-[50vh] flex-col items-center justify-center px-4 py-16 text-center">
        <p className="text-sm font-mono text-sky-dark mb-4">404</p>
        <h1 className="text-4xl font-bold mb-4 text-coffee">Page not found</h1>
        <p className="text-muted mb-8 max-w-md">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Button asChild>
          <Link href="/">Back to Home</Link>
        </Button>
      </div>
    </SectionShell>
  );
}
