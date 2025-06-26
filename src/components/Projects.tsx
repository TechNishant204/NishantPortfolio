import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Projects = () => {
  const { ref, controls } = useScrollAnimation();
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const projects = [
    {
      id: 1,
      title: 'EduAssess- Online Application for Educational Assessment',
      description: 'A full-stack educational Assessment Application built using React, Node.js, ExpressJS and MongoDB.',
      shortDescription: 'Modern educational assessment platform.',
      image: '/1.png',
      images: ['/2.png', '/3.png', '/4.png', '/5.png', '/6.png', '/7.png'],
      tech: ['React', 'Node.js', 'MongoDB', 'ExpressJS', 'Tailwind CSS', 'JWT', 'Chart.js'],
      liveUrl: 'https://eduassess.netlify.app/',
      githubUrl: 'https://github.com/TechNishant204/EduAssess-Online-Assessment-Platform',
      challenges: 'Building secure login and handling results data.',
      solution: 'Used JWT for login and Chart.js for results.',
    },
    {
      id: 2,
      title: 'BookNest - Online Book Store',
      description: 'A full-stack online bookstore where users can explore, search, and purchase books across various categories with easy navigation and a modern interface.',
      shortDescription: 'Interactive and user-friendly online bookstore.',
      image: ["book-1.png", "book-2.png", "book-3.png", "book-4.png", "book-5.png"],
      images: ['/book-1.png','/book-2.png', '/book-3.png', '/book-4.png', '/book-5.png'],
      tech: ['React', 'Node.js', 'MongoDB', 'ExpressJS', 'Tailwind CSS', 'Firebase Authentication'],
      liveUrl: 'https://book-nest-store-frontend.vercel.app/',
      githubUrl: 'https://github.com/TechNishant204/BookNest-store-frontend',
      challenges: 'Implementing secure user authentication and maintaining smooth search and filter performance.',
      solution: 'Used Firebase for authentication and optimized frontend state management for seamless user experience.',
    },    
    {
      id: 3,
      title: 'Movie-Mania - Movie Search Application',
      description: 'A responsive app to search movies and view details using the OMDb API.',
      shortDescription: 'Movie search app with OMDb API.',
      image: '/m1.png',
      images: ['/m1.png', '/m2.png', '/m3.png'],
      tech: ['React', 'Axios', 'TailwindCSS', 'OmdbAPI'],
      liveUrl: 'https://movie-mania-hub.netlify.app/',
      githubUrl: 'https://github.com/TechNishant204/Movie-Mania-App',
      challenges: 'Fetching movie data and keeping UI responsive.',
      solution: 'Used Axios for API and TailwindCSS for layout.',
    },
    {
      id: 4,
      title: 'Brand-Bazaar - E-commerce Platform',
      description: 'A modern e-commerce platform with cart and product browsing.',
      shortDescription: 'E-commerce platform with cart.',
      image: '/b1.png',
      images: ['/b1.png', '/b2.png', '/b3.png', '/b4.png'],
      tech: ['React', 'TailwindCSS', 'Axios'],
      liveUrl: 'https://brandbazaar.netlify.app/',
      githubUrl: 'https://github.com/TechNishant204/brand-bazaar',
      challenges: 'Managing cart and keeping UI consistent.',
      solution: 'Used React state and TailwindCSS.',
    },
    {
      id: 5,
      title: 'Income Expense Tracker - Financial Management App',
      description: 'A simple app to track income and expenses using HTML, CSS, and JavaScript.',
      shortDescription: 'Track income and expenses easily.',
      image: '/i1.png',
      images: ['/i1.png', '/i2.png', '/i3.png'],
      tech: ['HTML', 'CSS', 'JS'],
      liveUrl: 'https://track-income-expenses.netlify.app/',
      githubUrl: 'https://github.com/TechNishant204/Income-Expense-Tracker',
      challenges: 'Accurate calculations and saving data.',
      solution: 'Used local storage and dynamic updates.',
    }
  ];

  const nextImage = () => {
    if (selectedProject !== null) {
      const project = projects[selectedProject];
      setCurrentImageIndex((prev) => (prev + 1) % project.images.length);
    }
  };

  const prevImage = () => {
    if (selectedProject !== null) {
      const project = projects[selectedProject];
      setCurrentImageIndex((prev) => (prev - 1 + project.images.length) % project.images.length);
    }
  };

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
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
            Featured <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            A showcase of my recent work and creative solutions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial="hidden"
              animate={controls}
              variants={{
                hidden: { opacity: 0, y: 50, rotateX: -15 },
                visible: { 
                  opacity: 1, 
                  y: 0, 
                  rotateX: 0,
                  transition: { duration: 0.8, delay: index * 0.2 } 
                }
              }}
              whileHover={{ 
                y: -10,
                rotateX: 5,
                transition: { duration: 0.3 }
              }}
              className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform-gpu perspective-1000"
            >
              <div className="relative overflow-hidden group">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object- transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex space-x-2">
                    <motion.a
                      href={project.liveUrl}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors"
                    >
                      <ExternalLink size={16} />
                    </motion.a>
                    <motion.a
                      href={project.githubUrl}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors"
                    >
                      <Github size={16} />
                    </motion.a>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {project.shortDescription}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <motion.button
                  onClick={() => {
                    setSelectedProject(index);
                    setCurrentImageIndex(0);
                  }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-2 rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
                >
                  View Details
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Project Modal */}
        <AnimatePresence>
          {selectedProject !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-white dark:bg-gray-800 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              >
                <div className="relative">
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="absolute top-4 right-4 z-10 p-2 bg-black/20 backdrop-blur-sm rounded-full text-white hover:bg-black/40 transition-colors"
                  >
                    <X size={20} />
                  </button>

                  {/* Image Carousel */}
                  <div className="relative h-64 md:h-80 overflow-hidden rounded-t-2xl">
                    <img
                      src={projects[selectedProject].images[currentImageIndex]}
                      alt={projects[selectedProject].title}
                      className="w-full h-full object-cover"
                    />
                    
                    {projects[selectedProject].images.length > 1 && (
                      <>
                        <button
                          onClick={prevImage}
                          className="absolute left-4 top-1/2 transform -translate-y-1/2 p-2 bg-black/20 backdrop-blur-sm rounded-full text-white hover:bg-black/40 transition-colors"
                        >
                          <ChevronLeft size={20} />
                        </button>
                        <button
                          onClick={nextImage}
                          className="absolute right-4 top-1/2 transform -translate-y-1/2 p-2 bg-black/20 backdrop-blur-sm rounded-full text-white hover:bg-black/40 transition-colors"
                        >
                          <ChevronRight size={20} />
                        </button>
                      </>
                    )}
                  </div>

                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                      {projects[selectedProject].title}
                    </h3>
                    
                    <p className="text-gray-600 dark:text-gray-400 mb-6">
                      {projects[selectedProject].description}
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                          Challenge
                        </h4>
                        <p className="text-gray-600 dark:text-gray-400">
                          {projects[selectedProject].challenges}
                        </p>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                          Solution
                        </h4>
                        <p className="text-gray-600 dark:text-gray-400">
                          {projects[selectedProject].solution}
                        </p>
                      </div>
                    </div>

                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                        Technologies Used
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {projects[selectedProject].tech.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-full text-sm font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex space-x-4">
                      <motion.a
                        href={projects[selectedProject].liveUrl}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-lg font-semibold text-center hover:shadow-lg transition-all duration-300"
                      >
                        View Live Demo
                      </motion.a>
                      <motion.a
                        href={projects[selectedProject].githubUrl}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex-1 bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white py-3 rounded-lg font-semibold text-center hover:shadow-lg transition-all duration-300"
                      >
                        View Code
                      </motion.a>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Projects;