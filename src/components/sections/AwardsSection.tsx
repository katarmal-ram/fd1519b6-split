
import React from 'react';
import { Trophy } from 'lucide-react';

interface AwardsSectionProps {
  section: {
    title: string;
    subtitle: string;
    items: Array<{
      id: string;
      title: string;
      year: string;
      authority: string;
      description: string;
    }>;
  };
}

const AwardsSection: React.FC<AwardsSectionProps> = ({ section }) => {
  if (!section?.items?.length) {
    console.warn('AwardsSection: No items provided');
    return null;
  }

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            {section.title}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {section.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {section.items.map((award) => (
            <div
              key={award.id}
              className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 text-center"
            >
              <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Trophy className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {award.title}
              </h3>
              <p className="text-blue-600 font-medium mb-2">
                {award.year}
              </p>
              <p className="text-gray-600 text-sm mb-4">
                {award.authority}
              </p>
              <p className="text-gray-700">
                {award.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AwardsSection;
