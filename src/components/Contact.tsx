import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Linkedin, ArrowUpRight } from "lucide-react";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-32 px-6 md:px-16 lg:px-24" ref={ref}>
      <div className="max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="flex items-center justify-center gap-4 mb-16"
        >
          <span className="text-sm font-medium tracking-[0.2em] uppercase text-muted-foreground">
            05
          </span>
          <div className="accent-line" />
          <span className="text-sm font-medium tracking-[0.2em] uppercase text-muted-foreground">
            Contact
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="section-heading mb-6"
        >
          Let's <span className="italic text-accent">connect</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-muted-foreground font-light max-w-md mx-auto mb-12"
        >
          I'm always open to new opportunities, collaborations, and conversations.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.45 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="mailto:shazebansari2536@gmail.com"
            className="group flex items-center gap-3 px-6 py-3 bg-primary text-primary-foreground rounded-full 
                       text-sm font-medium tracking-wide hover:opacity-90 transition-opacity duration-300"
          >
            <Mail className="w-4 h-4" />
            Email Me
            <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
          </a>
          <a
            href="https://www.linkedin.com/in/ghazali-hussain-693790220"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 px-6 py-3 border border-border rounded-full
                       text-sm font-medium tracking-wide hover:border-accent hover:text-accent transition-all duration-300"
          >
            <Linkedin className="w-4 h-4" />
            LinkedIn
            <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
          </a>
        </motion.div>
      </div>

      {/* Footer */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="max-w-5xl mx-auto mt-32 pt-8 border-t border-border flex items-center justify-between"
      >
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} Ghazali Hussain
        </p>
        <p className="text-xs text-muted-foreground">
          Designed with intention
        </p>
      </motion.div>
    </section>
  );
};

export default Contact;
