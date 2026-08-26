import { createFileRoute } from "@tanstack/react-router";

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
      { property: "og:url", content: "/work" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/work" }],
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
