import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const projects = [
    {
      title: "PlanEats AI",
      subtitle: "Smart Meal Planning Application",
      description:
        "AI-powered meal planning using RAG (Retrieval-Augmented Generation) to match recipes from available ingredients and dietary preferences. Generates personalized meal plans with nutritional information.",
      tech: ["React", "Node.js", "Express.js", "MongoDB", "Gemini AI"],
      github: "https://github.com/kalviumcommunity/PlanEats",
      live: "https://planeatss.netlify.app/",
    },
    {
      title: "WanderWise",
      subtitle: "Smart Travel Planner",
      description:
        "AI-powered travel itinerary generator that creates personalized trip plans. Features intelligent recommendations and seamless user experience.",
      tech: ["React", "Tailwind", "Node.js", "Express.js", "MongoDB"],
      github: "#",
      live: "#",
    },
    {
      title: "Late-O-Matic",
      subtitle: "Excuse Generator",
      description:
        "Fun CRUD application for generating humorous excuses. Includes JWT authentication, user profiles, and excuse history tracking.",
      tech: ["React", "Vite", "Express.js", "MongoDB", "JWT Auth"],
      github: "#",
      live: "#",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Projects</h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
            >
              <Card className="p-6 h-full shadow-soft hover:shadow-hover transition-all hover:scale-105 flex flex-col">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                  <p className="text-primary font-semibold mb-4">{project.subtitle}</p>
                  <p className="text-muted-foreground mb-6">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, techIdx) => (
                      <span
                        key={techIdx}
                        className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex gap-4">
                  <Button
                    variant="outline"
                    className="flex-1 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                    asChild
                  >
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github size={16} className="mr-2" />
                      Code
                    </a>
                  </Button>
                  <Button className="flex-1 bg-gradient-primary hover:opacity-90" asChild>
                    <a href={project.live} target="_blank" rel="noopener noreferrer">
                      <ExternalLink size={16} className="mr-2" />
                      Live Demo
                    </a>
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;