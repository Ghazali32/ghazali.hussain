import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center relative px-6 md:px-16 lg:px-24">
      <div className="max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="flex items-center gap-3 mb-8"
        >
          <span className="accent-dot" />
          <span className="text-xs font-medium tracking-[0.25em] uppercase text-muted-foreground">
            Software Engineer
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light leading-[1] tracking-tight mb-8"
        >
          Ghazali
          <br />
          Hussain
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="text-base text-muted-foreground max-w-md font-light leading-relaxed"
        >
          Senior Software Engineer at HCLTech — crafting scalable systems with
          Node.js, AWS, and modern web technologies.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-10 flex items-center gap-4"
        >
          <a
            href="mailto:shazebansari2536@gmail.com"
            className="px-5 py-2.5 bg-foreground text-background text-xs font-medium tracking-wider uppercase rounded-full
                       hover:opacity-80 transition-opacity duration-300"
          >
            Get in Touch
          </a>
          <a
            href="https://www.linkedin.com/in/ghazali-hussain-693790220"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 border border-border text-xs font-medium tracking-wider uppercase rounded-full
                       hover:bg-foreground hover:text-background transition-all duration-300"
          >
            LinkedIn
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.7 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2"
      >
        <motion.div animate={{ y: [0, 6, 0] }} transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}>
          <ArrowDown className="w-4 h-4 text-muted-foreground" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
