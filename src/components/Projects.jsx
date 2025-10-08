import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const projects = [
    {
      title: "PlanEats AI",
      description: "AI-powered meal planning using RAG to match recipes from available ingredients and dietary preferences.",
      tech: ["React", "Node.js", "MongoDB", "Gemini AI"],
      github: "https://github.com/kalviumcommunity/PlanEats",
      live: "https://planeatss.netlify.app/",
    },
    {
      title: "WanderWise",
      description: "AI-powered travel itinerary generator that creates personalized trip plans with intelligent recommendations.",
      tech: ["React", "Tailwind", "Node.js", "Express.js"],
      github: "#",
      live: "#",
    },
    {
      title: "Late-O-Matic",
      description: "Fun CRUD application for generating humorous excuses with JWT authentication and user profiles.",
      tech: ["React", "Express.js", "MongoDB", "JWT"],
      github: "#",
      live: "#",
    },
  ];

  return (
    <section id="projects" className="py-16">
      <div ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Projects</h2>
        </motion.div>

        <div className="space-y-6">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="p-6 border border-border rounded-lg hover:border-primary/50 transition-colors"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground mb-3">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIdx) => (
                      <span
                        key={techIdx}
                        className="px-2 py-1 bg-muted text-foreground rounded text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Github size={20} />
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;