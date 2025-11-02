import React, { useState } from "react";

type Slide = {
  id: number;
  title: string;
  description: string;
  img: string;
};

const SLIDES: Slide[] = [
  {
    id: 1,
    title: "EXPLORING PLANETS",
    description:
      "Let me introduce you the marble planets with unique characteristics and features. The first planet has a red marble color, the second planet has a blue marble color, and the third planet has a yellow marble color.",
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=2400&auto=format&fit=crop&q=80",
  },
  {
    id: 2,
    title: "ENTERPRISE SOLUTIONS",
    description:
      "Building futuristic platforms that merge efficiency, real-time data and elegant design systems.",
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=2400&auto=format&fit=crop&q=80",
  },
  {
    id: 3,
    title: "AI & INNOVATION",
    description:
      "Harnessing generative AI to streamline workflows, surface insights, and elevate experiences.",
    img: "https://images.unsplash.com/photo-1611746872915-64382b5c76da?w=2400&auto=format&fit=crop&q=80",
  },
];

function cn(...c: (string | false | null | undefined)[]) {
  return c.filter(Boolean).join(" ");
}

const ProjectsComponent: React.FC = () => {
  const [i, setI] = useState(0);
  const next = () => setI((p) => (p + 1) % SLIDES.length);
  const prev = () => setI((p) => (p - 1 + SLIDES.length) % SLIDES.length);
  const s = SLIDES[i];

  return (
    <section id="projects" className="relative w-full h-screen overflow-hidden">
      {/* FULL IMAGE */}
      <div
        key={`bg-${s.id}-${i}`}
        className="absolute inset-0 will-change-transform animate-imageIn"
      >
        <img
          src={s.img}
          alt={s.title}
          className="w-full h-full object-cover"
          /* subtle slow pan on each mount */
          style={{
            transform: "translateX(0)",
            animation:
              "kenLeft 3800ms cubic-bezier(.22,1,.36,1) both, fadeIn 900ms ease both",
          }}
        />
        {/* bottom vignette for readability */}
        <div className="absolute inset-0 bg-[radial-gradient(120%_80%_at_50%_100%,rgba(0,0,0,.55),transparent_55%)] pointer-events-none" />
      </div>

      {/* BLURRED TEXT PANEL (full height + some width) */}
      <div
        className="absolute left-16 top-0 h-full w-[min(680px,46vw)] z-10"
        /* glass + gradient aura like your reference */
      >
        <div
          className="absolute inset-0 rounded-none backdrop-blur-[5px]"
          style={{
            background:
              "linear-gradient(180deg, rgba(15,18,28,.72), rgba(14,16,24,.65))",
            borderRight: "1px solid hsl(var(--border) / .55)",
            boxShadow:
              "inset -60px 0 120px -60px rgba(0,0,0,.35), 0 0 0 1px rgba(255,255,255,.02)",
          }}
        />
        {/* soft neon aura brush on the seam */}
        <div
          className="absolute top-0 right-[-1px] h-full w-24 pointer-events-none"
          style={{
            background:
              "linear-gradient(90deg, rgba(255,255,255,.12), rgba(255,255,255,0))",
            boxShadow:
              "0 0 24px hsl(var(--neon-cyan) / .25), 0 0 30px hsl(var(--neon-magenta) / .18)",
            opacity: 0.35,
          }}
        />
      </div>

      {/* TEXT CONTENT */}
      <div className="absolute inset-y-0 left-0 z-20 flex items-center">
        <div className="px-6 sm:px-10 md:px-12 lg:pl-16 xl:pl-20 pr-8 max-w-[680px]">
          {/* pagination */}
          <div className="mb-8 flex items-center gap-3 text-[12px] tracking-[0.25em] text-white/70">
            <span>{String(i + 1).padStart(2, "0")}</span>
            <span className="h-px w-24 bg-white/35" />
            <span>{String(SLIDES.length).padStart(2, "0")}</span>
          </div>

          <h1
            key={`t-${s.id}-${i}`}
            className="uppercase font-bold leading-[0.92]
                       text-5xl sm:text-3xl md:text-7xl xl:text-8xl
                       will-change-transform animate-textIn bg-gradient-to-r from-[hsl(var(--neon-cyan))] via-[hsl(var(--pastel-pink))] to-[hsl(var(--neon-magenta))] bg-clip-text text-transparent"
            // style={{ fontFamily: "var(--font-head)" }}
          >
            {s.title}
          </h1>

          <p
            key={`d-${s.id}-${i}`}
            className="mt-6 text-white/85 max-w-[48ch]
                       text-sm sm:text-base md:text-lg leading-relaxed
                       will-change-transform animate-descIn"
            // style={{ fontFamily: "var(--font-body)" }}
          >
            {s.description}
          </p>
        </div>
      </div>

      {/* MINIMAL ARROWS — like your screenshot */}
      <div className="absolute bottom-8 left-10 right-10 sm:left-20 sm:right-20 z-30 flex items-center justify-start gap-4">
        <ArrowLine onClick={prev} dir="left" />
        <ArrowLine onClick={next} dir="right" />
      </div>

      {/* KEYFRAMES + ARROW CSS */}
      <style>{`
        /* slow, smooth enter from left */
        @keyframes imageIn {
          0% { opacity: 0; transform: translateX(40px) }
          100% { opacity: 1; transform: translateX(0) }
        }
        @keyframes kenLeft {
          0%   { transform: scale(1.06) translateX(2%); }
          100% { transform: scale(1.00) translateX(0%); }
        }
        @keyframes fadeIn { from{opacity:0} to{opacity:1} }

        .animate-imageIn { animation: imageIn 900ms cubic-bezier(.22,1,.36,1) both; }

        @keyframes textIn {
          0% { opacity: 0; transform: translateY(28px) }
          100% { opacity: 1; transform: translateY(0) }
        }
        @keyframes descIn {
          0% { opacity: 0; transform: translateY(18px) }
          100% { opacity: 1; transform: translateY(0) }
        }
        .animate-textIn { animation: textIn 700ms 120ms cubic-bezier(.22,1,.36,1) both; }
        .animate-descIn { animation: descIn 700ms 220ms cubic-bezier(.22,1,.36,1) both; }

        /* ArrowLine base */
        .arrow-btn {
          --line: #ffffffcc;
          --lineHover: #ffffff;
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 8px 10px;
          cursor: pointer;
          user-select: none;
          -webkit-tap-highlight-color: transparent;
        }
        .arrow-btn .shaft {
          height: 2px;
          width: 110px;
          background: var(--line);
          transition: background .25s ease, transform .35s cubic-bezier(.22,1,.36,1);
        }
        .arrow-btn .head {
          width: 0; height: 0; 
          border-top: 6px solid transparent;
          border-bottom: 6px solid transparent;
          transition: border-color .25s ease, transform .35s cubic-bezier(.22,1,.36,1);
        }
        .arrow-btn.right .head {
          border-left: 10px solid var(--line);
        }
        .arrow-btn.left .head {
          border-right: 10px solid var(--line);
        }
        .arrow-btn:hover .shaft { background: var(--lineHover); transform: scaleX(1.06); }
        .arrow-btn:hover.right .head { border-left-color: var(--lineHover); transform: translateX(2px); }
        .arrow-btn:hover.left .head { border-right-color: var(--lineHover); transform: translateX(-2px); }

        @media (max-width: 640px) {
          .arrow-btn .shaft { width: 84px; }
          .arrow-btn .head  { border-top-width: 5px; border-bottom-width: 5px; }
        }
      `}</style>
    </section>
  );
};

/** Minimal arrow control (line + arrow head), matches screenshot */
function ArrowLine({
  dir,
  onClick,
}: {
  dir: "left" | "right";
  onClick?: () => void;
}) {
  return (
    <button
      aria-label={dir === "left" ? "Previous" : "Next"}
      onClick={onClick}
      className={cn("arrow-btn", dir)}
    >
      {dir === "left" ? (
        <>
          <span className="head" />
          <span className="shaft" />
        </>
      ) : (
        <>
          <span className="shaft" />
          <span className="head" />
        </>
      )}
    </button>
  );
}

export const Projects = ProjectsComponent;
export default ProjectsComponent;
