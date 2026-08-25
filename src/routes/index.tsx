import { createFileRoute } from "@tanstack/react-router";
import cvAsset from "@/assets/cv.docx.asset.json";
import certAsset from "@/assets/certificate.pdf.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Dorah Seroto — Software Developer Portfolio" },
      {
        name: "description",
        content:
          "Portfolio of Dorah Motsatsi Seroto, a software developer in Limpopo, South Africa working with Python, JavaScript and React.",
      },
      { property: "og:title", content: "Dorah Seroto — Software Developer Portfolio" },
      {
        property: "og:description",
        content:
          "Projects, skills, certifications and CV of Dorah Motsatsi Seroto, software developer (Python, JavaScript, React).",
      },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const skills = [
  { label: "Languages", items: "Python, JavaScript, HTML5, CSS3" },
  { label: "Frameworks", items: "React, REST APIs, Responsive Web Development" },
  { label: "Tools", items: "Git, GitHub, Visual Studio Code" },
  {
    label: "Strengths",
    items: "Front-end development, debugging, version control, responsive design",
  },
];

const projects = [
  {
    name: "Weather App",
    stack: "HTML · CSS · JavaScript",
    points: [
      "Responsive weather app that fetches real-time data by location or search input.",
      "Dynamic UI updates with vanilla JavaScript and DOM manipulation.",
    ],
  },
  {
    name: "FoodHub — Food Ordering App",
    stack: "React · JavaScript · CSS (in progress)",
    points: [
      "Component-based menu browsing, cart management and order flow.",
      "Modern front-end practices including state management and responsive design.",
    ],
  },
  {
    name: "Personal Portfolio Website",
    stack: "Built with Lovable",
    points: [
      "Showcases projects, skills and professional background.",
      "Rapidly prototyped and deployed as a responsive, modern site.",
    ],
  },
];

const certifications = [
  { title: "freeCodeCamp — Responsive Web Design", meta: "Developer Certification, August 2026 (~300 hours)" },
  { title: "WeThinkCode_ — GenAI Course for Software Engineers", meta: "Certificate of Completion, May 2026" },
  { title: "SheCodes Foundation — Introduction to Coding", meta: "HTML, CSS, JavaScript and AI fundamentals, August 2026" },
  { title: "FNB App Academy", meta: "Python and practical project (in progress)" },
  { title: "freeCodeCamp — Additional Coursework", meta: "JavaScript, Python, Front-End Development Libraries" },
];

function Index() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="bg-hero px-6 py-20 sm:py-28">
        <div className="mx-auto max-w-3xl">
          <p className="text-sm uppercase tracking-[0.25em] text-primary">Software Developer</p>
          <h1 className="mt-4 text-4xl leading-tight sm:text-6xl">Dorah Motsatsi Seroto</h1>
          <p className="mt-5 text-base text-muted-foreground sm:text-lg">
            Self-taught software developer skilled in Python, JavaScript, React, HTML and CSS, with
            hands-on Git and GitHub experience. I build responsive, user-focused applications and
            keep sharpening modern engineering skills.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={cvAsset.url}
              download
              className="rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground shadow-soft transition-opacity hover:opacity-90"
            >
              Download CV
            </a>
            <a
              href={certAsset.url}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-border px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
            >
              View certificate
            </a>
          </div>
          <ul className="mt-8 flex flex-wrap gap-x-5 gap-y-2 text-sm text-muted-foreground">
            <li>Limpopo, South Africa</li>
            <li>
              <a className="hover:text-primary" href="tel:+27769935134">076 993 5134</a>
            </li>
            <li>
              <a className="hover:text-primary" href="mailto:dorahseroto2@gmail.com">
                dorahseroto2@gmail.com
              </a>
            </li>
            <li>
              <a className="hover:text-primary" href="https://linkedin.com/in/dorah-c" target="_blank" rel="noreferrer">
                LinkedIn
              </a>
            </li>
            <li>
              <a className="hover:text-primary" href="https://github.com/Dorahs" target="_blank" rel="noreferrer">
                GitHub
              </a>
            </li>
          </ul>
        </div>
      </section>

      <section className="px-6 py-16">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-2xl sm:text-3xl">Technical skills</h2>
          <dl className="mt-6 grid gap-4 sm:grid-cols-2">
            {skills.map((s) => (
              <div key={s.label} className="rounded-xl border border-border bg-card p-5">
                <dt className="text-sm uppercase tracking-widest text-primary">{s.label}</dt>
                <dd className="mt-2 text-sm text-card-foreground">{s.items}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="px-6 pb-16">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-2xl sm:text-3xl">Projects</h2>
          <div className="mt-6 space-y-4">
            {projects.map((p) => (
              <article key={p.name} className="rounded-xl border border-border bg-card p-6 shadow-soft">
                <h3 className="text-lg">{p.name}</h3>
                <p className="mt-1 text-xs uppercase tracking-widest text-accent">{p.stack}</p>
                <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                  {p.points.map((pt) => (
                    <li key={pt}>{pt}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
          <p className="mt-5 text-sm text-muted-foreground">
            More code on{" "}
            <a className="text-primary hover:underline" href="https://github.com/Dorahs" target="_blank" rel="noreferrer">
              github.com/Dorahs
            </a>
            .
          </p>
        </div>
      </section>

      <section className="px-6 pb-16">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-2xl sm:text-3xl">Certifications &amp; education</h2>
          <ul className="mt-6 space-y-4">
            {certifications.map((c) => (
              <li key={c.title} className="border-l-2 border-primary pl-4">
                <p className="text-base">{c.title}</p>
                <p className="text-sm text-muted-foreground">{c.meta}</p>
              </li>
            ))}
            <li className="border-l-2 border-primary pl-4">
              <p className="text-base">Cape Peninsula University of Technology</p>
              <p className="text-sm text-muted-foreground">Chemical Engineering</p>
            </li>
          </ul>
          <div className="mt-8 rounded-xl border border-border bg-card p-6">
            <h3 className="text-lg">Documents</h3>
            <div className="mt-4 flex flex-wrap gap-3">
              <a
                href={cvAsset.url}
                download
                className="rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
              >
                CV (DOCX)
              </a>
              <a
                href={certAsset.url}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-border px-5 py-2.5 text-sm font-medium transition-colors hover:bg-secondary"
              >
                freeCodeCamp certificate (PDF)
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-border px-6 py-8 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} Dorah Motsatsi Seroto
      </footer>
    </main>
  );
}
