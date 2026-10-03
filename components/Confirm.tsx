import { showConfirmMarks } from "@/lib/site";

// Highlights a fact that Marynett still has to confirm.
export function Confirm({ children }: { children: React.ReactNode }) {
  if (!showConfirmMarks) return <>{children}</>;
  return (
    <mark className="confirm" title="Needs Marynett's confirmation">
      {children}
    </mark>
  );
}
