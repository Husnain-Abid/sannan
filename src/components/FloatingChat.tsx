"use client";
import { useState } from "react";
import { MessageCircle, X, Send } from "lucide-react";
import Image from "next/image";

export function FloatingChat() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setOpen((v) => !v)}
        className="fixed bottom-6 right-6 z-[75] grid h-14 w-14 place-items-center rounded-full bg-primary text-primary-foreground glow-blue hover:scale-105 transition-transform"
        aria-label={open ? "Close chat" : "Open chat"}
        data-cursor="hover"
        data-testid="floating-chat-button"
      >
        {open ? <X className="h-5 w-5" /> : <MessageCircle className="h-5 w-5" />}

        {!open ? (
          <span className="absolute inset-0 rounded-full bg-primary opacity-40 animate-ping" />
        ) : null}
      </button>

      {/* Chat Panel */}
      {open ? (
        <div
          className="fixed bottom-24 right-6 z-[75] w-[min(92vw,360px)] glass rounded-3xl p-5 shadow-2xl"
          data-testid="floating-chat-panel"
        >
          {/* Header */}
          <div className="flex items-center gap-3">
            <div className="grid h-10 w-10 place-items-center rounded-full bg-primary/15 overflow-hidden">
              <Image
                src="/icon.png"
                alt="Logo"
                width={28}
                height={28}
                className="object-contain"
              />
            </div>


            <div>
              <div className="text-sm font-medium">Husnain Abid</div>
              <div className="text-xs text-muted-foreground flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Usually replies within a few hours
              </div>
            </div>
          </div>

          {/* Message */}
          <div className="mt-4 rounded-2xl bg-white/[0.03] p-4 text-sm text-foreground/85 leading-relaxed">
            Hey 👋
            Drop your project details here — I’ll get back to you within 24 hours.
            If it’s urgent, mention your timeline for faster response.
          </div>

          {/* WhatsApp Button */}
          <a
            href="https://wa.me/923368538500?text=Hi%20Husnain%2C%20I%20want%20to%20discuss%20a%20project"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground hover:opacity-90"
            data-testid="floating-chat-whatsapp"
          >
            <Send className="h-4 w-4" />
            Chat on WhatsApp
          </a>
        </div>
      ) : null}
    </>
  );
}