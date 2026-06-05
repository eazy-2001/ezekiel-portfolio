import { Globe, Paintbrush, Smartphone, LayoutTemplate, Wrench, Headphones, Sparkles } from "lucide-react";

const services = [
  { icon: Globe, title: "Website Design & Development", desc: "Custom websites built from scratch — fast, beautiful and conversion-focused." },
  { icon: Paintbrush, title: "Website Redesign", desc: "Refresh outdated sites with modern design, branding and performance upgrades." },
  { icon: Smartphone, title: "Responsive Optimization", desc: "Pixel-perfect experiences across mobile, tablet and desktop." },
  { icon: LayoutTemplate, title: "Landing Page Design", desc: "High-impact pages engineered for campaigns, products and launches." },
  { icon: Wrench, title: "Website Maintenance", desc: "Ongoing updates, backups, security and content support." },
  { icon: Headphones, title: "IT Consultancy", desc: "Strategic guidance on tools, workflows and digital infrastructure." },
  { icon: Sparkles, title: "Digital Solutions", desc: "Productivity, automation and AI-powered solutions tailored to your needs." },
];

export function Services() {
  return (
    <section id="services" className="bg-gradient-subtle py-20 md:py-28">
      <div className="container mx-auto px-4 md:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">Services</p>
          <h2 className="font-display text-4xl font-bold md:text-5xl">How I can help</h2>
        </div>
        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="group rounded-2xl border border-border bg-card p-6 shadow-card transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-elegant"
            >
              <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-accent text-primary transition-colors group-hover:bg-gradient-hero group-hover:text-primary-foreground">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="font-display text-lg font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
