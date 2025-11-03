import { useState } from "react";
import { Brain, Database, Layers, Sparkles, Terminal, Zap } from "lucide-react";

/** Map friendly color keys to your CSS tokens */
const COLOR_VAR: Record<string, string> = {
  "neon-cyan": "var(--neon-cyan)",
  "neon-magenta": "var(--neon-magenta)",
  "pastel-blue": "var(--pastel-blue)",
  "pastel-pink": "var(--pastel-pink)",
};

const skillCategories = [
  {
    icon: Terminal,
    title: "Frontend Mastery",
    description: "Crafting pixel-perfect, performant interfaces",
    skills: [
      "React.js, Next.js",
      "TypeScript, JavaScript",
      "React-Native, Ionic, Angular",
      "Tailwind CSS , Shad CN, Materail UI",
      "Framer Motion",
    ],
    color: "neon-cyan",
  },
  {
    icon: Database,
    title: "Backend Architecture",
    description: "Building scalable, secure server systems",
    skills: [
      "Node.js, FastAPI, Knex.js",
      "PostgreSQL, MongoDB, MySQL",
      "GraphQL",
      "REST APIs",
      "Microservices",
    ],
    color: "pastel-blue",
  },
  {
    icon: Layers,
    title: "Cloud & DevOps",
    description: "Deploying with confidence and speed",
    skills: ["AWS", "Docker", "Github Actions", "Bitbucket Pipelines", "CI/CD"],
    color: "neon-magenta",
  },
  {
    icon: Brain,
    title: "AI Integration",
    description: "Leveraging generative AI for innovation",
    skills: [
      "Prompt Engineering",
      "RAG Systems",
      "LangChain, Lovable, Bolt",
      "OpenAI API",
      "Vector DBs",
    ],
    color: "pastel-pink",
  },
  {
    icon: Zap,
    title: "Performance",
    description: "Optimizing every millisecond",
    skills: ["Code Splitting", "Lazy Loading", "Caching", "CDN", "Web Vitals"],
    color: "neon-cyan",
  },
  {
    icon: Sparkles,
    title: "Innovation",
    description: "Staying ahead of the curve",
    skills: [
      "WebGL",
      "Three.js",
      "WebAssembly",
      "Web3",
      "Progressive Web Apps",
    ],
    color: "pastel-blue",
  },
];

export const Skills = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section
      className="relative py-16 sm:py-20 lg:py-32 px-4 sm:px-6 overflow-hidden"
      /* soft vertical blend so it “connects” with sections above/below */
      style={{
        background:
          "linear-gradient(to bottom, hsl(var(--background)) 0%, hsl(var(--charcoal)) 100%)",
      }}
    >
      {/* Faded grid background */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, hsl(var(--muted-foreground) / .08) 1px, transparent 1px),
            linear-gradient(to bottom, hsl(var(--muted-foreground) / .08) 1px, transparent 1px)
          `,
          backgroundSize: "42px 42px",
          /* fade top & bottom to connect with neighbors */
          WebkitMaskImage:
            "linear-gradient(to bottom, transparent 0, black 120px, black calc(100% - 120px), transparent 100%)",
          maskImage:
            "linear-gradient(to bottom, transparent 0, black 120px, black calc(100% - 120px), transparent 100%)",
          opacity: 0.8, // slightly more visible than before but still elegant
        }}
      />

      {/* Soft brand glows (very subtle) */}
      <div
        className="pointer-events-none absolute -top-10 left-1/4 w-72 sm:w-[28rem] h-72 sm:h-[28rem] rounded-full blur-[110px]"
        style={{ background: "hsl(var(--neon-cyan) / .10)" }}
      />
      <div
        className="pointer-events-none absolute -bottom-10 right-1/4 w-72 sm:w-[28rem] h-72 sm:h-[28rem] rounded-full blur-[110px]"
        style={{ background: "hsl(var(--neon-magenta) / .10)" }}
      />

      <div className="max-w-7xl mx-auto relative">
        {/* Heading */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20 px-2">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
            <span className="bg-gradient-to-r from-[hsl(var(--neon-cyan))] via-[hsl(var(--pastel-pink))] to-[hsl(var(--neon-magenta))] bg-clip-text text-transparent">
              Technical Arsenal
            </span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            A comprehensive toolkit for building next-generation digital
            experiences
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            const isHovered = hoveredIndex === index;
            const hueVar = COLOR_VAR[category.color];

            return (
              <div
                key={index}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="group relative"
                style={{ animationDelay: `${index * 0.06}s` }}
              >
                {/* Subtle outer glow on hover (very elegant) */}
                <div
                  className="absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: `radial-gradient(60% 60% at 50% 0%, hsl(${hueVar} / .18), transparent 70%)`,
                    filter: "blur(8px)",
                  }}
                  aria-hidden
                />

                <div
                  className="relative rounded-2xl border bg-card/40 backdrop-blur-sm p-5 sm:p-6 lg:p-7 h-full transition-all duration-400"
                  style={{
                    borderColor: isHovered
                      ? `hsl(${hueVar} / .40)`
                      : "hsl(var(--border) / .65)",
                    boxShadow: isHovered
                      ? "0 18px 48px hsl(var(--background) / .65)"
                      : "0 12px 32px hsl(var(--background) / .55)",
                    transform: isHovered ? "translateY(-6px)" : "translateY(0)",
                  }}
                >
                  {/* Shimmer hairline (top edge) */}
                  <div
                    className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      background:
                        "linear-gradient(180deg, rgba(255,255,255,0.12), rgba(255,255,255,0))",
                      WebkitMaskImage:
                        "linear-gradient(to bottom, black, transparent 50%)",
                      maskImage:
                        "linear-gradient(to bottom, black, transparent 50%)",
                    }}
                    aria-hidden
                  />

                  {/* Icon chip */}
                  <div
                    className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl flex items-center justify-center mb-4 sm:mb-6 transition-transform duration-400"
                    style={{
                      background: `linear-gradient(135deg, hsl(${hueVar} / .16), hsl(${hueVar} / .05))`,
                      border: "1px solid hsl(var(--border) / .8)",
                      boxShadow: "0 10px 28px hsl(var(--background) / .6)",
                      transform: isHovered ? "scale(1.05)" : "scale(1)",
                    }}
                  >
                    <Icon
                      className="w-6 h-6 sm:w-7 sm:h-7"
                      style={{ color: `hsl(${hueVar})` }}
                    />
                  </div>

                  {/* Content */}
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-2 sm:mb-3 text-foreground">
                    {category.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 sm:mb-6 text-xs sm:text-sm leading-relaxed">
                    {category.description}
                  </p>

                  {/* Skills */}
                  <div className="space-y-2">
                    {category.skills.map((skill, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-2 text-xs sm:text-sm"
                      >
                        <span
                          className="inline-block rounded-full"
                          style={{
                            width: 6,
                            height: 6,
                            background: `hsl(${hueVar})`,
                            boxShadow: `0 0 10px hsl(${hueVar} / .45)`,
                          }}
                        />
                        <span className="text-foreground/90">{skill}</span>
                      </div>
                    ))}
                  </div>

                  {/* Minimal status dot */}
                  <div
                    className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 rounded-full transition-transform duration-300"
                    style={{
                      width: isHovered ? 9 : 7,
                      height: isHovered ? 9 : 7,
                      background: `hsl(${hueVar})`,
                      boxShadow: `0 0 12px hsl(${hueVar} / .55)`,
                      transform: isHovered ? "scale(1.15)" : "scale(1)",
                    }}
                    aria-hidden
                  />
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-12 sm:mt-16 lg:mt-20 text-center px-4">
          <p className="text-sm sm:text-base lg:text-lg text-muted-foreground mb-4 sm:mb-6">
            Ready to bring your vision to life?
          </p>
          <button
            className="inline-flex items-center gap-2 sm:gap-3 px-5 py-2.5 sm:px-6 sm:py-3 rounded-full transition-transform duration-300 hover:scale-[1.03] active:scale-100"
            style={{
              background:
                "linear-gradient(90deg, hsl(var(--neon-cyan) / .10), hsl(var(--neon-magenta) / .10))",
              border: "1px solid hsl(var(--border) / .9)",
              boxShadow: "0 12px 30px hsl(var(--background) / .6)",
            }}
            onClick={() => {
              const el = document.getElementById("contact");
              el?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            <Sparkles
              className="w-4 h-4 sm:w-5 sm:h-5"
              style={{ color: "hsl(var(--neon-cyan))" }}
            />
            <span className="text-foreground font-medium text-sm sm:text-base">
              Let’s collaborate
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};
