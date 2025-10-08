import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-16">
      <div ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-4">About Me</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-2xl mx-auto text-center"
        >
          <p className="text-muted-foreground leading-relaxed mb-4">
            I'm passionate about building scalable SaaS products and creating intuitive user experiences.
            With a strong foundation in full-stack development, I specialize in React, Node.js, and MongoDB.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            I thrive in collaborative environments where I can contribute to meaningful projects,
            learn from experienced developers, and grow as an engineer.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;