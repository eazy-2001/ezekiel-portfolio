import { useState } from "react";
import { Mail, Phone, Linkedin, Github, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";

const details = [
  { icon: Mail, label: "Email", value: "kwabilaezekiel7@gmail.com", href: "mailto:kwabilaezekiel7@gmail.com" },
  { icon: Phone, label: "Phone", value: "+255 613 208 933", href: "tel:+255613208933" },
  { icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/ezekiel-kwabila-56026838", href: "https://www.linkedin.com/in/ezekiel-kwabila-56026838" },
  { icon: Github, label: "GitHub", value: "github.com/ezekielkwabila", href: "https://github.com/" },
];

const initialForm = { name: "", email: "", subject: "", message: "" };

export function Contact() {
  const [form, setForm] = useState(initialForm);
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const name = form.name.trim();
    const email = form.email.trim();
    const subject = form.subject.trim();
    const message = form.message.trim();

    if (!name || !email || !subject || !message) {
      toast.error("Please fill in all fields.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      toast.error("Please enter a valid email address.");
      return;
    }

    setSubmitting(true);
    const { error } = await supabase
      .from("contact_messages")
      .insert({ name, email, subject, message });
    setSubmitting(false);

    if (error) {
      console.error(error);
      toast.error("Could not send message. Please try again.");
      return;
    }

    toast.success("Message sent successfully");
    setForm(initialForm);
  };

  return (
    <section id="contact" className="py-12 md:py-20">
      <div className="container mx-auto px-4 md:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">Contact</p>
          <h2 className="font-display text-4xl font-bold md:text-5xl">Let's build something great</h2>
          <p className="mt-4 text-muted-foreground">
            Have a project in mind or an opportunity to share? I'd love to hear from you.
          </p>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-5">
          <div className="space-y-4 lg:col-span-2">
            {details.map(({ icon: Icon, label, value, href }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="group flex items-center gap-4 rounded-2xl border border-border bg-card p-4 shadow-card transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-elegant"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-hero text-primary-foreground shadow-glow">
                  <Icon className="h-5 w-5" />
                </div>
                <div className="min-w-0">
                  <div className="text-xs font-medium uppercase tracking-wide text-muted-foreground">{label}</div>
                  <div className="truncate text-sm font-semibold">{value}</div>
                </div>
              </a>
            ))}
          </div>

          <form
            onSubmit={onSubmit}
            className="rounded-2xl border border-border bg-card p-6 shadow-card lg:col-span-3 md:p-8"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <Label htmlFor="name">Full name</Label>
                <Input id="name" maxLength={100} value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Your name" className="mt-1.5" />
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" maxLength={255} value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="you@example.com" className="mt-1.5" />
              </div>
            </div>
            <div className="mt-4">
              <Label htmlFor="subject">Subject</Label>
              <Input id="subject" maxLength={200} value={form.subject} onChange={(e) => setForm({ ...form, subject: e.target.value })} placeholder="What's this about?" className="mt-1.5" />
            </div>
            <div className="mt-4">
              <Label htmlFor="message">Message</Label>
              <Textarea id="message" rows={5} maxLength={2000} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} placeholder="Tell me a bit about your project..." className="mt-1.5 resize-none" />
            </div>
            <Button type="submit" size="lg" disabled={submitting} className="mt-6 w-full bg-gradient-hero shadow-elegant hover:opacity-90">
              {submitting ? "Sending..." : (<>Send Message <Send className="ml-2 h-4 w-4" /></>)}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
