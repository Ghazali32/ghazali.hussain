import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const experiences = [
  {
    company: "HCLTech",
    role: "Senior Software Engineer",
    period: "Sep 2025 — Present",
    location: "Noida",
    highlights: [
      "Contributing to an RAI (Responsible AI) Evaluator project for foundational and RAG models",
      "Built and optimized Computer Vision Image Segmentation models for visual understanding",
    ],
  },
  {
    company: "HCLTech",
    role: "Scholar",
    period: "Jun 2025 — Aug 2025",
    location: "Noida",
    highlights: [],
  },
  {
    company: "The Tech Ravens",
    role: "Software Development Engineer",
    period: "Oct 2024 — Aug 2025",
    location: "Noida",
    highlights: [
      "Built a healthcare app with React Native, Node.js backend on AWS EC2 with FCM push notifications",
      "Automated media uploads to AWS S3 with Lambda functions for file conversion",
    ],
  },
  {
    company: "Basira Studio",
    role: "SDE — Web",
    period: "Oct 2024 — Jul 2025",
    location: "New Delhi",
    highlights: [
      "Developed web apps including zairawasim.com and an orphanage website",
      "Built a full-stack blog admin panel and CRM system using the MERN stack",
    ],
  },
];

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-32 px-6 md:px-16 lg:px-24" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="flex items-center gap-4 mb-16"
        >
          <span className="text-sm font-medium tracking-[0.2em] uppercase text-muted-foreground">
            03
          </span>
          <div className="accent-line" />
          <span className="text-sm font-medium tracking-[0.2em] uppercase text-muted-foreground">
            Experience
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="section-heading mb-20"
        >
          Where I've <span className="italic text-accent">worked</span>
        </motion.h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-[5px] top-2 bottom-2 w-px bg-border" />

          <div className="space-y-16">
            {experiences.map((exp, i) => (
              <motion.div
                key={`${exp.company}-${exp.role}`}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + i * 0.15 }}
                className="relative pl-10"
              >
                <div className="absolute left-0 top-2 timeline-dot" />

                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-3">
                  <div>
                    <h3 className="text-xl font-serif font-normal">{exp.role}</h3>
                    <p className="text-accent font-medium text-sm mt-1">{exp.company}</p>
                  </div>
                  <div className="text-sm text-muted-foreground mt-1 sm:mt-0 sm:text-right shrink-0">
                    <p>{exp.period}</p>
                    <p className="text-xs mt-0.5">{exp.location}</p>
                  </div>
                </div>

                {exp.highlights.length > 0 && (
                  <ul className="space-y-2 mt-4">
                    {exp.highlights.map((h, j) => (
                      <li
                        key={j}
                        className="text-sm text-muted-foreground font-light leading-relaxed flex gap-3"
                      >
                        <span className="text-accent mt-1.5 shrink-0">—</span>
                        {h}
                      </li>
                    ))}
                  </ul>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
