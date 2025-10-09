import { motion } from "framer-motion";

const Experience = () => {
  const experiences = [
    {
      title: "Python and Data Science Intern",
      company: "Futura Labs",
      period: "Nov 2023 – Mar 2024",
      description: "Worked with NumPy, Pandas, and Matplotlib for data analysis. Built ML workflows and created insightful data visualizations.",
    },
  ];

  return (
    <section className="mb-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.0 }}
      >
        <h2 className="text-xl font-semibold mb-4">Experience</h2>
        
        <div className="space-y-4">
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 + idx * 0.1 }}
              className="p-4 border border-border rounded-lg"
            >
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="font-semibold">{exp.title}</h3>
                  <p className="text-primary text-sm">{exp.company}</p>
                </div>
                <span className="text-xs text-muted-foreground">{exp.period}</span>
              </div>
              <p className="text-muted-foreground text-sm">{exp.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Experience;