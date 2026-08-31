import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Award, CodeXml, Database, GraduationCap, Terminal, Wrench } from "lucide-react";
import portrait from "@/assets/portrait.jpg.asset.json";
import { SectionCard } from "@/components/SectionCard";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Dorah Seroto — Software Developer | Python · React · JavaScript" },
      {
        name: "description",
        content:
          "Self-taught Software Developer skilled in Python, JavaScript, React, HTML and CSS, seeking an entry-level software development opportunity.",
      },
      { property: "og:title", content: "Dorah Seroto — Software Developer | Python · React · JavaScript" },
      {
        property: "og:description",
        content:
          "Self-taught Software Developer skilled in Python, JavaScript, React, HTML and CSS, seeking an entry-level software development opportunity.",
      },
      { property: "og:url", content: "https://stellar-portfoli-kit.lovable.app/" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://stellar-portfoli-kit.lovable.app/" }],
  }),
  component: Home,
});

const cards = [
  { to: "/about", title: "About me", description: "My background, summary and CV download.", Icon: CodeXml },
  { to: "/skills", title: "Skills", description: "Python, JavaScript, TypeScript, React, Git and more.", Icon: Wrench },
  {
    to: "/education",
    title: "Education",
    description: "CPUT, WeThinkCode_, SheCodes and freeCodeCamp.",
    Icon: GraduationCap,
  },
  {
    to: "/certificates",
    title: "Certificates",
    description: "freeCodeCamp Responsive Web Design certification.",
    Icon: Award,
  },
];

const pillars = [
  { title: "Clean Code", description: "Readable, maintainable Python and software crafted with care.", Icon: CodeXml },
  { title: "Data & APIs", description: "From RESTful APIs to data pipelines and backend services.", Icon: Database },
  {
    title: "Problem Solver",
    description: "Turning complex requirements into simple, working solutions.",
    Icon: Terminal,
  },
];

function Home() {
  return (
    <div className="flex flex-col">
      <section className="relative overflow-hidden px-6 py-20 md:py-28">
        <div className="pointer-events-none absolute inset-0 tech-grid" aria-hidden="true" />
        <div
          className="pointer-events-none absolute -top-32 left-1/2 h-80 w-[42rem] -translate-x-1/2 rounded-full bg-tech/15 blur-3xl"
          aria-hidden="true"
        />
        <div className="relative mx-auto grid w-full max-w-5xl items-center gap-10 md:grid-cols-[1.6fr_auto]">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full border border-border bg-card/70 px-3 py-1 text-xs font-medium uppercase tracking-widest text-muted-foreground backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-tech-glow" />
              Software Developer
            </p>
            <h1 className="mt-6 max-w-3xl text-4xl font-semibold leading-tight tracking-tight text-foreground md:text-5xl lg:text-6xl">
              Software Developer | Python · React · JavaScript
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              I'm Dorah Seroto, a self-taught Software Developer skilled in Python, JavaScript,
              React, HTML and CSS, with hands-on experience using Git and GitHub. I build
              responsive, user-focused applications and I'm seeking an entry-level software
              development opportunity.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link
                to="/work"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-elevated transition-colors hover:bg-primary/90"
              >
                View my work
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-full border border-border bg-background/70 px-6 py-3 text-sm font-medium text-foreground backdrop-blur transition-colors hover:bg-accent"
              >
                Get in touch
              </Link>
            </div>
          </div>
          <div className="order-first md:order-last">
            <img
              src={portrait.url}
              alt="Portrait of Dorah Seroto, software developer"
              className="h-40 w-40 rounded-2xl border border-border object-cover object-top shadow-elevated md:h-52 md:w-52"
            />
          </div>
        </div>
      </section>

      <section className="border-t border-border/60 px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
            Explore my CV
          </h2>
          <p className="mt-3 max-w-xl text-muted-foreground">
            Every part of my CV lives on its own page — click through to read more.
          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {cards.map((c) => (
              <SectionCard key={c.to} {...c} />
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border/60 bg-warm px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-8 md:grid-cols-3">
            {pillars.map(({ title, description, Icon }) => (
              <div key={title} className="flex flex-col rounded-2xl bg-card p-6 shadow-sm">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary">
                  <Icon className="h-5 w-5 text-foreground" />
                </div>
                <h2 className="mt-5 text-lg font-semibold text-card-foreground">{title}</h2>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto max-w-5xl text-center">
          <h2 className="text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
            Have a project in mind?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            I'm currently open to freelance work and new opportunities. Let's talk about how I can
            help.
          </p>
          <Link
            to="/contact"
            className="mt-8 inline-flex items-center justify-center rounded-full border border-border bg-background px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Start a conversation
          </Link>
        </div>
      </section>
    </div>
  );
}
