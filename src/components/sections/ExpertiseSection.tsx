
import React, { useState } from 'react';
import { ChevronRight, ChevronLeft } from 'lucide-react';

interface ExpertiseSectionProps {
  section: {
    title: string;
    subtitle: string;
    description?: string;
    sectors: Array<{
      id: string;
      name: string;
      description: string;
      image: string;
      applications: string[];
    }>;
  };
}

const ExpertiseSection: React.FC<ExpertiseSectionProps> = ({ section }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  if (!section?.sectors?.length) {
    console.warn('ExpertiseSection: No sectors provided');
    return null;
  }

  const activeSector = section.sectors[activeIndex];

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % section.sectors.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + section.sectors.length) % section.sectors.length);
  };

  return (
    <section className="py-24 bg-gradient-to-br from-blue-50 to-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-72 h-72 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-600 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
            {section.title}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {section.subtitle}
          </p>
          {section.description && (
            <p className="text-lg text-gray-500 max-w-4xl mx-auto mt-4">
              {section.description}
            </p>
          )}
        </div>

        {/* Main Content Area */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
          {/* Left Sidebar - Sector Navigation */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Industries</h3>
            {section.sectors.map((sector, index) => (
              <button
                key={sector.id}
                onClick={() => setActiveIndex(index)}
                className={`w-full text-left p-4 rounded-lg transition-all duration-300 ${
                  index === activeIndex
                    ? 'bg-blue-600 text-white shadow-lg transform scale-105'
                    : 'bg-white text-gray-700 hover:bg-blue-50 border border-gray-200'
                }`}
              >
                <div className="font-semibold">{sector.name}</div>
              </button>
            ))}
          </div>

          {/* Center - Active Sector Details */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden transform transition-all duration-500 hover:scale-105">
              {/* Image Header */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={activeSector.image}
                  alt={activeSector.name}
                  className="w-full h-full object-cover transition-transform duration-700"
                  key={activeSector.id}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-6 left-6">
                  <h3 className="text-3xl font-bold text-white mb-2">
                    {activeSector.name}
                  </h3>
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <p className="text-gray-600 text-lg leading-relaxed mb-8">
                  {activeSector.description}
                </p>

                {/* Applications Grid */}
                <div>
                  <h4 className="text-xl font-bold text-blue-600 mb-6 uppercase tracking-wide">
                    Key Applications
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {activeSector.applications.map((app, appIndex) => (
                      <div
                        key={appIndex}
                        className="flex items-center p-3 bg-blue-50 rounded-lg border border-blue-100 hover:bg-blue-100 transition-colors"
                      >
                        <div className="w-3 h-3 bg-blue-500 rounded-full mr-4 flex-shrink-0"></div>
                        <span className="text-gray-700 font-medium">{app}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation Controls */}
            <div className="flex justify-center mt-8 space-x-4">
              <button
                onClick={prevSlide}
                className="p-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors shadow-lg"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <div className="flex items-center space-x-2">
                {section.sectors.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all ${
                      index === activeIndex ? 'bg-blue-600 scale-125' : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>
              <button
                onClick={nextSlide}
                className="p-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors shadow-lg"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExpertiseSection;
