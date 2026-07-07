"use client";
import { useState, type FormEvent } from "react";
// import { ArrowRight, Check, Github, Linkedin, Mail, Twitter } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { MagneticButton } from "@/components/MagneticButton";

type FormState = {
  name: string;
  email: string;
  budget: string;
  message: string;
};

export function Contact() {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    budget: "",
    message: "",
  });
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [sent, setSent] = useState(false);

  const validate = () => {
    const e: typeof errors = {};
    if (form.name.trim().length < 2) e.name = "Please enter your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      e.email = "Please enter a valid email.";
    if (form.message.trim().length < 10)
      e.message = "Tell me a little more — at least a sentence.";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    if (!validate()) return;
    await new Promise((r) => setTimeout(r, 600));
    setSent(true);
  };

  const update =
    (k: keyof FormState) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
      setForm((f) => ({ ...f, [k]: e.target.value }));
    };

  return (
    <section id="contact" className="relative py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="Let's build"
              title="Have a project in mind? Let's make it real."
              description="The fastest way to start is a 20-minute intro call. Tell me about the problem, the timeline, and the bar — I'll come back within 24 hours with a clear path forward."
            />
            
            {/* <div className="mt-10 space-y-3">
              {[
                { icon: Mail, label: "armash@armashata.dev", href: "mailto:armash@armashata.dev" },
                { icon: Github, label: "github.com/armashata", href: "https://github.com" },
                {
                  icon: Linkedin,
                  label: "linkedin.com/in/armashata",
                  href: "https://linkedin.com",
                },
                { icon: Twitter, label: "@armashata", href: "https://twitter.com" },
              ].map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center gap-3 rounded-2xl glass px-4 py-3 hover:bg-white/[0.04] transition-colors"
                  data-cursor="hover"
                  data-testid={`contact-link-${label}`}
                >
                  <span className="grid h-9 w-9 place-items-center rounded-full bg-primary/10 text-primary">
                    <Icon className="h-4 w-4" />
                  </span>
                  <span className="text-sm text-foreground/85">{label}</span>
                  <ArrowRight className="ml-auto h-4 w-4 text-muted-foreground transition-all group-hover:translate-x-0.5 group-hover:text-primary" />
                </a>
              ))}
            </div> */}

          </div>

          <div className="lg:col-span-7">
            <div className="relative overflow-hidden rounded-3xl glass p-8 md:p-10">
              <div
                className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full opacity-50"
                style={{
                  background:
                    "radial-gradient(closest-side, hsl(var(--primary) / 0.25), transparent)",
                }}
              />
              {sent ? (
                <div className="relative flex flex-col items-center text-center py-16" data-testid="contact-success">
                  <div className="grid h-16 w-16 place-items-center rounded-full bg-primary/15 text-primary glow-blue">
                    {/* <Check className="h-7 w-7" /> */}
                  </div>
                  <h3 className="mt-6 font-display text-2xl font-bold">Message received.</h3>
                  <p className="mt-3 max-w-md text-sm text-muted-foreground leading-relaxed">
                    Thanks {form.name.split(" ")[0]}. I'll be back in your inbox within 24 hours
                    with a clear next step.
                  </p>
                </div>
              ) : (
                <form onSubmit={onSubmit} className="relative space-y-5" data-testid="contact-form">
                  <div className="grid gap-5 md:grid-cols-2">
                    <Field
                      label="Your name"
                      id="name"
                      value={form.name}
                      onChange={update("name")}
                      error={errors.name}
                      placeholder="Jane Doe"
                    />
                    <Field
                      label="Email"
                      id="email"
                      type="email"
                      value={form.email}
                      onChange={update("email")}
                      error={errors.email}
                      placeholder="jane@company.com"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="budget"
                      className="text-xs uppercase tracking-[0.18em] text-muted-foreground"
                    >
                      Budget (optional)
                    </label>
                    <select
                      id="budget"
                      value={form.budget}
                      onChange={update("budget")}
                      className="mt-2 w-full rounded-2xl bg-white/[0.03] border border-white/10 px-4 py-3 text-sm text-foreground focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition"
                      data-testid="input-budget"
                    >
                      <option value="">Select a range</option>
                      <option>Under $10k</option>
                      <option>$10k – $25k</option>
                      <option>$25k – $75k</option>
                      <option>$75k+</option>
                    </select>
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="text-xs uppercase tracking-[0.18em] text-muted-foreground"
                    >
                      Tell me about the project
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      value={form.message}
                      onChange={update("message")}
                      placeholder="What are you building, and what does success look like in 90 days?"
                      className={`mt-2 w-full rounded-2xl bg-white/[0.03] border px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary/20 transition resize-none ${
                        errors.message
                          ? "border-destructive/60 focus:border-destructive"
                          : "border-white/10 focus:border-primary/50"
                      }`}
                      data-testid="input-message"
                    />
                    {errors.message ? (
                      <p className="mt-1.5 text-xs text-destructive">{errors.message}</p>
                    ) : null}
                  </div>
                  <div className="flex items-center justify-between gap-4 pt-2">
                    <p className="text-xs text-muted-foreground">
                      I reply within 24 hours, EST/PST.
                    </p>
                    <MagneticButton
                      onClick={() => {
                        const f = document.querySelector(
                          "[data-testid='contact-form']",
                        ) as HTMLFormElement | null;
                        f?.requestSubmit();
                      }}
                      className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground glow-blue"
                      testId="contact-submit"
                    >
                      Send Message
                      {/* <ArrowRight className="h-4 w-4" /> */}
                    </MagneticButton>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  id,
  value,
  onChange,
  error,
  type = "text",
  placeholder,
}: {
  label: string;
  id: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  type?: string;
  placeholder?: string;
}) {
  return (
    <div>
      <label htmlFor={id} className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
        {label}
      </label>
      <input
        id={id}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`mt-2 w-full rounded-2xl bg-white/[0.03] border px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary/20 transition ${
          error ? "border-destructive/60 focus:border-destructive" : "border-white/10 focus:border-primary/50"
        }`}
        data-testid={`input-${id}`}
      />
      {error ? <p className="mt-1.5 text-xs text-destructive">{error}</p> : null}
    </div>
  );
}
