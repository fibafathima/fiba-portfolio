import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const Achievements = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const achievements = [
    "Organized 3+ tech events at SkillSavy Club",
    "20+ active contributions to open source",
    "Completed Python & Data Science internship certification",
    "Certified in Full-Stack Development",
  ];

  return (
    <section id="achievements" className="py-16">
      <div ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Achievements</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-2xl mx-auto"
        >
          <ul className="space-y-3">
            {achievements.map((achievement, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <span className="text-primary mt-1">•</span>
                <span className="text-muted-foreground">{achievement}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;