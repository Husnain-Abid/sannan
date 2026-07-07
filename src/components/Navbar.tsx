"use client";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun, Menu, X } from "lucide-react";
import { NAV_LINKS } from "@/lib/data";

export function Navbar() {
  const { theme, setTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (id: string) => {
    setOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header
      className={`fixed top-3 left-1/2 -translate-x-1/2 z-[70] w-[min(96%,1200px)] transition-all ${
        scrolled ? "py-2" : "py-3"
      }`}
      data-testid="site-navbar"
    >
      <div
        className={`glass rounded-full px-4 md:px-6 py-2.5 flex items-center justify-between transition-all ${
          scrolled ? "shadow-[0_10px_40px_-15px_rgba(0,0,0,0.6)]" : ""
        }`}
      >
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex items-center gap-2 font-display font-bold tracking-tight"
          data-cursor="hover"
          data-testid="nav-logo"
        >
          
          {/* <span className="inline-flex h-7 w-7 items-center justify-center rounded-md bg-primary/15 text-primary text-sm">
            AA
          </span> */}

<span className="inline-flex h-7 w-7 items-center justify-center rounded-md bg-primary/15 overflow-hidden">
  <img
    src="/icon.png"
    alt="Husnain Dev"
    className=" object-contain"
  />
</span>


          <span className="hidden sm:inline text-sm">Husnain Abid</span>
        </button>

        <nav className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map((l) => (
            <button
              key={l.id}
              onClick={() => go(l.id)}
              className="px-3 py-1.5 rounded-full text-sm text-muted-foreground hover:text-foreground hover:bg-white/5 transition-colors"
              data-cursor="hover"
              data-testid={`nav-${l.id}`}
            >
              {l.label}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="h-9 w-9 grid place-items-center rounded-full hover:bg-white/5 transition-colors"
            aria-label="Toggle theme"
            data-cursor="hover"
            data-testid="theme-toggle"
          >
            {mounted && theme === "dark" ? (
              <Sun className="h-4 w-4" />
            ) : (
              <Moon className="h-4 w-4" />
            )}
          </button>
          <button
            onClick={() => go("contact")}
            className="hidden md:inline-flex items-center gap-2 rounded-full bg-primary px-4 py-1.5 text-sm font-medium text-primary-foreground hover:opacity-90 transition-opacity"
            data-cursor="hover"
            data-testid="nav-cta"
          >
            Hire Me
          </button>
          <button
            onClick={() => setOpen((v) => !v)}
            className="md:hidden h-9 w-9 grid place-items-center rounded-full hover:bg-white/5 transition-colors"
            aria-label="Menu"
            data-testid="nav-menu-toggle"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden mt-2 glass rounded-2xl p-2 flex flex-col">
          {NAV_LINKS.map((l) => (
            <button
              key={l.id}
              onClick={() => go(l.id)}
              className="text-left px-4 py-2.5 rounded-xl text-sm text-foreground hover:bg-white/5"
              data-testid={`nav-mobile-${l.id}`}
            >
              {l.label}
            </button>
          ))}
          <button
            onClick={() => go("contact")}
            className="mt-1 text-center px-4 py-2.5 rounded-xl text-sm font-medium bg-primary text-primary-foreground"
          >
            Hire Me
          </button>
        </div>
      )}
    </header>
  );
}
