import React, { useMemo, useRef, useEffect } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import {
  GraduationCap,
  Award,
  BookOpen,
  Calendar,
  MapPin,
  Trophy,
  ArrowLeft,
  Sparkles,
  Star,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";

/* =========================================
   Types & Data
========================================= */
interface EducationMilestone {
  year: string;
  title: string;
  institution: string;
  location: string;
  degree: string;
  gpa?: string;
  description: string;
  achievements: string[];
  skills: string[];
  image: string;
  color: "cyan" | "blue" | "magenta" | "pink";
  removeBlackBg?: boolean;
}

const educationJourney: EducationMilestone[] = [
  {
    year: "2020 - 2024",
    title: "Bachelor's Degree",
    institution: "NED University of Engineering & Technology",
    location: "Karachi, Pakistan",
    degree: "BS Computer Science",
    gpa: "3.8/4.0",
    description:
      "Embarked on my professional journey in Computer Science, specializing in AI/ML, Full-Stack Development, and Cloud Architecture. Built a strong foundation in algorithms, data structures, and modern software engineering practices.",
    achievements: [
      "Dean's List for 4 consecutive semesters",
      "President of Tech Society (2023-24)",
      "Led team to win National Hackathon 2023",
      "Published research paper on AI-driven analytics",
    ],
    skills: [
      "React",
      "Node.js",
      "Python",
      "Machine Learning",
      "Cloud Computing",
      "PostgreSQL",
    ],
    image: "./myimgtwo.jpg",
    color: "cyan",
    removeBlackBg: true,
  },
  {
    year: "2023 - 2024",
    title: "Professional Certificate",
    institution: "Meta (Facebook)",
    location: "Online - Coursera",
    degree: "Advanced React & Frontend Architecture",
    description:
      "Mastered advanced React patterns, TypeScript, performance optimization, and modern design systems. Focused on building scalable, maintainable, and accessible web applications.",
    achievements: [
      "Completed with Distinction",
      "Top 5% of cohort globally",
      "Built 8 production-ready projects",
      "Achieved 98% in Capstone Project",
    ],
    skills: [
      "React",
      "TypeScript",
      "Redux",
      "Testing",
      "Performance",
      "Accessibility",
    ],
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&auto=format&fit=crop&q=80",
    color: "blue",
  },
  {
    year: "2022 - 2023",
    title: "Full-Stack Specialization",
    institution: "freeCodeCamp & Udemy",
    location: "Self-Paced Learning",
    degree: "MERN Stack Development",
    description:
      "Intensive self-driven learning journey covering the complete MERN stack, DevOps fundamentals, and agile methodologies. Built 12+ full-stack applications from scratch.",
    achievements: [
      "Earned 5 industry certifications",
      "Contributed to 3 open-source projects",
      "Built personal SaaS product with 200+ users",
      "Mastered Docker & CI/CD pipelines",
    ],
    skills: ["MongoDB", "Express", "Node.js", "Docker", "AWS", "GraphQL"],
    image:
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1200&auto=format&fit=crop&q=80",
    color: "magenta",
  },
  {
    year: "2018 - 2020",
    title: "Foundation Years",
    institution: "Adamjee Govt. Science College",
    location: "Karachi, Pakistan",
    degree: "Intermediate - Pre-Engineering",
    gpa: "85%",
    description:
      "Built a solid foundation in Mathematics, Physics, and Computer Science. Started competitive programming and won district-level science olympiad.",
    achievements: [
      "District Science Olympiad Winner",
      "Started competitive coding journey",
      "Participated in 5+ coding competitions",
      "Built first web application",
    ],
    skills: ["C++", "Mathematics", "Physics", "Problem Solving", "Algorithms"],
    image:
      "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=1200&auto=format&fit=crop&q=80",
    color: "pink",
  },
];

/* =========================================
   Theme / Tokens (sober neon)
========================================= */
const colorStyles = {
  cyan: {
    gradient: "from-[hsl(var(--neon-cyan))] to-[hsl(var(--pastel-blue))]",
    border: "border-[hsl(var(--neon-cyan))]",
    text: "text-[hsl(var(--neon-cyan))]",
    bg: "bg-[hsl(var(--neon-cyan)/0.08)]",
  },
  blue: {
    gradient: "from-[hsl(var(--pastel-blue))] to-[hsl(var(--neon-cyan))]",
    border: "border-[hsl(var(--pastel-blue))]",
    text: "text-[hsl(var(--pastel-blue))]",
    bg: "bg-[hsl(var(--pastel-blue)/0.08)]",
  },
  magenta: {
    gradient: "from-[hsl(var(--neon-magenta))] to-[hsl(var(--pastel-pink))]",
    border: "border-[hsl(var(--neon-magenta))]",
    text: "text-[hsl(var(--neon-magenta))]",
    bg: "bg-[hsl(var(--neon-magenta)/0.08)]",
  },
  pink: {
    gradient: "from-[hsl(var(--pastel-pink))] to-[hsl(var(--neon-magenta))]",
    border: "border-[hsl(var(--pastel-pink))]",
    text: "text-[hsl(var(--pastel-pink))]",
    bg: "bg-[hsl(var(--pastel-pink)/0.08)]",
  },
} as const;

/* =========================================
   Motion Variants
========================================= */
const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
};
const slideCard = (fromLeft: boolean) => ({
  hidden: { opacity: 0, x: fromLeft ? -32 : 32 },
  show: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } },
});
const gridItem = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.35, ease: "easeOut" } },
};

/* =========================================
   Background: Moving Dots (canvas)
========================================= */
const MovingDotsBackground: React.FC = () => {
  const ref = useRef<HTMLCanvasElement | null>(null);
  useEffect(() => {
    const canvas = ref.current!;
    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    let width = (canvas.width = canvas.offsetWidth);
    let height = (canvas.height = canvas.offsetHeight);

    const mediaReduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const DOTS = mediaReduce ? 0 : 40;
    const MAX_SPEED = 0.25;
    const LINK_DIST = 120;

    const dots = Array.from({ length: DOTS }).map((_, i) => {
      const r = (n: number) => {
        const x = Math.sin((i + 1 + n) * 9301 + 49297) * 233280;
        return x - Math.floor(x);
      };
      return {
        x: r(1) * width,
        y: r(2) * height,
        vx: (r(3) - 0.5) * MAX_SPEED,
        vy: (r(4) - 0.5) * MAX_SPEED,
        size: 1 + Math.floor(r(5) * 2),
      };
    });

    let raf = 0;
    let last = 0;

    const draw = (t: number) => {
      const dt = Math.min(33, t - last);
      last = t;

      ctx.clearRect(0, 0, width, height);
      ctx.fillStyle =
        getComputedStyle(document.documentElement).getPropertyValue(
          "--neon-cyan"
        ) || "rgba(0,255,255,0.8)";
      for (const d of dots) {
        d.x += d.vx * dt;
        d.y += d.vy * dt;
        if (d.x < 0 || d.x > width) d.vx *= -1;
        if (d.y < 0 || d.y > height) d.vy *= -1;
        ctx.beginPath();
        ctx.arc(d.x, d.y, d.size, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fill();
      }
      ctx.lineWidth = 0.6;
      for (let i = 0; i < dots.length; i++) {
        for (let j = i + 1; j < dots.length; j++) {
          const a = dots[i],
            b = dots[j];
          const dx = a.x - b.x,
            dy = a.y - b.y;
          const dist = Math.hypot(dx, dy);
          if (dist < LINK_DIST) {
            const alpha = (1 - dist / LINK_DIST) * 0.35;
            ctx.strokeStyle = `rgba(180, 220, 255, ${alpha})`;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }
      raf = requestAnimationFrame(draw);
    };

    const onResize = () => {
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    };

    raf = requestAnimationFrame(draw);
    window.addEventListener("resize", onResize);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <div className="fixed inset-0 -z-10 pointer-events-none">
      <canvas ref={ref} className="w-full h-full" />
    </div>
  );
};

/* =========================================
   Photo Showcase (object-contain + premium)
========================================= */
const PhotoShowcase: React.FC<{
  src: string;
  alt: string;
  chromaBlack?: boolean;
}> = ({ src, alt, chromaBlack }) => {
  return (
    <div className="relative">
      <div
        aria-hidden
        className="absolute inset-0 rounded-2xl opacity-25 blur-2xl"
        // style={{
        //   background:
        //     "radial-gradient(60% 60% at 50% 40%, hsl(var(--neon-cyan)/.35), transparent 60%)",
        // }}
      />
      <div className="relative  backdrop-blur-sm p-4 rounded-2xl border border-border/50">
        <div className="relative rounded-xl overflow-hidden">
          <div className="relative w-full aspect-[4/3] grid place-items-center ">
            <img
              src={src}
              alt={alt}
              loading="lazy"
              decoding="async"
              className={[
                "max-w-[80%] rounded-xl max-h-full object-contain will-change-transform transition-transform duration-500 ease-out",
                "[-webkit-mask-image:radial-gradient(120%_120%_at_50%_50%,#000_65%,transparent_100%)]",
                "[mask-image:radial-gradient(120%_120%_at_50%_50%,#000_65%,transparent_100%)]",
                chromaBlack
                  ? "mix-blend-screen brightness-[1.05] contrast-[1.08]"
                  : "",
              ].join(" ")}
            />
            <img
              src={src}
              alt=""
              aria-hidden
              loading="lazy"
              decoding="async"
              className={[
                "absolute left-1/2 -translate-x-1/2 bottom-[-16%] w-[70%] object-contain opacity-20",
                "rotate-180 scale-x-[-1]",
                "[-webkit-mask-image:linear-gradient(to_bottom,rgba(0,0,0,.35),transparent_70%)]",
                "[mask-image:linear-gradient(to_bottom,rgba(0,0,0,.35),transparent_70%)]",
                chromaBlack ? "mix-blend-screen" : "",
              ].join(" ")}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

/* =========================================
   GraduationHero (first item only)
   - Text LEFT, image RIGHT
========================================= */
const GraduationHero: React.FC<{ item: EducationMilestone }> = ({ item }) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -10% 0px" });
  const styles = colorStyles[item.color];

  return (
    <motion.section
      ref={ref}
      variants={slideCard(true)}
      initial="hidden"
      animate={inView ? "show" : "hidden"}
      className="grid px-8 grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center justify-start mb-16 lg:mb-24"
    >
      {/* IMAGE RIGHT (unchanged premium view) */}
      <div className="relative">
        <Card className="relative border border-border/50 rounded-2xl  backdrop-blur-sm">
          <div className="relative p-3">
            <PhotoShowcase
              src={item.image}
              alt={item.title}
              chromaBlack={item.removeBlackBg}
            />
            {/* Year pill on photo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.35, delay: 0.12 }}
              className={`absolute top-5 right-5 px-4 py-2 rounded-full backdrop-blur-md border ${styles.border}`}
            >
              <div className="flex items-center gap-2 text-sm">
                <Calendar className="w-4 h-4" />
                <span className={`font-semibold ${styles.text}`}>
                  {item.year}
                </span>
              </div>
            </motion.div>
          </div>
        </Card>
      </div>

      {/* TEXT LEFT */}
      <div className="w-full space-y-5">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
        >
          <h3
            className={`text-3xl lg:text-4xl font-bold mb-2 bg-gradient-to-r ${styles.gradient} bg-clip-text text-transparent`}
          >
            {item.title}
          </h3>
          <div className="flex items-center gap-2 text-lg font-semibold text-foreground/90">
            <GraduationCap className="w-5 h-5" />
            <span>{item.institution}</span>
          </div>
          <p className="text-base font-medium text-muted-foreground">
            {item.degree}
          </p>
        </motion.div>

        <motion.p
          className="text-[15px] leading-relaxed text-foreground/80"
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          transition={{ delay: 0.06 }}
        >
          {item.description}
        </motion.p>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          transition={{ delay: 0.1 }}
        >
          <div className="flex items-center gap-2 mb-2">
            <Trophy className={`w-5 h-5 ${styles.text}`} />
            <h4 className="text-base font-semibold">Key Achievements</h4>
          </div>
          <ul className="space-y-1.5">
            {item.achievements.map((a, i) => (
              <li
                key={i}
                className="flex items-start gap-2 text-sm text-foreground/70"
              >
                <Award
                  className={`w-4 h-4 mt-0.5 flex-shrink-0 ${styles.text}`}
                />
                <span>{a}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* location/gpa row under text (compact) */}
        <div className="flex flex-wrap gap-2 pt-1">
          <Badge
            className={`${styles.bg} ${styles.text} ${styles.border} border`}
          >
            <MapPin className="w-3 h-3 mr-1" />
            {item.location}
          </Badge>
          {item.gpa && (
            <Badge
              className={`${styles.bg} ${styles.text} ${styles.border} border`}
            >
              <Star className="w-3 h-3 mr-1" />
              GPA: {item.gpa}
            </Badge>
          )}
        </div>
      </div>
    </motion.section>
  );
};

/* =========================================
   CompactCard (for remaining items, no image)
========================================= */
const CompactCard: React.FC<{ item: EducationMilestone; index: number }> = ({
  item,
  index,
}) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -10% 0px" });
  const styles = colorStyles[item.color];

  return (
    <motion.div
      ref={ref}
      variants={gridItem}
      initial="hidden"
      animate={inView ? "show" : "hidden"}
    >
      <Card className="relative h-full border border-border/50 rounded-2xl backdrop-blur-sm p-5">
        <div className="flex items-center justify-between mb-3">
          <span
            className={`text-xs font-medium px-2 py-1 rounded-full border ${styles.border} ${styles.text} ${styles.bg}`}
          >
            {item.year}
          </span>
          <span className="text-xs text-muted-foreground">{item.location}</span>
        </div>

        <h3
          className={`text-xl font-bold bg-gradient-to-r ${styles.gradient} bg-clip-text text-transparent`}
        >
          {item.title}
        </h3>
        <div className="mt-1 mb-2 flex items-center gap-2 text-sm font-semibold text-foreground/90">
          <GraduationCap className="w-4 h-4" />
          <span>{item.institution}</span>
        </div>
        <p className="text-sm text-muted-foreground mb-3">
          {item.degree}
          {item.gpa ? ` · GPA ${item.gpa}` : ""}
        </p>

        <p className="text-sm text-foreground/80 leading-relaxed mb-4 line-clamp-4">
          {item.description}
        </p>

        {/* Achievements (top 2) */}
        <ul className="space-y-1 mb-4">
          {item.achievements.slice(0, 2).map((a, i) => (
            <li
              key={i}
              className="flex items-start gap-2 text-xs text-foreground/70"
            >
              <Award className={`w-3.5 h-3.5 mt-0.5 ${styles.text}`} />
              <span>{a}</span>
            </li>
          ))}
        </ul>

        {/* Skills */}
        <div className="flex flex-wrap gap-1.5">
          {item.skills.slice(0, 6).map((s, i) => (
            <Badge
              key={i}
              className={`text-[11px] ${styles.bg} ${styles.text} ${styles.border} border`}
            >
              {s}
            </Badge>
          ))}
        </div>
      </Card>
    </motion.div>
  );
};

/* =========================================
   Main (sober premium layout, stable motion)
========================================= */
function Education() {
  const navigate = useNavigate();
  const containerRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const railHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const knobTop = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", "calc(100% - 12px)"]
  );

  const [first, ...rest] = educationJourney;

  return (
    <div
      ref={containerRef}
      className="min-h-screen bg-[#0B0F14] text-foreground relative overflow-hidden"
    >
      {/* Background */}
      {/* <MovingDotsBackground /> */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(25)].map((_, i) => (
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

      {/* Subtle blobs */}
      <div className="fixed inset-0 pointer-events-none -z-10">
        <div
          className="absolute top-20 left-10 w-80 h-80 rounded-full opacity-[0.16]"
          style={{
            background:
              "radial-gradient(circle, hsl(var(--neon-cyan)) 0%, transparent 70%)",
            filter: "blur(60px)",
          }}
        />
        <div
          className="absolute bottom-24 right-10 w-96 h-96 rounded-full opacity-[0.14]"
          style={{
            background:
              "radial-gradient(circle, hsl(var(--neon-magenta)) 0%, transparent 70%)",
            filter: "blur(68px)",
          }}
        />
      </div>

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-40 backdrop-blur-md bg-background/70 border-b border-border/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <Button
            variant="ghost"
            onClick={() => navigate("/")}
            className="gap-2 hover:bg-primary/10"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Button>
          <div className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-primary" />
            <span className="text-lg font-semibold bg-gradient-to-r from-[hsl(var(--neon-cyan))] to-[hsl(var(--neon-magenta))] bg-clip-text text-transparent">
              My Journey
            </span>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="relative z-10 pt-28 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Title */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.6 }}
            variants={fadeUp}
            className="text-center mb-14 lg:mb-20"
          >
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold mb-4 bg-gradient-to-r from-[hsl(var(--neon-cyan))] via-[hsl(var(--pastel-blue))] to-[hsl(var(--neon-magenta))] bg-clip-text text-transparent">
              Academic Journey
            </h1>
            <p className="text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Precision, depth, and evolution—each milestone adds clarity to the
              craft.
            </p>
          </motion.div>

          {/* Slim rail */}
          <div className="relative">
            {/* Graduation Hero (text left, image right) */}
            <GraduationHero item={first} />

            {/* Other milestones as responsive cards (no images) */}
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 xl:ml-10"
            >
              {rest.map((m, i) => (
                <CompactCard key={m.title + i} item={m} index={i} />
              ))}
            </motion.div>
          </div>

          {/* CTA */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-center mt-20"
          >
            <h2 className="text-2xl lg:text-3xl font-bold mb-6">
              Ready to continue this journey together?
            </h2>
            <Button
              size="lg"
              onClick={() => navigate("/")}
              className="bg-gradient-to-r from-[hsl(var(--neon-cyan))] to-[hsl(var(--neon-magenta))] hover:opacity-90 text-primary-foreground px-7 py-6 text-base"
            >
              Explore My Work
              <Sparkles className="ml-2 w-5 h-5" />
            </Button>
          </motion.div>
        </div>
      </main>
    </div>
  );
}

export default Education;
