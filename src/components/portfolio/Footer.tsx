import { Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="container mx-auto flex flex-col items-center justify-between gap-6 px-4 py-10 md:flex-row md:px-8">
        <div className="text-center md:text-left">
          <div className="font-display text-lg font-bold">
            Ezekiel Pascal Kwabila<span className="text-gradient">.</span>
          </div>
          <p className="mt-1 text-sm text-muted-foreground">
            © {new Date().getFullYear()} All rights reserved. Designed & built with care.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <a href="#" aria-label="GitHub" className="rounded-full border border-border p-2.5 text-muted-foreground transition-colors hover:border-primary/40 hover:text-primary">
            <Github className="h-4 w-4" />
          </a>
          <a href="#" aria-label="LinkedIn" className="rounded-full border border-border p-2.5 text-muted-foreground transition-colors hover:border-primary/40 hover:text-primary">
            <Linkedin className="h-4 w-4" />
          </a>
          <a href="#contact" aria-label="Email" className="rounded-full border border-border p-2.5 text-muted-foreground transition-colors hover:border-primary/40 hover:text-primary">
            <Mail className="h-4 w-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
