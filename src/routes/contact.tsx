import { createFileRoute } from "@tanstack/react-router";
import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Dorah Seroto" },
      {
        name: "description",
        content:
          "Contact Dorah Seroto by email, phone, WhatsApp, GitHub or LinkedIn for freelance projects and opportunities.",
      },
      { property: "og:title", content: "Contact — Dorah Seroto" },
      {
        property: "og:description",
        content: "Get in touch with Dorah Seroto, software developer in Limpopo, South Africa.",
      },
      { property: "og:url", content: "https://stellar-portfoli-kit.lovable.app/contact" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://stellar-portfoli-kit.lovable.app/contact" }],
  }),
  component: Contact,
});

function Contact() {
  return (
    <section className="px-6 py-16 md:py-20">
      <div className="mx-auto max-w-5xl">
        <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground">Contact</p>
        <h1 className="mt-4 text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
          Let's work together
        </h1>
        <p className="mt-3 max-w-2xl text-muted-foreground">
          I'm open to freelance projects, collaborations, and full-time opportunities. Reach out
          through any of the channels below.
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary">
              <Phone className="h-5 w-5 text-foreground" />
            </div>
            <h2 className="mt-5 text-lg font-semibold text-card-foreground">Phone / WhatsApp</h2>
            <p className="mt-2 text-sm text-muted-foreground">076 993 5134</p>
            <div className="mt-4 flex gap-3">
              <a
                href="tel:+27769935134"
                className="rounded-full border border-border px-4 py-2 text-sm text-foreground transition-colors hover:bg-accent"
              >
                Call
              </a>
              <a
                href="https://wa.me/27769935134"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-border px-4 py-2 text-sm text-foreground transition-colors hover:bg-accent"
              >
                WhatsApp
              </a>
            </div>
          </div>

          <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary">
              <Mail className="h-5 w-5 text-foreground" />
            </div>
            <h2 className="mt-5 text-lg font-semibold text-card-foreground">Email</h2>
            <a
              href="mailto:dorahseroto2@gmail.com"
              className="mt-2 inline-flex text-sm text-tech hover:underline"
            >
              dorahseroto2@gmail.com
            </a>
          </div>

          <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary">
              <Github className="h-5 w-5 text-foreground" />
            </div>
            <h2 className="mt-5 text-lg font-semibold text-card-foreground">GitHub</h2>
            <a
              href="https://github.com/Dorahs"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex text-sm text-tech hover:underline"
            >
              github.com/Dorahs
            </a>
          </div>

          <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary">
              <Linkedin className="h-5 w-5 text-foreground" />
            </div>
            <h2 className="mt-5 text-lg font-semibold text-card-foreground">LinkedIn</h2>
            <a
              href="https://www.linkedin.com/in/dorah-c"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex text-sm text-tech hover:underline"
            >
              linkedin.com/in/dorah-c
            </a>
          </div>

          <div className="rounded-2xl border border-border bg-card p-6 shadow-sm sm:col-span-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary">
              <MapPin className="h-5 w-5 text-foreground" />
            </div>
            <h2 className="mt-5 text-lg font-semibold text-card-foreground">Location</h2>
            <p className="mt-2 text-sm text-muted-foreground">Limpopo, South Africa</p>
          </div>
        </div>
      </div>
    </section>
  );
}
