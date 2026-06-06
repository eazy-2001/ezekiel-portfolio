import { useEffect, useState } from "react";
import { Menu, X, Moon, Sun, Home, User, Sparkles, Briefcase, Wrench, GraduationCap, MessageSquare, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export type SectionKey = "home" | "about" | "skills" | "portfolio" | "services" | "experience" | "testimonials" | "contact";

export const NAV_ITEMS: { key: SectionKey; label: string; icon: React.ComponentType<{ className?: string }> }[] = [
  { key: "home", label: "Home", icon: Home },
  { key: "about", label: "About", icon: User },
  { key: "skills", label: "Skills", icon: Sparkles },
  { key: "portfolio", label: "Portfolio", icon: Briefcase },
  { key: "services", label: "Services", icon: Wrench },
  { key: "experience", label: "Experience", icon: GraduationCap },
  { key: "testimonials", label: "Testimonials", icon: MessageSquare },
  { key: "contact", label: "Contact", icon: Mail },
];

type Props = {
  active: SectionKey;
  onSelect: (key: SectionKey) => void;
  open: boolean;
  setOpen: (v: boolean) => void;
};

export function SidebarMenu({ active, onSelect, open, setOpen }: Props) {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("theme");
    const prefersDark = stored ? stored === "dark" : window.matchMedia("(prefers-color-scheme: dark)").matches;
    setDark(prefersDark);
    document.documentElement.classList.toggle("dark", prefersDark);
  }, []);

  const toggleTheme = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  };

  return (
    <>
      {/* Top bar */}
      <header className="fixed top-0 z-40 w-full border-b border-border bg-background/80 backdrop-blur-lg">
        <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-8">
          <button onClick={() => onSelect("home")} className="font-display text-xl font-bold tracking-tight">
            EPK<span className="text-gradient">.</span>
          </button>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" onClick={toggleTheme} aria-label="Toggle theme">
              {dark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
            <Button variant="ghost" size="icon" onClick={() => setOpen(!open)} aria-label="Toggle menu">
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </header>

      {/* Overlay */}
      <div
        onClick={() => setOpen(false)}
        className={cn(
          "fixed inset-0 z-40 bg-background/60 backdrop-blur-sm transition-opacity duration-300",
          open ? "opacity-100" : "pointer-events-none opacity-0"
        )}
      />

      {/* Sidebar drawer */}
      <aside
        className={cn(
          "fixed right-0 top-0 z-50 h-full w-72 max-w-[85vw] border-l border-border bg-card shadow-elegant transition-transform duration-300 ease-out",
          open ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex h-16 items-center justify-between border-b border-border px-5">
          <span className="font-display text-lg font-bold">Menu</span>
          <Button variant="ghost" size="icon" onClick={() => setOpen(false)} aria-label="Close menu">
            <X className="h-5 w-5" />
          </Button>
        </div>
        <nav className="p-3">
          <ul className="space-y-1">
            {NAV_ITEMS.map(({ key, label, icon: Icon }) => {
              const isActive = active === key;
              return (
                <li key={key}>
                  <button
                    onClick={() => onSelect(key)}
                    className={cn(
                      "group flex w-full items-center gap-3 rounded-xl px-4 py-3 text-left text-sm font-medium transition-all",
                      isActive
                        ? "bg-gradient-hero text-primary-foreground shadow-glow"
                        : "text-muted-foreground hover:bg-accent hover:text-foreground"
                    )}
                  >
                    <Icon className="h-4 w-4" />
                    {label}
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>
      </aside>
    </>
  );
}
