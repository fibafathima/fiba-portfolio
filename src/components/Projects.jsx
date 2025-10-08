import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "PlanEats AI",
      description: "AI-powered meal planning application using RAG",
      tech: ["React", "Node.js", "MongoDB"],
      github: "https://github.com/kalviumcommunity/PlanEats",
      live: "https://planeatss.netlify.app/",
    },
    {
      title: "WanderWise",
      description: "Smart travel itinerary generator",
      tech: ["React", "Express.js", "MongoDB"],
      github: "https://github.com/kalviumcommunity/S66_FibaFathima_Capstone_WanderWise",
      live: "https://wanderwiseca.netlify.app/",
    },
    {
      title: "Late-O-Matic",
      description: "Fun excuse generator with JWT auth",
      tech: ["React", "MongoDB", "JWT"],
      github: "https://github.com/kalviumcommunity/S66_Late_O_Matic",
      live: "https://b9e5862a.lateomatic.pages.dev/",
    },
  ];

  return (
    <section className="mb-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        <h2 className="text-xl font-semibold mb-4">Projects</h2>
        <div className="space-y-4">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 + idx * 0.1 }}
              className="p-4 border border-border rounded-lg hover:border-primary/50 transition-colors"
            >
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-semibold">{project.title}</h3>
                <div className="flex gap-2">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Github size={16} />
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    <ExternalLink size={16} />
                  </a>
                </div>
              </div>
              <p className="text-muted-foreground text-sm mb-3">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, techIdx) => (
                  <span
                    key={techIdx}
                    className="px-2 py-1 text-xs bg-primary/10 text-primary rounded border border-primary/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;