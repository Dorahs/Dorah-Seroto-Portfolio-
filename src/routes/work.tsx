import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, Github } from "lucide-react";

export const Route = createFileRoute("/work")({
  head: () => ({
    meta: [
      { title: "Work — Dorah Seroto" },
      {
        name: "description",
        content:
          "Projects built by Dorah Seroto, including a weather app, a React food ordering app and a personal portfolio site.",
      },
      { property: "og:title", content: "Work — Dorah Seroto" },
      {
        property: "og:description",
        content: "Selected software projects by Dorah Seroto using JavaScript, React and Python.",
      },
      { property: "og:url", content: "https://stellar-portfoli-kit.lovable.app/work" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://stellar-portfoli-kit.lovable.app/work" }],
  }),
  component: Work,
});

const projects = [
  {
    title: "Weather App",
    description:
      "A responsive weather application that fetches and displays real-time weather data based on user location or search input, with dynamic UI updates through DOM manipulation.",
    tags: ["HTML", "CSS", "JavaScript", "REST API"],
  },
  {
    title: "FoodHub — Food Ordering App",
    description:
      "A food ordering web application in progress, with component-based menu browsing, cart management and order flow, built with modern front-end practices.",
    tags: ["React", "JavaScript", "CSS", "State management"],
  },
  {
    title: "Personal Portfolio Website",
    description:
      "A personal portfolio showcasing projects, skills and professional background, rapidly prototyped and deployed as a responsive, modern site.",
    tags: ["Lovable", "React", "Responsive design"],
  },
];

const githubRepos = [
  {
    name: "Calculator",
    description: "A calculator web app with a clean, responsive interface.",
    language: "CSS",
    url: "https://github.com/Dorahs/Calculator",
  },
  {
    name: "weather-predictor",
    description: "A weather predictor app fetching real-time weather data.",
    language: "CSS",
    url: "https://github.com/Dorahs/weather-predictor",
  },
  {
    name: "Dorah-Seroto-Portfolio-",
    description: "The source code for this personal portfolio website.",
    language: "TypeScript",
    url: "https://github.com/Dorahs/Dorah-Seroto-Portfolio-",
  },
];

function Work() {
  return (
    <section className="px-6 py-16 md:py-20">
      <div className="mx-auto max-w-5xl">
        <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
          Selected Work
        </p>
        <h1 className="mt-4 text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
          Projects I've built
        </h1>
        <p className="mt-3 max-w-2xl text-muted-foreground">
          A few highlights from my work as a developer. Each project reflects my focus on clean
          architecture, reliability, and user value.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {projects.map((p) => (
            <article key={p.title} className="flex flex-col rounded-2xl border border-border bg-card p-6 shadow-sm">
              <h2 className="text-lg font-semibold text-card-foreground">{p.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.description}</p>
              <ul className="mt-5 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <li key={t} className="rounded-full bg-secondary px-3 py-1 text-xs text-secondary-foreground">
                    {t}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="mt-16">
          <div className="flex items-center gap-3">
            <Github className="h-5 w-5 text-foreground" />
            <h2 className="text-2xl font-semibold tracking-tight text-foreground">
              On GitHub
            </h2>
          </div>
          <p className="mt-3 max-w-2xl text-muted-foreground">
            Public repositories from my GitHub profile.
          </p>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {githubRepos.map((r) => (
              <a
                key={r.name}
                href={r.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col rounded-2xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-tech/50 hover:shadow-elevated"
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-card-foreground">{r.name}</h3>
                  <ArrowUpRight className="h-5 w-5 text-muted-foreground transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground" />
                </div>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{r.description}</p>
                <span className="mt-5 inline-flex w-fit items-center rounded-full bg-secondary px-3 py-1 text-xs text-secondary-foreground">
                  {r.language}
                </span>
              </a>
            ))}
          </div>
        </div>

        <p className="mt-8 text-sm text-muted-foreground">
          More code on{" "}
          <a
            className="text-tech hover:underline"
            href="https://github.com/Dorahs"
            target="_blank"
            rel="noopener noreferrer"
          >
            github.com/Dorahs
          </a>
          .
        </p>
      </div>
    </section>
  );
}
