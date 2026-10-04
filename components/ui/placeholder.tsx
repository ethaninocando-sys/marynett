import { isPrototype } from "@/lib/site";
import { cn } from "@/lib/utils";

/**
 * Stands in for an asset we don't have yet. Renders nothing once the
 * prototype flag is off, so an unfilled slot can't ship as an empty box.
 */
export function Placeholder({
  className,
  label,
  note,
}: {
  className?: string;
  label: string;
  note?: string;
}) {
  if (!isPrototype) return null;
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center gap-1 rounded-md border border-dashed border-border bg-card/60 p-6 text-center",
        className
      )}
    >
      <p className="label text-foreground/70">{label}</p>
      {note ? (
        <p className="body-sm max-w-xs text-muted-foreground">{note}</p>
      ) : null}
    </div>
  );
}
