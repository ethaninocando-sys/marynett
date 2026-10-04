/**
 * Direction B scope. Everything under /b renders with the Sevora token set:
 * Lora over Instrument Sans, monochrome on a light grey ground, 16px radii,
 * quiet shadows. The tokens live in globals.css under `.theme-sevora`, so the
 * shared components pick them up without needing a direction-aware prop.
 */
export default function DirectionBLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="theme-sevora bg-background text-foreground">{children}</div>
  );
}
