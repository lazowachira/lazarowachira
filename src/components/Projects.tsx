import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Star, GitFork } from "lucide-react";
import bankingImage from "@/assets/banking-project.jpg";
import ecommerceImage from "@/assets/ecommerce-project.jpg";
import taskManagerImage from "@/assets/taskmanager-project.jpg";
import realEstateImage from "@/assets/realestate-project.jpg";

interface Repository {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  stargazers_count: number;
  forks_count: number;
  language: string | null;
  topics: string[];
  updated_at: string;
}

interface FeaturedProject {
  id: string;
  name: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl: string;
  liveUrl?: string;
  featured: boolean;
}

const Projects = () => {
  const [repositories, setRepositories] = useState<Repository[]>([]);
  const [loading, setLoading] = useState(true);

  // Featured projects with images
  const featuredProjects: FeaturedProject[] = [
    {
      id: "internet-banking",
      name: "Internet Banking Platform",
      description:
        "A comprehensive digital banking solution with account management, money transfers, bill payments, and financial analytics. Built with modern security practices and responsive design.",
      image: bankingImage,
      technologies: ["React", "Spring Boot", "MySQL", "JWT", "Tailwind CSS"],
      githubUrl: "https://github.com/lazowachira/Internetbanking",
      liveUrl: "https://banking-demo.lazaruswachira.dev",
      featured: true,
    },
    {
      id: "ecommerce-platform",
      name: "E-Commerce Platform",
      description:
        "Full-stack e-commerce solution with product catalog, shopping cart, payment integration, and admin dashboard for inventory management.",
      image: ecommerceImage,
      technologies: ["Next.js", "Node.js", "MongoDB", "Stripe", "TypeScript"],
      githubUrl: "https://github.com/lazowachira/angular-ecommerce",
      liveUrl: "https://shop-demo.lazaruswachira.dev",
      featured: true,
    },
    {
      id: "task-manager",
      name: "Project Management Tool",
      description:
        "Collaborative project management application with kanban boards, team collaboration, time tracking, and progress analytics.",
      image: taskManagerImage,
      technologies: [
        "React",
        "Express.js",
        "PostgreSQL",
        "Socket.io",
        "Material-UI",
      ],
      githubUrl: "https://github.com/lazowachira/odoo-Apps-Management-",
      featured: true,
    },
    {
      id: "real-estate",
      name: "Real Estate Platform",
      description:
        "Property listing and management platform with advanced search, virtual tours, mortgage calculator, and agent dashboard.",
      image: realEstateImage,
      technologies: [
        "Vue.js",
        "Laravel",
        "MySQL",
        "Google Maps API",
        "Bootstrap",
      ],
      githubUrl: "https://github.com/lazowachira/EventsKenya",
      featured: true,
    },
  ];

  useEffect(() => {
    const fetchRepositories = async () => {
      try {
        const response = await fetch(
          "https://api.github.com/users/Lazowachira/repos?sort=updated&per_page=4"
        );
        if (response.ok) {
          const data = await response.json();
          // Filter out forked repositories and sort by stars
          const filteredRepos = data
            .filter((repo: Repository) => !repo.name.includes("fork"))
            .sort(
              (a: Repository, b: Repository) =>
                b.stargazers_count - a.stargazers_count
            );
          setRepositories(filteredRepos);
        }
      } catch (error) {
        console.error("Error fetching repositories:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchRepositories();
  }, []);

  const getLanguageColor = (language: string | null) => {
    const colors: { [key: string]: string } = {
      JavaScript: "bg-yellow-500",
      TypeScript: "bg-blue-500",
      Python: "bg-green-500",
      Java: "bg-orange-500",
      React: "bg-cyan-500",
      HTML: "bg-red-500",
      CSS: "bg-purple-500",
      Vue: "bg-emerald-500",
    };
    return colors[language || ""] || "bg-gray-500";
  };

  if (loading) {
    return (
      <section id="projects" className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              My Projects
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {[...Array(4)].map((_, i) => (
              <Card
                key={i}
                className="p-6 bg-card-gradient border-border animate-pulse"
              >
                <div className="h-48 bg-muted rounded-lg mb-4" />
                <div className="h-4 bg-muted rounded mb-4" />
                <div className="h-3 bg-muted rounded mb-2" />
                <div className="h-3 bg-muted rounded w-3/4" />
              </Card>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            My Projects
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Here are some of my featured projects showcasing my skills in
            full-stack development
          </p>
        </div>

        {/* Featured Projects */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-foreground mb-8 text-center">
            Featured Projects
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {featuredProjects.map((project, index) => (
              <Card
                key={project.id}
                className="overflow-hidden bg-card-gradient border-border transition-all duration-300 hover:scale-105 hover:shadow-glow-primary animate-fade-in group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                </div>

                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <h4 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                      {project.name}
                    </h4>
                    <div className="flex space-x-2">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg bg-secondary hover:bg-primary transition-colors group"
                      >
                        <Github className="w-4 h-4 text-muted-foreground group-hover:text-primary-foreground" />
                      </a>
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-lg bg-secondary hover:bg-primary transition-colors group"
                        >
                          <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary-foreground" />
                        </a>
                      )}
                    </div>
                  </div>

                  <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs bg-primary/10 text-primary rounded-full border border-primary/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <Button
                    asChild
                    variant="outline"
                    size="sm"
                    className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                  >
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Project
                    </a>
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* GitHub Repositories */}
        <div>
          <h3 className="text-2xl font-bold text-foreground mb-8 text-center">
            More Projects from GitHub
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
            {repositories.slice(0, 4).map((repo, index) => (
              <Card
                key={repo.id}
                className="p-6 bg-card-gradient border-border transition-all duration-300 hover:scale-105 hover:shadow-glow-primary animate-fade-in group"
                style={{ animationDelay: `${(index + 4) * 0.1}s` }}
              >
                <div className="flex items-start justify-between mb-4">
                  <h4 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                    {repo.name
                      .replace(/-/g, " ")
                      .replace(/\b\w/g, (l) => l.toUpperCase())}
                  </h4>
                  <div className="flex space-x-2">
                    <a
                      href={repo.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-secondary hover:bg-primary transition-colors group"
                    >
                      <Github className="w-4 h-4 text-muted-foreground group-hover:text-primary-foreground" />
                    </a>
                    {repo.homepage && (
                      <a
                        href={repo.homepage}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg bg-secondary hover:bg-primary transition-colors group"
                      >
                        <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary-foreground" />
                      </a>
                    )}
                  </div>
                </div>

                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                  {repo.description || "No description available"}
                </p>

                <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1">
                      <Star className="w-3 h-3" />
                      <span>{repo.stargazers_count}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <GitFork className="w-3 h-3" />
                      <span>{repo.forks_count}</span>
                    </div>
                  </div>
                  {repo.language && (
                    <div className="flex items-center space-x-2">
                      <div
                        className={`w-3 h-3 rounded-full ${getLanguageColor(
                          repo.language
                        )}`}
                      />
                      <span>{repo.language}</span>
                    </div>
                  )}
                </div>

                {repo.topics.length > 0 && (
                  <div className="flex flex-wrap gap-1 mb-4">
                    {repo.topics.slice(0, 3).map((topic) => (
                      <span
                        key={topic}
                        className="px-2 py-1 text-xs bg-secondary text-secondary-foreground rounded-full"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                )}

                <Button
                  asChild
                  variant="outline"
                  size="sm"
                  className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                >
                  <a
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Project
                  </a>
                </Button>
              </Card>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
          >
            <a
              href="https://github.com/Lazowachira"
              target="_blank"
              rel="noopener noreferrer"
            >
              View All Projects on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
