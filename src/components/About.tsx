import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';

const About = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1
    }
  };

  return (
    <section id="about" ref={ref} className="py-20 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div
            variants={itemVariants}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
              About Me
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 mx-auto"></div>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              variants={itemVariants}
              className="space-y-6"
            >
              <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                I'm a front-end focused fullstack developer with strong skills in 
                <span className="text-blue-600 dark:text-blue-400 font-medium"> Vue.js</span>, 
                <span className="text-blue-600 dark:text-blue-400 font-medium"> React.js</span>, and 
                <span className="text-blue-600 dark:text-blue-400 font-medium"> Next.js</span>.
              </p>
              
              <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                Passionate about building seamless UI/UX, optimizing performance, and working on 
                impactful projects in the education space. I believe in writing clean, maintainable 
                code that delivers exceptional user experiences.
              </p>
              
              <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                Currently pursuing <span className="font-medium">M.Sc. Computer Science</span> at 
                Anna University and hold a <span className="font-medium">B.Sc. in Chemistry</span>. 
                This unique background gives me a analytical approach to problem-solving in web development.
              </p>

              <motion.div
                whileHover={{ scale: 1.02 }}
                className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-slate-800 dark:to-slate-700 rounded-xl"
              >
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">
                  What I'm passionate about:
                </h3>
                <ul className="space-y-2 text-slate-600 dark:text-slate-300">
                  <li>• Creating intuitive and accessible user interfaces</li>
                  <li>• Performance optimization and best practices</li>
                  <li>• Collaborative development and code quality</li>
                  <li>• Continuous learning and staying updated with latest tech</li>
                </ul>
              </motion.div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="relative"
            >
              <motion.div
                animate={{ 
                  rotate: [0, 5, -5, 0],
                  scale: [1, 1.02, 1]
                }}
                transition={{ 
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="relative z-10 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-2xl p-8 shadow-2xl"
              >
                <div className="text-white space-y-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-2xl font-bold">3+</h3>
                      <p className="text-blue-100">Years Experience</p>
                    </div>
                    <div className="text-right">
                      <h3 className="text-2xl font-bold">50+</h3>
                      <p className="text-blue-100">Projects Completed</p>
                    </div>
                  </div>
                  
                  <div className="border-t border-blue-300 pt-6">
                    <h4 className="text-lg font-semibold mb-3">Current Focus</h4>
                    <div className="space-y-2 text-sm text-blue-100">
                      <div>🎯 Advanced React Patterns</div>
                      <div>🚀 Performance Optimization</div>
                      <div>🤝 Team Collaboration</div>
                      <div>🎨 Modern UI/UX Design</div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Background decorative elements */}
              <div className="absolute top-4 right-4 w-72 h-72 bg-purple-300/20 dark:bg-purple-500/10 rounded-full filter blur-3xl"></div>
              <div className="absolute bottom-4 left-4 w-72 h-72 bg-blue-300/20 dark:bg-blue-500/10 rounded-full filter blur-3xl"></div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;