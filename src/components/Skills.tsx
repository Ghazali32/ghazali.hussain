import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const skills = [
  { name: "Node.js", category: "Backend" },
  { name: "React", category: "Frontend" },
  { name: "React Native", category: "Mobile" },
  { name: "AWS (EC2, S3, Lambda)", category: "Cloud" },
  { name: "Django", category: "Backend" },
  { name: "MERN Stack", category: "Full Stack" },
  { name: "Computer Vision", category: "AI/ML" },
  { name: "RAG Models", category: "AI/ML" },
  { name: "TypeScript", category: "Language" },
  { name: "Python", category: "Language" },
  { name: "REST APIs", category: "Backend" },
  { name: "Firebase / FCM", category: "Services" },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.06,
    },
  },
};

const chipVariants = {
  hidden: { opacity: 0, scale: 0.8, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
};

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-32 px-6 md:px-16 lg:px-24" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="flex items-center gap-4 mb-16"
        >
          <span className="text-sm font-medium tracking-[0.2em] uppercase text-muted-foreground">
            02
          </span>
          <div className="accent-line" />
          <span className="text-sm font-medium tracking-[0.2em] uppercase text-muted-foreground">
            Skills
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="section-heading mb-16"
        >
          Tools & <span className="italic text-accent">Technologies</span>
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="flex flex-wrap gap-3"
        >
          {skills.map((skill) => (
            <motion.div
              key={skill.name}
              variants={chipVariants}
              className="skill-chip group cursor-default"
            >
              <span className="text-xs text-accent mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {skill.category}
              </span>
              {skill.name}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
