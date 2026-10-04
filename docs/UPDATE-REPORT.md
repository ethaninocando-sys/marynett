# Marynett Bolivar site: research, decisions, and what we built

Prepared 2026-10-04 by Enrique Rodriguez and Ethan Inocando.

---

## What exists right now

A working three-page site, built in Next.js and deployed-ready on Vercel.

| Page | Job |
|---|---|
| `/` | Splitter. Sends families one way, prospective agents the other |
| `/coverage` | Sells. Books the 15-minute policy review |
| `/work-with-me` | Recruits. Opens a conversation about getting licensed |

Plus `/privacy`, a `/thank-you` confirmation, and a lead API that validates input,
records consent and routes to whichever destination we wire up.

A second visual direction is live at `/b` with identical copy, so the design can be
judged on its own terms. A floating switch flips between them.

**Chosen direction: Archio, in navy.**

---

## The research that drove it

Everything below traces to the Winner's Writing Process doc and to FEG's own
agent agreements. Where we had no evidence, we left the slot empty rather than
filling it.

### Who we are actually talking to

The WWP puts the policy buyer at **mid 40s to 70s, problem aware, with a family
that depends on them financially, and procrastinating**. They are not searching.
They are scrolling Meta.

This changed the site. An early draft was written for nurses, because Marynett is
one. That was wrong: being a nurse is **her credential**, not the reader's
identity. Writing to nurses would have shrunk the market to her coworkers.

### Trust is the whole problem

The WWP scores the thresholds: desire 2/10, certainty 3/10, **trust 3/10 needing
to reach 10/10**. Trust is the biggest gap for both audiences.

It also says what the fear actually is:

> "People aren't afraid to buy in 2026, they are afraid of being lied to."

And across every positive review in the research, one phrase repeats: **not pushy**.

So the site answers the money question early and plainly instead of burying it,
and states the no-pressure promise outright rather than implying it.

---

## Decisions and why

### Two funnels, never one page

Meta classifies recruiting independent agents as the **Employment Special Ad
Category**. That strips lookalikes, age, gender and ZIP targeting and forces a
15-mile minimum radius. Meta also reads the ad and the landing page as one unit.

Put selling and recruiting on the same page and the recruiting content can
reclassify the entire consumer campaign, gutting its targeting. Separating them
protects the consumer funnel. Ads point at the sub-pages, never at the splitter.

### No income claims anywhere

FEG publishes its own numbers: the 2024 average for **all licensed** reps was
**$8,152**, and only **7.4%** of people who enrolled in 2023 to 2024 ever got
licensed enough to earn commissions.

The recruiting page therefore carries no income figures at all, links FEG's own
Income Disclosure, and leads with the disqualifiers rather than the upside:

- Not a job, a salary or a position
- You need a state license before you can talk to clients about products
- Nobody is paid for bringing in other agents
- Real startup costs, including errors and omissions coverage

This is both the compliant choice and, we think, the converting one. Against a
7.4% licensing rate, the problem is not getting people interested, it is getting
people who will finish. Honest framing filters for those.

### Her license data is verified, not assumed

We looked Marynett up on the **Texas Department of Insurance producer lookup** and
pulled the record directly rather than taking any figure on trust:

- Texas General Lines Agent, license **#2020634**
- NPN **17672044**
- Lines: Life, Accident, Health and HMO
- Issued **2015-07-20**, active through **2027-12-31**
- Active carrier appointments on file, including annuity carriers

That record is now the single source of truth in the codebase, and it settled a
conflict: one draft had her licensed in 2016, the state says 2015. It also
confirmed she is appointed with annuity carriers, which is what makes the
retirement angle legitimate rather than a stretch.

### Nothing is invented

The design comp arrived with three testimonials. All three were bracketed
placeholders describing what a quote should say, not quotes. One described advice
on a client's 401(k).

- Fabricated testimonials are actionable under the FTC Rule on Consumer Reviews
  and Testimonials
- The 401(k) story cannot run in any form. It implies advice on a qualified plan,
  which Compliance Declaration #18 prohibits without a securities license

So the testimonial section renders **nothing** until real, consented quotes exist.
The page is honest today and complete the moment they land.

---

## Compliance, mapped

Every governed line lives in one file, `lib/site.ts`, so FEG's review has one
place to look rather than six.

| What the site does | Why |
|---|---|
| Never says "free" or "lowest cost" | Compliance Dec #23. The commission question is answered as disclosure instead |
| No savings, bank or market-participation framing on indexed products | Dec #14 |
| No illustrations or rate figures | Dec #15, #16 |
| No tax or investment advice, with an FAQ saying so outright | Dec #18, #19, #20 |
| No income or earnings claims | Dec #5, #6, Agent Agreement 2(H) |
| "An Independent FEG Agent · FEG Insurance Services" in the footer | P&P 17(F), Agent Agreement 4(J) |
| License number, NPN, Texas-only, not affiliated with any government agency | State advertising rules |
| TCPA consent unchecked by default, manual contact only, artifact stored | P&P 17(H)(vi) bans autodialers for calls and SMS |
| Out-of-state inquiries flagged and never solicited | Dec #3 |
| Recruiting page noindexed in its own right | Ad traffic only |
| Whole site noindexed until approval | Agent Agreement 2(C) |

Every lead stores the exact consent wording shown, its version, a timestamp, IP
and user agent, so consent can be proved later rather than asserted.

---

## The design

The direction came from the **Archio** Framer template, chosen for a warm
editorial feel that suits a 45 to 70 audience better than the dark fintech look
most insurance templates use.

Rather than eyeball it from screenshots, we published the Framer project and read
the real values off the rendered page: the full color and type scale, the
spacing rhythm, the three breakpoints, and the exact shadows. Those tokens were
ported into code so the build is a faithful reproduction rather than an
impression of one.

Two deliberate departures:

**Navy, not forest green.** The template ships green. Navy suits the brief better,
so the whole hue family was swapped, including retinting the template's colored
shadow so it still reads as deliberate.

**No consultancy vocabulary.** Archio is written for consultants and advisors.
Compliance Declaration #23 says Marynett is explicitly **not** a fee-based broker
or advisor, so the design was kept and that language was not.

The second direction at `/b` is based on **Sevora**, including a faithful rebuild
of its per-character hero animation, measured frame by frame off the live
template.

---

## Still open

Nothing here blocks a demo. All of it blocks launch.

1. **Three real testimonials** with written permission
2. **FEG source documents** for the two statistics the copy cites
3. **Confirmation from Marynett** of her years nursing, years before licensing,
   and 2015 over 2016
4. **Her own words** for the personal section. It is her story and it should be hers
5. **FEG written approval to publish**, per Agent Agreement 2(C). This is the long
   pole and worth starting now
6. **Photography.** We have one usable image, cropped out of her Facebook flyer.
   The flyer itself cannot be reused: it carries the Freedom Equity Group name on
   a sales piece, quotes a rate range, and describes the product as tax-free
   savings, all of which breach FEG policy
7. **Lead destination**, and a domain

---

## What we would do next

1. Get the FEG compliance submission moving, since approval gates everything
2. Collect the testimonials and the two source documents
3. Shoot a proper headshot and the four short explainer videos, which answer the
   single biggest objection the research found: people do not buy because they do
   not understand it
4. Verify the Meta ad account for financial services, which has lead time
5. Launch the consumer funnel first, recruiting second
