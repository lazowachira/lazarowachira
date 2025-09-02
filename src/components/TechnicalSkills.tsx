import { Card } from '@/components/ui/card';
import { Code, Database, Settings } from 'lucide-react';

const TechnicalSkills = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      icon: Code,
      color: 'frontend',
      glowClass: 'hover:shadow-glow-frontend',
      skills: [
        'React.js',
        'Next.js',
        'Angular',
        'TypeScript',
        'JavaScript',
        'Tailwind CSS',
        'HTML/CSS3'
      ]
    },
    {
      title: 'Backend',
      icon: Database,
      color: 'backend',
      glowClass: 'hover:shadow-glow-backend',
      skills: [
        'Java Spring Boot',
        'Node.js',
        'Express.js',
        'MySQL',
        'MongoDB',
        'REST APIs'
      ]
    },
    {
      title: 'Tools & Design',
      icon: Settings,
      color: 'tools',
      glowClass: 'hover:shadow-glow-tools',
      skills: [
        'Git/GitHub',
        'Docker',
        'Figma',
        'Canva',
        'Postman',
        'GitHub Actions',
        'ShadCN UI'
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Technical Skills
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <Card
              key={category.title}
              className={`p-8 bg-card-gradient border-border transition-all duration-500 hover:scale-105 ${category.glowClass} animate-fade-in`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="text-center mb-6">
                <div className={`inline-flex p-4 rounded-2xl bg-${category.color} mb-4`}>
                  <category.icon className={`w-8 h-8 text-${category.color}-foreground`} />
                </div>
                <h3 className="text-2xl font-bold text-foreground">
                  {category.title}
                </h3>
              </div>

              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skill}
                    className="flex items-center space-x-3 animate-slide-in-left"
                    style={{ animationDelay: `${(index * 0.2) + (skillIndex * 0.1)}s` }}
                  >
                    <div className={`w-2 h-2 rounded-full bg-${category.color} flex-shrink-0`} />
                    <span className="text-muted-foreground font-medium">
                      {skill}
                    </span>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnicalSkills;