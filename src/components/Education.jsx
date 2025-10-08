import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const Education = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="education" className="py-16">
      <div ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Education</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="p-6 border border-border rounded-lg max-w-2xl mx-auto"
        >
          <h3 className="text-lg font-bold mb-2">B.Tech in Computer Science</h3>
          <p className="text-primary font-medium mb-2">Lovely Professional University</p>
          <p className="text-muted-foreground mb-2">Kalvium's UG Program in Software Product Engineering</p>
          <p className="text-sm text-muted-foreground">2024 – 2028</p>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;