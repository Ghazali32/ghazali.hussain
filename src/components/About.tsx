import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-32 px-6 md:px-16 lg:px-24" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="flex items-center gap-4 mb-16"
        >
          <span className="text-sm font-medium tracking-[0.2em] uppercase text-muted-foreground">
            01
          </span>
          <div className="accent-line" />
          <span className="text-sm font-medium tracking-[0.2em] uppercase text-muted-foreground">
            About
          </span>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="section-heading mb-6">
              Building the
              <br />
              <span className="italic text-accent">future</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.35 }}
            className="flex flex-col justify-center"
          >
            <p className="text-muted-foreground leading-relaxed mb-6 font-light">
              I'm a Senior Software Engineer at HCLTech with a B.Tech in Computer Science 
              from Jamia Hamdard University. I specialize in building robust, scalable 
              applications using modern technologies.
            </p>
            <p className="text-muted-foreground leading-relaxed font-light">
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
