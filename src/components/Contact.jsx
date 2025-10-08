import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Github, Linkedin, Code2, Mail } from "lucide-react";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const socials = [
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://www.linkedin.com/in/fiba-fathima-4a15692aa",
    },
    {
      name: "GitHub",
      icon: Github,
      url: "https://github.com/fibafathima",
    },
    {
      name: "LeetCode",
      icon: Code2,
      url: "https://leetcode.com/u/fibafathima",
    },
    {
      name: "Email",
      icon: Mail,
      url: "mailto:fiba@example.com",
    },
  ];

  return (
    <section id="contact" className="py-16">
      <div ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Let's Connect</h2>
          <p className="text-muted-foreground max-w-lg mx-auto mb-8">
            I'm always open to discussing new projects, creative ideas, or opportunities.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center gap-6 mb-8"
        >
          {socials.map((social, idx) => (
            <a
              key={idx}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
            >
              <social.icon size={24} className="group-hover:scale-110 transition-transform" />
              <span className="text-xs">{social.name}</span>
            </a>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center text-xs text-muted-foreground"
        >
          <p>© 2024 Fiba Fathima Pazhedath. Built with React & Tailwind CSS.</p>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;