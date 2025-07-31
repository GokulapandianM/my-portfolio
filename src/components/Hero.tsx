import React, { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Download, Github, Linkedin, Mail } from "lucide-react";

const Hero = () => {
  const [isDownloading, setIsDownloading] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  const handleResumeDownload = async () => {
    setIsDownloading(true);

    try {
      const link = document.createElement("a");
      link.href = "/gokulapandian-resume-update.pdf";
      link.download = "Gokulapandian_M_Resume.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error("Download failed:", error);
    } finally {
      setTimeout(() => setIsDownloading(false), 1000);
    }
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-300/20 dark:bg-blue-500/10 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-300/20 dark:bg-purple-500/10 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-cyan-300/20 dark:bg-cyan-500/10 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-500"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center"
        >
          <motion.div variants={itemVariants} className="mb-6">
            <motion.div
              animate={{
                scale: [1, 1.02, 1],
                rotate: [0, 1, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                repeatType: "reverse",
              }}
              className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 p-1"
            >
              <div className="w-full h-full rounded-full bg-white dark:bg-slate-800 flex items-center justify-center">
                <span className="text-4xl font-bold text-slate-800 dark:text-white">
                  GM
                </span>
              </div>
            </motion.div>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl font-bold text-slate-900 dark:text-white mb-4"
          >
            <motion.span
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-300% bg-clip-text text-transparent"
            >
              Gokulapandian M
            </motion.span>
          </motion.h1>

          <motion.div
            variants={itemVariants}
            className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 mb-2"
          >
            <motion.span
              animate={{ opacity: [0, 1, 1, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                times: [0, 0.3, 0.7, 1],
              }}
              className="inline-block"
            >
              Front-End Developer
            </motion.span>
            <motion.span
              animate={{ opacity: [0, 0, 1, 1, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                delay: 2,
                times: [0, 0.3, 0.5, 0.7, 1],
              }}
              className="inline-block"
            >
              / Fullstack Developer
            </motion.span>
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto mb-6"
          >
            "Building clean, scalable, and user-centric web interfaces"
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex items-center justify-center text-slate-500 dark:text-slate-400 mb-8"
          >
            <MapPin size={20} className="mr-2" />
            <span>Chennai, India</span>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleResumeDownload}
              disabled={isDownloading}
              className="px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-lg font-medium shadow-lg hover:shadow-xl transition-shadow duration-300 flex items-center disabled:opacity-70"
            >
              <Download size={20} className="mr-2" />
              {isDownloading ? "Downloading..." : "Download Resume"}
            </motion.button>

            <div className="flex items-center gap-4">
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                href="mailto:gokulapandianm@gmail.com"
                className="p-3 bg-white dark:bg-slate-800 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400"
              >
                <Mail size={20} />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                href="https://www.linkedin.com/in/gokulapandian-m-a0963022a/"
                target="_blank"
                className="p-3 bg-white dark:bg-slate-800 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400"
              >
                <Linkedin size={20} />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                href="https://github.com/GokulapandianM"
                target="_blank"
                className="p-3 bg-white dark:bg-slate-800 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400"
              >
                <Github size={20} />
              </motion.a>
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            animate={{ y: [0, 10, 0] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="text-slate-400 dark:text-slate-600"
          >
            <div className="w-6 h-10 border-2 border-current rounded-full mx-auto relative">
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="w-1 h-3 bg-current rounded-full absolute left-1/2 top-2 transform -translate-x-1/2"
              ></motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
