import { Github, Linkedin, Mail, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="container mx-auto flex flex-col items-center justify-between gap-6 px-4 py-8 md:flex-row md:px-8">
        <div className="text-center md:text-left">
          <div className="font-display text-lg font-bold">
            Ezekiel Pascal Kwabila<span className="text-gradient">.</span>
          </div>
          <p className="mt-1 text-sm text-muted-foreground">
            © {new Date().getFullYear()} All rights reserved. Designed & built with care.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <a href="tel:+255613208933" aria-label="Phone" className="rounded-full border border-border p-2.5 text-muted-foreground transition-colors hover:border-primary/40 hover:text-primary">
            <Phone className="h-4 w-4" />
          </a>
          <a href="https://www.linkedin.com/in/ezekiel-kwabila-56026838" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="rounded-full border border-border p-2.5 text-muted-foreground transition-colors hover:border-primary/40 hover:text-primary">
            <Linkedin className="h-4 w-4" />
          </a>
          <a href="https://github.com/" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="rounded-full border border-border p-2.5 text-muted-foreground transition-colors hover:border-primary/40 hover:text-primary">
            <Github className="h-4 w-4" />
          </a>
          <a href="mailto:kwabilaezekiel7@gmail.com" aria-label="Email" className="rounded-full border border-border p-2.5 text-muted-foreground transition-colors hover:border-primary/40 hover:text-primary">
            <Mail className="h-4 w-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
