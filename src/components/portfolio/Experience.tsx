import { Briefcase, GraduationCap } from "lucide-react";

const experience = [
  { role: "Freelance Web Designer", org: "Self-employed", desc: "Designing and developing custom websites for clients across industries." },
  { role: "Website Development Projects", org: "Various Clients", desc: "Delivering full-stack web solutions from concept to launch." },
  { role: "IT Support Services", org: "Independent", desc: "Providing technical assistance, troubleshooting and system support." },
  { role: "Digital Solutions Consultancy", org: "Independent", desc: "Advising on digital tools, workflow automation and online presence." },
];

const education = [
  { role: "Bachelor Degree in Law", org: "Ongoing", desc: "Building a strong foundation in legal theory, research and analytical reasoning." },
  { role: "Artificial Intelligence Certification", org: "Certified", desc: "Practical application of AI tools for productivity and creative work." },
  { role: "Microsoft Excel Certification", org: "Certified", desc: "Advanced spreadsheet skills, formulas, data analysis and reporting." },
  { role: "IT & Web Design Training", org: "Various Programs", desc: "Continuous professional development in modern web technologies." },
];

function Timeline({ items, icon: Icon }: { items: typeof experience; icon: typeof Briefcase }) {
  return (
    <ol className="relative border-l border-border pl-6">
      {items.map((item, i) => (
        <li key={i} className="mb-8 last:mb-0">
          <span className="absolute -left-3.5 flex h-7 w-7 items-center justify-center rounded-full bg-gradient-hero text-primary-foreground shadow-glow">
            <Icon className="h-3.5 w-3.5" />
          </span>
          <h3 className="font-display text-lg font-semibold">{item.role}</h3>
          <p className="text-sm font-medium text-primary">{item.org}</p>
          <p className="mt-1 text-sm text-muted-foreground">{item.desc}</p>
        </li>
      ))}
    </ol>
  );
}

export function Experience() {
  return (
    <section id="experience" className="py-20 md:py-28">
      <div className="container mx-auto px-4 md:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">Journey</p>
          <h2 className="font-display text-4xl font-bold md:text-5xl">Experience & education</h2>
        </div>
        <div className="mt-14 grid gap-12 lg:grid-cols-2">
          <div>
            <h3 className="mb-8 font-display text-2xl font-bold">Experience</h3>
            <Timeline items={experience} icon={Briefcase} />
          </div>
          <div>
            <h3 className="mb-8 font-display text-2xl font-bold">Education</h3>
            <Timeline items={education} icon={GraduationCap} />
          </div>
        </div>
      </div>
    </section>
  );
}
