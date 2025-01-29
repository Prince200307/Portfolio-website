import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'Student Data Analysis',
    description: 'Conducted an in-depth exploratory data analysis on student scores and their dependencies, such as parental education, birth order, and extracurricular activities.',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80',
    technologies: ['Python', 'Pandas', 'Matplotlib', 'Seaborn', 'Statistical Analysis'],
    gradient: 'from-purple-600 to-pink-600',
    github: 'https://github.com/Prince200307/Detailed-student-score-analysis',
    demo: 'https://github.com/Prince200307/Detailed-student-score-analysis/blob/main/StudentAnalysis.ipynb',
    details: [
      'Analyzed correlations between student performance and various factors',
      'Created comprehensive visualizations to present findings',
      'Performed statistical tests to validate hypotheses',
      'Generated actionable insights for educational institutions',
      'Developed a predictive model for student performance'
    ]
  },
  {
    title: 'Voting System Interface',
    description: 'Designed and developed a C++ program to automate election processes, including voter registration, candidate management, and secure vote casting with authentication mechanisms.',
    image: 'https://images.unsplash.com/photo-1540910419892-4a36d2c3266c?auto=format&fit=crop&w=800&q=80',
    technologies: ['C++', 'OOP', 'File Handling', 'Data Structures', 'Authentication'],
    gradient: 'from-green-600 to-emerald-600',
    github: 'https://github.com/Prince200307/Voting-System',
    demo: 'https://github.com/Prince200307/Voting-System/blob/main/Voting_system.cpp',
    details: [
      'Implemented secure user authentication system',
      'Created efficient data structures for vote storage',
      'Developed real-time vote counting mechanism',
      'Added audit trail functionality',
      'Built user-friendly command-line interface'
    ]
  },
  {
    title: 'British Airways – Data Science Virtual Experience',
    description: 'Developed a comprehensive data analysis pipeline for British Airways customer review data. The project involved web scraping customer reviews, performing sentiment analysis, and building a Random Forest model to predict booking behavior with 85.52% accuracy.',
    image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=800&q=80',
    technologies: ['Python', 'BeautifulSoup', 'NLTK', 'Scikit-learn', 'Pandas', 'Random Forest'],
    gradient: 'from-blue-600 to-cyan-600',
    github: 'https://github.com/Prince200307/Prediction-Model-for-British-Airways',
    demo: 'https://github.com/Prince200307/Prediction-Model-for-British-Airways/blob/main/British%20Airways.ipynb',
    details: [
      'Implemented web scraping using BeautifulSoup to collect customer reviews',
      'Conducted sentiment analysis using NLTK to identify customer satisfaction trends',
      'Built and optimized a Random Forest model achieving 85.52% prediction accuracy',
      'Created interactive visualizations using Plotly and Seaborn',
      'Presented findings through a comprehensive Jupyter notebook'
    ]
  }
];

const ProjectsPage = () => {
  useEffect(() => {
    // Scroll to the top when the page is rendered
    scrollToTop();
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Optional: Use 'auto' for instant scrolling
    });
  };
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="pt-20 min-h-screen bg-gray-50"
    >
      <div className="container mx-auto px-4 py-16">
        <motion.h1
          initial={{ y: -20 }}
          animate={{ y: 0 }}
          className="text-4xl md:text-5xl font-bold text-center mb-16 gradient-text"
        >
          My Projects
        </motion.h1>

        <div className="space-y-16">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="relative overflow-hidden">
                  <motion.img
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="p-8">
                  <h2 className="text-2xl font-bold mb-4">{project.title}</h2>
                  <p className="text-gray-600 mb-6">{project.description}</p>
                  
                  <div className="mb-6">
                    <h3 className="font-semibold mb-2">Key Features:</h3>
                    <ul className="space-y-2">
                      {project.details.map((detail, i) => (
                        <motion.li
                          key={i}
                          initial={{ x: -20, opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          transition={{ delay: i * 0.1 }}
                          className="flex items-center text-gray-600"
                        >
                          <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                          {detail}
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <motion.span
                        key={techIndex}
                        whileHover={{ scale: 1.1 }}
                        className={`px-3 py-1 rounded-full text-sm bg-gradient-to-r ${project.gradient} text-white`}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                  
                  <div className="flex gap-4">
                    <a
                      href={project.github}
                      className="btn-primary flex items-center gap-2"
                    >
                      <Github className="h-5 w-5" />
                      View Code
                    </a>
                    <a
                      href={project.demo}
                      className="btn-secondary flex items-center gap-2"
                    >
                      <ExternalLink className="h-5 w-5" />
                      Live Demo
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectsPage;