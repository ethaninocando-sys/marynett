# Marynett Bolivar — Landing Page Plan

**Client:** Marynett Hijosa Bolivar — Texas General Lines Agent (Life, Accident, Health & HMO)
**License:** #2020634 · NPN 17672044 · issued 2015-07-20 · active through 2027-12-31
**Base:** Edinburg, TX 78542 · Service area: McAllen · Edinburg · Mission · Pharr
**Affiliation:** Independent agent, FEG Insurance Services
**Date:** 2026-09-29

---

## 1. Scope

Consumer landing page only. Leads with IUL / living benefits, secondary fixed & indexed
annuity angle. The agent-recruiting funnel is a **separate page at `/opportunity`**, built
later, noindex, never linked from consumer nav — see §7.

### Tech stack — matches `e2-technologies`
- **Next.js 16** (App Router, Turbopack) · **React 19** · **TypeScript**
- **Tailwind v4**, CSS-first `@theme` tokens in `app/globals.css` (no `tailwind.config`)
- **shadcn/ui** — style `base-nova`, baseColor `neutral`, CSS variables, **lucide** icons
- **motion** for animation
- **Resend** for lead notification email · **Supabase** optional for lead storage, both behind
  graceful env fallbacks (same pattern as `e2/app/api/contact/route.ts`)
- Deployed on **Vercel**

```
app/            layout · page · globals.css · privacy · thank-you · api/lead
components/     ui (shadcn) · sections · layout · forms
lib/            utils · consent
public/         headshot
```

> Per e2's `AGENTS.md`: Next.js 16 diverges from training data — consult
> `node_modules/next/dist/docs/` before writing framework code.

---

## 2. Compliance constraints

### FEG (binding — see memory: feg-compliance-constraints)
| Rule | Source | Effect on page |
|---|---|---|
| Prior written approval before publishing | Agent Agmt 2(C), Compl. Dec #7 | Whole page goes to compliance@fegcorp.com before launch |
| Use "FEG Insurance Services" on sales material, not "Freedom Equity Group" | Social Media Policy | Footer naming |
| Must show "An Independent Agent" wherever FEG name appears | P&P 17(F), Agmt 4(J) | Footer |
| No FEG marks in domain or SEO/PPC | Agmt 4(J) | marynettbolivar.com is clean |
| Never say services are "free" or products "lowest cost" | Compl. Dec #23 | **Removes all four `$0` / "free" claims from mockup** |
| Never frame as security, savings plan, or bank product; never say indexed products participate directly in the market | Compl. Dec #14 | Rewrites hero bullet 3 + subhead |
| No illustrations or rate figures except carrier-authorized | Compl. Dec #15, #16 | No rate ranges anywhere |
| No investment advice; no advising liquidation of qualified plans | Compl. Dec #18 | **Kills the 401(k) testimonial**; recasts Ad 2 |
| Prohibited annuity statements (100% safe, no one lost money, beats CDs, FDIC, no commission) | Compl. Dec #21 | Annuity copy constrained |
| No autodialer for calls or SMS | P&P 17(H)(vi) | Consent language says manual contact |
| No client identifying info; never disclose claim payouts | Social Media Policy | Testimonials = first initial + city only |
| Carrier names follow each carrier's own rules | Social Media Policy | **Name no carriers** |

### Meta
- Personal Attributes 4.3 — no copy implying knowledge of the reader's age, health, family
  status or financial status. Category-first phrasing only.
- Ad and landing page evaluated as one unit; page must substantiate every ad claim.
- Financial services advertiser verification required before spend; 18+ targeting mandatory.
- Lead form may not request medical or financial information.

### Texas / NAIC
- NAIC Model 570 — may not emphasize investment or tax features while minimizing insurance features.
- Testimonials must be genuine. FTC Rule on Consumer Reviews and Testimonials makes fabricated
  testimonials actionable.
- Solicitation only in states where licensed (currently Texas).

---

## 3. Page structure

### Header
`Marynett Bolivar` · `LIFE INSURANCE · LIVING BENEFITS · RIO GRANDE VALLEY`
`(956) 289-6297` · button `Book a 15-minute check`

> Changed from mockup: "RETIREMENT" → "LIVING BENEFITS" (Compl. Dec #14).

### Hero — dark navy
Badge: `LICENSED TEXAS AGENT SINCE 2015 · REGISTERED NURSE, NIGHT SHIFT`

**H1: Life insurance you don't have to die to use.**

Sub: *And retirement options that aren't invested in the market. I'm Marynett, a nurse and a
licensed Texas agent since 2015. Fifteen minutes and you'll know where you stand.*

1. If you get seriously ill, money can come to you — not only to your family after.
2. A policy that goes with you when you leave the hospital.
3. A floor that protects your value in a down index year.\*

CTA `Book my 15-minute check`
Microcopy: *No obligation. No exam to talk. If what you have is fine, I'll tell you that too.*

> Changes: "no cost" → "no obligation"; bullet 1 gains "can" (riders are conditional);
> bullet 3 rewritten off market-participation framing.

### Hero form — right card
Title `Get your 15-minute check` · sub *I call you personally, at a time that fits your shift.*

Fields: First name · Phone · **State** (new) · I am [dropdown] · Best time to call [dropdown]

**Consent checkbox (new, unchecked):**
> I agree that Marynett Bolivar may call or text me at the number above about life insurance
> and annuity products. Contact is made manually, not by autodialer. Consent is not a condition
> of purchase. Message and data rates may apply.

Stored with each lead: timestamp, IP, user agent, consent language version.

Button `Book my 15-minute check` · microcopy *No spam, no list. One call, from me.*

> No health or financial questions — Meta prohibits requesting medical information.
> State field added because she may only solicit where licensed.

### Trust bar
`10 years licensed in Texas` · `12-hour nights, same as you` · `Independent agent · multiple carriers` · `McAllen · Edinburg · Mission · Pharr`

> Replaced `$0 cost to you, ever` (Compl. Dec #23).

### Section — The question nobody at work asks
Eyebrow `THE QUESTION NOBODY AT WORK ASKS`

**H2: If you got sick tomorrow and couldn't work, who pays the bills?**

> Most nurses I know have life insurance through the hospital and believe they're covered. That
> policy pays if you die. It usually pays nothing if you survive a heart attack, a stroke, or
> cancer and can't work for a year. And it ends the day you leave.
>
> About 4 in 10 of us will hear the word cancer in our lifetime.¹ Most of us will survive it.
> The bills don't know that.

`THE OLD WAY` — Coverage from work. Pays at death only. Gone when you change jobs.
`THE NEW WAY` — Your own permanent, portable policy with living benefit riders attached,
explained by someone who works the same floors you do.

Button `Check what mine covers` · Image: cropped headshot

### Section — What people say  ⚠ BLOCKED
Eyebrow `WHAT PEOPLE SAY` · **H2: Real people from the Valley, in their own words**
Sub: *Three clients, first name and city, with their permission.*

Three cards, 5 stars, attribution `R., Edinburg · RN` style.

**Status: quotes not yet supplied.** Built with visibly-marked placeholders that cannot ship as
real. Needs three genuine quotes + written consent. Card 3 needs a new story — the 401(k) brief
implies qualified-plan advice (Compl. Dec #18).

Stat row: `2015` licensed in Texas · `15 min` is all it takes · `1 in 4` years the market ends down²
> Dropped the `$0` stat (Compl. Dec #23). Three stats, not four.

### Section — Why a nurse sells this
Eyebrow `WHY A NURSE SELLS THIS`

**H2: I've worked nights for years. I know who pays the bills when someone can't.**

Draft body (Marynett rewrites in her own words before launch):
> In 2015 a neighbor showed me a policy you don't have to die to use, and a way to set money
> aside for retirement that isn't exposed to the market. I got licensed to bring it to the people
> I work with. Ten years later I still work the floor, so the call is fifteen minutes and it fits
> around a shift.

### Section — Questions people ask
- **Do I pay you?** You don't write me a check. If you decide to buy a policy, the insurance
  company pays me a commission that's already built into the product, and I'll tell you how that
  works on the call.
- **I already have insurance at work.** Good — bring it. We'll look at what it pays if you get
  sick, and what happens to it when you leave.
- **Do I need a medical exam?** Depends on the policy and the carrier. Many are exam-free today.
  We'll find out on the call.
- **Is this a sales call?** It's a review. If what you have is right for you, I'll say so. If
  there's a gap, I'll show you options and you decide.

> "Do I pay you?" rewritten off "free" (Compl. Dec #23) into factual commission disclosure.

### Footer — disclosures
Marynett Hijosa Bolivar · Texas General Lines Agent, License #2020634 · NPN 17672044 · Edinburg, TX
**An Independent Agent · FEG Insurance Services**
Not affiliated with any government agency.

\* Index-linked crediting is subject to caps, participation rates and policy charges. A floor
limits loss from index performance; it does not prevent reduction of value from fees or charges.
Indexed products do not participate directly in the stock market.

¹ Source pending — FEG published material.
² Source pending — FEG published material.

> Life insurance and annuity products are issued by the insurance carrier. Guarantees are backed
> by the financial strength and claims-paying ability of the issuing company. Living benefit
> riders vary by carrier, product and state and are subject to eligibility, qualifying events and
> policy terms. This is not an offer of insurance in any state where I am not licensed.

Privacy policy link.

---

## 4. Assets

| Asset | Status |
|---|---|
| Headshot | Crop from flyer (1545×2000 composite; ~900×1000 usable). Cut out subject, place on brand color. All flyer text/graphics discarded. |
| Flyer as-is | **Unusable** — carries "Freedom Equity Group" on a sales piece, "grow 0.25 to 6%" rate claim, and "savings/Tax free" framing. |
| Phone | (956) 289-6297 |
| Domain | Not registered. Build domain-agnostic; recommend marynettbolivar.com. |
| Testimonial quotes | **Missing** |
| Stat sources | **Missing** — FEG material |

**Palette** (from mockup): deep navy hero, warm gold CTA, off-white sections, teal accent from
her existing flyer. Display serif headlines + geometric sans body.

---

## 5. Lead handling

`POST /api/lead` route handler validates input, records the consent artifact, and dispatches.
Destination is env-driven and degrades gracefully when unset — exactly e2's pattern:
Supabase insert if `SUPABASE_URL` + `SUPABASE_SERVICE_ROLE_KEY` are present, Resend notification
if `RESEND_API_KEY` is present, always logs. Wiring the real destination is a `.env` change, no
code edit.
No autodialer, ever (P&P 17(H)(vi)). Meta CAPI fires server-side from the same function.

---

## 6. Build status — built 2026-09-29

- [x] Scaffold Next.js 16 + Tailwind v4 tokens + shadcn (`base-nova`), Source Serif 4 + Figtree
- [x] Header + hero + lead form (above-fold conversion unit)
- [x] Trust bar, "question nobody asks", "why a nurse sells this", FAQ
- [x] Footer + disclosures + privacy page + thank-you page
- [x] Testimonial section — renders only when real quotes exist in `lib/site.ts`
- [x] `app/api/lead/route.ts` + consent artifact capture
- [x] Responsive pass; form tested end-to-end on a 375px viewport

**Voice pass (2026-09-30):** every em dash removed site-wide, contractions and
typographic apostrophes normalized, British spellings corrected, and the stiffer copy
rewritten in her voice. Re-swept for FEG risk language afterward: no "free"/"$0"/"lowest
cost", no savings or bank framing, no market-participation claim on indexed products, no
rates or illustrations.

**Security note:** scaffolded on Next 16.2.4 (the version `e2-technologies` runs) and
upgraded to **16.3.7**. 16.2.4 carries two *critical* unauthenticated RCE advisories —
one in the Image Optimization API via AVIF — plus SSRF and middleware-bypass highs.
16.3.7 is a minor bump, not a major. `npm audit` now reports 0 vulnerabilities.
**e2-technologies is still on 16.2.4 and has the same exposure.**

Verified: `npm run lint` clean · `npm run build` clean · consent gate blocks submission ·
happy path reaches `/thank-you` · consent artifact (version, timestamp, IP, user agent)
recorded server-side · out-of-state leads flagged `out_of_area`.

---

## 7. Out of scope for this page

- `/opportunity` recruiting funnel — separate build. Meta Employment Special Ad Category,
  FEG Income Disclosure (https://id.freedomequitygroup.com/) required prominently, no income
  or lifestyle claims, no "job offer" framing (Compl. Dec #5, #6).
- Spanish version — held pending confirmation she speaks it.

---

## 8. Pre-launch gate

- [ ] Real testimonial quotes + written consent
- [ ] FEG source documents for both statistics
- [ ] Marynett rewrites the "Why a nurse" section in her own words
- [ ] **FEG compliance written approval** — compliance@fegcorp.com (Agent Agmt 2(C))
- [ ] Domain registered
- [ ] Lead destination decided
- [ ] Meta financial-services advertiser verification
- [ ] Confirm no securities license (defaults to insurance-only; Compl. Dec #18 applies)
