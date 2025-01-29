import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Building, Award } from 'lucide-react';

const internships = [
  {
    company: 'Keen & Able Computers Pvt. Ltd.',
    role: 'Linux Intern',
    duration: '3 months',
    location: 'On-site',
    description: 'Comprehensive internship focused on Linux system administration and configuration management.',
    image: 'https://images.unsplash.com/photo-1629654297299-c8506221ca97?auto=format&fit=crop&w=800&q=80',
    responsibilities: [
      'Installed and configured various Linux distributions',
      'Managed user accounts and permissions',
      'Implemented security protocols and firewall configurations',
      'Conducted system monitoring and performance optimization',
      'Developed shell scripts for process automation'
    ],
    skills: ['Linux Administration', 'Shell Scripting', 'System Security', 'Network Configuration'],
    achievements: [
      'Reduced system downtime by 30% through proactive monitoring',
      'Automated daily backup procedures saving 2 hours of manual work',
      'Received excellence award for best presentation skills'
    ]
  },
  {
    company: 'PC TECHNO',
    role: 'IT Hardware and Networking Intern',
    duration: '2 months',
    location: 'On-site',
    description: 'Hands-on experience in IT hardware management, networking, and technical support.',
    image: 'https://images.unsplash.com/photo-1588508065123-287b28e013da?auto=format&fit=crop&w=800&q=80',
    responsibilities: [
      'Managed IT hardware procurement and rentals',
      'Provided technical support to clients',
      'Configured and maintained network infrastructure',
      'Performed hardware troubleshooting and repairs',
      'Documented technical procedures and solutions'
    ],
    skills: ['Hardware Troubleshooting', 'Network Configuration', 'Technical Support', 'Documentation'],
    achievements: [
      'Resolved 95% of client technical issues within 24 hours',
      'Implemented new inventory management system',
      'Trained junior staff in hardware maintenance'
    ]
  },
  {
    company: 'Accenture',
    role: 'Data Analytics and Visualization',
    duration: '1 month',
    location: 'Virtual',
    description: 'Strategic data analysis and visualization project for social media client.',
    image: 'https://images.unsplash.com/photo-1661956602116-aa6865609028?auto=format&fit=crop&w=800&q=80',
    responsibilities: [
      'Analyzed multiple datasets for insights',
      'Created interactive dashboards',
      'Developed strategic recommendations',
      'Prepared and delivered presentations',
      'Collaborated with virtual team members'
    ],
    skills: ['Data Analytics', 'Visualization', 'Strategic Planning', 'Presentation Skills'],
    achievements: [
      'Delivered actionable insights leading to 20% engagement increase',
      'Created comprehensive visualization dashboard',
      'Received recognition for best presentation'
    ]
  },
  {
    company: 'British Airways',
    role: 'Data Science Virtual Experience',
    duration: '1 month',
    location: 'Virtual',
    description: 'Virtual internship focused on data analysis and predictive modeling for customer behavior.',
    image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=800&q=80',
    responsibilities: [
      'Analyzed customer review data using web scraping',
      'Built predictive models for booking behavior',
      'Created data visualizations and reports',
      'Presented findings to stakeholders',
      'Developed automated data collection scripts'
    ],
    skills: ['Python', 'Machine Learning', 'Data Analysis', 'Web Scraping', 'Visualization'],
    achievements: [
      'Achieved 85.52% accuracy in booking prediction model',
      'Identified key factors affecting customer satisfaction',
      'Developed reusable data analysis pipeline'
    ]
  }
];

const InternshipsPage = () => {
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
          Professional Experience
        </motion.h1>

        <div className="space-y-16">
          {internships.map((internship, index) => (
            <motion.div
              key={index}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-1">
                  <div className="relative h-full">
                    <motion.img
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                      src={internship.image}
                      alt={internship.company}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <div className="flex items-center gap-2 mb-2">
                        <Building className="h-5 w-5" />
                        <span className="font-semibold">{internship.company}</span>
                      </div>
                      <div className="flex items-center gap-4 text-sm">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          {internship.duration}
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          {internship.location}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="lg:col-span-2 p-8">
                  <h2 className="text-2xl font-bold mb-4">{internship.role}</h2>
                  <p className="text-gray-600 mb-6">{internship.description}</p>
                  
                  <div className="space-y-6">
                    <div>
                      <h3 className="font-semibold mb-3 flex items-center gap-2">
                        <span className="w-1 h-6 bg-primary rounded-full"></span>
                        Key Responsibilities
                      </h3>
                      <ul className="space-y-2">
                        {internship.responsibilities.map((resp, i) => (
                          <motion.li
                            key={i}
                            initial={{ x: -20, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: i * 0.1 }}
                            className="flex items-center text-gray-600"
                          >
                            <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                            {resp}
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold mb-3 flex items-center gap-2">
                        <span className="w-1 h-6 bg-primary rounded-full"></span>
                        Skills Developed
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {internship.skills.map((skill, skillIndex) => (
                          <motion.span
                            key={skillIndex}
                            whileHover={{ scale: 1.1 }}
                            className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                          >
                            {skill}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold mb-3 flex items-center gap-2">
                        <span className="w-1 h-6 bg-primary rounded-full"></span>
                        Key Achievements
                      </h3>
                      <ul className="space-y-2">
                        {internship.achievements.map((achievement, i) => (
                          <motion.li
                            key={i}
                            initial={{ x: -20, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: i * 0.1 }}
                            className="flex items-center text-gray-600"
                          >
                            <Award className="h-4 w-4 text-primary mr-2" />
                            {achievement}
                          </motion.li>
                        ))}
                      </ul>
                    </div>
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

export default InternshipsPage;