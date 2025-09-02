import { Card } from '@/components/ui/card';
import { Code, Database, Settings } from 'lucide-react';

const About = () => {
  const expertiseAreas = [
    {
      icon: Code,
      title: 'Frontend Development',
      description: 'Expert in React.js, Next.js, TypeScript, and modern CSS frameworks like Tailwind CSS.',
      color: 'frontend',
      glowClass: 'hover:shadow-glow-frontend'
    },
    {
      icon: Database,
      title: 'Backend Development',
      description: 'Proficient in Java Spring Boot, Node.js, and database management with MySQL and MongoDB.',
      color: 'backend',
      glowClass: 'hover:shadow-glow-backend'
    },
    {
      icon: Settings,
      title: 'DevOps & Tools',
      description: 'Experienced with Docker, Git, GitHub Actions, and modern development workflows.',
      color: 'tools',
      glowClass: 'hover:shadow-glow-tools'
    }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* About Text */}
          <div className="space-y-6 animate-slide-in-left">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-foreground">Software Engineer</h3>
              <p className="text-muted-foreground leading-relaxed">
                I'm a passionate Software Engineer with expertise in building scalable, 
                high-performance web applications that solve real-world problems. Currently 
                developing an innovative internet banking platform, I combine technical 
                excellence with creative problem-solving to deliver exceptional user experiences.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                My journey spans across full-stack development, from crafting intuitive 
                frontend interfaces with React.js and Next.js to architecting robust backend 
                systems using Java Spring Boot. I thrive on transforming complex business 
                requirements into elegant, maintainable code that drives meaningful impact.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                When I'm not coding, I'm exploring emerging technologies, contributing to 
                open-source projects, and mentoring fellow developers. I believe in writing 
                clean, efficient code and creating solutions that make a difference in people's lives.
              </p>
            </div>
          </div>

          {/* Expertise Cards */}
          <div className="space-y-4">
            {expertiseAreas.map((area, index) => (
              <Card
                key={area.title}
                className={`p-6 bg-card-gradient border-border transition-all duration-300 hover:scale-105 ${area.glowClass} animate-fade-in`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="flex items-start space-x-4">
                  <div className={`p-3 rounded-xl bg-${area.color} flex-shrink-0`}>
                    <area.icon className={`w-6 h-6 text-${area.color}-foreground`} />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-foreground mb-2">
                      {area.title}
                    </h4>
                    <p className="text-muted-foreground leading-relaxed">
                      {area.description}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;