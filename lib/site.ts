/**
 * Single source of truth for every fact on this site that carries regulatory
 * weight: license data, disclosures, consent language, statistics.
 *
 * Compliance edits happen HERE, not in components. FEG requires written
 * approval before publication (Agent Agreement 2(C), Compliance Declarations
 * #7), so keeping the governed copy in one file makes the review tractable.
 *
 * Anything marked `confirm: true` renders wrapped in <Confirm> and must get
 * Marynett's sign-off before launch.
 */

export const agent = {
  name: "Marynett Bolivar",
  credentials: "RN",
  /** Exact name on the Texas license, used in the disclosure footer. */
  legalName: "Marynett Hijosa Bolivar",
  licenseType: "Texas General Lines Agent",
  licenseNumber: "2020634",
  npn: "17672044",
  qualification: "Life, Accident, Health & HMO",
  /**
   * TDI record: original issue 07-20-2015. Ethan's build had 2016, and his
   * "22 years before licensing" figure depends on which is right.
   */
  licensedSince: 2015,
  licenseExpires: "2027-12-31",
  /**
   * From Ethan's build. Unverified — Marynett confirms both.
   * The word form is for headlines: "Thirty-two years at the bedside" sits
   * better in a serif than "32 years" does. The numeral is for stat tiles.
   */
  nurseYears: 32,
  nurseYearsWord: "Thirty-two",
  nurseYearsBeforeLicense: 22,
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
 * Prototype switches. Both false at launch.
 * `showConfirmMarks` outlines unverified facts; `isPrototype` keeps the
 * placeholders for missing assets visible.
 */
export const showConfirmMarks = false;
export const isPrototype = true;

/**
 * FEG Social Media Policy: material soliciting insurance sales uses
 * "FEG Insurance Services", never "Freedom Equity Group". P&P 17(F) and Agent
 * Agreement 4(J) require the independent-agent phrase wherever the name appears.
 */
export const affiliation = {
  name: "FEG Insurance Services",
  independence: "An Independent FEG Agent",
  incomeDisclosure: "https://id.freedomequitygroup.com/",
} as const;

/**
 * TCPA consent. The FCC one-to-one rule was vacated 2025-01-24 (Insurance
 * Marketing Coalition v. FCC), so prior express written consent governs, but
 * FEG P&P 17(H)(vi) bans autodialers for calls and SMS outright and carriers
 * commonly require agent-specific consent by contract. Built to the stricter bar.
 *
 * Bump `version` whenever `text` changes; it is stored with every lead so an
 * old record can always be tied back to the exact language shown.
 */
export const consent = {
  version: "2026-10-04.1",
  text:
    `I agree that ${agent.name} may call or text me at the number above about ` +
    `life insurance and annuity products. Contact is made manually, not by ` +
    `autodialer. Consent is not a condition of purchase. Message and data rates may apply.`,
} as const;

/**
 * Statistics shown on the site. Meta evaluates ad and landing page as one unit
 * and requires the destination to substantiate every claim; NAIC Model 570
 * requires accuracy. Agent Agreement 2(I) limits Sales Tools to claims FEG
 * publishes, so these cite FEG material.
 *
 * Rendered as plain sentences in the footer rather than numbered footnotes.
 * Superscripts in body copy read as clutter, and substantiation does not
 * require one: the claim and its source just have to be findable on the page.
 *
 * `source` stays null until the FEG document is supplied.
 */
export const footnotes = [
  {
    claim: "About 4 in 10 of us will hear the word cancer in our lifetime.",
    source: null as string | null, // PENDING: FEG published material
  },
] as const;

/**
 * Indexed-product disclosure. Compliance Declarations #14 forbids describing
 * these as a security, savings plan or bank product, or saying they participate
 * directly in the stock market. #15/#16 forbid unauthorized illustrations and
 * any suggestion that indexed results are guaranteed.
 */
export const indexDisclosure =
  "Index-linked crediting is subject to caps, participation rates and policy " +
  "charges. A floor limits loss from index performance; it does not prevent " +
  "reduction of value from fees or charges. Indexed products do not participate " +
  "directly in the stock market, and indexed illustrations are hypothetical. " +
  "They do not represent past or future results.";

/** Ethan's wording. More explicit than the earlier version on Dec #14 and #21. */
export const generalDisclosure =
  "This website was created by an independent agent. It is general education, " +
  "not tax, legal or investment advice. Life insurance and annuities are not " +
  "bank deposits, are not FDIC insured, and are not investments in the stock " +
  "market. Guarantees depend on the claims-paying ability of the issuing " +
  "insurance company.";

export const notGovernment =
  "Not affiliated with or endorsed by any government agency.";

/**
 * Client testimonials.
 *
 * EMPTY BY DESIGN. The design comp carried bracketed placeholders, not real
 * quotes. Fabricated testimonials are actionable under the FTC Rule on Consumer
 * Reviews and Testimonials, are deceptive advertising under NAIC Model 570, and
 * breach Agent Agreement 2(G)(i). The section renders only when real, consented
 * quotes exist here.
 *
 * Attribution stays first-initial + city (FEG Social Media Policy bars client
 * identifying information). Never reference a claim payout.
 *
 * The comp's 401(k) card cannot be used in any form. It implies advice on a
 * qualified plan, which Compliance Declaration #18 prohibits absent a
 * securities license.
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
