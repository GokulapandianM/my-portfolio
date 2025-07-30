import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';

const Skills = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skills = [
    { name: 'JavaScript', level: 95, category: 'Frontend' },
    { name: 'TypeScript', level: 90, category: 'Frontend' },
    { name: 'React.js', level: 95, category: 'Frontend' },
    { name: 'Next.js', level: 88, category: 'Frontend' },
    { name: 'Vue.js', level: 92, category: 'Frontend' },
    { name: 'Nuxt.js', level: 85, category: 'Frontend' },
    { name: 'Tailwind CSS', level: 93, category: 'Frontend' },
    { name: 'HTML5', level: 98, category: 'Frontend' },
    { name: 'CSS3', level: 95, category: 'Frontend' },
    { name: 'Node.js', level: 75, category: 'Backend' },
    { name: 'REST APIs', level: 80, category: 'Backend' },
    { name: 'GraphQL', level: 70, category: 'Backend' },
    { name: 'Git', level: 90, category: 'Tools' },
    { name: 'Bitbucket', level: 85, category: 'Tools' },
    { name: 'Zustand', level: 88, category: 'Tools' },
    { name: 'Redux', level: 85, category: 'Tools' },
    { name: 'Prompt Engineering', level: 60, category: 'AI/ML' },
  ];

  const categories = ['Frontend', 'Backend', 'Tools', 'AI/ML'];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  const getCategoryColor = (category: string) => {
    const colors = {
      'Frontend': 'from-blue-500 to-cyan-500',
      'Backend': 'from-green-500 to-emerald-500',
      'Tools': 'from-purple-500 to-violet-500',
      'AI/ML': 'from-orange-500 to-red-500'
    };
    return colors[category as keyof typeof colors] || 'from-gray-500 to-gray-600';
  };

  return (
    <section id="skills" ref={ref} className="py-20 bg-slate-50 dark:bg-slate-800">
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
              Skills & Technologies
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 mx-auto mb-6"></div>
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              A comprehensive overview of my technical expertise and proficiency levels
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {categories.map((category, index) => (
              <motion.div
                key={category}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                className="bg-white dark:bg-slate-900 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-4 text-center">
                  {category}
                </h3>
                <div className="space-y-4">
                  {skills.filter(skill => skill.category === category).map((skill, skillIndex) => (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                          {skill.name}
                        </span>
                        <span className="text-sm text-slate-500 dark:text-slate-400">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                          transition={{ 
                            duration: 1,
                            delay: 0.5 + (index * 0.1) + (skillIndex * 0.1),
                            ease: "easeOut"
                          }}
                          className={`h-2 rounded-full bg-gradient-to-r ${getCategoryColor(category)}`}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            variants={itemVariants}
            className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl p-8 text-white text-center"
          >
            <h3 className="text-2xl font-bold mb-4">
              Always Learning, Always Growing
            </h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Technology evolves rapidly, and so do I. I'm constantly exploring new frameworks, 
              tools, and best practices to stay at the forefront of web development.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {['React 19', 'AI Integration', 'Web3', 'Mobile Development'].map((item) => (
                <motion.span
                  key={item}
                  whileHover={{ scale: 1.1 }}
                  className="px-4 py-2 bg-white/20 rounded-full text-sm backdrop-blur-sm"
                >
                  {item}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;