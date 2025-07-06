
import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { AboutMe } from "@/components/about-me";
import { Skills } from "@/components/skills";
import { Projects } from "@/components/projects";

export default function Home() {
  return (
    <div id="home">
      <Navbar />
      <main>
        <Hero />
        <AboutMe />
        <Skills />
        <Projects />
      </main>
    </div>
  );
}
