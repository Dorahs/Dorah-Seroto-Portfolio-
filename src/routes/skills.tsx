import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/skills")({
  head: () => ({
    meta: [
      { title: "Skills — Dorah Seroto" },
      {
        name: "description",
        content:
          "Technical skills of Dorah Seroto: Python, JavaScript, TypeScript, React, Git, GitHub and responsive web development.",
      },
      { property: "og:title", content: "Skills — Dorah Seroto" },
      {
        property: "og:description",
        content: "Languages, frameworks, tools and professional strengths of Dorah Seroto.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Skills,
});

const groups = [
  { title: "Languages", items: ["Python", "JavaScript", "TypeScript", "HTML5", "CSS3"] },
  { title: "Frameworks & tech", items: ["React", "REST APIs", "Responsive web development"] },
  { title: "Tools", items: ["Git", "GitHub", "Visual Studio Code"] },
  {
    title: "Development",
    items: ["Front-end development", "Web application development", "Responsive design", "Debugging", "Version control"],
  },
  {
    title: "Professional skills",
    items: [
      "Analytical thinking",
      "Mathematical problem solving",
      "Technical analysis",
      "Research",
      "Technical documentation",
      "Attention to detail",
      "Continuous learning",
    ],
  },
];

function Skills() {
  return (
    <section className="px-6 py-16 md:py-20">
      <div className="mx-auto max-w-5xl">
        <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
          Curriculum vitae
        </p>
        <h1 className="mt-4 text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
          Skills
        </h1>
        <p className="mt-3 max-w-2xl text-muted-foreground">
          The tools I build with every day, and the way of thinking I brought over from engineering.
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {groups.map((g) => (
            <div key={g.title} className="rounded-2xl border border-border bg-card p-6 shadow-sm">
              <h2 className="text-lg font-semibold text-card-foreground">{g.title}</h2>
              <ul className="mt-4 flex flex-wrap gap-2">
                {g.items.map((i) => (
                  <li
                    key={i}
                    className="rounded-full bg-secondary px-3 py-1 text-sm text-secondary-foreground"
                  >
                    {i}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap gap-4">
          <Link
            to="/education"
            className="inline-flex items-center justify-center rounded-full border border-border bg-background px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Education
          </Link>
          <Link
            to="/certificates"
            className="inline-flex items-center justify-center rounded-full border border-border bg-background px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Certificates
          </Link>
        </div>
      </div>
    </section>
  );
}
