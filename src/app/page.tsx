import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";
import Experience from "@/components/sections/Experience";
import Education from "@/components/sections/Education";
import Vision from "@/components/sections/Vision";
import Footer from "@/components/sections/Footer";
import SectionDivider from "@/components/ui/SectionDivider";

export default function Home() {
  return (
    <main id="main-content" className="min-h-screen w-full bg-background text-foreground selection:bg-accent selection:text-black">
      <Hero />
      <SectionDivider chapter="01" title="Philosophy" />
      <About />
      <SectionDivider chapter="02" title="Works" />
      <Projects />
      <SectionDivider chapter="03" title="Arsenal" />
      <Skills />
      <SectionDivider chapter="04" title="Journey" />
      <Experience />
      <SectionDivider chapter="05" title="Foundation" />
      <Education />
      <SectionDivider chapter="06" title="Vision" />
      <Vision />
      <Footer />
    </main>
  );
}
