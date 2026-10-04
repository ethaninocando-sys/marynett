/* eslint-disable @next/next/no-img-element */
// Reference page: a rebuild of the Sevora template's home page with its own
// placeholder content, used to check our design kit against the original.
// Images are loaded from the template as temporary stand-ins. Not for launch.
import type { Metadata } from "next";
import {
  ArrowUpRight,
  Compass,
  Gauge,
  Headset,
  Layers,
  Lightbulb,
  Magnet,
  MapPin,
  Menu,
  MousePointer2,
  PenTool,
  RefreshCw,
  Send,
  Star,
  Trophy,
  Users,
  Wand2,
  Zap,
} from "lucide-react";
import { CountUp } from "@/components/sevora/CountUp";
import { Faq } from "@/components/sevora/Faq";
import { FloatNav } from "@/components/sevora/FloatNav";
import { Process } from "@/components/sevora/Process";
import { Reveal } from "@/components/sevora/Reveal";

export const metadata: Metadata = {
  title: "Sevora reference",
  robots: { index: false, follow: false },
};

const IMG = "https://framerusercontent.com/images/";
const links = ["Home", "About", "Projects", "Articles", "Contact"];
const logos = [
  "Codify",
  "Flowboard",
  "Agentify",
  "TodoFusion",
  "Identify",
  "Nexus AI",
  "Landify",
  "Flexify",
];

const steps = [
  {
    icon: <Users size={20} strokeWidth={1.75} />,
    title: "Discovery",
    text: "We start by understanding your goals, audience, brand needs, and the direction your project should take.",
  },
  {
    icon: <Lightbulb size={20} strokeWidth={1.75} />,
    title: "Strategy",
    text: "I define the structure, message, and creative approach before moving into the visual design stage.",
  },
  {
    icon: <Compass size={20} strokeWidth={1.75} />,
    title: "Direction",
    text: "A clear visual direction is shaped through mood, layout ideas, typography, and overall design language.",
  },
  {
    icon: <PenTool size={20} strokeWidth={1.75} />,
    title: "Design",
    text: "The main layouts, brand elements, and digital experiences are crafted with careful attention to detail.",
  },
  {
    icon: <Layers size={20} strokeWidth={1.75} />,
    title: "Development",
    text: "Designs are turned into responsive, polished pages with smooth interactions and clean structure.",
  },
  {
    icon: <Send size={20} strokeWidth={1.75} />,
    title: "Delivery",
    text: "Final assets, pages, and guidelines are prepared clearly so everything is ready to launch.",
  },
];

const features = [
  {
    icon: Zap,
    title: "Affordability",
    text: "Access high-quality design services at a fraction of traditional costs.",
  },
  {
    icon: Wand2,
    title: "Consistency",
    text: "Ensure a consistent brand identity with regular design output.",
  },
  {
    icon: Magnet,
    title: "Scalability",
    text: "Scalable systems built to support growing products and businesses.",
  },
  {
    icon: Gauge,
    title: "Speed",
    text: "Get quicker turnarounds on design projects without sacrificing quality at a way better price on your wallet.",
    wide: true,
    dark: true,
  },
  {
    icon: Trophy,
    title: "Flexibility",
    text: "Adapt the service to cover a wide range of design tasks as needed.",
  },
  {
    icon: RefreshCw,
    title: "Diversity",
    text: "Access to a variety of styles and expertise from a pool of creative professionals and people.",
    wide: true,
  },
  {
    icon: Headset,
    title: "Support",
    text: "Enjoy dedicated customer service and revisions to perfect your designs.",
  },
  {
    icon: MapPin,
    title: "Convenience",
    text: "Streamline the design process with a simple workflow and process.",
  },
];

const faqs = [
  "How do I submit a design request?",
  "How does onboarding work?",
  "How fast will I receive my designs?",
  "Do you work at our company?",
  "Why not hire full-time?",
  "Can I order a one-time logo service?",
  "What tools do you use?",
  "What is your refund policy?",
].map((question) => ({
  question,
  answer:
    "Share a short brief through the contact form. I reply within one working day with next steps, a timeline, and anything else I need from you.",
}));

function Brand() {
  return (
    <span className="flex items-center gap-2">
      <img
        src={`${IMG}urHsc2gl0mz8FFsPFV1HMTq2DnE.svg`}
        alt=""
        width={24}
        height={24}
      />
      <span className="text-lg leading-7 font-semibold tracking-[-0.03em] text-[var(--sv-800)]">
        Sevora
      </span>
    </span>
  );
}

function Words({ text, muted = false }: { text: string; muted?: boolean }) {
  return (
    <>
      {text.split(" ").map((word, index) => (
        <span
          key={`${word}-${index}`}
          className={`sv-word ${muted ? "text-[var(--sv-400)]" : ""}`}
          style={{ "--i": index + (muted ? 3 : 0) } as React.CSSProperties}
        >
          {word}
          {" "}
        </span>
      ))}
    </>
  );
}

function Stars() {
  return (
    <span className="flex gap-1 text-[#f5b83d]" aria-label="5 out of 5 stars">
      {[0, 1, 2, 3, 4].map((i) => (
        <Star key={i} size={10} fill="currentColor" strokeWidth={0} />
      ))}
    </span>
  );
}

export default function SevoraReference() {
  return (
    <div className="sv min-h-screen">
      {/* Top navigation */}
      <header className="mx-auto flex w-full max-w-[1200px] items-center justify-between p-4 md:p-6">
        <Brand />
        <nav className="hidden gap-2 md:flex">
          {links.map((link) => (
            <a key={link} href="#" className="sv-navlink">
              {link}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-4">
          <a href="#" className="sv-btn sv-btn-sm sv-btn-primary">
            Let&rsquo;s talk <ArrowUpRight size={20} strokeWidth={1.75} />
          </a>
          <Menu className="md:hidden" size={24} aria-hidden="true" />
        </div>
      </header>

      <FloatNav>
        <Brand />
        <nav className="hidden gap-2 md:flex">
          {links.map((link) => (
            <a key={link} href="#" className="sv-navlink">
              {link}
            </a>
          ))}
        </nav>
        <a href="#" className="sv-btn sv-btn-sm sv-btn-primary">
          Let&rsquo;s talk <ArrowUpRight size={20} strokeWidth={1.75} />
        </a>
      </FloatNav>

      <main>
        {/* Hero */}
        <section className="mx-auto w-full max-w-[1200px] px-4 pt-8 pb-12 md:px-6 md:pt-14">
          <div className="sv-hero-panel">
            <div className="relative z-10 flex flex-col gap-12 min-[1200px]:w-1/2 min-[1200px]:gap-16">
              <div className="flex flex-col gap-6">
                <div className="flex max-w-[480px] flex-col gap-3">
                  <h1 className="sv-display">
                    <Words text="Craft better brands," />
                    <Words text="faster" muted />
                  </h1>
                  <Reveal delay={450}>
                    <p className="sv-lg">
                      I design refined brands, websites, and interfaces for
                      ambitious founders and creative teams.
                    </p>
                  </Reveal>
                </div>
                <Reveal delay={550} className="flex flex-col gap-2 sm:flex-row">
                  <a href="#" className="sv-btn sv-btn-primary">
                    View projects
                  </a>
                  <a href="#" className="sv-btn sv-btn-secondary">
                    Get in touch
                  </a>
                </Reveal>
              </div>

              <Reveal delay={650}>
                <dl className="flex flex-wrap gap-x-10 gap-y-6">
                  {[
                    [30, "+", "Projects completed"],
                    [8, "yr", "Experience"],
                    [40, "+", "Happy clients"],
                  ].map(([value, suffix, label]) => (
                    <div key={label}>
                      <dd className="font-serif text-[32px] leading-[48px] font-semibold">
                        <CountUp value={value as number} />
                        <span className="text-[36px] tracking-[-0.02em]">
                          {suffix}
                        </span>
                      </dd>
                      <dt className="sv-body">{label}</dt>
                    </div>
                  ))}
                </dl>
              </Reveal>
            </div>

            {/* Portrait breaks out of the top of the panel on desktop. */}
            <div className="pointer-events-none relative -mx-6 mt-2 h-[340px] overflow-hidden rounded-b-[24px] min-[1200px]:absolute min-[1200px]:top-[-88px] min-[1200px]:right-0 min-[1200px]:bottom-0 min-[1200px]:mx-0 min-[1200px]:mt-0 min-[1200px]:h-auto min-[1200px]:w-[549px] min-[1200px]:rounded-br-[32px] min-[1200px]:rounded-bl-none">
              <img
                src={`${IMG}3Wbfg1JRGAb4TRMMz69WlQMTe8.png`}
                alt=""
                className="absolute inset-0 size-full object-cover object-top"
              />
            </div>

            <Reveal
              delay={750}
              className="absolute right-6 bottom-6 left-6 z-10 min-[1200px]:right-12 min-[1200px]:bottom-12 min-[1200px]:left-auto min-[1200px]:w-[360px]"
            >
              <div className="sv-glass flex items-end gap-8 px-8 pt-7 pb-8">
                <div className="flex flex-1 flex-col gap-1">
                  <p className="text-sm leading-5 text-white/60">
                    Select project
                  </p>
                  <p className="sv-h5">Available for projects</p>
                  <p className="hidden text-sm leading-5 min-[1200px]:block">
                    Share a few details, and I&rsquo;ll get back with a clear
                    direction.
                  </p>
                </div>
                <span className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-white text-[var(--sv-900)]">
                  <ArrowUpRight size={24} strokeWidth={1.75} />
                </span>
              </div>
            </Reveal>
          </div>

          <div className="sv-ticker mt-12">
            <div className="sv-ticker-track">
              {[...logos, ...logos].map((logo, index) => (
                <span
                  key={`${logo}-${index}`}
                  className="flex items-center gap-2 text-xl leading-7 font-semibold tracking-[-0.03em]"
                >
                  <span className="size-5 rounded-[5px] bg-[var(--sv-900)]" />
                  {logo}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="sv-container flex flex-col gap-12 md:gap-16">
          <Reveal>
            <div className="sv-head">
              <div className="sv-head-stack">
                <span className="sv-badge mx-auto">Benefits</span>
                <h2 className="sv-h2">Discover why we stand out</h2>
              </div>
              <p className="sv-body">
                Designing clean, responsive websites that communicate clearly,
                guide visitors smoothly, and support meaningful business goals.
              </p>
            </div>
          </Reveal>

          <div className="grid gap-4 md:grid-cols-3">
            <Reveal>
              <article className="sv-card h-full overflow-hidden">
                <div className="relative h-[258px] overflow-hidden">
                  <div className="absolute top-14 left-11 grid gap-4 rounded-lg bg-[var(--sv-50)] p-3 shadow-[0_0_0_1px_var(--sv-100)]">
                    <MousePointer2 size={20} />
                    <Wand2 size={20} />
                    <span className="size-5 rounded-full border-2 border-[var(--sv-900)]" />
                    <span className="text-center text-lg leading-5 font-medium">
                      T
                    </span>
                  </div>
                  <MousePointer2
                    className="absolute top-[74px] left-6"
                    size={30}
                    fill="currentColor"
                  />
                  <div className="absolute top-7 left-32 grid w-[320px] gap-5 border-t border-l border-[var(--sv-300)] pt-8 pl-8">
                    {[
                      ["Primary", "bg-[var(--sv-200)]", ""],
                      ["Secondary", "bg-[var(--sv-900)] text-white", ""],
                      ["Outline", "shadow-[inset_0_0_0_1px_var(--sv-300)]", ""],
                      ["Ghost", "text-[var(--sv-400)]", ""],
                    ].map(([label, cls]) => (
                      <div key={label} className="flex items-center gap-4">
                        <span className={`size-8 rounded-lg ${cls}`} />
                        <span
                          className={`rounded-lg px-3 py-1.5 text-sm leading-5 font-medium ${cls}`}
                        >
                          {label}
                        </span>
                        <span className="ml-6 rounded-full bg-[var(--sv-100)] px-4 py-1.5 text-sm leading-5 font-medium">
                          Gray
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="flex flex-col gap-2 p-8">
                  <h3 className="sv-h3">Clear design systems</h3>
                  <p className="sv-body">
                    Elevate your B2B brand with specialized design expertise,
                    enhancing industry presence.
                  </p>
                </div>
              </article>
            </Reveal>

            <Reveal delay={100}>
              <article className="sv-card h-full overflow-hidden">
                <div className="relative h-[258px] overflow-hidden">
                  <svg
                    viewBox="0 0 373 258"
                    className="absolute inset-0 size-full"
                    preserveAspectRatio="none"
                    aria-hidden="true"
                  >
                    <defs>
                      <linearGradient id="sv-area" x1="0" x2="0" y1="0" y2="1">
                        <stop offset="0" stopColor="#c9cdd2" />
                        <stop offset="1" stopColor="#c9cdd2" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                    <path
                      d="M0 150 55 70 110 150 165 190 215 120 262 96 300 170 340 200 373 150V258H0Z"
                      fill="url(#sv-area)"
                    />
                    <path
                      d="M0 190 55 110 110 185 165 220 215 160 262 135 300 205 340 235 373 190"
                      fill="none"
                      stroke="#94979e"
                      strokeWidth="1.5"
                    />
                    <path
                      d="M0 150 55 70 110 150 165 190 215 120 262 96 300 170 340 200 373 150"
                      fill="none"
                      stroke="#44454c"
                      strokeWidth="1.5"
                    />
                    <circle cx="55" cy="70" r="5" fill="#44454c" />
                    <circle cx="55" cy="110" r="5" fill="#94979e" />
                  </svg>
                  <div className="absolute top-9 left-[92px] w-[230px] rounded-lg bg-white p-4 text-sm leading-5 shadow-[var(--sv-shadow-card)]">
                    <p className="font-medium">Aug 3, 2026</p>
                    <p className="mt-3 flex items-center gap-2">
                      <span className="size-3 rounded-full bg-[var(--sv-400)]" />
                      Unique Visitors
                      <span className="ml-auto font-semibold">9,706</span>
                    </p>
                    <p className="mt-2 flex items-center gap-2">
                      <span className="size-3 rounded-full bg-[var(--sv-600)]" />
                      Total Pageviews
                      <span className="ml-auto font-semibold">6,816</span>
                    </p>
                  </div>
                </div>
                <div className="flex flex-col gap-2 p-8">
                  <h3 className="sv-h3">Websites built to perform</h3>
                  <p className="sv-body">
                    Dominate search results with our precision-tailored sites
                    designed for top rankings and visibility.
                  </p>
                </div>
              </article>
            </Reveal>

            <Reveal delay={200}>
              <article className="sv-card h-full overflow-hidden">
                <div className="relative h-[258px] overflow-hidden">
                  <div className="absolute top-7 left-8 flex items-center gap-3 rounded-lg bg-white px-3 py-2 shadow-[var(--sv-shadow-card)]">
                    <img
                      src={`${IMG}rZmnnPdh2NfRFd8GwnJmVeCq5Ow.jpg`}
                      alt=""
                      className="size-8 rounded-full object-cover"
                    />
                    <span className="text-sm leading-5">
                      Just sent you a message!
                      <span className="block text-xs text-[var(--sv-400)]">
                        45 mins ago
                      </span>
                    </span>
                  </div>
                  <div className="absolute top-[92px] right-8 left-14 rounded-t-xl bg-white p-4 shadow-[var(--sv-shadow-card)]">
                    <div className="flex gap-2 text-[10px] leading-4 font-semibold tracking-normal">
                      <span className="rounded bg-[var(--sv-accent-soft)] px-2 py-0.5">
                        AVAILABLE
                      </span>
                      <span className="rounded bg-[var(--sv-900)] px-2 py-0.5 text-white">
                        FRAMER EXPERT
                      </span>
                    </div>
                    <p className="mt-4 flex items-center gap-3">
                      <span className="flex size-11 items-center justify-center rounded-full bg-[var(--sv-900)] font-serif text-xl text-white">
                        S
                      </span>
                      <span className="sv-h6">
                        Codify Agency
                        <span className="block text-xs font-normal text-[var(--sv-400)]">
                          Los Angeles, CA
                        </span>
                      </span>
                    </p>
                    <div className="mt-4 grid grid-cols-3 gap-2">
                      <span className="h-16 rounded bg-[var(--sv-200)]" />
                      <span className="h-16 rounded bg-[var(--sv-400)]" />
                      <span className="h-16 rounded bg-[var(--sv-700)]" />
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-2 p-8">
                  <h3 className="sv-h3">Framer-ready execution</h3>
                  <p className="sv-body">
                    Expand and flourish with Framer&rsquo;s innovation and
                    design expertise, propelling your success.
                  </p>
                </div>
              </article>
            </Reveal>
          </div>
        </section>

        {/* Why choose me */}
        <section className="sv-container flex flex-col gap-12 md:gap-16">
          <Reveal>
            <div className="sv-head-split">
              <div className="flex max-w-[420px] flex-col gap-2">
                <span className="sv-badge">Why choose me</span>
                <h2 className="sv-h2">Design built around lasting clarity</h2>
              </div>
              <p className="sv-body max-w-[480px]">
                I bring strategy, visual direction, and refined execution
                together to create meaningful digital experiences with lasting
                impact.
              </p>
            </div>
          </Reveal>

          <div className="grid gap-2 lg:grid-cols-[338fr_338fr_461fr]">
            <Reveal className="grid gap-2 lg:grid-rows-[84px_1fr]">
              <div className="sv-card flex items-center gap-3 p-6">
                <span className="flex">
                  {[
                    "7n35wdG8jtT2LMgYCpqeBkSo6s.jpg",
                    "s45yKcA8Ca8Yoakc4y2MawGRx0.jpg",
                    "S9PyleA1z5ugBA2Z87N0r7h5VA.jpg",
                    "nFTyhTg9mtSiD0Oh51DGHixETM.jpg",
                  ].map((file, index) => (
                    <img
                      key={file}
                      src={IMG + file}
                      alt=""
                      className={`size-9 rounded-full border-2 border-white object-cover shadow-[var(--sv-shadow-card)] ${index ? "-ml-3" : ""}`}
                    />
                  ))}
                </span>
                <span className="sv-h6">+3K clients</span>
              </div>
              <div className="sv-card flex min-h-[296px] flex-col justify-between p-6">
                <p className="max-w-[280px]">
                  Clear design direction shaped around every project goal.
                </p>
                <p>
                  <span className="sv-number block">
                    <CountUp value={92} />%
                  </span>
                  <span className="mt-1 block text-[var(--sv-500)]">
                    Client satisfaction
                  </span>
                </p>
              </div>
            </Reveal>

            <Reveal delay={100} className="grid gap-2 lg:grid-rows-[1fr_64px]">
              <div className="sv-card flex min-h-[316px] flex-col justify-between p-6">
                <p className="max-w-[280px]">
                  Brand identities, websites, and digital systems delivered with
                  care.
                </p>
                <p>
                  <span className="sv-number block">
                    <CountUp value={56} />+
                  </span>
                  <span className="mt-1 block text-[var(--sv-500)]">
                    Projects completed
                  </span>
                </p>
              </div>
              <div className="sv-card flex items-center gap-2 px-6 py-5">
                <span className="flex size-3 items-center justify-center rounded-full bg-[var(--sv-accent-soft)]">
                  <span className="size-1.5 rounded-full bg-[var(--sv-accent)]" />
                </span>
                <span className="sv-h6">Available for projects</span>
              </div>
            </Reveal>

            <Reveal delay={200}>
              <div className="sv-card-dark flex h-full min-h-[388px] flex-col justify-between p-6">
                <p className="max-w-[340px] text-[var(--sv-300)]">
                  I help founders, creators, and teams turn ideas into refined
                  digital experiences that feel memorable and easy to navigate.
                </p>
                <p className="flex items-end gap-3">
                  <span className="sv-number">
                    <CountUp value={4.9} decimals={1} />
                  </span>
                  <span className="pb-2">
                    <Stars />
                    <span className="mt-1 block text-[var(--sv-400)]">
                      Trusted by clients worldwide
                    </span>
                  </span>
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Process */}
        <section className="sv-container grid gap-12 lg:grid-cols-2 lg:gap-24">
          <div className="lg:sticky lg:top-[164px] lg:self-start">
            <Reveal>
              <div className="flex max-w-[480px] flex-col gap-3">
                <div className="flex flex-col gap-2.5">
                  <span className="sv-badge">Process</span>
                  <h2 className="sv-h2 max-w-[400px]">
                    How the process flows with clarity
                  </h2>
                </div>
                <p className="sv-body max-w-[400px]">
                  A clear and collaborative workflow that moves each project
                  from first idea to polished final result.
                </p>
              </div>
            </Reveal>
          </div>
          <Process steps={steps} />
        </section>

        {/* Features */}
        <section className="sv-container flex flex-col gap-12 md:gap-16 md:px-12">
          <Reveal>
            <div className="sv-head max-w-[640px]">
              <div className="sv-head-stack">
                <span className="sv-badge mx-auto">Expertise</span>
                <h2 className="sv-h2">Design support with clear direction</h2>
              </div>
              <p className="sv-body">
                A focused mix of strategy, design, and execution to help ideas
                become clear, refined, and ready to launch with confidence.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-flow-dense gap-2 sm:grid-cols-2 lg:grid-cols-5">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Reveal
                  key={feature.title}
                  delay={(index % 4) * 80}
                  className={feature.wide ? "sm:col-span-2" : ""}
                >
                  <article
                    className={`flex h-[272px] flex-col justify-between p-5 ${feature.dark ? "sv-card-dark" : "sv-card"}`}
                  >
                    <span
                      className={`sv-tile ${feature.dark ? "sv-tile-dark" : ""}`}
                    >
                      <Icon size={24} strokeWidth={1.5} />
                    </span>
                    <div className="flex flex-col gap-2">
                      <h3 className="sv-h5">{feature.title}</h3>
                      <p
                        className={`text-sm leading-5 tracking-[-0.01em] ${feature.dark ? "text-[var(--sv-400)]" : "text-[var(--sv-600)]"}`}
                      >
                        {feature.text}
                      </p>
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </section>

        {/* Testimonials */}
        <section className="sv-container flex flex-col gap-12 md:gap-16 md:px-12">
          <Reveal>
            <div className="sv-head-split">
              <div className="flex max-w-[420px] flex-col gap-2">
                <span className="sv-badge">Testimonials</span>
                <h2 className="sv-h2">What clients say</h2>
              </div>
              <p className="sv-body max-w-[480px]">
                Thoughtful feedback from founders and teams who trusted the
                process, direction, and final result.
              </p>
            </div>
          </Reveal>

          <div className="grid gap-2 lg:grid-cols-[442fr_323fr_323fr]">
            <Reveal>
              <figure className="sv-card-dark flex h-full min-h-[388px] flex-col justify-between p-6">
                <div className="flex flex-col gap-4">
                  <Stars />
                  <blockquote className="max-w-[280px] text-[var(--sv-300)]">
                    Working with Sevora felt incredibly smooth. The direction
                    was clear from the beginning, and the final website captured
                    our brand with precision and confidence.
                  </blockquote>
                </div>
                <figcaption className="flex items-center gap-3 text-sm leading-5">
                  <img
                    src={`${IMG}qeYrxqQc9vll222pCTtaYWDxo.jpg`}
                    alt=""
                    className="size-10 rounded-full object-cover"
                  />
                  <span>
                    <span className="block font-medium text-[var(--sv-300)]">
                      Ethan Brooks
                    </span>
                    <span className="block text-[var(--sv-400)]">Founder</span>
                  </span>
                </figcaption>
              </figure>
            </Reveal>

            <Reveal delay={100} className="grid gap-2 lg:grid-rows-[1fr_64px]">
              <figure className="sv-card flex min-h-[316px] flex-col justify-between p-6">
                <blockquote>
                  The process was thoughtful, fast, and highly organized. Every
                  design decision felt intentional, and the final result made
                  our product feel much more polished.
                </blockquote>
                <figcaption className="flex items-center gap-3 text-sm leading-5">
                  <img
                    src={`${IMG}rZmnnPdh2NfRFd8GwnJmVeCq5Ow.jpg`}
                    alt=""
                    className="size-10 rounded-full object-cover"
                  />
                  <span>
                    <span className="block font-medium">Maya Chen</span>
                    <span className="block text-[var(--sv-600)]">Designer</span>
                  </span>
                </figcaption>
              </figure>
              <div className="sv-card flex items-center gap-2 px-6 py-5">
                <Users size={20} strokeWidth={1.75} />
                <span className="sv-h6">Trusted by 24+ clients</span>
              </div>
            </Reveal>

            <Reveal delay={200} className="grid gap-2 lg:grid-rows-[48px_1fr]">
              <a href="#" className="sv-btn sv-btn-primary w-full">
                Let&rsquo;s work together
              </a>
              <figure className="sv-card flex min-h-[332px] flex-col justify-between p-6">
                <blockquote>
                  Sevora helped turn a rough idea into a refined visual
                  identity. The work felt clean, strategic, and exactly aligned
                  with where we wanted to go.
                </blockquote>
                <figcaption className="flex items-center gap-3 text-sm leading-5">
                  <img
                    src={`${IMG}nFTyhTg9mtSiD0Oh51DGHixETM.jpg`}
                    alt=""
                    className="size-10 rounded-full object-cover"
                  />
                  <span>
                    <span className="block font-medium">Liam Carter</span>
                    <span className="block text-[var(--sv-600)]">Director</span>
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          </div>
        </section>

        {/* FAQ */}
        <section className="sv-container flex flex-col gap-12 md:gap-16">
          <Reveal>
            <div className="sv-head">
              <h2 className="sv-h2">Explore our FAQs</h2>
              <p className="sv-body">
                Answers to questions about process, pricing, timelines, and
                project details
              </p>
            </div>
          </Reveal>
          <Reveal>
            <Faq items={faqs} />
          </Reveal>
        </section>
      </main>

      {/* Footer */}
      <footer className="mx-auto w-full max-w-[1200px] px-4 pt-16 pb-8 md:px-0 md:pt-24">
        <div className="sv-footer-shell">
          <div className="sv-footer-card">
            <div className="relative px-6 pt-10 pb-40 md:px-12 md:pt-12 md:pb-64">
              <div className="flex flex-col gap-10 md:flex-row md:justify-between md:gap-24">
                <div className="flex max-w-[420px] flex-col gap-4">
                  <Brand />
                  <p className="sv-body">
                    Creating refined digital experiences with clarity,
                    intention, and thoughtful execution.
                  </p>
                </div>
                <div className="flex gap-24">
                  {[
                    ["Pages", links],
                    ["Social", ["X link", "Linkedin", "Dribbble"]],
                  ].map(([title, items]) => (
                    <div
                      key={title as string}
                      className="flex w-[168px] flex-col gap-5"
                    >
                      <p className="text-sm leading-5 font-medium">{title}</p>
                      <ul className="grid gap-4">
                        {(items as string[]).map((item) => (
                          <li key={item}>
                            <a
                              href="#"
                              className="text-sm leading-5 font-medium text-[var(--sv-500)] hover:text-[var(--sv-900)]"
                            >
                              {item}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
              <p
                className="sv-wordmark absolute right-0 bottom-0 left-0 text-center"
                aria-hidden="true"
              >
                Sevora
              </p>
            </div>
            <div className="sv-footer-bar flex flex-wrap items-center justify-between gap-3 px-6 py-6 text-sm leading-5 md:px-12">
              <p>
                © Sevora Template | Created by{" "}
                <span className="text-white">Stylokit</span>
              </p>
              <p className="font-medium">Reference rebuild</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
