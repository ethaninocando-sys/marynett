import { showConfirmMarks } from "@/lib/site";

/**
 * Wraps a fact Marynett still has to verify. Pattern borrowed from Ethan's
 * build: unverified numbers stay visibly flagged so none of them can ship by
 * accident. Set `showConfirmMarks` to false at launch.
 */
export function Confirm({ children }: { children: React.ReactNode }) {
  if (!showConfirmMarks) return <>{children}</>;
  return (
    <mark
      title="Needs Marynett's confirmation before launch"
      className="bg-secondary/70 decoration-primary/40 px-0.5 underline decoration-dotted underline-offset-4"
    >
      {children}
    </mark>
  );
}
