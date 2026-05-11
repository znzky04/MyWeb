import { profileContent } from "@/content/profile";
import { Container } from "@/components/layout/container";

export function SiteFooter() {
  return (
    <footer className="mt-20 border-t border-line py-10 text-sm text-ink-soft">
      <Container className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p>Made for a bright personal corner on the web.</p>
        <div className="flex flex-wrap gap-4">
          {profileContent.socialLinks.map((link) => (
            <a key={link.label} href={link.href} target="_blank" rel="noreferrer" className="hover:text-ink">
              {link.label}
            </a>
          ))}
        </div>
      </Container>
    </footer>
  );
}
