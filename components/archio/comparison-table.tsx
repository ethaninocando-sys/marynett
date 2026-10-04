import { Check } from "lucide-react";

/**
 * Archio's comparison table, measured off the published template.
 *
 *   columns  443 / 379 / 379 of 1200
 *   rows     80px
 *   cols 1-2 sit on the card cream, col 3 is tinted bone throughout
 *   header   col 3 is solid primary, 12px radius on the outer top corners
 *   cells    dash for no, check for yes, 32px padding on the label column
 *
 * Not every row is a win for the owned column. The first one is true of both,
 * which is the point: a table where everything favours you reads as a sales
 * sheet rather than a comparison.
 */

type Row = { label: string; work: boolean; own: boolean };

const rows: Row[] = [
  { label: "Pays your family if you die", work: true, own: true },
  { label: "Can pay you if you survive a serious illness", work: false, own: true },
  { label: "Stays with you when you leave the job", work: false, own: true },
  { label: "You choose the amount", work: false, own: true },
  { label: "Someone explains it to you", work: false, own: true },
];

function Mark({ on }: { on: boolean }) {
  return on ? (
    <Check className="size-5 text-primary" strokeWidth={2} aria-label="Yes" />
  ) : (
    <span className="text-muted-foreground" aria-label="No">
      &mdash;
    </span>
  );
}

export function ComparisonTable() {
  return (
    <div className="overflow-hidden rounded-xl">
      <table className="w-full border-collapse text-left">
        <caption className="sr-only">
          What coverage through work does, compared with a policy you own
        </caption>
        <thead>
          <tr>
            <th
              scope="col"
              className="label w-[37%] rounded-tl-xl bg-card px-8 py-6 text-muted-foreground"
            >
              What it does
            </th>
            <th
              scope="col"
              className="label w-[31.5%] bg-card px-4 py-6 text-center text-muted-foreground"
            >
              Through work
            </th>
            <th
              scope="col"
              className="label w-[31.5%] rounded-tr-xl bg-primary px-4 py-6 text-center text-primary-foreground"
            >
              A policy you own
            </th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={row.label}>
              <td
                className={`body-sm bg-card px-8 py-6 ${
                  i === rows.length - 1 ? "rounded-bl-xl" : ""
                } border-t border-border`}
              >
                {row.label}
              </td>
              <td className="border-t border-border bg-card px-4 py-6 text-center">
                <span className="inline-flex justify-center">
                  <Mark on={row.work} />
                </span>
              </td>
              <td
                className={`border-t border-border bg-bone px-4 py-6 text-center ${
                  i === rows.length - 1 ? "rounded-br-xl" : ""
                }`}
              >
                <span className="inline-flex justify-center">
                  <Mark on={row.own} />
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
