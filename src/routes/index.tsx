import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Skills } from "@/components/portfolio/Skills";
import { Portfolio } from "@/components/portfolio/Portfolio";
import { Services } from "@/components/portfolio/Services";
import { Experience } from "@/components/portfolio/Experience";
import { Testimonials } from "@/components/portfolio/Testimonials";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";
import { Toaster } from "@/components/ui/sonner";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ezekiel Pascal Kwabila — Web Designer & IT Specialist" },
      {
        name: "description",
        content:
          "Portfolio of Ezekiel Pascal Kwabila — Web Designer, IT Specialist and Law Student crafting modern, responsive websites and digital solutions.",
      },
      { property: "og:title", content: "Ezekiel Pascal Kwabila — Web Designer & IT Specialist" },
      {
        property: "og:description",
        content:
          "Modern, responsive websites and digital solutions by Ezekiel Pascal Kwabila — Web Designer, IT Specialist and Law Student.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Portfolio />
        <Services />
        <Experience />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <Toaster richColors position="top-center" />
    </div>
  );
}
