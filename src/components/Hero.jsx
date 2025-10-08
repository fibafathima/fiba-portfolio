import { motion } from "framer-motion";
import { ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section
      id="hero"
      className="py-20 text-center"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-8"
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Fiba Fathima Pazhedath
        </h1>
        <h2 className="text-xl md:text-2xl text-muted-foreground mb-6">
          Full-Stack Engineer
        </h2>
        <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
          Building scalable, user-first products with React, Node.js, and MongoDB
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="flex flex-wrap justify-center gap-4 mb-8"
      >
        <Button
          size="lg"
          className="bg-primary hover:bg-primary/90"
        >
          View Resume
          <ArrowRight className="ml-2" size={16} />
        </Button>
        <Button
          size="lg"
          variant="outline"
          onClick={() => {
            const element = document.getElementById("contact");
            element?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          Get in Touch
        </Button>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="flex justify-center gap-6"
      >
        <a href="https://github.com/fibafathima" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
          <Github size={24} />
        </a>
        <a href="https://www.linkedin.com/in/fiba-fathima-4a15692aa" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
          <Linkedin size={24} />
        </a>
        <a href="mailto:fiba@example.com" className="text-muted-foreground hover:text-primary transition-colors">
          <Mail size={24} />
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;