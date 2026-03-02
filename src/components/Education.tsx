import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap } from "lucide-react";

const Education = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="education" className="py-28 px-6 md:px-16 lg:px-24" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="flex items-center gap-4 mb-14"
        >
          <span className="text-xs font-medium tracking-[0.25em] uppercase text-muted-foreground">04</span>
          <div className="accent-line" />
          <span className="text-xs font-medium tracking-[0.25em] uppercase text-muted-foreground">Education</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="glass-card max-w-md"
        >
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-full border border-border flex items-center justify-center shrink-0">
              <GraduationCap className="w-4 h-4 text-foreground" />
            </div>
            <div>
              <h3 className="text-base font-medium">Jamia Hamdard University</h3>
              <p className="text-sm text-muted-foreground mt-1">B.Tech — Computer Science</p>
              <p className="text-xs text-muted-foreground mt-1.5">2021 — 2025</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
