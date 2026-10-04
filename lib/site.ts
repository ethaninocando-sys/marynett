/**
 * Single source of truth for every fact on this site that carries regulatory
 * weight: license data, disclosures, consent language, statistics.
 *
 * Compliance edits happen HERE, not in components. FEG requires written
 * approval before publication (Agent Agreement 2(C), Compliance Declarations
 * #7), so keeping the governed copy in one file makes the review tractable.
 */

export const agent = {
  /** Display name used in headings and branding. */
  name: "Marynett Bolivar",
  /** Exact name on the Texas license, used in the disclosure footer. */
  legalName: "Marynett Hijosa Bolivar",
  licenseType: "Texas General Lines Agent",
  licenseNumber: "2020634",
  npn: "17672044",
  /** Authorized lines under the license. */
  qualification: "Life, Accident, Health & HMO",
  licensedSince: 2015,
  licenseExpires: "2027-12-31",
  city: "Edinburg",
  state: "TX",
  /** States where she may solicit. Gates the lead form. */
  licensedStates: ["TX"] as const,
  serviceAreas: ["McAllen", "Edinburg", "Mission", "Pharr"],
  phoneDisplay: "(956) 289-6297",
  phoneHref: "tel:+19562896297",
  email: "marynettbolivar@gmail.com",
} as const;

/** Years licensed, derived so it never goes stale in the copy. */
export const yearsLicensed = new Date().getFullYear() - agent.licensedSince;

/**
 * FEG Social Media Policy: material soliciting insurance sales uses
 * "FEG Insurance Services", never "Freedom Equity Group". P&P 17(F) and Agent
 * Agreement 4(J) require the independent-agent phrase wherever the name appears.
 */
export const affiliation = {
  name: "FEG Insurance Services",
  independence: "An Independent Agent",
} as const;

/**
 * TCPA consent. The FCC one-to-one rule was vacated 2025-01-24 (Insurance
 * Marketing Coalition v. FCC), so prior express written consent governs, but
 * FEG P&P 17(H)(vi) bans autodialers for calls and SMS outright, and carriers
 * commonly require agent-specific consent by contract. Built to the stricter bar.
 *
 * Bump `version` whenever `text` changes; it is stored with every lead so an
 * old record can always be tied back to the exact language shown.
 */
export const consent = {
  version: "2026-09-29.1",
  text:
    `I agree that ${agent.name} may call or text me at the number above about ` +
    `life insurance and annuity products. Contact is made manually, not by ` +
    `autodialer. Consent is not a condition of purchase. Message and data rates may apply.`,
} as const;

/**
 * Statistics shown on the page. Meta evaluates ad and landing page as one unit
 * and requires the destination to substantiate every claim; NAIC Model 570
 * requires accuracy. Agent Agreement 2(I) limits Sales Tools to claims FEG
 * publishes, so these cite FEG material.
 *
 * `source` is PENDING until the FEG document is supplied. Anything left pending
 * renders its marker but must be resolved before launch.
 */
export const footnotes = [
  {
    id: 1,
    claim: "About 4 in 10 of us will hear the word cancer in our lifetime.",
    source: null as string | null, // PENDING: FEG published material
  },
  {
    id: 2,
    claim: "Years the market ends down: about 1 in 4.",
    source: null as string | null, // PENDING: FEG published material
  },
] as const;

/**
 * Indexed-product disclosure. Compliance Declarations #14 forbids describing
 * these as a security, savings plan or bank product, or saying they participate
 * directly in the stock market. #15/#16 forbid unauthorised illustrations and
 * any suggestion that indexed results are guaranteed.
 */
export const indexDisclosure =
  "Index-linked crediting is subject to caps, participation rates and policy " +
  "charges. A floor limits loss from index performance; it does not prevent " +
  "reduction of value from fees or charges. Indexed products do not participate " +
  "directly in the stock market, and indexed illustrations are hypothetical. " +
  "They do not represent past or future results.";

export const generalDisclosure =
  "Life insurance and annuity products are issued by the insurance carrier. " +
  "Guarantees are backed by the financial strength and claims-paying ability of " +
  "the issuing company. Living benefit riders vary by carrier, product and state " +
  "and are subject to eligibility, qualifying events and policy terms. This is " +
  "not an offer of insurance in any state where I am not licensed.";

export const notGovernment =
  "Not affiliated with or endorsed by any government agency.";

/**
 * Client testimonials.
 *
 * EMPTY BY DESIGN. The design comp carried bracketed placeholders, not real
 * quotes. Fabricated testimonials are actionable under the FTC Rule on Consumer
 * Reviews and Testimonials, are deceptive advertising under NAIC Model 570, and
 * breach Agent Agreement 2(G)(i). The section renders only when real, consented
 * quotes exist here, so the page is honest today and complete the moment they land.
 *
 * To publish: add entries with the client's actual words and written permission on
 * file. Attribution stays first-initial + city (FEG Social Media Policy bars client
 * identifying information). Never reference a claim payout.
 *
 * NOTE: the comp's third card ("the 401(k) I left at my old job… what we did with
 * it") cannot be used in any form. It implies advice on a qualified plan, which
 * Compliance Declaration #18 prohibits absent a securities license.
 */
export type Testimonial = {
  quote: string;
  initial: string;
  city: string;
  role: string;
};

export const testimonials: Testimonial[] = [];

export const cta = {
  primary: "Book my 15-minute check",
  header: "Book a 15-minute check",
} as const;
