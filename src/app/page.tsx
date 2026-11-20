import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import HomeHero from "@/components/home/HomeHero";
import HomeAbout from "@/components/home/HomeAbout";

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-stone-950">
      <SiteHeader variant="overlay" />
      <main>
        <HomeHero />
        <HomeAbout />
      </main>
      <SiteFooter />
    </div>
  );
}
