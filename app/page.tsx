import Hero from "@/components/sections/Hero";
import TechStack from "@/components/sections/TechStack";
import FeaturedProjects from "@/components/sections/FeaturedProjects";
import GitHubStats from "@/components/sections/GitHubStats";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <TechStack />
      <FeaturedProjects />
      <GitHubStats />
      <Contact />
    </>
  );
}
