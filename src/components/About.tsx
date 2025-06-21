import React from 'react';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const About = () => {
  const { ref, controls } = useScrollAnimation();

  const experiences = [
    {
      year: 'June 2024 - August 2024',
      title: 'Java FullStack Developer',
      company: 'LTIMindtree',
      description: [
        'Led the development and maintenance of Java web applications using Spring Boot and Angular, supporting core business modules for enterprise users.',
        'Optimized application modules (EDU‐HUB, Mobile Hub), reducing page load times and improving system responsiveness.'
      ]
    },
    {
      year: 'June-2023 - June 2024',
      title: 'Java Developer',
      company: 'Infodia Technologies Pvt. Ltd.',
      description: [
        'Worked as a Java Developer focusing on building robust backend services and APIs.',
        'Collaborated with cross-functional teams to design, develop, and deploy scalable web applications using Java, Spring Boot, and RESTful APIs.',
        'Implemented best practices for code quality, testing, and performance optimization.'
      ]
    },
    {
      year: 'FEB 2023 - June 2023',
      title: 'Intern',
      company: 'LTIMindtree',
      description: [
        'Maintained and updated legacy Java and Angular code to enhance stability and support ongoing business operations.',
        'Orchestrated backend services and REST APIs with Spring Boot to add new functionality as per project requirements.',
        'Applied theoretical knowledge to real‐world tasks, enhancing code quality and problem‐solving abilities.'
      ]
    },    
    {
      year: '2019 - 2023',
      title: 'Computer Science Graduate',
      company: 'Lovely Professional University', 
      description: [
        'Graduated with a Bachelor\'s degree, specializing in software engineering and web development.',
        'Achieved a CGPA of 8.02, demonstrating consistent academic excellence and strong technical foundation.',
        'Actively participated in coding competitions, technical workshops, and collaborative projects to enhance practical skills.'
      ]
    }
  ];

  const certificates = [
    {
      title: 'IIT‐M Pravartak Certified Full Stack Development',
      issuer: 'GUVI HCL Tech ',
      year: '2025',
      link:'https://drive.google.com/file/d/1e2d5WtdvsIGPzRk58mG_vdJkXTm9fqLP/view?usp=sharing',
      image: '/download.png'
    },
    {
      title: 'Data Structures and Algorithms – GeeksForGeeks',
      issuer: 'GeeksForGeeks',
      year: '2022',
      link: 'https://drive.google.com/file/d/176PO0AXqIxBoFnp4hfVCTscRkScq972T/view?usp=sharing',
      image: '/gfg.jpeg'
    },
    {
      title: 'Java Programming – Hackerrank',
      issuer: 'Hackerrank',
      year: '2024',
      link: 'https://www.hackerrank.com/certificates/5aadf69e1804',
      image: './hackerrank.jpeg'
    },
    {
      title: 'SQL (Basic) – Hackerrank',
      issuer: 'Hackerrank',
      year: '2024',
      link: 'https://www.hackerrank.com/certificates/5aadf69e1804',
      image: './hackerrank.jpeg'
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800">
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
            About <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Passionate developer with a love for creating innovative solutions and beautiful user experiences
          </p>
        </motion.div>

       
        {/* Modern About Card Section */}
        <motion.div
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.2 } }
          }}
          className="flex flex-col md:flex-row items-center justify-center gap-8 mb-16"
        >
          <motion.div
            initial="hidden"
            animate={controls}
            variants={{
              hidden: { opacity: 0, scale: 0.95 },
              visible: { opacity: 1, scale: 1, transition: { duration: 0.7 } }
            }}
            className="relative bg-gradient-to-br from-purple-600/80 to-pink-600/80 rounded-3xl shadow-2xl p-8 md:p-12 w-full md:w-2/3 flex flex-col md:flex-row items-center"
          >
            <img
              src="/profile.jpg"
              alt="Profile"
              className="w-32 h-32 rounded-full border-4 border-white shadow-lg object-cover mb-6 md:mb-0 md:mr-10"
            />
            <div>
              <h3 className="text-3xl font-bold text-white mb-2">Nishant Mahto</h3>
              <p className="text-lg text-white/90 mb-4">
          Full Stack Developer & Problem Solver
              </p>
              <div className="flex flex-wrap gap-3 mb-4">
          <span className="bg-white/20 text-white px-3 py-1 rounded-full text-sm font-medium">Java</span>
          <span className="bg-white/20 text-white px-3 py-1 rounded-full text-sm font-medium">React</span>
          <span className="bg-white/20 text-white px-3 py-1 rounded-full text-sm font-medium">Nodejs</span>
          <span className="bg-white/20 text-white px-3 py-1 rounded-full text-sm font-medium">MongoDB</span>
          <span className="bg-white/20 text-white px-3 py-1 rounded-full text-sm font-medium">SQL</span>
          <span className="bg-white/20 text-white px-3 py-1 rounded-full text-sm font-medium">SpringBoot</span>
              </div>
              <p className="text-white/80">
          I specialize in building scalable web applications and APIs, blending backend robustness with modern frontend experiences. I love learning new technologies and collaborating on impactful projects.
              </p>
              <div className="mt-6 flex gap-4">
          <a
            href="mailto:nishant@example.com"
            className="bg-white text-purple-700 font-semibold px-5 py-2 rounded-full shadow hover:bg-gray-100 transition"
          >
            Contact Me
          </a>
          <a
            href="https://www.linkedin.com/in/nishantkumar"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/20 text-white font-semibold px-5 py-2 rounded-full border border-white/30 hover:bg-white/30 transition"
          >
            LinkedIn
          </a>
              </div>
            </div>
          </motion.div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Experience Timeline */}
          <motion.div
            initial="hidden"
            animate={controls}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0, transition: { duration: 0.8, delay: 0.4 } }
            }}
          >
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
              My Journey
            </h3>
            <div className="relative">
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-600 to-pink-600"></div>
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial="hidden"
                  animate={controls}
                  variants={{
                    hidden: { opacity: 0, x: -30 },
                    visible: { 
                      opacity: 1, 
                      x: 0, 
                      transition: { duration: 0.5, delay: index * 0.2 + 0.6 } 
                    }
                  }}
                  className="relative pl-12 pb-8"
                >
                  <div className="absolute left-2 w-4 h-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full transform -translate-x-1/2"></div>
                  <div className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <div className="text-sm text-purple-600 dark:text-purple-400 font-semibold mb-1">
                      {exp.year}
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                      {exp.title}
                    </h4>
                    <div className="text-gray-600 dark:text-gray-400 font-medium mb-2">
                      {exp.company}
                    </div>
                    <p className="text-gray-600 dark:text-gray-400">
                        <ul className="list-disc list-inside space-y-1">
                        {exp.description.map((item, idx) => (
                          <li key={idx}>{item}</li>
                        ))}
                        </ul>
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Certificates */}
          <motion.div
            initial="hidden"
            animate={controls}
            variants={{
              hidden: { opacity: 0, x: 50 },
              visible: { opacity: 1, x: 0, transition: { duration: 0.8, delay: 0.4 } }
            }}
          >
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
              Certifications
            </h3>
            <div className="space-y-6">
              {certificates.map((cert, index) => (
                <motion.div
                  key={index}
                  initial="hidden"
                  animate={controls}
                  variants={{
                    hidden: { opacity: 0, rotateY: -15 },
                    visible: { 
                      opacity: 1, 
                      rotateY: 0, 
                      transition: { duration: 0.5, delay: index * 0.2 + 0.6 } 
                    }
                  }}
                  whileHover={{ 
                    rotateY: 5,
                    scale: 1.02,
                    transition: { duration: 0.3 }
                  }}
                  className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform-gpu perspective-1000"
                >
                  <div className="flex items-center space-x-4">
                    <img
                      src={cert.image}
                      alt={cert.title}
                      className="w-16 h-16 rounded-lg object-cover"
                    />
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 block focus:outline-none focus:ring-2 focus:ring-purple-600 rounded"
                    >
                      <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-1">
                        {cert.title}
                      </h4>
                      <p className="text-gray-600 dark:text-gray-400 mb-1">
                        {cert.issuer}
                      </p>
                      <p className="text-sm text-purple-600 dark:text-purple-400 font-semibold">
                        {cert.year}
                      </p>
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Personal Info */}
            <motion.div
              initial="hidden"
              animate={controls}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 1 } }
              }}
              className="mt-8 bg-white dark:bg-gray-900 rounded-lg p-6 shadow-lg"
            >
              <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                When I'm not coding...
              </h4>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                I enjoy exploring new technologies, contributing to open-source projects, 
                and sharing knowledge with the developer community. I'm also passionate 
                about photography, hiking, and discovering new coffee shops around the city.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;