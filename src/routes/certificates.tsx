import { createFileRoute, Link } from "@tanstack/react-router";
import { Award } from "lucide-react";
import certAsset from "@/assets/certificate.pdf.asset.json";
import sheCodesAsset from "@/assets/shecodes-certificate.jpg.asset.json";
import weThinkCodeAsset from "@/assets/wethinkcode-genai-certificate.pdf.asset.json";

export const Route = createFileRoute("/certificates")({
  head: () => ({
    meta: [
      { title: "Certificates — Dorah Seroto" },
      {
        name: "description",
        content:
          "Certificates earned by Dorah Seroto, including freeCodeCamp Responsive Web Design and SheCodes Basics.",
      },
      { property: "og:title", content: "Certificates — Dorah Seroto" },
      {
        property: "og:description",
        content: "View Dorah Seroto's freeCodeCamp Responsive Web Design certification.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:url", content: "/certificates" },
    ],
    links: [{ rel: "canonical", href: "/certificates" }],
  }),
  component: Certificates,
});

function Certificates() {
  return (
    <section className="px-6 py-16 md:py-20">
      <div className="mx-auto max-w-5xl">
        <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
          Curriculum vitae
        </p>
        <h1 className="mt-4 text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
          Certificates
        </h1>
        <p className="mt-3 max-w-2xl text-muted-foreground">
          Click a certificate to open the original document.
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          <a
            href={certAsset.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col rounded-2xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-tech/50 hover:shadow-elevated"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary transition-colors group-hover:bg-foreground">
              <Award className="h-5 w-5 text-foreground transition-colors group-hover:text-background" />
            </div>
            <h2 className="mt-5 text-lg font-semibold text-card-foreground">
              freeCodeCamp — Responsive Web Design
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Developer Certification, 22 August 2026 · approximately 300 hours
            </p>
            <span className="mt-4 text-sm font-medium text-tech">Open certificate (PDF)</span>
          </a>

          <a
            href={sheCodesAsset.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col rounded-2xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-tech/50 hover:shadow-elevated"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary transition-colors group-hover:bg-foreground">
              <Award className="h-5 w-5 text-foreground transition-colors group-hover:text-background" />
            </div>
            <h2 className="mt-5 text-lg font-semibold text-card-foreground">
              SheCodes Basics — Introduction to Coding
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Verified Certificate of Achievement, 11 August 2026
            </p>
            <span className="mt-4 text-sm font-medium text-tech">Open certificate</span>
          </a>
        </div>

        <div className="mt-10 overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
          <img
            src={sheCodesAsset.url}
            alt="SheCodes Basics certificate of achievement awarded to Dorah Seroto for Introduction to Coding"
            className="w-full"
            loading="lazy"
          />
        </div>

        <Link
          to="/contact"
          className="mt-10 inline-flex items-center justify-center rounded-full border border-border bg-background px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-accent"
        >
          Get in touch
        </Link>
      </div>
    </section>
  );
}
