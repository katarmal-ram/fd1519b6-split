
import React from 'react';
import { Award, Clock, Cog, Wrench, Truck, Headphones } from 'lucide-react';

interface WhyChooseUsProps {
  config: any;
}

const iconMap = {
  award: Award,
  clock: Clock,
  cog: Cog,
  wrench: Wrench,
  truck: Truck,
  headphones: Headphones,
};

const WhyChooseUs: React.FC<WhyChooseUsProps> = ({ config }) => {
  if (!config) return null;

  const { whyChooseUs } = config;

  // Handle both old structure (reasons) and new structure (items)
  const items = whyChooseUs?.items || whyChooseUs?.reasons || [];

  if (!items || items.length === 0) {
    console.warn('WhyChooseUs: No items provided');
    return null;
  }

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            {whyChooseUs.title}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {whyChooseUs.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((reason: any) => {
            const IconComponent = iconMap[reason.icon as keyof typeof iconMap];
            
            return (
              <div
                key={reason.id}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 group"
              >
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mb-6 group-hover:bg-amber-200 transition-colors">
                  <IconComponent className="w-8 h-8 text-amber-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  {reason.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {reason.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
