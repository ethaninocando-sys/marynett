// Stand-in for a photo, video or embed that will be added later.
export function Placeholder({
  label,
  note,
  className = "",
}: {
  label: string;
  note?: string;
  className?: string;
}) {
  return (
    <div className={`placeholder ${className}`}>
      <span className="font-semibold text-ink">{label}</span>
      {note ? <span>{note}</span> : null}
    </div>
  );
}
