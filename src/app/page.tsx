import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import WelcomeIntro from "@/components/WelcomeIntro";
import HomeHero from "@/components/home/HomeHero";
import HomeAbout from "@/components/home/HomeAbout";

export default function Home() {
  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <WelcomeIntro />
      <SiteHeader variant="overlay" />
      <main>
        <HomeHero />
        <HomeAbout />
      </main>
      <SiteFooter />
    </div>
  );
}
