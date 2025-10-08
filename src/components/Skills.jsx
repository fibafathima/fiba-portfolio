import { motion } from "framer-motion";

const Skills = () => {
  const skills = [
    "JavaScript", "Python", "Java", "React", "Node.js", 
    "MongoDB", "Express.js", "Tailwind CSS", "Git"
  ];

  return (
    <section className="mb-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <h2 className="text-xl font-semibold mb-4">Skills</h2>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill, idx) => (
            <motion.span
              key={idx}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.4 + idx * 0.05 }}
              className="px-3 py-1 text-sm bg-primary/10 text-primary rounded-full border border-primary/20"
            >
              {skill}
            </motion.span>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;