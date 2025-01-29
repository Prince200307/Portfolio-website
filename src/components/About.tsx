import React from 'react';
import { Code2, Database, Terminal, Brain } from 'lucide-react';

const skills = [
  {
    category: 'Programming Languages',
    items: ['Python', 'C++', 'SQL', 'JavaScript'],
    icon: <Code2 className="h-6 w-6" />,
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    category: 'Data Science',
    items: ['Machine Learning', 'Data Analysis', 'Data Visualization', 'Web Scraping'],
    icon: <Database className="h-6 w-6" />,
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    category: 'Tools & Technologies',
    items: ['Linux', 'Git', 'HTML/CSS', 'Matplotlib', 'Scikit learn', 'Pandas', 'NumPy'],
    icon: <Terminal className="h-6 w-6" />,
    gradient: 'from-green-500 to-emerald-500',
  },
  {
    category: 'Soft Skills',
    items: ['Problem Solving', 'Communication', 'Public Speaking', 'Project Planning'],
    icon: <Brain className="h-6 w-6" />,
    gradient: 'from-orange-500 to-yellow-500',
  },
];

const About = () => {
  return (
    <section id="about" className="py-24 md:py-32 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50/50 to-transparent"></div>
      
      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-16 slide-in">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">About Me</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
        </div>
        
        <div className="max-w-3xl mx-auto mb-20">
          <div className="glass-card p-8 rounded-2xl space-y-6 slide-in">
            <p className="text-gray-600 leading-relaxed text-lg">
              I am Prince Kumar, an aspiring Data Scientist and Machine Learning enthusiast pursuing a 
              B.Tech in Computer Science. I am skilled in analyzing complex datasets, building predictive 
              models, and automating processes using Python, C++, SQL, and Linux.
            </p>
            <p className="text-gray-600 leading-relaxed text-lg">
              Through internships at Keen & Able Computers Pvt. Ltd. and PC TECHNO, I gained hands-on 
              experience in Linux system administration, IT hardware management, and technical support. 
              Virtual internships with British Airways and Accenture provided practical exposure to web 
              scraping, predictive modeling, feature engineering, and data visualization, helping 
              organizations optimize customer experience and strategic decisions.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="skill-card group"
            >
              <div className="relative p-6 rounded-2xl bg-white shadow-lg overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-br ${skill.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                
                <div className="relative">
                  <div className="flex items-center mb-6">
                    <div className={`p-3 rounded-xl bg-gradient-to-br ${skill.gradient} text-white transform transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3`}>
                      {skill.icon}
                    </div>
                    <h3 className="text-xl font-semibold ml-3">{skill.category}</h3>
                  </div>
                  
                  <ul className="space-y-3">
                    {skill.items.map((item, itemIndex) => (
                      <li
                        key={itemIndex}
                        className="text-gray-600 flex items-center transform transition-transform duration-300 hover:translate-x-2"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mr-2"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;