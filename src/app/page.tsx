import { HomePageClient } from "@/components/home/home-page-client";
import { Container } from "@/components/layout/container";
import { SiteShell } from "@/components/layout/site-shell";

export default function HomePage() {
  return (
    <SiteShell>
      <Container>
        <HomePageClient />
      </Container>
    </SiteShell>
  );
}
