import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Github,
      href: 'https://github.com/Lazowachira',
      label: 'GitHub'
    },
    {
      icon: Linkedin,
      href: 'https://www.linkedin.com/in/lazarus-wachira-b2302230b/',
      label: 'LinkedIn'
    },
    {
      icon: Mail,
      href: 'mailto:lwachira742@gmail.com',
      label: 'Email'
    }
  ];

  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center space-y-6">
          {/* Logo/Name */}
          <div className="text-center">
            <h3 className="text-2xl font-bold">
              <span className="text-accent">Lazarus</span>
              <span className="text-foreground"> Wachira</span>
            </h3>
            <p className="text-muted-foreground mt-2">Full-Stack Software Engineer</p>
          </div>

          {/* Social Links */}
          <div className="flex space-x-6">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-secondary hover:bg-primary transition-all duration-300 hover:scale-110 group"
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary-foreground transition-colors" />
              </a>
            ))}
          </div>

          {/* Navigation Links */}
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => {
                  const element = document.getElementById(item.toLowerCase());
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                {item}
              </button>
            ))}
          </div>

          {/* Copyright */}
          <div className="text-center pt-6 border-t border-border w-full">
            <p className="text-muted-foreground text-sm flex items-center justify-center gap-2">
              © {currentYear} Made with <Heart className="w-4 h-4 text-red-500" /> by Lazarus Wachira
            </p>
            <p className="text-muted-foreground text-xs mt-1">
              All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;