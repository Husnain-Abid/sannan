import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight, X } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { PROJECTS, type Project } from "@/lib/data";

gsap.registerPlugin(ScrollTrigger);

export function Projects() {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState<Project | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;
    const ctx = gsap.context(() => {
      gsap.from(".project-card", {
        y: 80,
        opacity: 0,
        duration: 0.95,
        ease: "expo.out",
        stagger: 0.08,
        scrollTrigger: { trigger: el, start: "top 75%" },
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  useEffect(() => {
    if (!active) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActive(null);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [active]);

  return (
    <section id="work" className="relative py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            eyebrow="Projects"
            title="Some of my recent work"
            description="A selection of projects I've worked on using the MERN stack, focusing on frontend performance, backend APIs, and real-world client requirements."
          />
          <div className="text-xs uppercase tracking-[0.22em] text-muted-foreground">
            2024 — 2026
          </div>
        </div>

        <div ref={ref} className="mt-16 grid gap-6 md:grid-cols-2">
          {PROJECTS.map((p, i) => (
            <button
              key={p.slug}
              className={`project-card group relative block overflow-hidden rounded-3xl glass text-left ${i % 3 === 0 ? "md:col-span-2" : ""
                }`}
              data-cursor="hover"
              data-testid={`project-${p.slug}`}
            >
              <div className="relative aspect-[16/10] w-full overflow-hidden" onClick={() => setActive(p)}>
                <img
                  src={p.cover}
                  alt={p.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
                <div className="absolute left-5 top-5 flex items-center gap-2">
                  <span className="rounded-full bg-black/50 px-3 py-1 text-[10px] uppercase tracking-[0.18em] text-white/90 backdrop-blur">
                    {p.category}
                  </span>
                  <span className="rounded-full bg-black/50 px-3 py-1 text-[10px] uppercase tracking-[0.18em] text-white/90 backdrop-blur">
                    {p.year}
                  </span>
                </div>
                <div className="absolute right-5 top-5 grid h-10 w-10 place-items-center rounded-full bg-primary text-primary-foreground opacity-0 translate-y-1 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 glow-blue">
                  <ArrowUpRight className="h-4 w-4" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl md:text-2xl font-bold tracking-tight">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {p.tagline}
                </p>
                {/* <div className="mt-4 flex flex-wrap gap-2">
                  {p.stack.slice(0, 4).map((s) => (
                    <span
                      key={s}
                      className="rounded-full border border-white/10 px-2.5 py-1 text-[11px] text-foreground/70"
                    >
                      {s}
                    </span>
                  ))}
                </div> */}


                <div className="mt-4 flex flex-wrap gap-3">
                  {p.github && (
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-full border border-white/10 px-3 py-1 text-xs text-foreground/70 hover:bg-white/10 transition"
                    >
                      GitHub
                    </a>
                  )}

                  {p.live && (
                    <a
                      href={p.live}
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs text-primary hover:bg-primary/20 transition"
                    >
                      Live Demo
                    </a>
                  )}
                </div>


              </div>
            </button>
          ))}
        </div>
      </div>

      {active ? (
        <div
          className="fixed inset-0 z-[120] flex items-center justify-center p-4 cursor-auto"
          role="dialog"
          aria-modal="true"
          data-testid="project-modal"
        >
          {/* <div
            className="absolute inset-0 bg-black/70 backdrop-blur-md"
            onClick={() => setActive(null)}
          /> */}
          <div
            className="absolute inset-0 bg-black/70 backdrop-blur-md pointer-events-auto cursor-none"
            onClick={() => setActive(null)}
          />


          <div className="relative z-10 w-full max-w-3xl glass rounded-3xl overflow-hidden shadow-2xl max-h-[90vh] overflow-y-auto">
            <div className="relative">
              <img src={active.cover} alt={active.title} className="h-72 w-full object-cover" />
              <button
                onClick={() => setActive(null)}
                className="absolute right-4 top-4 grid h-10 w-10 place-items-center rounded-full bg-black/60 text-white hover:bg-black/80"
                aria-label="Close"
                data-testid="modal-close"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
            <div className="p-8 md:p-10">
              <div className="flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                <span>{active.category}</span>
                <span>·</span>
                <span>{active.year}</span>
              </div>
              <h3 className="mt-3 font-display text-3xl md:text-4xl font-extrabold tracking-tight">
                {active.title}
              </h3>
              <p className="mt-2 text-base text-muted-foreground">{active.tagline}</p>

              <div className="mt-6 flex flex-wrap gap-2">
                {active.stack.map((s) => (
                  <span
                    key={s}
                    className="rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-[11px] text-primary"
                  >
                    {s}
                  </span>
                ))}
              </div>

              <div className="mt-8 grid gap-6 md:grid-cols-3">
                {[
                  { label: "Problem", body: active.problem },
                  { label: "Solution", body: active.solution },
                  { label: "Outcome", body: active.outcome },
                ].map((b) => (
                  <div key={b.label} className="rounded-2xl border border-white/8 p-5">
                    <div className="text-[10px] uppercase tracking-[0.22em] text-primary">
                      {b.label}
                    </div>
                    <p className="mt-3 text-sm text-foreground/85 leading-relaxed">
                      {b.body}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </section>
  );
}
