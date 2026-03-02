import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap } from "lucide-react";

const Education = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="education" className="py-32 px-6 md:px-16 lg:px-24" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="flex items-center gap-4 mb-16"
        >
          <span className="text-sm font-medium tracking-[0.2em] uppercase text-muted-foreground">
            04
          </span>
          <div className="accent-line" />
          <span className="text-sm font-medium tracking-[0.2em] uppercase text-muted-foreground">
            Education
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="glass-card max-w-xl"
        >
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
              <GraduationCap className="w-5 h-5 text-accent" />
            </div>
            <div>
              <h3 className="text-xl font-serif">Jamia Hamdard University</h3>
              <p className="text-accent text-sm font-medium mt-1">
                Bachelor of Technology — Computer Science
              </p>
              <p className="text-sm text-muted-foreground mt-2">2021 — 2025</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
