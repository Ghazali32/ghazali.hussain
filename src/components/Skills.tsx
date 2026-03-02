import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const skills = [
  "Node.js", "React", "React Native", "AWS (EC2, S3, Lambda)",
  "Django", "MERN Stack", "Computer Vision", "RAG Models",
  "TypeScript", "Python", "REST APIs", "Firebase / FCM",
];

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-28 px-6 md:px-16 lg:px-24" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="flex items-center gap-4 mb-14"
        >
          <span className="text-xs font-medium tracking-[0.25em] uppercase text-muted-foreground">02</span>
          <div className="accent-line" />
          <span className="text-xs font-medium tracking-[0.25em] uppercase text-muted-foreground">Skills</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="section-heading mb-14"
        >
          Tools & Technologies
        </motion.h2>

        <div className="flex flex-wrap gap-3">
          {skills.map((skill, i) => (
            <motion.span
              key={skill}
              initial={{ opacity: 0, y: 15 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.2 + i * 0.05 }}
              className="skill-chip"
            >
              {skill}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
