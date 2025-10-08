import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Card } from "@/components/ui/card";
import { Briefcase, Calendar } from "lucide-react";

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const experiences = [
    {
      title: "Software Development Intern",
      company: "Kalvium Work Integration",
      period: "Aug 2024 – Jan 2025",
      description: [
        "Built production-grade UIs with React and Tailwind CSS",
        "Improved form usability by 25% through enhanced user experience design",
        "Collaborated with cross-functional teams to deliver features on schedule",
      ],
    },
    {
      title: "Python and Data Science Intern",
      company: "Futura Labs",
      period: "Nov 2023 – Mar 2024",
      description: [
        "Worked with NumPy, Pandas, and Matplotlib for data analysis",
        "Built ML workflows and created insightful data visualizations",
        "Contributed to multiple data science projects",
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 bg-background">
      <div className="container mx-auto px-4" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Experience</h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full"></div>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
              animate={
                isInView
                  ? { opacity: 1, x: 0 }
                  : { opacity: 0, x: idx % 2 === 0 ? -20 : 20 }
              }
              transition={{ duration: 0.6, delay: idx * 0.2 }}
            >
              <Card className="p-6 shadow-soft hover:shadow-hover transition-all">
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-full bg-gradient-primary flex items-center justify-center">
                      <Briefcase size={32} className="text-primary-foreground" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-2">{exp.title}</h3>
                    <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 mb-4">
                      <p className="text-lg font-semibold text-primary">{exp.company}</p>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Calendar size={16} />
                        <span className="text-sm">{exp.period}</span>
                      </div>
                    </div>
                    <ul className="space-y-2">
                      {exp.description.map((item, itemIdx) => (
                        <li key={itemIdx} className="flex items-start gap-2 text-muted-foreground">
                          <span className="text-primary mt-1">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;