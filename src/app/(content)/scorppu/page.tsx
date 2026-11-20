import type { Metadata } from "next";
import PortfolioHero from "@/components/portfolio/PortfolioHero";
import ExperienceSection from "@/components/portfolio/ExperienceSection";
import EducationSection from "@/components/portfolio/EducationSection";
import ProjectsSection from "@/components/portfolio/ProjectsSection";
import FeaturedBuilding from "@/components/portfolio/FeaturedBuilding";
import InterestsSection from "@/components/portfolio/InterestsSection";
import ContactSection from "@/components/portfolio/ContactSection";
import { portfolio } from "@/data/portfolio";

export const metadata: Metadata = {
  title: "Work",
  description: portfolio.about,
};

export default function ScorppuPage() {
  return (
    <>
      <PortfolioHero />
      <ExperienceSection />
      <EducationSection />
      <ProjectsSection />
      <FeaturedBuilding />
      <InterestsSection />
      <ContactSection />
    </>
  );
}
