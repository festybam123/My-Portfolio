import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          <motion.div variants={itemVariants} className="space-y-6">
            <h2 className="text-4xl font-bold text-gray-900">About Me</h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                I'm a passionate full-stack developer with over 4 years of experience 
                building web applications that solve real-world problems. I love working 
                with modern technologies and creating seamless user experiences.
              </p>
              <p>
                My journey started with a curiosity about how websites work, which led me 
                to dive deep into both frontend and backend development. I enjoy the 
                challenge of turning complex requirements into elegant, scalable solutions.
              </p>
              <p>
                When I'm not coding, you can find me exploring new technologies, 
                contributing to open-source projects, or sharing knowledge with the 
                developer community through blog posts and mentoring.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-6 pt-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Frontend Focus</h3>
                <p className="text-gray-600 text-sm">
                  Creating responsive, accessible, and performant user interfaces 
                  with modern frameworks and best practices.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Backend Expertise</h3>
                <p className="text-gray-600 text-sm">
                  Building robust APIs, managing databases, and ensuring 
                  scalable architecture for complex applications.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            variants={itemVariants}
            className="relative"
          >
            <div className="aspect-square bg-gradient-to-br from-blue-400 to-purple-600 rounded-2xl p-8 text-white">
              <div className="h-full flex flex-col justify-center space-y-6">
                <div className="text-center">
                  <div className="text-4xl font-bold">4+</div>
                  <div className="text-blue-100">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold">30+</div>
                  <div className="text-blue-100">Projects Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold">99.9%</div>
                  <div className="text-blue-100">Client Satisfaction</div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
