import { ArrowUpRight, Mail } from "lucide-react";
import { FaGithub as Github } from "react-icons/fa";
import Link from "next/link";
import { FaLinkedin as Linkedin } from "react-icons/fa";
import { ContactForm } from "@/components/contact/ContactForm";
import { siteConfig } from "@/data/site";
import { Reveal } from "@/components/animations/Reveal";

const socialLinks = [
  {
    label: "GitHub",
    href: siteConfig.github,
    icon: Github,
  },
  {
    label: "LinkedIn",
    href: siteConfig.linkedin,
    icon: Linkedin,
  },
];

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="mx-auto max-w-7xl px-6 pb-24 pt-32 lg:px-8 lg:pt-40">

        {/* Header */}
        <Reveal>
          <section className="border-b border-border/70 pb-16">
            <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-muted-foreground">
              Contact
            </p>

            <div className="mt-8 grid gap-12 lg:grid-cols-[1fr_320px] lg:items-end lg:gap-20">
              <h1 className="max-w-5xl text-[clamp(3.5rem,9vw,9rem)] font-semibold leading-[0.88] tracking-[-0.07em]">
                Let's build
                <br />
                <span className="text-muted-foreground">
                  something.
                </span>
              </h1>

              <div>
                <p className="text-base leading-7 text-muted-foreground">
                  Have an idea, a product, an interesting problem, or just want
                  to talk about what you're building?
                </p>

                {siteConfig.email && (
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="group mt-6 inline-flex items-center gap-2 text-sm transition-colors hover:text-muted-foreground"
                  >
                    <Mail className="size-4" />
                    {siteConfig.email}
                    <ArrowUpRight className="size-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                )}
              </div>
            </div>
          </section>
        </Reveal>

        {/* Form */}
        <Reveal>
          <section className="grid gap-10 border-b border-border/70 py-16 lg:grid-cols-[220px_1fr] lg:gap-20">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                Send a message
              </p>
            </div>

            <div className="max-w-3xl">
              <ContactForm />
            </div>
          </section>
        </Reveal>

        {/* Social */}
        <section className="grid gap-10 py-16 lg:grid-cols-[220px_1fr] lg:gap-20">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
              Elsewhere
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            {socialLinks.map((social) => {
              const Icon = social.icon;

              if (!social.href) {
                return null;
              }

              return (
                <Link
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center gap-2 rounded-full border border-border px-5 py-3 text-sm text-muted-foreground transition-colors hover:border-foreground/30 hover:text-foreground"
                >
                  <Icon className="size-4" />
                  {social.label}
                  <ArrowUpRight className="size-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              );
            })}
          </div>
        </section>

        {/* Footer statement */}
        <section className="border-t border-border/70 pt-8">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
              Hirdesh / 2026
            </span>

            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
              Built with curiosity
            </span>
          </div>
        </section>

      </div>
    </main>
  );
}