import { ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import portrait from "@/assets/portrait.png.asset.json";
import cv from "@/assets/cv.pdf.asset.json";

type HeroProps = { onNavigate?: (section: string) => void };

const downloadFile = async (url: string, filename: string) => {
  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error("Download failed");

    const blob = await response.blob();
    const blobUrl = URL.createObjectURL(blob);
    const anchor = document.createElement("a");
    anchor.href = blobUrl;
    anchor.download = filename;
    document.body.appendChild(anchor);
    anchor.click();
    anchor.remove();
    URL.revokeObjectURL(blobUrl);
  } catch {
    window.open(url, "_blank", "noopener,noreferrer");
  }
};

export function Hero({ onNavigate }: HeroProps) {
  return (
    <section id="home" className="relative overflow-hidden pt-16 pb-20 md:pt-20 md:pb-28">
      <div className="absolute inset-0 bg-gradient-glow pointer-events-none" />
      <div className="absolute top-20 right-10 h-72 w-72 rounded-full bg-primary/10 blur-3xl animate-float" />
      <div className="container relative mx-auto grid items-center gap-12 px-4 md:px-8 lg:grid-cols-2">
        <div className="animate-fade-up">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-xs font-medium shadow-card">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
            </span>
            Available for freelance & opportunities
          </div>
          <h1 className="font-display text-5xl font-bold leading-[1.05] tracking-tight md:text-6xl lg:text-7xl">
            Ezekiel Pascal{" "}
            <span className="text-gradient">Kwabila</span>
          </h1>
          <p className="mt-4 text-lg font-medium text-muted-foreground md:text-xl">
            Web Designer · IT Specialist · Law Student
          </p>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground">
            I am a passionate web designer and technology enthusiast with experience in creating
            modern, user-friendly, and responsive websites. Alongside my Bachelor of Laws studies,
            I continuously develop my digital skills to provide innovative web solutions for
            businesses and individuals.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button size="lg" className="bg-gradient-hero shadow-elegant hover:opacity-90" onClick={() => onNavigate?.("portfolio")}>
              View Projects <ArrowRight className="ml-1 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" onClick={() => downloadFile(cv.url, "Ezekiel_Kwabila_CV.pdf")}>
              <Download className="mr-1 h-4 w-4" /> Download CV
            </Button>
          </div>
          <div className="mt-8 flex items-center gap-4">
            <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground transition-colors hover:text-primary" aria-label="GitHub">
              <Github className="h-5 w-5" />
            </a>
            <a href="https://www.linkedin.com/in/ezekiel-kwabila-56026838" target="_blank" rel="noopener noreferrer" className="text-muted-foreground transition-colors hover:text-primary" aria-label="LinkedIn">
              <Linkedin className="h-5 w-5" />
            </a>
            <a href="mailto:kwabilaezekiel7@gmail.com" className="text-muted-foreground transition-colors hover:text-primary" aria-label="Email">
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>
        <div className="relative animate-fade-in">
          <div className="absolute -inset-4 bg-gradient-hero rounded-3xl opacity-20 blur-2xl" />
          <div className="relative overflow-hidden rounded-3xl border border-border bg-card shadow-elegant">
            <img
              src={portrait.url}
              alt="Ezekiel Pascal Kwabila portrait"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -left-6 hidden rounded-2xl border border-border bg-card p-4 shadow-card md:block">
            <div className="text-2xl font-bold text-gradient">3+</div>
            <div className="text-xs text-muted-foreground">Years Building</div>
          </div>
          <div className="absolute -top-6 -right-6 hidden rounded-2xl border border-border bg-card p-4 shadow-card md:block">
            <div className="text-2xl font-bold text-gradient">20+</div>
            <div className="text-xs text-muted-foreground">Projects Delivered</div>
          </div>
        </div>
      </div>
    </section>
  );
}
