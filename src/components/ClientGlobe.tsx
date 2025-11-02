// components/ShippingLog.tsx
"use client";
import { useEffect, useRef } from "react";

const items = [
  {
    tag: "Processing",
    text: "HopnCrew – Driver payout module refactor",
    tone: "cyan",
  },
  {
    tag: "Accomplished",
    text: "Rento – Subscription invoices v2 shipped",
    tone: "magenta",
  },
  { tag: "Processing", text: "ConsoleAI – Prompt packs v1.3", tone: "cyan" },
  {
    tag: "Accomplished",
    text: "Wedwise – Pricing page A/B complete",
    tone: "magenta",
  },
];

export default function ShippingLog() {
  const track = useRef<HTMLDivElement>(null);

  // duplicate for seamless loop
  useEffect(() => {
    if (!track.current) return;
    track.current.innerHTML += track.current.innerHTML;
  }, []);

  return (
    <section
      className="relative w-screen max-w-[100vw] left-1/2 -ml-[50vw] overflow-hidden"
      style={{
        background:
          "radial-gradient(800px 420px at 20% 0%, hsl(var(--neon-cyan)/0.10), transparent 60%), radial-gradient(800px 420px at 80% 100%, hsl(var(--neon-magenta)/0.10), transparent 60%)",
      }}
    >
      <div className="mx-auto max-w-7xl px-4 py-10">
        <p className="text-center uppercase tracking-[.22em] text-[12px] font-semibold text-foreground/70 mb-4">
          Live Shipping Log
        </p>

        <div className="relative overflow-hidden rounded-2xl border border-border/60 bg-card/40 backdrop-blur-sm">
          <div
            ref={track}
            className="flex whitespace-nowrap will-change-transform"
            style={{
              animation: "marq 28s linear infinite",
            }}
          >
            {items.map((it, i) => (
              <div
                key={i}
                className="flex items-center gap-3 px-5 py-4 mx-2 rounded-xl border border-border/50 bg-background/40"
                style={{ boxShadow: "0 8px 30px hsl(var(--background)/.6)" }}
              >
                <span
                  className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold"
                  style={{
                    background:
                      it.tone === "cyan"
                        ? "linear-gradient(90deg, hsl(var(--neon-cyan)/.35), hsl(var(--neon-cyan)/.08))"
                        : "linear-gradient(90deg, hsl(var(--neon-magenta)/.35), hsl(var(--neon-magenta)/.08))",
                    border: "1px solid hsl(var(--border)/.9)",
                    color: "hsl(var(--foreground)/.9)",
                  }}
                >
                  {it.tag}
                </span>
                <span className="text-sm text-muted-foreground">{it.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes marq {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
}
