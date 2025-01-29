import React from 'react';
import { Link } from 'react-router-dom';

const projects = [
  {
    title: 'British Airways – Data Science Virtual Experience',
    description: 'Scraped and analyzed customer review data to identify trends and improve customer experience. Built a Random Forest model with 85.52% accuracy to forecast booking behavior.',
    image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=800&q=80',
    technologies: ['Python', 'Web Scraping', 'Random Forest', 'Data Analysis'],
    gradient: 'from-blue-600 to-cyan-600',
  },
  {
    title: 'Student Data Analysis',
    description: 'Conducted an in-depth exploratory data analysis on student scores and their dependencies, such as parental education, birth order, and extracurricular activities.',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80',
    technologies: ['Python', 'Data Visualization', 'Statistical Analysis'],
    gradient: 'from-purple-600 to-pink-600',
  },
  {
    title: 'Voting System',
    description: 'Designed and developed a C++ program to automate election processes, including voter registration, candidate management, and secure vote casting with authentication mechanisms.',
    image: 'https://images.unsplash.com/photo-1540910419892-4a36d2c3266c?auto=format&fit=crop&w=800&q=80',
    technologies: ['C++', 'OOP', 'File Handling'],
    gradient: 'from-green-600 to-emerald-600',
  },
];

const Projects = () => {

  return (
    <section id="projects" className="py-24 md:py-32 bg-gray-50 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50"></div>
      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-16 slide-in">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">Projects</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Link
            to="/projects" 
          >
            <div key={index} className="project-card group">
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br opacity-60 group-hover:opacity-80 transition-opacity duration-300 z-10"></div>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transform transition-transform duration-300 group-hover:scale-110"
                  />
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-blue-600 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">{project.description}</p>

                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className={`px-3 py-1 rounded-full text-sm bg-gradient-to-r ${project.gradient} text-white transform transition-all duration-300 hover:scale-105`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex justify-between items-center">
                    <div className="flex space-x-4">
                    </div>
                  </div>
                </div>
              </div>
            </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
