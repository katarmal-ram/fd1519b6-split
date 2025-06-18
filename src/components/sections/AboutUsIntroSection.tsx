
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle } from 'lucide-react';

interface AboutUsIntroSectionProps {
  section: {
    title: string;
    subtitle: string;
    description: string;
    image: string;
    highlights: string[];
  };
}

const AboutUsIntroSection: React.FC<AboutUsIntroSectionProps> = ({ section }) => {
  if (!section) {
    console.warn('AboutUsIntroSection: No section data provided');
    return null;
  }

  return (
    <section className="py-24 bg-gradient-to-br from-white to-blue-50 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-400 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 bg-blue-500 rounded-full animate-bounce"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-blue-300 rounded-full animate-ping"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content Side */}
          <div className="order-2 lg:order-1 space-y-8">
            {/* Animated Title */}
            <div className="animate-fade-in">
              <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                <span className="block transform transition-all duration-700 hover:scale-105">
                  {section.title}
                </span>
              </h2>
              <p className="text-2xl text-blue-600 font-semibold mb-8 transform transition-all duration-500 hover:text-blue-700">
                {section.subtitle}
              </p>
            </div>

            {/* Animated Description */}
            <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <p className="text-lg text-gray-700 leading-relaxed">
                {section.description}
              </p>
            </div>
            
            {/* Animated Highlights Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-fade-in" style={{ animationDelay: '0.4s' }}>
              {section.highlights.map((highlight, index) => (
                <div 
                  key={index} 
                  className="group flex items-start space-x-4 p-4 bg-white rounded-xl shadow-sm border border-blue-100 hover:shadow-lg hover:border-blue-300 transition-all duration-300 transform hover:-translate-y-1"
                  style={{ animationDelay: `${0.5 + index * 0.1}s` }}
                >
                  <div className="flex-shrink-0 mt-1">
                    <CheckCircle className="w-6 h-6 text-blue-600 group-hover:text-blue-700 transition-colors" />
                  </div>
                  <span className="text-gray-800 font-medium group-hover:text-gray-900 transition-colors">
                    {highlight}
                  </span>
                </div>
              ))}
            </div>

            {/* Animated CTA Button */}
            <div className="animate-fade-in" style={{ animationDelay: '0.8s' }}>
              <Link to="/about">
                <Button className="group bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                  Learn More About Us
                  <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </Link>
            </div>
          </div>
          
          {/* Image Side */}
          <div className="order-1 lg:order-2 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="relative group">
              {/* Main Image */}
              <div className="relative overflow-hidden rounded-2xl shadow-2xl transform transition-all duration-700 group-hover:scale-105 group-hover:rotate-1">
                <img
                  src={section.image}
                  alt="About Our Company"
                  className="w-full h-96 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent"></div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-blue-600 rounded-full opacity-80 animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-blue-400 rounded-full opacity-60 animate-bounce"></div>
              
              {/* Decorative Border */}
              <div className="absolute inset-0 rounded-2xl border-4 border-blue-200 transform scale-105 opacity-50 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          </div>
        </div>
      </div>

      <style>
        {`
          @keyframes fade-in {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          
          .animate-fade-in {
            animation: fade-in 0.8s ease-out forwards;
            opacity: 0;
          }
        `}
      </style>
    </section>
  );
};

export default AboutUsIntroSection;
