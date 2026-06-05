import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah K.",
    role: "Small Business Owner",
    quote: "Ezekiel delivered exactly what we asked for — and more. Our new website is fast, clean and finally feels like our brand.",
  },
  {
    name: "Daniel M.",
    role: "Founder, Startup",
    quote: "Professional, responsive and genuinely creative. Communication was excellent from start to finish.",
  },
  {
    name: "Grace A.",
    role: "NGO Director",
    quote: "He understood our mission immediately and translated it into a beautiful, easy-to-manage site.",
  },
];

export function Testimonials() {
  return (
    <section className="bg-gradient-subtle py-20 md:py-28">
      <div className="container mx-auto px-4 md:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">Testimonials</p>
          <h2 className="font-display text-4xl font-bold md:text-5xl">What clients say</h2>
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="relative rounded-2xl border border-border bg-card p-6 shadow-card transition-transform hover:-translate-y-1"
            >
              <Quote className="absolute right-5 top-5 h-8 w-8 text-primary/15" />
              <blockquote className="text-sm leading-relaxed text-foreground">
                "{t.quote}"
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-hero font-display text-sm font-bold text-primary-foreground">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <div className="text-sm font-semibold">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
