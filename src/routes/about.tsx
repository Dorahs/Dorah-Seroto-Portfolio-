import { createFileRoute } from "@tanstack/react-router";
import { Award, Download, GraduationCap, Mail, Wrench } from "lucide-react";
import cvAsset from "@/assets/cv.pdf.asset.json";
import { SectionCard } from "@/components/SectionCard";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Dorah Seroto" },
      {
        name: "description",
        content:
          "About Dorah Motsatsi Seroto: self-taught software developer working with Python, JavaScript, React and Git, based in South Africa.",
      },
      { property: "og:title", content: "About — Dorah Seroto" },
      {
        property: "og:description",
        content: "Background, professional summary and CV download for Dorah Motsatsi Seroto.",
      },
      { property: "og:url", content: "/about" },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

const cards = [
  { to: "/skills", title: "Skills", description: "Python, JavaScript, TypeScript, React, Git and responsive web development.", Icon: Wrench },
  { to: "/education", title: "Education & training", description: "Chemical Engineering at CPUT, WeThinkCode_, SheCodes, FNB App Academy.", Icon: GraduationCap },
  { to: "/certificates", title: "Certificates", description: "freeCodeCamp Responsive Web Design certification, viewable in full.", Icon: Award },
  { to: "/contact", title: "Contact", description: "Email, WhatsApp, phone, GitHub and LinkedIn — all one click away.", Icon: Mail },
];

function About() {
  return (
    <div className="flex flex-col">
      <section className="px-6 py-16 md:py-20">
        <div className="mx-auto max-w-5xl">
          <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground">About</p>
          <h1 className="mt-4 text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
            Dorah Motsatsi Seroto
          </h1>
          <p className="mt-3 text-muted-foreground">
            Software Developer · Python · React · JavaScript · South Africa
          </p>
          <div className="mt-8 max-w-3xl space-y-5 text-base leading-relaxed text-muted-foreground">
            <p>
              I'm a self-taught software developer with a background in Chemical Engineering and a
              growing technical foundation in software development. I work with Python, JavaScript,
              TypeScript, React, HTML and CSS, using Git and GitHub for version control.
            </p>
            <p>
              My engineering studies and practical programming projects gave me strong analytical and
              problem-solving abilities — analytical thinking, mathematical problem solving,
              technical analysis, research and technical documentation.
            </p>
            <p>
              I'm passionate about building responsive, user-focused applications and continuously
              developing modern software engineering skills. I'm currently seeking an entry-level
              software development opportunity where I can contribute, learn and grow.
            </p>
          </div>
          <a
            href={cvAsset.url}
            download
            className="mt-10 inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-elevated transition-colors hover:bg-primary/90"
          >
            <Download className="h-4 w-4" />
            Download my CV (PDF)
          </a>
        </div>
      </section>

      <section className="border-t border-border/60 bg-warm px-6 py-16">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
            My CV, page by page
          </h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {cards.map((c) => (
              <SectionCard key={c.to} {...c} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
