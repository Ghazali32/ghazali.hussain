import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center relative px-6 md:px-16 lg:px-24">
      <div className="max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="flex items-center gap-3 mb-8"
        >
          <span className="accent-dot" />
          <span className="text-sm font-medium tracking-[0.2em] uppercase text-muted-foreground">
            Software Engineer
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-serif font-normal leading-[0.95] tracking-tight mb-8"
        >
          Ghazali
          <br />
          <span className="italic text-accent">Hussain</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35 }}
          className="text-lg md:text-xl text-muted-foreground max-w-lg font-light leading-relaxed"
        >
          Senior Software Engineer at HCLTech — crafting scalable systems with 
          Node.js, AWS, and modern web technologies.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-12 flex items-center gap-6"
        >
          <a
            href="mailto:shazebansari2536@gmail.com"
            className="px-6 py-3 bg-primary text-primary-foreground text-sm font-medium tracking-wide rounded-full 
                       hover:opacity-90 transition-opacity duration-300"
          >
            Get in Touch
          </a>
          <a
            href="https://www.linkedin.com/in/ghazali-hussain-693790220"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 border border-border text-sm font-medium tracking-wide rounded-full
                       hover:border-accent hover:text-accent transition-all duration-300"
          >
            LinkedIn
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ArrowDown className="w-5 h-5 text-muted-foreground" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
