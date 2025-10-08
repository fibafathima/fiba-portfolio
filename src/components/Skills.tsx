import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Palette, Database, Wrench } from "lucide-react";

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skillCategories = [
    {
      title: "Languages",
      icon: Code,
      skills: [
        { name: "Python", level: "Advanced" },
        { name: "C++", level: "Intermediate" },
        { name: "JavaScript", level: "Basic" },
      ],
    },
    {
      title: "Frontend",
      icon: Palette,
      skills: [
        { name: "React", level: "Advanced" },
        { name: "Tailwind CSS", level: "Advanced" },
      ],
    },
    {
      title: "Backend & Database",
      icon: Database,
      skills: [
        { name: "Node.js", level: "Intermediate" },
        { name: "Express.js", level: "Intermediate" },
        { name: "MongoDB", level: "Intermediate" },
      ],
    },
    {
      title: "Tools & Others",
      icon: Wrench,
      skills: [
        { name: "Git & GitHub", level: "Advanced" },
        { name: "Postman", level: "Intermediate" },
        { name: "REST API Design", level: "Intermediate" },
        { name: "Render/Netlify", level: "Basic" },
      ],
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Skills</h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full"></div>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto"
        >
          {skillCategories.map((category, idx) => (
            <motion.div key={idx} variants={item}>
              <Card className="p-6 h-full shadow-soft hover:shadow-hover transition-all hover:scale-105">
                <div className="flex flex-col items-center text-center mb-4">
                  <div className="w-16 h-16 rounded-full bg-gradient-primary flex items-center justify-center mb-4">
                    <category.icon size={32} className="text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{category.title}</h3>
                </div>
                <div className="space-y-3">
                  {category.skills.map((skill, skillIdx) => (
                    <div key={skillIdx} className="flex flex-col gap-1">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium">{skill.name}</span>
                        <Badge
                          variant="secondary"
                          className="text-xs bg-primary/10 text-primary"
                        >
                          {skill.level}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
