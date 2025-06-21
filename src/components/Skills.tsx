import { useState } from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Wrench, Palette, Server } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Skills = () => {
  const { ref, controls } = useScrollAnimation();
  const [activeFilter, setActiveFilter] = useState('all');

  const skillCategories = [
    {
      id: 'languages',
      title: 'Programming Languages',
      icon: Code,
      color: 'from-blue-500 to-cyan-500',
      skills: [
        { name: 'Java', level: 90 },
        { name: 'JavaScript', level: 85 },
        { name: 'Python', level: 75 },
      ]
    },
    {
      id: 'frontend',
      title: 'Frontend',
      icon: Palette,
      color: 'from-blue-500 to-cyan-500',
      skills: [
        { name: 'React', level: 85 },
        { name: 'TypeScript', level: 65 },
        { name: 'Tailwind CSS', level: 90 },
        { name: 'HTML5', level: 85 },
      ]
    },
    {
      id: 'backend',
      title: 'Backend',
      icon: Server,
      color: 'from-green-500 to-emerald-500',
      skills: [
        { name: 'Node.js', level: 85 },
        { name: 'Mongoose', level: 80 },
        { name: 'Express.js', level: 85 },
        { name: 'Springboot', level: 75 },
      ]
    },
    {
      id: 'database',
      title: 'Database',
      icon: Database,
      color: 'from-purple-500 to-violet-500',
      skills: [
        { name: 'MongoDB', level: 85 },
        { name: 'PostgreSQL', level: 80 },
        { name: 'SQL', level: 70 },
        { name: 'Firebase', level: 75 },
      ]
    },
    {
      id: 'tools',
      title: 'Tools',
      icon: Wrench,
      color: 'from-orange-500 to-red-500',
      skills: [
        { name: 'Git', level: 85 },
        { name: 'Vscode', level: 90 },
        { name: 'Postman', level: 80 },
        { name: 'Intellij Idea', level: 85 },
      ]
    }
  ];

  const filters = [
    { id: 'all', label: 'All Skills' },
    { id: 'languages', label: 'Programming Languages' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'backend', label: 'Backend' },
    { id: 'database', label: 'Database' },
    { id: 'tools', label: 'Tools' },
  ];

  const filteredCategories = activeFilter === 'all' 
    ? skillCategories 
    : skillCategories.filter(cat => cat.id === activeFilter);

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
        }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
        My <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Skills</span>
        </h2>
        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
        A comprehensive overview of my technical expertise and proficiency levels
        </p>
      </motion.div>

      {/* Filter Buttons */}
      <motion.div
        initial="hidden"
        animate={controls}
        variants={{
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.2 } }
        }}
        className="flex flex-wrap justify-center gap-4 mb-12"
      >
        {filters.map((filter) => (
        <motion.button
          key={filter.id}
          onClick={() => setActiveFilter(filter.id)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
          activeFilter === filter.id
            ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg'
            : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:shadow-md'
          }`}
        >
          {filter.label}
        </motion.button>
        ))}
      </motion.div>

      {/* Skills Grid */}
      <motion.div
        layout
        className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 ${
        filteredCategories.length === 1 && filteredCategories[0].id === 'tools'
          ? 'justify-items-center'
          : ''
        }`}
      >
        {filteredCategories.map((category, index) => {
        // Center the Tools card if it's the only card
        if (
          filteredCategories.length === 1 &&
          category.id === 'tools'
        ) {
          return (
          <motion.div
            key={category.id}
            layout
            initial="hidden"
            animate={controls}
            variants={{
            hidden: { opacity: 0, rotateY: -90 },
            visible: {
              opacity: 1,
              rotateY: 0,
              transition: { duration: 0.8, delay: index * 0.1 }
            }
            }}
            whileHover={{
            scale: 1.05,
            transition: { duration: 0.3 }
            }}
            className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform-gpu perspective-1000 col-span-1 md:col-span-2 lg:col-start-2"
          >
            <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${category.color} flex items-center justify-center mb-6 mx-auto`}>
            <category.icon size={32} className="text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-6">
            {category.title}
            </h3>
            <div className="space-y-4">
            {category.skills.map((skill, skillIndex) => (
              <motion.div
              key={skill.name}
              initial={{ opacity: 0, x: -20 }}
              animate={controls}
              variants={{
                hidden: { opacity: 0, x: -20 },
                visible: {
                opacity: 1,
                x: 0,
                transition: {
                  duration: 0.5,
                  delay: index * 0.1 + skillIndex * 0.1
                }
                }
              }}
              className="space-y-2"
              >
              <div className="flex justify-between items-center">
                <span className="text-gray-700 dark:text-gray-300 font-medium">
                {skill.name}
                </span>
                <span className="text-gray-500 dark:text-gray-400 text-sm">
                {skill.level}%
                </span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                <motion.div
                initial={{ width: 0 }}
                animate={controls}
                variants={{
                  hidden: { width: 0 },
                  visible: {
                  width: `${skill.level}%`,
                  transition: {
                    duration: 1,
                    delay: index * 0.1 + skillIndex * 0.1 + 0.5,
                    ease: "easeOut"
                  }
                  }
                }}
                className={`h-2 rounded-full bg-gradient-to-r ${category.color}`}
                />
              </div>
              </motion.div>
            ))}
            </div>
          </motion.div>
          );
        }

        // Default card rendering
        return (
          <motion.div
          key={category.id}
          layout
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0, rotateY: -90 },
            visible: {
            opacity: 1,
            rotateY: 0,
            transition: { duration: 0.8, delay: index * 0.1 }
            }
          }}
          whileHover={{
            scale: 1.05,
            transition: { duration: 0.3 }
          }}
          className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform-gpu perspective-1000"
          >
          <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${category.color} flex items-center justify-center mb-6 mx-auto`}>
            <category.icon size={32} className="text-white" />
          </div>
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-6">
            {category.title}
          </h3>
          <div className="space-y-4">
            {category.skills.map((skill, skillIndex) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, x: -20 }}
              animate={controls}
              variants={{
              hidden: { opacity: 0, x: -20 },
              visible: {
                opacity: 1,
                x: 0,
                transition: {
                duration: 0.5,
                delay: index * 0.1 + skillIndex * 0.1
                }
              }
              }}
              className="space-y-2"
            >
              <div className="flex justify-between items-center">
              <span className="text-gray-700 dark:text-gray-300 font-medium">
                {skill.name}
              </span>
              <span className="text-gray-500 dark:text-gray-400 text-sm">
                {skill.level}%
              </span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
              <motion.div
                initial={{ width: 0 }}
                animate={controls}
                variants={{
                hidden: { width: 0 },
                visible: {
                  width: `${skill.level}%`,
                  transition: {
                  duration: 1,
                  delay: index * 0.1 + skillIndex * 0.1 + 0.5,
                  ease: "easeOut"
                  }
                }
                }}
                className={`h-2 rounded-full bg-gradient-to-r ${category.color}`}
              />
              </div>
            </motion.div>
            ))}
          </div>
          </motion.div>
        );
        })}
      </motion.div>
      </div>
    </section>
  );
};

export default Skills;