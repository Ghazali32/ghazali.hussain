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
      "Built and optimized Computer Vision Image Segmentation models",
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
      "Built a healthcare app with React Native, Node.js on AWS EC2 with FCM notifications",
      "Automated media uploads to AWS S3 with Lambda for file conversion",
    ],
  },
  {
    company: "Basira Studio",
    role: "SDE — Web",
    period: "Oct 2024 — Jul 2025",
    location: "New Delhi",
    highlights: [
      "Developed web apps including zairawasim.com and an orphanage website",
      "Built full-stack blog admin panel and CRM system using MERN stack",
    ],
  },
];

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-28 px-6 md:px-16 lg:px-24" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="flex items-center gap-4 mb-14"
        >
          <span className="text-xs font-medium tracking-[0.25em] uppercase text-muted-foreground">03</span>
          <div className="accent-line" />
          <span className="text-xs font-medium tracking-[0.25em] uppercase text-muted-foreground">Experience</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="section-heading mb-16"
        >
          Where I've worked
        </motion.h2>

        <div className="relative">
          <div className="absolute left-[3px] top-1.5 bottom-1.5 w-px bg-border" />
          <div className="space-y-14">
            {experiences.map((exp, i) => (
              <motion.div
                key={`${exp.company}-${exp.role}`}
                initial={{ opacity: 0, x: -15 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.12 }}
                className="relative pl-8"
              >
                <div className="absolute left-0 top-1.5 timeline-dot" />
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-2">
                  <div>
                    <h3 className="text-base font-medium">{exp.role}</h3>
                    <p className="text-sm text-muted-foreground mt-0.5">{exp.company}</p>
                  </div>
                  <div className="text-xs text-muted-foreground mt-1 sm:mt-0 sm:text-right shrink-0">
                    <p>{exp.period}</p>
                    <p className="mt-0.5">{exp.location}</p>
                  </div>
                </div>
                {exp.highlights.length > 0 && (
                  <ul className="space-y-1.5 mt-3">
                    {exp.highlights.map((h, j) => (
                      <li key={j} className="text-xs text-muted-foreground font-light leading-relaxed flex gap-2">
                        <span className="mt-0.5 shrink-0">—</span>
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
