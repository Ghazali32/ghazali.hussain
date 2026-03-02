import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-28 px-6 md:px-16 lg:px-24" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="flex items-center gap-4 mb-14"
        >
          <span className="text-xs font-medium tracking-[0.25em] uppercase text-muted-foreground">01</span>
          <div className="accent-line" />
          <span className="text-xs font-medium tracking-[0.25em] uppercase text-muted-foreground">About</span>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-14">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="section-heading"
          >
            Building the future
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-col justify-center space-y-4"
          >
            <p className="text-muted-foreground leading-relaxed font-light text-lg
            ">
              I'm a Senior Software Engineer at HCLTech with a B.Tech in Computer Science
              from Jamia Hamdard University. I specialize in building robust, scalable
              applications using modern technologies.
            </p>
            <p className="text-muted-foreground leading-relaxed font-light text-lg">
              From Responsible AI evaluation frameworks to Computer Vision models,
              healthcare apps to CRM systems — I thrive on solving complex problems
              and shipping impactful products.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
