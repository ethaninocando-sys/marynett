// Splits a phrase into words that rise in one after another.
// `start` offsets the stagger so a second phrase follows the first.
export function Words({
  text,
  start = 0,
  muted = false,
}: {
  text: string;
  start?: number;
  muted?: boolean;
}) {
  return (
    <>
      {text.split(" ").map((word, index) => (
        <span key={`${word}-${index}`}>
          <span
            className={`sv-word ${muted ? "text-[var(--sv-400)]" : ""}`}
            style={{ "--i": start + index } as React.CSSProperties}
          >
            {word}
          </span>{" "}
        </span>
      ))}
    </>
  );
}
