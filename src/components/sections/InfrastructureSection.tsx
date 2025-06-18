
import React from 'react';
import { Cog, Settings, Zap } from 'lucide-react';

interface InfrastructureSectionProps {
  section: {
    title: string;
    subtitle: string;
    items: Array<{
      id: string;
      title: string;
      description: string;
      area?: string;
      capacity?: string;
      specifications?: string;
      image: string;
    }>;
  };
}

const InfrastructureSection: React.FC<InfrastructureSectionProps> = ({ section }) => {
  if (!section?.items?.length) {
    console.warn('InfrastructureSection: No items provided');
    return null;
  }

  const getIcon = (index: number) => {
    const icons = [Cog, Settings, Zap];
    const IconComponent = icons[index % icons.length];
    return <IconComponent className="w-6 h-6 text-amber-600" />;
  };

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

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {section.items.map((item, index) => (
            <div
              key={item.id}
              className={`bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 ${
                index === 1 ? 'lg:scale-105' : ''
              }`}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center mb-4">
                  {getIcon(index)}
                  <h3 className="text-xl font-semibold text-gray-800 ml-3">
                    {item.title}
                  </h3>
                </div>
                
                <p className="text-gray-600 mb-4">
                  {item.description}
                </p>

                <div className="space-y-2">
                  {item.area && (
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-500">Area:</span>
                      <span className="bg-amber-100 text-amber-800 px-2 py-1 rounded text-sm font-medium">
                        {item.area}
                      </span>
                    </div>
                  )}
                  {item.capacity && (
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-500">Capacity:</span>
                      <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm font-medium">
                        {item.capacity}
                      </span>
                    </div>
                  )}
                  {item.specifications && (
                    <div className="mt-2">
                      <span className="text-sm text-gray-500">Specifications:</span>
                      <p className="text-sm text-gray-700 mt-1">{item.specifications}</p>
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

export default InfrastructureSection;
