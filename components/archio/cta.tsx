import Link from "next/link";
import { cn } from "@/lib/utils";

/**
 * Archio's two button styles, measured from the published build:
 *   primary   bg #0E3A27, radius 10px, padding 12px 24px, nine-layer shadow
 *   secondary bg #E6EECD, radius 10px, padding 12px 24px, no shadow
 */
const base =
  "inline-flex items-center justify-center gap-2 rounded-[10px] px-6 py-3 " +
  "text-[15px] font-medium tracking-[-0.02em] transition-colors " +
  "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary";

const styles = {
  primary:
    "bg-primary text-primary-foreground shadow-cta hover:bg-primary/90",
  secondary:
    "bg-secondary text-secondary-foreground hover:bg-secondary/80",
  ghost: "text-foreground underline underline-offset-4 hover:text-primary",
} as const;

export function Cta({
  href,
  variant = "primary",
  className,
  children,
}: {
  href: string;
  variant?: keyof typeof styles;
  className?: string;
  children: React.ReactNode;
}) {
  const cls = cn(base, styles[variant], className);
  if (href.startsWith("/")) {
    return (
      <Link href={href} className={cls}>
        {children}
      </Link>
    );
  }
  return (
    <a href={href} className={cls}>
      {children}
    </a>
  );
}
