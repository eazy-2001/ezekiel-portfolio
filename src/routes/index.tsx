import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Skills } from "@/components/portfolio/Skills";
import { Portfolio } from "@/components/portfolio/Portfolio";
import { Services } from "@/components/portfolio/Services";
import { Experience } from "@/components/portfolio/Experience";
import { Testimonials } from "@/components/portfolio/Testimonials";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";
import { SidebarMenu, type SectionKey } from "@/components/portfolio/SidebarMenu";
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
  const [active, setActive] = useState<SectionKey>("home");
  const [open, setOpen] = useState(false);
  const [transitioning, setTransitioning] = useState(false);

  const handleSelect = (key: SectionKey) => {
    if (key === active) {
      setOpen(false);
      return;
    }
    setTransitioning(true);
    setOpen(false);
    window.setTimeout(() => {
      setActive(key);
      window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
      setTransitioning(false);
    }, 200);
  };

  // Lock body scroll when sidebar open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const renderSection = () => {
    switch (active) {
      case "home": return <Hero onNavigate={(s) => handleSelect(s as SectionKey)} />;
      case "about": return <About />;
      case "skills": return <Skills />;
      case "portfolio": return <Portfolio />;
      case "services": return <Services />;
      case "experience": return <Experience />;
      case "testimonials": return <Testimonials />;
      case "contact": return <Contact />;
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SidebarMenu active={active} onSelect={handleSelect} open={open} setOpen={setOpen} />
      <main className="pt-16">
        <div
          key={active}
          className={`transition-all duration-300 ease-out ${
            transitioning ? "opacity-0 translate-y-2" : "animate-fade-up opacity-100 translate-y-0"
          }`}
        >
          {renderSection()}
        </div>
      </main>
      <Footer />
      <Toaster richColors position="top-center" />
    </div>
  );
}
