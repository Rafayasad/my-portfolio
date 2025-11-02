import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Github,
  Linkedin,
  Mail,
  Sparkles,
  FileBadge,
  GraduationCap,
} from "lucide-react";
import { RotatingTitles } from "./RotatingTitles";
import heroBg from "@/assets/hero-bg.jpg";
import { useNavigate } from "react-router-dom";

export const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };
  const navigate = useNavigate();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-8 py-20">
      {/* Animated Background with Parallax */}
      <div
        className="absolute inset-0 opacity-30 hero-parallax"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />

      {/* Particle System - Mobile Optimized */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-neon-cyan rounded-full animate-float opacity-40"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: `${6 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      {/* Holographic Glow Elements - Mobile Optimized */}
      <div className="absolute top-1/4 left-10 sm:left-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-neon-cyan/10 rounded-full blur-[80px] sm:blur-[100px] animate-glow-pulse" />
      <div
        className="absolute bottom-1/4 right-10 sm:right-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-neon-magenta/10 rounded-full blur-[80px] sm:blur-[100px] animate-glow-pulse"
        style={{ animationDelay: "1.5s" }}
      />

      {/* Grid Pattern Overlay - Subtle on Mobile */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8882_1px,transparent_1px),linear-gradient(to_bottom,#8882_1px,transparent_1px)] bg-[size:3rem_3rem] sm:bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_110%)] pointer-events-none"></div>

      {/* Content */}
      <div className="max-w-7xl mx-auto relative z-10 w-full">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 sm:gap-12 lg:gap-20">
          {/* Profile Image Section - Mobile Optimized */}
          <div className="flex-shrink-0 animate-scale-in">
            <div className="relative group">
              {/* Subtle gradient ring (elegant outline) */}
              <div
                className="absolute -inset-0.5 rounded-full opacity-50 transition duration-700
                 bg-[conic-gradient(from_0deg,transparent_0deg,hsl(var(--primary))_120deg,transparent_360deg)]
                 [mask:radial-gradient(closest-side,transparent_calc(100%-1.5px),#000_calc(100%-1.5px))]
                 group-hover:opacity-70"
                aria-hidden
              />

              {/* Blur the moving dots behind the avatar so it stands out */}
              <div
                className="absolute -inset-3 rounded-full backdrop-blur-md"
                aria-hidden
              />

              {/* Image Container */}
              <div className="relative">
                <div
                  className="relative rounded-full overflow-hidden border-4 border-background shadow-2xl
                   w-48 h-48 sm:w-64 sm:h-64 lg:w-80 lg:h-80 xl:w-96 xl:h-96"
                >
                  {/* Photo (slight desat/contrast for sober, cinematic feel) */}
                  <img
                    src="./myimg.png"
                    alt="Rafay Asad - Full Stack Developer"
                    className="w-full h-full object-cover
                     saturate-[.92] contrast-[1.05] brightness-[.98] transition duration-700
                     group-hover:saturate-100 group-hover:contrast-[1.08]"
                  />

                  {/* Radial vignette to darken the PHOTO BACKGROUND but keep center bright */}
                  <div
                    className="pointer-events-none absolute inset-0
                     bg-[radial-gradient(60%_60%_at_50%_40%,transparent_0%,rgba(0,0,0,0.14)_55%,rgba(0,0,0,0.32)_100%)]"
                    aria-hidden
                  />

                  {/* Optional inner hairline for premium finish */}
                  <div
                    className="pointer-events-none absolute inset-0 rounded-full
                     ring-1 ring-white/5"
                    aria-hidden
                  />
                </div>

                {/* Floating Badge (clickable) */}
                <div className="absolute -bottom-3 -right-3 sm:-bottom-4 sm:-right-4 bg-card/80 backdrop-blur-sm px-3 py-2 sm:px-6 sm:py-3 rounded-full shadow-lg border border-primary/20">
                  <div
                    className="flex items-center gap-2 cursor-pointer"
                    onClick={() => scrollToSection("contact")}
                  >
                    <span className="relative flex h-2.5 w-2.5 sm:h-3 sm:w-3">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2.5 w-2.5 sm:h-3 sm:w-3 bg-primary"></span>
                    </span>
                    <span className="text-xs sm:text-sm font-semibold bg-gradient-to-r from-neon-cyan to-primary bg-clip-text text-transparent whitespace-nowrap">
                      Available on Request
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content Section - Mobile Optimized */}
          <div className="flex-1 text-center lg:text-left space-y-4 sm:space-y-6 max-w-2xl lg:max-w-none">
            {/* <div className="animate-slide-up">
              <div className="inline-flex items-center gap-2 px-4 py-2 sm:px-5 bg-card/50 backdrop-blur-sm rounded-full border border-primary/20 shadow-lg mb-3 sm:mb-4">
                <span className="relative flex h-2.5 w-2.5 sm:h-3 sm:w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 sm:h-3 sm:w-3 bg-primary"></span>
                </span>
                <span className="text-xs sm:text-sm font-medium text-foreground">
                  Open to opportunities
                </span>
              </div>
            </div> */}

            <div className="space-y-3 sm:space-y-4">
              <h1
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold animate-slide-up leading-tight px-2"
                style={{ animationDelay: "0.1s" }}
              >
                <span className="bg-gradient-to-r from-neon-cyan via-pastel-blue to-neon-magenta bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient-shift">
                  Rafay Asad
                </span>
              </h1>

              <div
                className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground/90 animate-slide-up px-2"
                style={{ animationDelay: "0.2s" }}
              >
                <RotatingTitles />
              </div>
            </div>

            <p
              className="text-sm sm:text-base lg:text-lg xl:text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0 leading-relaxed animate-slide-up px-2"
              style={{ animationDelay: "0.3s" }}
            >
              Crafting exceptional digital experiences with modern technologies.
              Specialized in{" "}
              <span className="text-primary font-semibold">JavaScript</span>,{" "}
              <span className="text-primary font-semibold">TypeScript</span>,{" "}
              <span className="text-primary font-semibold">Python</span>,{" "}
              <span className="text-accent font-semibold">
                and their Frameworks
              </span>
            </p>

            <div
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start pt-2 sm:pt-4 animate-slide-up"
              style={{ animationDelay: "0.4s" }}
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-neon-cyan to-primary hover:opacity-90 active:opacity-80 text-primary-foreground shadow-glow-cyan hover:scale-105 active:scale-100 transition-all group touch-manipulation w-full sm:w-auto"
                onClick={() => scrollToSection("projects")}
              >
                View My Work
                <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-primary/50 hover:border-primary active:border-primary hover:bg-primary/10 active:bg-primary/20 transition-all hover:scale-105 active:scale-100 touch-manipulation w-full sm:w-auto hover:text-primary active:text-primary"
                onClick={() => scrollToSection("contact")}
              >
                Get In Touch
              </Button>
            </div>

            <div
              className="flex gap-3 sm:gap-5 justify-center lg:justify-start pt-2 sm:pt-4 animate-slide-up flex-wrap"
              style={{ animationDelay: "0.5s" }}
            >
              <a
                href="https://github.com/Rafayasad"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="relative inline-flex items-center justify-center rounded-full bg-card/50 backdrop-blur-sm border border-primary/20 hover:border-primary/50 active:border-primary/70 text-muted-foreground hover:text-primary active:text-primary transition-all duration-300 hover:shadow-md active:shadow-lg hover:scale-110 active:scale-105 p-3 overflow-hidden touch-manipulation before:absolute before:inset-0 before:rounded-full before:pointer-events-none before:bg-[linear-gradient(120deg,transparent,rgba(255,255,255,0.25),transparent)] before:-left-full hover:before:animate-shine"
              >
                <Github className="h-5 w-5 sm:h-6 sm:w-6 shrink-0 transition-transform duration-300" />
              </a>

              <a
                href="https://linkedin.com/in/rafay-asad-87b39a213"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="relative inline-flex items-center justify-center rounded-full bg-card/50 backdrop-blur-sm border border-secondary/20 hover:border-secondary/50 active:border-secondary/70 text-muted-foreground hover:text-secondary active:text-secondary transition-all duration-300 hover:shadow-md active:shadow-lg hover:scale-110 active:scale-105 p-3 overflow-hidden touch-manipulation before:absolute before:inset-0 before:rounded-full before:pointer-events-none before:bg-[linear-gradient(120deg,transparent,rgba(255,255,255,0.25),transparent)] before:-left-full hover:before:animate-shine"
              >
                <Linkedin className="h-5 w-5 sm:h-6 sm:w-6 shrink-0 transition-transform duration-300" />
              </a>

              <a
                href="mailto:rafayasad555@gmail.com"
                aria-label="Email"
                className="relative inline-flex items-center justify-center rounded-full bg-card/50 backdrop-blur-sm border border-accent/20 hover:border-accent/50 active:border-accent/70 text-muted-foreground hover:text-accent active:text-accent transition-all duration-300 hover:shadow-md active:shadow-lg hover:scale-110 active:scale-105 p-3 overflow-hidden touch-manipulation before:absolute before:inset-0 before:rounded-full before:pointer-events-none before:bg-[linear-gradient(120deg,transparent,rgba(255,255,255,0.25),transparent)] before:-left-full hover:before:animate-shine"
              >
                <Mail className="h-5 w-5 sm:h-6 sm:w-6 shrink-0 transition-transform duration-300" />
              </a>

              {/* Resume Button */}
              <a
                href="mailto:asadrafay998@gmail.com"
                aria-label="My Resume"
                className="group/resume relative inline-flex items-center rounded-full bg-card/50 backdrop-blur-sm border border-accent/20 text-muted-foreground hover:text-accent active:text-accent hover:border-accent/50 active:border-accent/70 transition-all duration-300 hover:shadow-md active:shadow-lg p-3 sm:pr-3 sm:hover:pr-5 overflow-hidden touch-manipulation before:absolute before:inset-0 before:rounded-full before:pointer-events-none before:bg-[linear-gradient(120deg,transparent,rgba(255,255,255,0.25),transparent)] before:-left-full hover:before:animate-shine"
              >
                <FileBadge className="h-5 w-5 sm:h-6 sm:w-6 shrink-0 transition-transform duration-300" />
                <span className="ml-2 whitespace-nowrap overflow-hidden max-w-0 opacity-0 translate-x-1 transition-[max-width,opacity,transform] duration-300 hidden sm:inline-block sm:group-hover/resume:max-w-[130px] sm:group-hover/resume:opacity-100 sm:group-hover/resume:translate-x-0">
                  My Resume
                </span>
              </a>
              <a
                onClick={() => navigate("/education")}
                aria-label="Education"
                className="cursor-pointer group/education relative inline-flex items-center rounded-full bg-card/50 backdrop-blur-sm border border-primary/20 text-muted-foreground hover:text-primary active:text-primary hover:border-primary/50 active:border-primary/70 transition-all duration-300 hover:shadow-md active:shadow-lg p-3 sm:pr-3 sm:hover:pr-5 overflow-hidden touch-manipulation before:absolute before:inset-0 before:rounded-full before:pointer-events-none before:bg-[linear-gradient(120deg,transparent,rgba(255,255,255,0.25),transparent)] before:-left-full hover:before:animate-shine"
              >
                <GraduationCap className="h-5 w-5 sm:h-6 sm:w-6 shrink-0 transition-transform duration-300" />
                <span className="ml-2 whitespace-nowrap overflow-hidden max-w-0 opacity-0 translate-x-1 transition-[max-width,opacity,transform] duration-300 hidden sm:inline-block sm:group-hover/education:max-w-[130px] sm:group-hover/education:opacity-100 sm:group-hover/education:translate-x-0">
                  Education
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
