
import React from 'react';
import { Trophy } from 'lucide-react';

interface AwardsProps {
  config: any;
}

const Awards: React.FC<AwardsProps> = ({ config }) => {
  if (!config) return null;

  const { awards } = config;

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            {awards.title}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {awards.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {awards.awards.map((award: any) => (
            <div
              key={award.id}
              className="bg-gradient-to-br from-amber-50 to-orange-50 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 text-center"
            >
              <div className="w-20 h-20 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Trophy className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {award.title}
              </h3>
              <p className="text-amber-600 font-medium mb-2">
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

export default Awards;
