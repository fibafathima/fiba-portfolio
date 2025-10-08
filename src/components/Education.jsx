import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Card } from "@/components/ui/card";
import { GraduationCap } from "lucide-react";

const Education = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="education" className="py-20 bg-background">
      <div className="container mx-auto px-4" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Education</h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <Card className="p-8 shadow-soft hover:shadow-hover transition-all">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex-shrink-0">
                <div className="w-20 h-20 rounded-full bg-gradient-primary flex items-center justify-center">
                  <GraduationCap size={40} className="text-primary-foreground" />
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-2">
                  B.Tech in Computer Science
                </h3>
                <p className="text-lg font-semibold text-primary mb-2">
                  Lovely Professional University
                </p>
                <p className="text-muted-foreground mb-4">
                  Kalvium's UG Program in Software Product Engineering
                </p>
                <p className="text-muted-foreground">
                  <span className="font-semibold">Duration:</span> 2024 – 2028
                </p>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;