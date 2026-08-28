import { createFileRoute, Link } from "@tanstack/react-router";
import certAsset from "@/assets/certificate.pdf.asset.json";
import sheCodesAsset from "@/assets/shecodes-certificate.jpg.asset.json";
import weThinkCodeAsset from "@/assets/wethinkcode-genai-certificate.pdf.asset.json";

export const Route = createFileRoute("/education")({
  head: () => ({
    meta: [
      { title: "Education & Training — Dorah Seroto" },
      {
        name: "description",
        content:
          "Education and training of Dorah Seroto: Chemical Engineering studies at CPUT, WeThinkCode_, SheCodes Foundation, FNB App Academy and freeCodeCamp.",
      },
      { property: "og:title", content: "Education & Training — Dorah Seroto" },
      {
        property: "og:description",
        content: "Academic background and professional development of Dorah Seroto.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:url", content: "/education" },
    ],
    links: [{ rel: "canonical", href: "/education" }],
  }),
  component: Education,
});

const training = [
  {
    org: "freeCodeCamp",
    period: "2026",
    detail: "Responsive Web Design Developer Certification — approximately 300 hours, August 2026.",
    href: certAsset.url,
    cta: "View certificate",
  },
  {
    org: "WeThinkCode_",
    period: "2026",
    detail: "GenAI Course for Software Engineers — completed May 2026.",
  },
  {
    org: "SheCodes Foundation",
    period: "2026",
    detail: "Introduction to Coding — HTML, CSS, JavaScript and AI fundamentals.",
    href: sheCodesAsset.url,
    cta: "View certificate",
  },
  {
    org: "FNB App Academy",
    period: "In progress",
    detail: "Python fundamentals and practical application projects.",
  },
];

function Education() {
  return (
    <section className="px-6 py-16 md:py-20">
      <div className="mx-auto max-w-5xl">
        <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
          Curriculum vitae
        </p>
        <h1 className="mt-4 text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
          Education &amp; training
        </h1>

        <div className="mt-10 rounded-2xl border border-border bg-card p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-card-foreground">Chemical Engineering</h2>
          <p className="mt-1 text-sm text-muted-foreground">
            Cape Peninsula University of Technology
          </p>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            Chemical engineering studies built my analytical thinking, mathematical problem solving and
            technical documentation skills — the same discipline I now apply to writing software.
          </p>
        </div>

        <h2 className="mt-12 text-2xl font-semibold tracking-tight text-foreground">
          Professional development
        </h2>
        <div className="mt-6 grid gap-6 sm:grid-cols-2">
          {training.map((t) => (
            <div key={t.org} className="rounded-2xl border border-border bg-card p-6 shadow-sm">
              <div className="flex items-center justify-between gap-4">
                <h3 className="text-lg font-semibold text-card-foreground">{t.org}</h3>
                <span className="rounded-full bg-secondary px-3 py-1 text-xs text-secondary-foreground">
                  {t.period}
                </span>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{t.detail}</p>
              {t.href ? (
                <a
                  href={t.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex text-sm font-medium text-tech hover:underline"
                >
                  {t.cta}
                </a>
              ) : null}
            </div>
          ))}
        </div>

        <Link
          to="/certificates"
          className="mt-10 inline-flex items-center justify-center rounded-full border border-border bg-background px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-accent"
        >
          See my certificates
        </Link>
      </div>
    </section>
  );
}
