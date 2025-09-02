"use client";

import { Github, Linkedin, Mail } from "lucide-react";
import profileImage from "@/assets/profile-image.jpg";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (!el) {
      console.warn(`Hero: no element found with id="${sectionId}"`);
      return;
    }
    el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-hero-gradient"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,var(--primary)_0%,transparent_50%)] opacity-10 pointer-events-none -z-10"
      />

      <div className="relative z-10 container mx-auto px-6 text-center animate-fade-in">
        {/* Profile Image */}
        <div className="mb-8 flex justify-center">
          <div className="relative">
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-primary shadow-glow-primary animate-float">
              <img
                src={profileImage}
                alt="Lazarus Wachira"
                className="w-full h-full object-cover"
              />
            </div>
            <div
              aria-hidden="true"
              className="absolute -inset-1 rounded-full bg-gradient-to-r from-primary via-accent to-tools opacity-75 blur animate-pulse-glow -z-20 pointer-events-none"
            />
          </div>
        </div>

        {/* Hero Content */}
        <div className="max-w-4xl mx-auto space-y-6">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold">
            <span className="text-accent drop-shadow-lg">Lazarus</span>
            <br />
            <span className="text-foreground">Wachira</span>
          </h1>

          <h2 className="text-xl md:text-2xl lg:text-3xl text-primary font-medium">
            Full-Stack Software Engineer
          </h2>

          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Passionate about building scalable web applications with React,
            Next.js, and Spring Boot.
          </p>

          {/* CTA Buttons (native <button> so we can rule out Button component issues) */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
            <button
              onClick={() => scrollToSection("projects")}
              className="px-8 py-3 text-lg font-semibold rounded-full shadow-lg transition-transform transform hover:scale-105 bg-accent text-accent-foreground"
              type="button"
            >
              View My Work
            </button>

            <button
              onClick={() => scrollToSection("contact")}
              className="px-8 py-3 text-lg font-semibold rounded-full transition-transform transform hover:scale-105 border border-primary text-primary bg-transparent"
              type="button"
            >
              Get In Touch
            </button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 mt-12">
            <a
              href="https://github.com/Lazowachira"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-card border border-border hover:border-primary transition-all duration-300 hover:scale-110 hover:shadow-glow-primary group"
            >
              <Github className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
            </a>

            <a
              href="https://www.linkedin.com/in/lazarus-wachira-b2302230b/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-card border border-border hover:border-primary transition-all duration-300 hover:scale-110 hover:shadow-glow-primary group"
            >
              <Linkedin className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
            </a>

            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=lwachira742@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-card border border-border hover:border-primary transition-all duration-300 hover:scale-110 hover:shadow-glow-primary group"
            >
              <Mail className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
