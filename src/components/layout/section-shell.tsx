import { cn } from "@/lib/utils";

export function SectionShell({
  children,
  className,
  id,
  flush = false,
  boxed = true,
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
  flush?: boolean;
  boxed?: boolean;
}) {
  if (!boxed) {
    return (
      <section id={id} className={cn("scroll-mt-[var(--nav-offset)]", className)}>
        {children}
      </section>
    );
  }

  return (
    <section
      id={id}
      className={cn(
        "scroll-mt-[var(--nav-offset)] rounded-2xl border border-white/70 bg-white/92 shadow-[0_8px_40px_rgba(111,78,55,0.1)] backdrop-blur-md sm:rounded-3xl lg:rounded-[2rem]",
        !flush && "overflow-hidden",
        className
      )}
    >
      {children}
    </section>
  );
}
