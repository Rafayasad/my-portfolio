import { Hero } from "@/components/Hero";
import { Experience } from "@/components/Experience";
import { Skills } from "@/components/Skills";
import Projects from "@/components/Projects";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import ClientGlobe from "@/components/ClientGlobe";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Experience />
      <Skills />
      <Projects />
      {/* <ClientGlobe /> */}
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
