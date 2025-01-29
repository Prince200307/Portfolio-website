import React from 'react';
import { GraduationCap, Calendar } from 'lucide-react';

const education = [
  {
    institution: 'Ch. Ranbir Singh State Institute of Engineering and Technology',
    degree: 'Bachelor of Technology',
    major: 'Computer Science',
    duration: 'Expected June 2025',
    grade: 'Cumulative Percentage: 75%',
    courses: [
      'Data Analysis',
      'Data Science',
      'Software Engineering',
      'Operating Systems',
      'Algorithms',
      'Artificial Intelligence',
    ],
  },
  {
    institution: 'Poorna Prajna Public School',
    degree: 'Class 12th',
    major: 'PCM',
    duration: '2021',
    grade: 'Percentage: 80%',
    courses: ['Physics', 'Chemistry', 'Mathematics'],
  },
];

const Education = () => {
  return (
    <section id="education" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Education</h2>
        
        <div className="max-w-3xl mx-auto space-y-8">
          {education.map((edu, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex items-start">
                <div className="bg-blue-100 p-3 rounded-lg">
                  <GraduationCap className="h-6 w-6 text-blue-600" />
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-semibold mb-2">{edu.institution}</h3>
                  <div className="flex items-center text-gray-600 mb-2">
                    <Calendar className="h-4 w-4 mr-1" />
                    {edu.duration}
                  </div>
                  <div className="mb-4">
                    <p className="text-lg text-blue-600">{edu.degree}</p>
                    <p className="text-gray-600">Major in {edu.major}</p>
                    <p className="text-gray-600">{edu.grade}</p>
                  </div>
                  {edu.courses && (
                    <div>
                      <h4 className="font-semibold mb-2">Relevant Coursework:</h4>
                      <div className="flex flex-wrap gap-2">
                        {edu.courses.map((course, courseIndex) => (
                          <span
                            key={courseIndex}
                            className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm"
                          >
                            {course}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;