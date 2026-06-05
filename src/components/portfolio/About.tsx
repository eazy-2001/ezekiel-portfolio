import { GraduationCap, Code2, Scale, Lightbulb } from "lucide-react";

const highlights = [
  { icon: Scale, title: "Law Student", desc: "Currently pursuing a Bachelor Degree in Law." },
  { icon: Code2, title: "Web Specialist", desc: "Building modern, responsive, user-friendly websites." },
  { icon: Lightbulb, title: "Problem Solver", desc: "Bridging legal insight with technical execution." },
  { icon: GraduationCap, title: "Lifelong Learner", desc: "Always exploring new tools, frameworks and AI." },
];

export function About() {
  return (
    <section id="about" className="py-20 md:py-28">
      <div className="container mx-auto px-4 md:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">About me</p>
          <h2 className="font-display text-4xl font-bold md:text-5xl">
            Where <span className="text-gradient">law</span> meets <span className="text-gradient">technology</span>
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            I'm a Law student with a strong interest in technology, web development and digital
            innovation. I combine analytical thinking from my legal training with hands-on
            technical skills to deliver thoughtful, polished digital solutions that solve real
            problems for businesses and individuals.
          </p>
        </div>
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {highlights.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="group rounded-2xl border border-border bg-card p-6 shadow-card transition-all hover:-translate-y-1 hover:shadow-elegant"
            >
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-hero text-primary-foreground shadow-glow">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
