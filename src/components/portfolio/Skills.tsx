const skillGroups = [
  {
    title: "Web & Design",
    skills: [
      { name: "Website Design", level: 95 },
      { name: "Responsive Web Design", level: 92 },
      { name: "HTML5", level: 95 },
      { name: "CSS3", level: 90 },
      { name: "JavaScript", level: 80 },
      { name: "WordPress", level: 88 },
      { name: "UI/UX Design", level: 85 },
      { name: "Graphic Design", level: 78 },
    ],
  },
  {
    title: "IT & Productivity",
    skills: [
      { name: "Microsoft Excel", level: 90 },
      { name: "Microsoft Office Suite", level: 92 },
      { name: "Artificial Intelligence Tools", level: 85 },
      { name: "IT Support", level: 88 },
      { name: "Digital Marketing", level: 80 },
      { name: "Website Maintenance", level: 90 },
    ],
  },
  {
    title: "Professional",
    skills: [
      { name: "Problem Solving", level: 93 },
      { name: "Communication Skills", level: 92 },
      { name: "Research & Analytical Skills", level: 95 },
    ],
  },
];

export function Skills() {
  return (
    <section id="skills" className="bg-gradient-subtle py-20 md:py-28">
      <div className="container mx-auto px-4 md:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">Skills</p>
          <h2 className="font-display text-4xl font-bold md:text-5xl">A versatile, modern toolkit</h2>
          <p className="mt-4 text-muted-foreground">
            From pixel-perfect interfaces to dependable IT support — here's what I bring to every project.
          </p>
        </div>
        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {skillGroups.map((group) => (
            <div key={group.title} className="rounded-2xl border border-border bg-card p-6 shadow-card">
              <h3 className="mb-6 font-display text-xl font-semibold">{group.title}</h3>
              <div className="space-y-5">
                {group.skills.map((s) => (
                  <div key={s.name}>
                    <div className="mb-1.5 flex items-center justify-between text-sm">
                      <span className="font-medium">{s.name}</span>
                      <span className="text-muted-foreground">{s.level}%</span>
                    </div>
                    <div className="h-1.5 w-full overflow-hidden rounded-full bg-muted">
                      <div
                        className="h-full rounded-full bg-gradient-hero transition-all duration-700"
                        style={{ width: `${s.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
