import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Linkedin, ArrowUpRight } from "lucide-react";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-28 px-6 md:px-16 lg:px-24" ref={ref}>
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="flex items-center justify-center gap-4 mb-14"
        >
          <span className="text-xs font-medium tracking-[0.25em] uppercase text-muted-foreground">05</span>
          <div className="accent-line" />
          <span className="text-xs font-medium tracking-[0.25em] uppercase text-muted-foreground">Contact</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="section-heading mb-4"
        >
          Let's connect
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="text-sm text-muted-foreground font-light max-w-sm mx-auto mb-10"
        >
          Open to new opportunities, collaborations, and conversations.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3"
        >
          <a
            href="mailto:shazebansari2536@gmail.com"
            className="group flex items-center gap-2 px-5 py-2.5 bg-foreground text-background rounded-full
                       text-xs font-medium tracking-wider uppercase hover:opacity-80 transition-opacity duration-300"
          >
            <Mail className="w-3.5 h-3.5" />
            Email Me
            <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
          </a>
          <a
            href="https://www.linkedin.com/in/ghazali-hussain-693790220"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 px-5 py-2.5 border border-border rounded-full
                       text-xs font-medium tracking-wider uppercase hover:bg-foreground hover:text-background transition-all duration-300"
          >
            <Linkedin className="w-3.5 h-3.5" />
            LinkedIn
            <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.7, delay: 0.5 }}
        className="max-w-4xl mx-auto mt-28 pt-6 border-t border-border flex items-center justify-between"
      >
        <p className="text-[10px] text-muted-foreground tracking-wider uppercase">
          © {new Date().getFullYear()} Ghazali Hussain
        </p>
        <p className="text-[10px] text-muted-foreground tracking-wider uppercase">
          Minimal by design
        </p>
      </motion.div>
    </section>
  );
};

export default Contact;
