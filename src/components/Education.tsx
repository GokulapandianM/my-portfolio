import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';

const Education = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const education = [
    {
      degree: 'Master of Science (Computer Science)',
      institution: 'Anna University',
      location: 'Chennai, India',
      period: '2024 - 2026',
      status: 'Expected 2026',
      description: 'Specializing in advanced algorithms, software engineering, and modern web technologies.',
      highlights: ['Advanced Data Structures', 'Software Engineering', 'Web Technologies', 'Database Systems']
    },
    {
      degree: 'B.Sc. Chemistry',
      institution: 'The American College, Madurai',
      location: 'Madurai, India',
      period: '2018 - 2021',
      status: 'Completed',
      description: 'Strong foundation in analytical thinking and problem-solving methodologies.',
      highlights: ['Analytical Chemistry', 'Research Methodology', 'Laboratory Techniques', 'Scientific Writing']
    }
  ];

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
    <section id="education" ref={ref} className="py-20 bg-slate-50 dark:bg-slate-800">
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
              Education
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 mx-auto mb-6"></div>
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              My academic journey and continuous learning path
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-600 to-cyan-600 rounded-full hidden lg:block"></div>

            <div className="space-y-12">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className={`flex items-center ${
                    index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  } flex-col lg:gap-12`}
                >
                  {/* Timeline dot */}
                  <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white dark:bg-slate-900 border-4 border-blue-600 rounded-full z-10"></div>

                  {/* Content card */}
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className={`w-full lg:w-5/12 ${
                      index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'
                    }`}
                  >
                    <div className="bg-white dark:bg-slate-900 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                      <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
                        <div className={`flex items-center ${index % 2 === 0 ? 'lg:flex-row-reverse' : ''}`}>
                          <GraduationCap className="text-blue-600 mr-2" size={24} />
                          <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                            edu.status === 'Expected 2026' 
                              ? 'bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400'
                              : 'bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400'
                          }`}>
                            {edu.status}
                          </span>
                        </div>
                      </div>

                      <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                        {edu.degree}
                      </h3>
                      
                      <h4 className="text-xl font-semibold text-blue-600 dark:text-blue-400 mb-3">
                        {edu.institution}
                      </h4>

                      <div className={`flex items-center mb-4 ${
                        index % 2 === 0 ? 'lg:justify-end' : 'lg:justify-start'
                      } justify-start flex-wrap gap-4`}>
                        <div className="flex items-center text-slate-500 dark:text-slate-400">
                          <Calendar size={16} className="mr-2" />
                          <span>{edu.period}</span>
                        </div>
                        <div className="flex items-center text-slate-500 dark:text-slate-400">
                          <MapPin size={16} className="mr-2" />
                          <span>{edu.location}</span>
                        </div>
                      </div>

                      <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
                        {edu.description}
                      </p>

                      <div className={`${index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'}`}>
                        <h5 className="font-semibold text-slate-900 dark:text-white mb-3">
                          Key Highlights:
                        </h5>
                        <div className={`flex flex-wrap gap-2 ${
                          index % 2 === 0 ? 'lg:justify-end' : 'lg:justify-start'
                        }`}>
                          {edu.highlights.map((highlight, hIndex) => (
                            <motion.span
                              key={hIndex}
                              whileHover={{ scale: 1.05 }}
                              className="px-3 py-1 bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 text-sm rounded-lg"
                            >
                              {highlight}
                            </motion.span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>

                  {/* Spacer for the other side */}
                  <div className="hidden lg:block w-5/12"></div>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            variants={itemVariants}
            className="mt-16 text-center"
          >
            <div className="bg-gradient-to-r from-slate-800 to-slate-700 dark:from-slate-700 dark:to-slate-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">
                Continuous Learning Journey
              </h3>
              <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
                Beyond formal education, I believe in lifelong learning. I regularly take online courses, 
                attend webinars, and participate in developer communities to stay updated with the latest 
                technologies and best practices.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="px-4 py-2 bg-white/10 rounded-lg backdrop-blur-sm"
                >
                  🎓 Online Courses
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="px-4 py-2 bg-white/10 rounded-lg backdrop-blur-sm"
                >
                  📚 Technical Books
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="px-4 py-2 bg-white/10 rounded-lg backdrop-blur-sm"
                >
                  💬 Developer Communities
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="px-4 py-2 bg-white/10 rounded-lg backdrop-blur-sm"
                >
                  🚀 Side Projects
                </motion.div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;