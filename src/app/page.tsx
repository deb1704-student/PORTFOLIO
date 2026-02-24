import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";
import Vision from "@/components/sections/Vision";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="min-h-screen w-full bg-background text-foreground selection:bg-accent selection:text-black">
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Vision />
      <Footer />
    </main>
  );
}
