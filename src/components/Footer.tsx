import { Github, Linkedin, Mail, Heart } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden">
      {/* Soft Gradient Divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neon-cyan to-transparent opacity-50"></div>
      
      {/* Background Effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal to-background"></div>
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-neon-magenta/5 rounded-full blur-[120px]"></div>
      
      <div className="relative py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Brand Section */}
            <div className="space-y-4 animate-slide-up">
              <h3 className="text-xl font-bold bg-gradient-to-r from-neon-cyan via-pastel-blue to-neon-magenta bg-clip-text text-transparent">
                Rafay Asad
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Full Stack Developer crafting exceptional digital experiences with modern technologies.
              </p>
            </div>
            
            {/* Quick Links */}
            <div className="animate-slide-up" style={{ animationDelay: '0.1s' }}>
              <h4 className="font-semibold mb-4 text-foreground">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <a 
                    href="#about" 
                    className="text-muted-foreground hover:text-neon-cyan transition-colors duration-300 inline-block hover:translate-x-1 transform"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a 
                    href="#experience" 
                    className="text-muted-foreground hover:text-neon-cyan transition-colors duration-300 inline-block hover:translate-x-1 transform"
                  >
                    Experience
                  </a>
                </li>
                <li>
                  <a 
                    href="#skills" 
                    className="text-muted-foreground hover:text-neon-cyan transition-colors duration-300 inline-block hover:translate-x-1 transform"
                  >
                    Skills
                  </a>
                </li>
                <li>
                  <a 
                    href="#projects" 
                    className="text-muted-foreground hover:text-neon-cyan transition-colors duration-300 inline-block hover:translate-x-1 transform"
                  >
                    Projects
                  </a>
                </li>
                <li>
                  <a 
                    href="#contact" 
                    className="text-muted-foreground hover:text-neon-cyan transition-colors duration-300 inline-block hover:translate-x-1 transform"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            
            {/* Social Links */}
            <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <h4 className="font-semibold mb-4 text-foreground">Connect</h4>
              <div className="flex gap-4">
                <a 
                  href="https://github.com/Rafayasad"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-3 bg-muted/50 border border-border/50 rounded-lg hover:border-neon-cyan hover:bg-neon-cyan/10 hover:shadow-[0_0_20px_rgba(0,255,255,0.2)] transition-all duration-300"
                  aria-label="GitHub"
                >
                  <Github className="h-5 w-5 text-muted-foreground group-hover:text-neon-cyan group-hover:scale-110 transition-all duration-300" />
                </a>
                <a 
                  href="https://linkedin.com/in/rafay-asad-87b39a213"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-3 bg-muted/50 border border-border/50 rounded-lg hover:border-neon-cyan hover:bg-neon-cyan/10 hover:shadow-[0_0_20px_rgba(0,255,255,0.2)] transition-all duration-300"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5 text-muted-foreground group-hover:text-neon-cyan group-hover:scale-110 transition-all duration-300" />
                </a>
                <a 
                  href="mailto:asadrafay998@gmail.com"
                  className="group p-3 bg-muted/50 border border-border/50 rounded-lg hover:border-neon-cyan hover:bg-neon-cyan/10 hover:shadow-[0_0_20px_rgba(0,255,255,0.2)] transition-all duration-300"
                  aria-label="Email"
                >
                  <Mail className="h-5 w-5 text-muted-foreground group-hover:text-neon-cyan group-hover:scale-110 transition-all duration-300" />
                </a>
              </div>
            </div>
          </div>
          
          {/* Bottom Section with Gradient Divider */}
          <div className="relative pt-8">
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>
            <div className="text-center text-muted-foreground animate-slide-up" style={{ animationDelay: '0.3s' }}>
              <p className="flex items-center justify-center gap-2">
                © {currentYear} Rafay Asad. Made with 
                <Heart className="h-4 w-4 text-neon-magenta fill-neon-magenta animate-pulse-glow" /> 
                and React
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
