import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Github, Linkedin, Mail, Twitter, Send } from "lucide-react";

export const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Invalid Email",
        description: "Please enter a valid email address",
        variant: "destructive"
      });
      return;
    }

    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
    
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="relative py-16 sm:py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Dark Futuristic Background - Mobile Optimized */}
      <div className="absolute inset-0 bg-gradient-to-b from-background to-charcoal"></div>
      <div className="absolute top-40 left-5 sm:left-20 w-52 sm:w-72 h-52 sm:h-72 bg-pastel-blue/10 rounded-full blur-[80px] sm:blur-[100px] animate-float"></div>
      <div className="absolute bottom-40 right-5 sm:right-20 w-52 sm:w-72 h-52 sm:h-72 bg-pastel-pink/10 rounded-full blur-[80px] sm:blur-[100px] animate-float-delayed"></div>
      
      {/* Animated Connection Lines */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-neon-cyan to-transparent animate-pulse-glow"></div>
      </div>
      
      <div className="relative max-w-4xl mx-auto">
        <div className="text-center mb-12 sm:mb-16 animate-slide-up px-2">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Get In Touch</h2>
          <div className="w-20 h-1 mx-auto rounded-full bg-gradient-to-r from-pastel-blue via-pastel-pink to-pastel-blue bg-[length:200%_100%] animate-gradient-shift"></div>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <Card className="p-8 border-border/50 bg-card/50 backdrop-blur-sm animate-slide-up" style={{ animationDelay: '0.1s' }}>
            <h3 className="text-2xl font-semibold mb-6 bg-gradient-to-r from-neon-cyan to-neon-magenta bg-clip-text text-transparent">
              Send a Message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="group">
                <Input
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="border-border bg-background/50 focus:border-neon-cyan focus:shadow-[0_0_15px_rgba(0,255,255,0.2)] transition-all duration-300 placeholder:text-muted-foreground/50"
                />
              </div>
              <div className="group">
                <Input
                  type="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="border-border bg-background/50 focus:border-neon-cyan focus:shadow-[0_0_15px_rgba(0,255,255,0.2)] transition-all duration-300 placeholder:text-muted-foreground/50"
                />
              </div>
              <div className="group">
                <Textarea
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  rows={5}
                  className="border-border bg-background/50 focus:border-neon-cyan focus:shadow-[0_0_15px_rgba(0,255,255,0.2)] transition-all duration-300 resize-none placeholder:text-muted-foreground/50"
                />
              </div>
              <Button 
                type="submit" 
                className="w-full bg-gradient-to-r from-neon-cyan to-neon-magenta hover:shadow-[0_0_25px_rgba(0,255,255,0.5)] transition-all duration-300 group"
              >
                <Send className="mr-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                Send Message
              </Button>
            </form>
          </Card>
          
          {/* Contact Info */}
          <div className="space-y-6 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <Card className="p-8 border-border/50 bg-card/50 backdrop-blur-sm">
              <h3 className="text-2xl font-semibold mb-6 bg-gradient-to-r from-pastel-blue to-pastel-pink bg-clip-text text-transparent">
                Connect With Me
              </h3>
              <div className="space-y-4">
                <a 
                  href="mailto:asadrafay998@gmail.com"
                  className="flex items-center gap-4 p-4 rounded-lg bg-background/30 border border-border/50 hover:border-neon-cyan/50 hover:bg-neon-cyan/5 hover:shadow-[0_0_15px_rgba(0,255,255,0.1)] transition-all duration-300 group"
                >
                  <Mail className="h-5 w-5 text-neon-cyan group-hover:scale-110 transition-transform duration-300" />
                  <div>
                    <div className="font-medium">Email</div>
                    <div className="text-sm text-muted-foreground">asadrafay998@gmail.com</div>
                  </div>
                </a>
                
                <a 
                  href="https://github.com/Rafayasad"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-lg bg-background/30 border border-border/50 hover:border-neon-cyan/50 hover:bg-neon-cyan/5 hover:shadow-[0_0_15px_rgba(0,255,255,0.1)] transition-all duration-300 group"
                >
                  <Github className="h-5 w-5 text-neon-cyan group-hover:scale-110 transition-transform duration-300" />
                  <div>
                    <div className="font-medium">GitHub</div>
                    <div className="text-sm text-muted-foreground">@Rafayasad</div>
                  </div>
                </a>
                
                <a 
                  href="https://linkedin.com/in/rafay-asad-87b39a213"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-lg bg-background/30 border border-border/50 hover:border-neon-cyan/50 hover:bg-neon-cyan/5 hover:shadow-[0_0_15px_rgba(0,255,255,0.1)] transition-all duration-300 group"
                >
                  <Linkedin className="h-5 w-5 text-neon-cyan group-hover:scale-110 transition-transform duration-300" />
                  <div>
                    <div className="font-medium">LinkedIn</div>
                    <div className="text-sm text-muted-foreground">Rafay Asad</div>
                  </div>
                </a>
                
                <a 
                  href="https://medium.com/@asadrafay998"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-lg bg-background/30 border border-border/50 hover:border-neon-cyan/50 hover:bg-neon-cyan/5 hover:shadow-[0_0_15px_rgba(0,255,255,0.1)] transition-all duration-300 group"
                >
                  <Twitter className="h-5 w-5 text-neon-cyan group-hover:scale-110 transition-transform duration-300" />
                  <div>
                    <div className="font-medium">Medium</div>
                    <div className="text-sm text-muted-foreground">@asadrafay998</div>
                  </div>
                </a>
              </div>
            </Card>
            
            <Card className="p-6 border-neon-cyan/30 bg-gradient-to-br from-neon-cyan/10 to-neon-magenta/10 backdrop-blur-sm">
              <h4 className="font-semibold mb-2 text-neon-cyan">Location</h4>
              <p className="text-foreground">Karachi, Pakistan</p>
              <p className="text-sm mt-1 text-muted-foreground">Available for remote work worldwide</p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
