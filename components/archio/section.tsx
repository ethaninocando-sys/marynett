import { cn } from "@/lib/utils";

/**
 * Archio alternates white and bone bands, each with 100px/50px padding on
 * desktop and 80px/18px on phones. Containers cap at 1200, text at 840.
 */
export function Section({
  tone = "white",
  className,
  children,
  id,
  ...rest
}: React.ComponentProps<"section"> & { tone?: "white" | "bone" | "green" }) {
  return (
    <section
      id={id}
      className={cn(
        "section-pad relative overflow-hidden",
        tone === "white" && "bg-background text-foreground",
        tone === "bone" && "bg-bone text-foreground",
        tone === "green" && "bg-primary text-primary-foreground",
        className
      )}
      {...rest}
    >
      {children}
    </section>
  );
}

export function Container({
  className,
  children,
}: React.ComponentProps<"div">) {
  return (
    <div className={cn("container-page relative", className)}>{children}</div>
  );
}

/** Satoshi, uppercase, 0.8px tracking. The template's eyebrow voice. */
export function Eyebrow({ className, children }: React.ComponentProps<"p">) {
  return <p className={cn("label text-primary", className)}>{children}</p>;
}
