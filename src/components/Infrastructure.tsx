
import React from 'react';

interface InfrastructureProps {
  config: any;
}

const Infrastructure: React.FC<InfrastructureProps> = ({ config }) => {
  if (!config) return null;

  const { infrastructure } = config;

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            {infrastructure.title}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {infrastructure.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {infrastructure.facilities.map((facility: any, index: number) => (
            <div
              key={facility.id}
              className={`bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 ${
                index === 1 ? 'lg:scale-105' : ''
              }`}
            >
              <img
                src={facility.image}
                alt={facility.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-semibold text-gray-800">
                    {facility.title}
                  </h3>
                  <span className="bg-amber-100 text-amber-800 px-2 py-1 rounded text-sm font-medium">
                    {facility.area}
                  </span>
                </div>
                <p className="text-gray-600">
                  {facility.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Infrastructure;
