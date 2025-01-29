import React from 'react';
import { motion } from 'framer-motion';
import { Award, Calendar, ExternalLink } from 'lucide-react';

const certifications = [
  {
    title: 'Data Science Professional Certificate',
    issuer: 'IBM',
    date: 'January 2024',
    image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&w=800&q=80',
    description: 'Comprehensive data science program covering machine learning, data analysis, and visualization.',
    skills: ['Python', 'Machine Learning', 'Data Analysis', 'SQL', 'Data Visualization'],
    credential: 'https://www.credential.net/abc123',
  },
  {
    title: 'Machine Learning Specialization',
    issuer: 'Stanford Online',
    date: 'December 2023',
    image: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=800&q=80',
    description: 'Advanced machine learning concepts including supervised learning, neural networks, and deep learning.',
    skills: ['Neural Networks', 'Deep Learning', 'TensorFlow', 'Scikit-learn'],
    credential: 'https://www.coursera.org/verify/abc123',
  },
  // Add more certifications
];

const CertificationsPage = () => {
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
          Certifications & Achievements
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              <div className="relative h-48">
                <motion.img
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="flex items-center gap-2 text-white"
                  >
                    <Award className="h-6 w-6" />
                    <span className="font-semibold">{cert.issuer}</span>
                  </motion.div>
                </div>
              </div>
              
              <div className="p-6">
                <h2 className="text-xl font-bold mb-2">{cert.title}</h2>
                <div className="flex items-center text-gray-600 mb-4">
                  <Calendar className="h-4 w-4 mr-2" />
                  {cert.date}
                </div>
                <p className="text-gray-600 mb-4">{cert.description}</p>
                
                <div className="mb-6">
                  <h3 className="font-semibold mb-2">Skills Covered:</h3>
                  <div className="flex flex-wrap gap-2">
                    {cert.skills.map((skill, skillIndex) => (
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
                
                <motion.a
                  href={cert.credential}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  className="inline-flex items-center gap-2 text-primary hover:text-primary-dark transition-colors"
                >
                  <ExternalLink className="h-4 w-4" />
                  View Credential
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default CertificationsPage;