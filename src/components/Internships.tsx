import React from 'react';
import { Calendar, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';


const internships = [
  {
    company: 'Keen & Able Computers Pvt. Ltd.',
    role: 'Linux Intern',
    description: 'Acquired hands-on experience with installing, configuring, and working on Linux systems. Improved public speaking and presentation skills through regular engagements.',
    image: 'https://images.unsplash.com/photo-1629654297299-c8506221ca97?auto=format&fit=crop&w=800&q=80',
    duration: '3 months',
    location: 'On-site',
  },
  {
    company: 'British Airways',
    role: 'Data Science Virtual Experience',
    description: 'Scraped and analyzed customer review data to identify trends and improve customer experience. Built a Random Forest model with 85.52% accuracy to forecast booking behavior.',
    image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=800&q=80',
    duration: '1 month',
    location: 'Virtual',
  },
  {
    company: 'PC TECHNO',
    role: 'IT Hardware and Networking Intern',
    description: 'Managed IT hardware procurement and rentals, ensuring client satisfaction. Resolved hardware and networking issues, providing technical support to clients.',
    image: 'https://images.unsplash.com/photo-1588508065123-287b28e013da?auto=format&fit=crop&w=800&q=80',
    duration: '2 months',
    location: 'On-site',
  },
  {
    company: 'Accenture',
    role: 'Data Analytics and Visualization',
    description: 'Analyzed multiple datasets to uncover insights for a social media client. Delivered strategic recommendations via ppt and video presentations.',
    image: 'https://images.unsplash.com/photo-1661956602116-aa6865609028?auto=format&fit=crop&w=800&q=80',
    duration: '1 month',
    location: 'Virtual',
  },
];

const Internships = () => {
  return (
    <section id="internships" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Internships</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {internships.map((internship, index) => (
            <Link
                        to="/internships"
                      >
            <div
              key={index}
              className="bg-gray-50 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <img
                src={internship.image}
                alt={internship.company}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{internship.company}</h3>
                <h4 className="text-lg text-blue-600 mb-4">{internship.role}</h4>
                <div className="flex items-center space-x-4 mb-4 text-gray-600">
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    {internship.duration}
                  </div>
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 mr-1" />
                    {internship.location}
                  </div>
                </div>
                <p className="text-gray-600">{internship.description}</p>
              </div>
            </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Internships;