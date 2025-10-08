import { motion } from "framer-motion";
import { Github, Linkedin, Code2, Mail } from "lucide-react";

const Contact = () => {
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
      url: "https://leetcode.com/u/fibafathima/",
    },
    {
      name: "Email",
      icon: Mail,
      url: "mailto:fibafathim@gmail.com",
    },
  ];

  return (
    <section className="mb-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
      >
        <h2 className="text-xl font-semibold mb-4">Contact</h2>
        <p className="text-muted-foreground mb-4">
          Feel free to reach out for collaborations or just a friendly hello.
        </p>
        
        <div className="flex gap-4 mb-6">
          {socials.map((social, idx) => (
            <a
              key={idx}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              title={social.name}
            >
              <social.icon size={20} />
            </a>
          ))}
        </div>

        <div className="text-xs text-muted-foreground">
          <p>© 2024 Fiba Fathima Pazhedath</p>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;