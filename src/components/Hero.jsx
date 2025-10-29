import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Download, Code, Database, Globe } from "lucide-react";

export default function Hero() {
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
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const iconVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: { 
      scale: 1, 
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20,
      },
    },
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-8"
        >
          <motion.div variants={itemVariants} className="space-y-4">
            <motion.h1 
              className="text-5xl md:text-7xl font-serif text-blue-700"
              variants={itemVariants}
            >
              Festus Bamikole
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl text-gray-700"
              variants={itemVariants}
            >
             I'm A Full Stack Developer
            </motion.p>
          </motion.div>

          <motion.div 
            variants={itemVariants}
            className="flex justify-center space-x-8 my-8"
          >
            <motion.div variants={iconVariants} className="flex flex-col items-center space-y-2">
              <div className="p-4 bg-blue-100 rounded-full">
                <Code className="w-8 h-8 text-blue-600" />
              </div>
              <span className="text-sm text-gray-600">Frontend</span>
            </motion.div>
            <motion.div variants={iconVariants} className="flex flex-col items-center space-y-2">
              <div className="p-4 bg-green-100 rounded-full">
                <Database className="w-8 h-8 text-green-600" />
              </div>
              <span className="text-sm text-gray-600">Backend</span>
            </motion.div>
            <motion.div variants={iconVariants} className="flex flex-col items-center space-y-2">
              <div className="p-4 bg-purple-100 rounded-full">
                <Globe className="w-8 h-8 text-purple-600" />
              </div>
              <span className="text-sm text-gray-600">Full Stack</span>
            </motion.div>
          </motion.div>

          <motion.p 
            variants={itemVariants}
            className="text-lg text-gray-600 max-w-2xl mx-auto"
          >
            I create beautiful responsive web applications using modern technologies. 
            Passionate about clean code, user experience, and solving Any complex problems.
          </motion.p>

          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center space-x-2"
            >
              <Download size={20} />
              <span>Download Resume</span>
            </motion.button>
            
            <div className="flex space-x-4">
              <motion.a
                href="https://github.com/festybam123"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="p-3 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition-colors"
              >
                <Github size={20} />
              </motion.a>
              <motion.a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="p-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                <Linkedin size={20} />
              </motion.a>
              <motion.a
                href="mailto:festusbamikole2018@gmail.com"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="p-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
              >
                <Mail size={20} />
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
