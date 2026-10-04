/**
 * The soft background geometry behind several Archio sections: a 500px circle
 * paired with a large white blur. Values read off the published template.
 * Decorative only, so it stays out of the accessibility tree.
 */
export function BgShapes({
  position = "left",
}: {
  position?: "left" | "right";
}) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute bottom-0 -z-0 ${
        position === "left" ? "-left-40" : "-right-40"
      }`}
    >
      <div className="size-[500px] rounded-[1000px] bg-secondary/40" />
      <div className="absolute -top-60 left-1/2 h-[1030px] w-[594px] -translate-x-1/2 rounded-[1000px] bg-white blur-[40px]" />
    </div>
  );
}
