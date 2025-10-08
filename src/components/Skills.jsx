import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skills = [
    "Python", "JavaScript", "C++", "React", "Node.js", "Express.js", 
    "MongoDB", "Tailwind CSS", "Git & GitHub", "REST APIs", "Postman"
  ];

  return (
    <section id="skills" className="py-16">
      <div ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Skills</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 max-w-2xl mx-auto"
        >
          {skills.map((skill, idx) => (
            <span
              key={idx}
              className="px-3 py-1 bg-muted text-foreground rounded-full text-sm font-medium border border-border"
            >
              {skill}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;