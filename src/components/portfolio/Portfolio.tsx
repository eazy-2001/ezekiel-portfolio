import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import business from "@/assets/project-salso.png";
import ecommerce from "@/assets/project-ecommerce.jpg";
import law from "@/assets/project-rweyongeza.png";
import school from "@/assets/project-school.jpg";
import portfolio from "@/assets/project-portfolio.jpg";
import ngo from "@/assets/project-ngo.jpg";

const projects = [
  {
    img: law,
    title: "Rweyongeza Advocates",
    desc: "Professional law firm website with practice areas, attorney profiles and enquiry forms.",
    tech: ["WordPress", "Responsive Design", "SEO"],
    live: "https://rweyongezaadvocates.or.tz",
    repo: "https://rweyongezaadvocates.or.tz",
  },
  {
    img: business,
    title: "Salso Solutions",
    desc: "A modern business website for a Tanzanian solutions company — clean layout, conversion-focused.",
    tech: ["HTML5", "CSS3", "JavaScript", "WordPress"],
    live: "https://salso.solutions.tz",
    repo: "https://salso.solutions.tz",
  },
  {
    img: ecommerce,
    title: "E-commerce Website",
    desc: "A polished online store with product catalog, cart and secure checkout flow.",
    tech: ["WordPress", "WooCommerce", "UI/UX"],
    live: "#",
    repo: "#",
  },
  {
    img: school,
    title: "School Management Website",
    desc: "Information portal with admissions, news, staff directory and student resources.",
    tech: ["WordPress", "Responsive Design"],
    live: "#",
    repo: "#",
  },
  {
    img: portfolio,
    title: "Personal Portfolio Website",
    desc: "A minimalist portfolio that showcases creative work with smooth animations.",
    tech: ["HTML5", "CSS3", "JavaScript"],
    live: "#",
    repo: "#",
  },
  {
    img: ngo,
    title: "NGO Website",
    desc: "Mission-driven site for a nonprofit with donations, programs and impact storytelling.",
    tech: ["WordPress", "UI/UX", "SEO"],
    live: "#",
    repo: "#",
  },
];

export function Portfolio() {
  return (
    <section id="portfolio" className="py-20 md:py-28">
      <div className="container mx-auto px-4 md:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">Selected work</p>
          <h2 className="font-display text-4xl font-bold md:text-5xl">Recent projects</h2>
          <p className="mt-4 text-muted-foreground">
            A glimpse into the kinds of websites I've designed and delivered.
          </p>
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <article
              key={p.title}
              className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-card transition-all hover:-translate-y-1 hover:shadow-elegant"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                <img
                  src={p.img}
                  alt={p.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="font-display text-xl font-semibold">{p.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {p.tech.map((t) => (
                    <span key={t} className="rounded-full bg-accent px-2.5 py-0.5 text-xs font-medium text-accent-foreground">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="mt-6 flex gap-2 pt-2">
                  <Button size="sm" className="flex-1 bg-gradient-hero hover:opacity-90" asChild>
                    <a href={p.live} target="_blank" rel="noopener noreferrer"><ExternalLink className="mr-1 h-3.5 w-3.5" /> Live Demo</a>
                  </Button>
                  <Button size="sm" variant="outline" className="flex-1" asChild>
                    <a href={p.repo} target="_blank" rel="noopener noreferrer"><Github className="mr-1 h-3.5 w-3.5" /> Project Link</a>
                  </Button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
