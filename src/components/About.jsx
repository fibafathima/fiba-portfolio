import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Card } from "@/components/ui/card";
import { User } from "lucide-react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full"></div>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="p-8 shadow-soft hover:shadow-hover transition-shadow">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="w-40 h-40 rounded-full bg-gradient-primary flex items-center justify-center flex-shrink-0">
                  <User size={80} className="text-primary-foreground" />
                </div>
                <div className="flex-1 text-center md:text-left">
                  <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                    I'm passionate about building scalable SaaS products and creating intuitive user experiences.
                    With a strong foundation in full-stack development, I specialize in React, Node.js, and MongoDB.
                  </p>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    I thrive in collaborative environments where I can contribute to meaningful projects,
                    learn from experienced developers, and grow as an engineer. My goal is to create
                    technology that makes a positive impact on people's lives.
                  </p>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;