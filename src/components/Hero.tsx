import React from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';
import princePic from '../assets/Prince_pic.jpeg';

const Hero = () => {
  const scrollToNext = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen relative bg-gradient-to-br from-blue-50 via-white to-purple-50 animate-gradient overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMzQjgyRjYiIGZpbGwtb3BhY2l0eT0iMC4wNCI+PHBhdGggZD0iTTM2IDM0aDR2NGgtNHpNNDAgMzBoNHY0aC00ek0zNCAzMmg0djRoLTR6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-50"></div>
      </div>
      
      <div className="container mx-auto px-4 pt-32 pb-16 md:pt-40 md:pb-24 relative">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="md:w-1/2 space-y-8 slide-in">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl font-bold gradient-text">
                Aspiring Data
                <br />
                Scientist
              </h1>
              <h2 className="text-xl md:text-2xl text-gray-600 font-light">
                Machine Learning & Data Analytics Enthusiast
              </h2>
            </div>
            
            <p className="text-gray-600 text-lg leading-relaxed">
              Skilled in analyzing complex datasets, building predictive models, and automating processes 
              using Python, C++, SQL, and Linux. Passionate about transforming data into actionable 
              insights to drive business success.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#projects"
                className="group inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
              >
                View Projects
                <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="https://www.linkedin.com/in/prince-kumar-6040551a0/"
                className="group inline-flex items-center justify-center px-8 py-4 border-2 border-blue-600 text-blue-600 rounded-xl hover:bg-blue-50 transition-all duration-300 transform hover:scale-105"
              >
                Linkedin
              </a>
            </div>
          </div>
          
          <div className="md:w-1/2 flex justify-center">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl opacity-20 blur-lg animate-pulse"></div>
              <img
                src={princePic}
                alt="Profile Photo"
                className="rounded-2xl shadow-2xl max-w-md w-full animate-float relative"
              />
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button
            onClick={scrollToNext}
            className="p-2 rounded-full bg-white/80 shadow-lg hover:bg-white transition-colors"
            aria-label="Scroll to next section"
          >
            <ChevronDown className="h-6 w-6 text-blue-600" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;