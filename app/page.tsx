import { Footer } from "@/components/layout/Footer";
import { CoursesSection } from "@/components/home/CoursesSection";
import { CreatorCta } from "@/components/home/CreatorCta";
import { GrowthSection } from "@/components/home/GrowthSection";
import { Hero } from "@/components/home/Hero";
import { LearningPaths } from "@/components/home/LearningPaths";
import { Partners } from "@/components/home/Partners";
import { Testimonials } from "@/components/home/Testimonials";

export default async function HomePage({ searchParams }: PageProps<"/">) {
  const { q } = await searchParams;
  const query = typeof q === "string" ? q : "";

  return (
    <>
      <main>
        <Hero query={query} />
        <Partners />
        <CoursesSection key={query} query={query} />
        <LearningPaths />
        <GrowthSection />
        <CreatorCta />
        <Testimonials />
      </main>
      <Footer />
    </>
  );
}
