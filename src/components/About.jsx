import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="mb-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <h2 className="text-xl font-semibold mb-4">About</h2>
        <p className="text-muted-foreground leading-relaxed">
          I'm a passionate full-stack developer with experience in building modern web applications. 
          I love creating clean, efficient code and turning ideas into digital reality. Currently focused 
          on React, Node.js, and modern web technologies.
        </p>
      </motion.div>
    </section>
  );
};

export default About;