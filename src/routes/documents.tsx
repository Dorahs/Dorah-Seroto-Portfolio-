import { createFileRoute } from "@tanstack/react-router";
import { Download, FileText, Award } from "lucide-react";
import cvAsset from "@/assets/cv.pdf.asset.json";
import certAsset from "@/assets/certificate.pdf.asset.json";
import sheCodesAsset from "@/assets/shecodes-certificate.jpg.asset.json";
import weThinkCodeAsset from "@/assets/wethinkcode-genai-certificate.pdf.asset.json";

export const Route = createFileRoute("/documents")({
  head: () => ({
    meta: [
      { title: "Documents — Dorah Seroto CV & Certificates" },
      {
        name: "description",
        content:
          "Download Dorah Seroto's CV in PDF and view her freeCodeCamp and SheCodes certificates in one place.",
      },
      { property: "og:title", content: "Documents — Dorah Seroto CV & Certificates" },
      {
        property: "og:description",
        content: "Download the CV and open the original certificate documents.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/documents" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/documents" }],
  }),
  component: Documents,
});

const items = [
  {
    icon: FileText,
    title: "Curriculum vitae",
    detail: "Full CV with experience, skills and education.",
    href: cvAsset.url,
    cta: "Download CV (PDF)",
    download: true,
  },
  {
    icon: Award,
    title: "freeCodeCamp — Responsive Web Design",
    detail: "Developer Certification, approximately 300 hours.",
    href: certAsset.url,
    cta: "Open certificate (PDF)",
    download: false,
  },
  {
    icon: Award,
    title: "WeThinkCode_ — GenAI Course for Software Engineers",
    detail: "Certificate of Completion, 29 May 2026.",
    href: weThinkCodeAsset.url,
    cta: "Open certificate (PDF)",
    download: false,
  },
  {
    icon: Award,
    title: "SheCodes Basics — Introduction to Coding",
    detail: "Verified Certificate of Achievement, 11 August 2026.",
    href: sheCodesAsset.url,
    cta: "Open certificate (image)",
    download: false,
  },
];

function Documents() {
  return (
    <section className="px-6 py-16 md:py-20">
      <div className="mx-auto max-w-5xl">
        <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
          Curriculum vitae
        </p>
        <h1 className="mt-4 text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
          Documents
        </h1>
        <p className="mt-3 max-w-2xl text-muted-foreground">
          Everything in one place — my CV and the original certificate documents.
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {items.map((item) => (
            <a
              key={item.title}
              href={item.href}
              {...(item.download
                ? { download: "" }
                : { target: "_blank", rel: "noopener noreferrer" })}
              className="group flex flex-col rounded-2xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-tech/50 hover:shadow-elevated"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary transition-colors group-hover:bg-foreground">
                <item.icon className="h-5 w-5 text-foreground transition-colors group-hover:text-background" />
              </div>
              <h2 className="mt-5 text-lg font-semibold text-card-foreground">{item.title}</h2>
              <p className="mt-2 text-sm text-muted-foreground">{item.detail}</p>
              <span className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-tech">
                {item.download ? <Download className="h-4 w-4" /> : null}
                {item.cta}
              </span>
            </a>
          ))}
        </div>

        <div className="mt-12 overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
          <img
            src={sheCodesAsset.url}
            alt="SheCodes Basics certificate of achievement awarded to Dorah Seroto for Introduction to Coding"
            className="w-full"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
