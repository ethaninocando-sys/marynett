import { cn } from "@/lib/utils";

/**
 * Sevora's hero reveal, rebuilt from measurements of the live template.
 *
 * Each character animates opacity 0.001 -> 1, blur(10px) -> 0 and
 * translateY(10px) -> 0, staggered ~35ms apart. Words are wrapped in nowrap
 * spans so a line break never lands mid-word, which is what Framer does too.
 *
 * Accessibility: the split characters are hidden from assistive tech and the
 * whole string is exposed via aria-label, otherwise a screen reader spells the
 * heading out letter by letter. The CSS honours prefers-reduced-motion.
 */
export function AnimatedHeading({
  lead,
  text,
  as: Tag = "h1",
  className,
}: {
  /**
   * Optional opening phrase in the muted tone. Sevora greys a trailing word,
   * but on a headline whose payoff lands at the end, greying the end buries
   * the point. The setup gets muted here and the payoff stays full strength.
   */
  lead?: string;
  text: string;
  as?: "h1" | "h2";
  className?: string;
}) {
  const full = lead ? `${lead} ${text}` : text;
  let index = 0;

  const renderWords = (value: string, tone?: "muted") => {
    const words = value.split(" ");
    return words.map((word, w) => (
      // The space sits OUTSIDE the nowrap span. Inside it there is no break
      // opportunity and long headings overflow their container.
      <span key={`${tone ?? "base"}-${w}`}>
        <span style={{ whiteSpace: "nowrap" }}>
          {[...word].map((char, c) => (
            <span
              key={c}
              className={cn(
                "char-reveal",
                tone === "muted" && "text-muted-foreground"
              )}
              style={{ "--char-index": index++ } as React.CSSProperties}
            >
              {char}
            </span>
          ))}
        </span>
        {w < words.length - 1 ? " " : null}
      </span>
    ));
  };

  return (
    <Tag className={className} aria-label={full}>
      <span aria-hidden="true">
        {lead ? (
          <>
            {renderWords(lead, "muted")}
            <span> </span>
          </>
        ) : null}
        {renderWords(text)}
      </span>
    </Tag>
  );
}
