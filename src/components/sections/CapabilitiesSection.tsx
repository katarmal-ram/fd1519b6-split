
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface CapabilitiesSectionProps {
  section: {
    title: string;
    subtitle: string;
    items: Array<{
      id: string;
      title: string;
      description: string;
      metrics: Array<{
        label: string;
        value: string;
      }>;
    }>;
  };
}

const CapabilitiesSection: React.FC<CapabilitiesSectionProps> = ({ section }) => {
  if (!section) {
    console.warn('CapabilitiesSection: No section data provided');
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
          {section.items.map((capability) => (
            <Card key={capability.id} className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-xl text-gray-800">
                  {capability.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-6">
                  {capability.description}
                </p>
                
                <div className="space-y-3">
                  {capability.metrics.map((metric, index) => (
                    <div key={index} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-b-0">
                      <span className="text-gray-700 font-medium">{metric.label}</span>
                      <span className="text-amber-600 font-bold">{metric.value}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CapabilitiesSection;
