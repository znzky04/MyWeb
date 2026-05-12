import { HomeLocale, homeContent } from "@/content/home-content";
import { SectionHeading } from "@/components/layout/section-heading";

export function ContactSection({ copy }: { copy: (typeof homeContent)[HomeLocale] }) {
  return (
    <section className="section-shell rounded-[32px] px-6 py-10 sm:px-10">
      <SectionHeading
        eyebrow={copy.contact.eyebrow}
        title={copy.contact.title}
        description={copy.contact.description}
      />
      <div className="mt-8 flex flex-wrap gap-3">
        {copy.profile.socialLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-line-strong bg-white/82 px-5 py-3 text-sm font-semibold text-ink transition hover:-translate-y-0.5"
          >
            {link.label}
          </a>
        ))}
      </div>
    </section>
  );
}
