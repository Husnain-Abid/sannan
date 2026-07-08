"use client";

import { useState, type FormEvent } from "react";
import { ArrowRightIcon, CheckIcon, EnvelopeIcon } from "@heroicons/react/24/outline";
import { SectionHeading } from "@/components/SectionHeading";
import { MagneticButton } from "@/components/MagneticButton";

/* ---------------- ICONS (CUSTOM SOCIAL) ---------------- */

const GithubIcon = (props: any) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M12 .5C5.7.5.5 5.9.5 12.3c0 5.2 3.4 9.6 8.2 11.2.6.1.8-.3.8-.6v-2.2c-3.3.7-4-1.5-4-1.5-.5-1.2-1.2-1.5-1.2-1.5-1-.7.1-.7.1-.7 1.1.1 1.7 1.2 1.7 1.2 1 .1.8 2 .8 2 1.7 1.1 3.5.8 4.3.6.1-.8.4-1.4.8-1.7-2.7-.3-5.6-1.4-5.6-6.3 0-1.4.5-2.5 1.2-3.4-.1-.3-.5-1.6.1-3.3 0 0 1-.3 3.4 1.3 1-.3 2-.4 3-.4s2 .1 3 .4c2.4-1.6 3.4-1.3 3.4-1.3.6 1.7.2 3 .1 3.3.8.9 1.2 2 1.2 3.4 0 4.9-2.9 6-5.6 6.3.5.4.9 1.2.9 2.4v3.5c0 .3.2.7.8.6C20.1 22 23.5 17.6 23.5 12.3 23.5 5.9 18.3.5 12 .5z" />
  </svg>
);

const LinkedinIcon = (props: any) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.5 23.5h4V7.98h-4V23.5zM8.5 7.98h3.8v2.1h.1c.5-1 1.9-2.3 3.9-2.3 4.2 0 5 2.8 5 6.5v9.2h-4v-8.2c0-2-.03-4.6-2.8-4.6-2.8 0-3.2 2.2-3.2 4.4v8.4h-4V7.98z" />
  </svg>
);


/* ---------------- TYPES ---------------- */

type FormState = {
  name: string;
  email: string;
  message: string;
};

export function Contact() {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
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
          <div className="grid gap-14 lg:grid-cols-12 ">
          {/* LEFT SIDE */}
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="Let's build"
              title="Have a project in mind?"
              description="Tell me about the problem, the timeline, and the bar — I'll come back within 24 hours with a clear path forward."
            />

            <div className="mt-10 space-y-3">
              {[
                {
                  icon: EnvelopeIcon,
                  label: "Email",
                  href: "mailto:sannan903@gmail.com",
                },
                // {
                //   icon: GithubIcon,
                //   label: "GitHub",
                //   href: "https://github.com/Husnain-Abid",
                // },
                {
                  icon: LinkedinIcon,
                  label: "LinkedIn",
                  href: "https://www.linkedin.com/in/muhammad-sannan-47450820a/",
                },
              ].map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 rounded-2xl glass px-4 py-3 hover:bg-white/5 transition"
                >
                  <span className="text-primary">
                    <Icon className="h-5 w-5" />
                  </span>
                  <span className="text-sm">{label}</span>
                  <ArrowRightIcon className="ml-auto h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* RIGHT SIDE FORM */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl glass p-8 md:p-10">

              {sent ? (
                <div className="text-center py-16">
                  <CheckIcon className="h-10 w-10 mx-auto text-primary" />
                  <h3 className="mt-4 text-2xl font-bold">Message Sent</h3>
                  <h3 className="mt-6 font-display text-2xl font-bold">Message received.</h3>
                  <p className="mt-3  text-sm text-muted-foreground leading-relaxed">
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
                      className={`mt-2 w-full rounded-2xl bg-white/[0.03] border px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary/20 transition resize-none ${errors.message
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
        className={`mt-2 w-full rounded-2xl bg-white/[0.03] border px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary/20 transition ${error ? "border-destructive/60 focus:border-destructive" : "border-white/10 focus:border-primary/50"
          }`}
        data-testid={`input-${id}`}
      />
      {error ? <p className="mt-1.5 text-xs text-destructive">{error}</p> : null}
    </div>
  );
}

