import { Github, Linkedin, Mail, MessageCircle, Phone } from "lucide-react";

const socials = [
  { href: "mailto:dorahseroto2@gmail.com", label: "Email", Icon: Mail },
  { href: "https://wa.me/27769935134", label: "WhatsApp", Icon: MessageCircle },
  { href: "tel:+27769935134", label: "Call", Icon: Phone },
  { href: "https://github.com/Dorahs", label: "GitHub", Icon: Github },
  { href: "https://www.linkedin.com/in/dorah-c", label: "LinkedIn", Icon: Linkedin },
];

export function SiteFooter() {
  return (
    <footer className="w-full border-t border-border/60 py-12">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-6 px-6 md:flex-row">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Dorah Seroto. All rights reserved.
        </p>
        <div className="flex items-center gap-4">
          {socials.map(({ href, label, Icon }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="rounded-full p-2 text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
            >
              <Icon className="h-5 w-5" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
