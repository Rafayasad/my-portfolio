import { Briefcase, Code2, Rocket, Zap } from "lucide-react";

const experiences = [
  {
    icon: Rocket,
    year: "Aug 2023 – Present",
    title: "Full Stack Developer",
    company: "UrApp Technologies",
    description:
      "Leading end-to-end web and mobile application development with a strong focus on scalability, integrations, and performance optimization. Built Hopn (ride-hailing), appointment booking, and property management platforms with secure payment gateways and CI/CD automation.",
    skills: [
      "React",
      "Angular",
      "React-Native",
      "Ionic",
      "Knex.js",
      "Node.js",
      "FastAPI",
      "PostgreSQL",
      "Git",
      "Docker",
      "CI/CD",
      "AWS",
    ],
    color: "neon-cyan",
  },
  {
    icon: Code2,
    year: "Jul 2022 – Aug 2023",
    title: "Associate Software Engineer (MERN Stack)",
    company: "MMC",
    description:
      "Developed enterprise web apps using React and Next.js, optimizing performance with SSR/SSG. Delivered Data.Abudhabi and GoDigoo hosting projects, built NFC-based mobile workflows, and implemented REST APIs and MongoDB schemas for client applications.",
    skills: ["React", "Next.js", "MongoDB", "Redux", "Docker"],
    color: "pastel-blue",
  },
  {
    icon: Zap,
    year: "May 2022 – Jul 2022",
    title: "MERN Stack Developer Intern",
    company: "MMC",
    description:
      "Built real-world full-stack projects with React, Node.js, Express, and MongoDB. Collaborated with senior engineers on code reviews and feature delivery while strengthening core development and teamwork skills.",
    skills: ["React", "Node.js", "Express", "MongoDB", "Git"],
    color: "neon-magenta",
  },
];

export const Experience = () => {
  return (
    <section className="py-16 sm:py-20 lg:py-32 px-4 sm:px-6 relative overflow-hidden">
      {/* Background Elements - Mobile Optimized */}
      <div className="absolute top-20 right-5 sm:right-20 w-48 sm:w-72 h-48 sm:h-72 bg-neon-cyan/5 rounded-full blur-[80px] sm:blur-[100px]" />
      <div className="absolute bottom-20 left-5 sm:left-20 w-48 sm:w-72 h-48 sm:h-72 bg-pastel-pink/5 rounded-full blur-[80px] sm:blur-[100px]" />

      <div className="max-w-6xl mx-auto relative">
        <div className="text-center mb-12 sm:mb-16 lg:mb-20 px-2">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
            <span className="bg-gradient-to-r from-pastel-blue to-pastel-pink bg-clip-text text-transparent">
              Journey of Evolution
            </span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            A timeline of growth, innovation, and problem-solving across diverse
            tech landscapes
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Center Line - Hidden on Mobile */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-neon-cyan via-pastel-blue to-neon-magenta hidden md:block" />

          <div className="space-y-8 sm:space-y-12 lg:space-y-16">
            {experiences.map((exp, index) => {
              const Icon = exp.icon;
              const isEven = index % 2 === 0;

              return (
                <div
                  key={index}
                  className={`relative flex items-center ${
                    isEven ? "md:flex-row" : "md:flex-row-reverse"
                  } flex-col gap-6 sm:gap-8 group animate-slide-up touch-manipulation`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Icon in center - Desktop Only */}
                  <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 z-10">
                    <div
                      className={`w-12 h-12 lg:w-16 lg:h-16 rounded-full bg-card border-2 border-${exp.color} flex items-center justify-center shadow-lg hover:shadow-glow-cyan active:shadow-glow-cyan transition-all duration-300 group-hover:scale-110 group-active:scale-105`}
                    >
                      <Icon
                        className={`w-6 h-6 lg:w-7 lg:h-7 text-${exp.color}`}
                      />
                    </div>
                  </div>

                  {/* Content Card - Mobile Optimized */}
                  <div
                    className={`flex-1 ${
                      isEven
                        ? "md:pr-12 md:text-right"
                        : "md:pl-12 md:text-left"
                    } text-left w-full`}
                  >
                    <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl sm:rounded-2xl p-5 sm:p-6 lg:p-8 hover:border-neon-cyan/50 active:border-neon-cyan/70 transition-all duration-500 hover-lift hover-glow touch-manipulation">
                      <div className="flex items-center gap-3 mb-3 sm:mb-4 justify-start md:justify-start">
                        <div className="md:hidden">
                          <Icon
                            className={`w-5 h-5 sm:w-6 sm:h-6 text-${exp.color}`}
                          />
                        </div>
                        <span className="text-xs sm:text-sm font-mono text-muted-foreground">
                          {exp.year}
                        </span>
                      </div>

                      <h3 className="text-xl sm:text-2xl font-bold mb-2 text-foreground">
                        {exp.title}
                      </h3>
                      <p
                        className={`text-base sm:text-lg text-${exp.color} mb-3 sm:mb-4`}
                      >
                        {exp.company}
                      </p>
                      <p className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6 leading-relaxed">
                        {exp.description}
                      </p>

                      <div
                        className={`flex flex-wrap gap-2 ${
                          isEven ? "md:justify-end" : "md:justify-start"
                        } justify-start`}
                      >
                        {exp.skills.map((skill, i) => (
                          <span
                            key={i}
                            className="px-2.5 py-1 sm:px-3 bg-muted/50 rounded-full text-xs sm:text-sm text-foreground border border-border/30"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Spacer for alignment */}
                  <div className="flex-1 hidden md:block" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
