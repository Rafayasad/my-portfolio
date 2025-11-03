import React, { useState } from "react";

type Slide = {
  id: number;
  title: string;
  description: string;
  img: string;
  prev: string;
};

const SLIDES: Slide[] = [
  {
    id: 1,
    title: "DATA ABU-DHABI",
    description:
      "Data.Abudhabi is the official open data platform of the Government of Abu Dhabi, designed to provide transparent access to public datasets, analytics, and insights for citizens, businesses, and policymakers. The platform enables users to explore, visualize, and download data across sectors such as economy, health, education, and environment.",
    img: "./p-one.jpg",
    prev: "https://data.abudhabi/",
  },
  {
    id: 2,
    title: "FIT & FIGHT",
    description:
      "Fit & Fight is a fitness web-app portal built using Vite, React.js, TypeScript, and Node.js. Designed to deliver a dynamic and responsive user experience, the platform offers a comprehensive suite of features for fitness enthusiasts. Users can access personalized workout plans, track their progress, and connect with trainers through an intuitive interface.",
    img: "./p-two.jpg",
    prev: "https://fitandfight.urapptech.com/",
  },
  {
    id: 3,
    title: "GODIGGO",
    description:
      "GoDiggo is a versatile online platform designed to revolutionize the way people in the UAE connect with local services and businesses. It allows users to easily discover, book, and manage a wide range of services, from home maintenance and cleaning to beauty and wellness.",
    img: "p-three.jpg",
    prev: "https://godiggo.com/ae-en",
  },
  {
    id: 3,
    title: "TIPSTERS PRIME",
    description:
      "Tipsters Prime is an advanced betting app designed for enthusiasts looking to enhance their betting strategy with expert insights and predictions. The app offers a user-friendly interface for accessing betting tips, odds comparisons, and real-time updates on various sporting events. ",
    img: "p-four.jpg",
    prev: "https://mmcgbl.com/project/tipster-prime-app/",
  },
  {
    id: 4,
    title: "RENTO",
    description:
      "Tipsters Prime is an advanced betting app designed for enthusiasts looking to enhance their betting strategy with expert insights and predictions. The app offers a user-friendly interface for accessing betting tips, odds comparisons, and real-time updates on various sporting events. ",
    img: "p-five.PNG",
    prev: "https://rento.online/",
  },
];

function cn(...c: (string | false | null | undefined)[]) {
  return c.filter(Boolean).join(" ");
}

const onPrev = (href?: string) => {
  if (!href) return;
  // ensure absolute URL
  const url = /^https?:\/\//i.test(href) ? href : `https://${href}`;
  window.open(url, "_blank", "noopener,noreferrer");
};

const ProjectsComponent: React.FC = () => {
  const [i, setI] = useState(0);
  const next = () => setI((p) => (p + 1) % SLIDES.length);
  const prev = () => setI((p) => (p - 1 + SLIDES.length) % SLIDES.length);
  const s = SLIDES[i];

  return (
    <div className="mt-10">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background"></div>
      <div className="absolute top-20 left-5 sm:left-10 w-64 sm:w-96 h-64 sm:h-96 bg-neon-cyan/5 rounded-full blur-[100px] sm:blur-[120px] animate-pulse-glow"></div>
      <div
        className="absolute bottom-20 right-5 sm:right-10 w-64 sm:w-96 h-64 sm:h-96 bg-neon-magenta/5 rounded-full blur-[100px] sm:blur-[120px] animate-pulse-glow"
        style={{ animationDelay: "1s" }}
      ></div>
      <div className="text-center mb-12 sm:mb-16 animate-slide-up px-2">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
          Featured Projects
        </h2>
        <div className="w-20 h-1 mx-auto rounded-full bg-gradient-to-r from-neon-cyan via-neon-magenta to-neon-cyan bg-[length:200%_100%] animate-gradient-shift"></div>
        <p className="text-muted-foreground mt-4 max-w-2xl mx-auto text-sm sm:text-base">
          Showcasing some of my recent work and contributions
        </p>
      </div>
      <section
        id="projects"
        className="relative w-full h-screen overflow-hidden"
      >
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
            <div className="flex my-4">
              <div className="bg-card/80 backdrop-blur-sm px-3 py-2 sm:px-6 sm:py-3 rounded-full shadow-lg border border-primary/20">
                <div
                  className="flex items-center gap-2 cursor-pointer"
                  // onClick={() => scrollToSection("contact")}
                >
                  <span className="relative flex h-2.5 w-2.5 sm:h-3 sm:w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 sm:h-3 sm:w-3 bg-primary"></span>
                  </span>
                  <span
                    onClick={() => onPrev(s.prev)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) =>
                      (e.key === "Enter" || e.key === " ") && onPrev(s.prev)
                    }
                    className="text-xs sm:text-sm font-semibold bg-gradient-to-r from-neon-cyan to-primary bg-clip-text text-transparent whitespace-nowrap"
                  >
                    Preview
                  </span>
                </div>
              </div>
            </div>
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
    </div>
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
