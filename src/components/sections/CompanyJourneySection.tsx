
import React from 'react';

interface CompanyJourneySectionProps {
  section: {
    title: string;
    subtitle: string;
    items: Array<{
      year: string;
      title: string;
      description: string;
    }>;
  };
}

const CompanyJourneySection: React.FC<CompanyJourneySectionProps> = ({ section }) => {
  if (!section?.items?.length) {
    console.warn('CompanyJourneySection: No items provided');
    return null;
  }

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            {section.title}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {section.subtitle}
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-amber-200 transform md:-translate-x-1/2"></div>

            <div className="space-y-12">
              {section.items.map((milestone, index) => (
                <div
                  key={milestone.year}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-amber-600 rounded-full transform md:-translate-x-1/2 z-10"></div>
                  
                  {/* Content */}
                  <div className={`ml-12 md:ml-0 md:w-5/12 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                    <div className="bg-white p-6 rounded-xl shadow-md">
                      <div className="text-2xl font-bold text-amber-600 mb-2">
                        {milestone.year}
                      </div>
                      <h3 className="text-xl font-semibold text-gray-800 mb-3">
                        {milestone.title}
                      </h3>
                      <p className="text-gray-600">
                        {milestone.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyJourneySection;
