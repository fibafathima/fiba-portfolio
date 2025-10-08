import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Code2, Mail } from "lucide-react";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const socials = [
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://www.linkedin.com/in/fiba-fathima-4a15692aa",
      color: "hover:text-[#0077b5]",
    },
    {
      name: "GitHub",
      icon: Github,
      url: "https://github.com/fibafathima",
      color: "hover:text-[#333]",
    },
    {
      name: "LeetCode",
      icon: Code2,
      url: "https://leetcode.com/u/fibafathima",
      color: "hover:text-[#FFA116]",
    },
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Let's Connect</h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-2xl mx-auto text-center"
        >
          <p className="text-lg text-muted-foreground mb-8">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {socials.map((social, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, delay: 0.3 + idx * 0.1 }}
              >
                <Button
                  variant="outline"
                  size="lg"
                  className={`border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all ${social.color}`}
                  asChild
                >
                  <a href={social.url} target="_blank" rel="noopener noreferrer">
                    <social.icon size={20} className="mr-2" />
                    {social.name}
                  </a>
                </Button>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <Button
              size="lg"
              className="bg-gradient-primary hover:opacity-90 transition-opacity text-lg"
              asChild
            >
              <a href="mailto:fiba@example.com">
                <Mail size={20} className="mr-2" />
                Send Email
              </a>
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center text-muted-foreground"
        >
          <p>© 2024 Fiba Fathima Pazhedath. Built with React & Tailwind CSS.</p>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
