import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SectionHeading } from "@/components/SectionHeading";
import { SKILLS } from "@/lib/data";

gsap.registerPlugin(ScrollTrigger);

const STATS = [
  { label: "Years Experience", to: 2, suffix: "+" },
  { label: "Projects Completed", to: 50, suffix: "+" },
  { label: "Technologies Used", to: 10, suffix: "+" },
  { label: "Client Work", to: 20, suffix: "+" },
];


function Counter({ to, suffix }: { to: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obj = { v: 0 };
    const tween = gsap.to(obj, {
      v: to,
      duration: 1.6,
      ease: "power2.out",
      onUpdate: () => {
        el.textContent = Math.round(obj.v).toString() + suffix;
      },
      scrollTrigger: { trigger: el, start: "top 85%" },
    });
    return () => {
      tween.kill();
    };
  }, [to, suffix]);
  return <span ref={ref}>0{suffix}</span>;
}

export function About() {
  const stripRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = stripRef.current;
    if (!el) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;
    const inner = el.querySelector(".marquee-inner") as HTMLElement | null;
    if (!inner) return;
    const tween = gsap.to(inner, {
      xPercent: -50,
      duration: 35,
      ease: "none",
      repeat: -1,
    });
    return () => {
      tween.kill();
    };
  }, []);

  const skillsLoop = [...SKILLS, ...SKILLS];

  return (
    <section id="about" className="relative py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <SectionHeading
              eyebrow="About"
              title="MERN Stack Developer focused on building real-world web applications."
              description="I'm Husnain Abid — a Full Stack MERN Developer with hands-on experience in building scalable and responsive web applications. I have worked on 50+ client projects, mainly focusing on frontend development with React.js while also handling backend APIs and deployments."
            />
            <div className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-4">
              {STATS.map((s) => (
                <div key={s.label} className="glass rounded-2xl p-5">
                  <div className="font-display text-3xl font-extrabold text-primary text-glow">
                    <Counter to={s.to} suffix={s.suffix} />
                  </div>
                  <div className="mt-2 text-xs uppercase tracking-[0.18em] text-muted-foreground leading-snug">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="glass rounded-3xl p-8 h-full flex flex-col justify-between">
              <div>
                <div className="text-xs uppercase tracking-[0.22em] text-muted-foreground">
                  How I work
                </div>
                <ul className="mt-5 space-y-4 text-sm text-foreground/90 leading-relaxed">
                  {[
                    "Strong focus on clean and responsive UI using React.js and Tailwind CSS.",
                    "Experience working on multiple client projects in fast-paced environments.",
                    "Write maintainable and reusable code with proper structure and best practices.",
                    "Comfortable with full-stack development including APIs, databases, and deployment.",
                  ].map((line) => (
                    <li key={line} className="flex gap-3">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary glow-blue" />
                      {line}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 flex items-center gap-3 text-xs text-muted-foreground">
                <span className="inline-flex h-9 items-center rounded-full glass px-3">
                  Lahore, Pakistan
                </span>
                <span className="inline-flex h-9 items-center rounded-full glass px-3">
                  Open to Remote Work
                </span>
              </div>

            </div>
          </div>
        </div>

        <div className="mt-20">
          <div className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
            Stack I build with
          </div>
          <div
            ref={stripRef}
            className="mt-6 relative overflow-hidden mask-marquee"
            style={{
              maskImage:
                "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
            }}
          >
            <div className="marquee-inner flex w-max gap-3">
              {skillsLoop.map((s, i) => (
                <div
                  key={i}
                  className="glass rounded-full px-5 py-2.5 text-sm text-foreground/85 whitespace-nowrap"
                >
                  <span className="text-primary mr-2">/</span>
                  {s.name}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
