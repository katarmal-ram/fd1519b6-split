
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface ServicesProps {
  config: any;
}

const Services: React.FC<ServicesProps> = ({ config }) => {
  if (!config) return null;

  const { services } = config;

  if (!services || !services.items) {
    console.warn('Services data or items missing:', services);
    return null;
  }

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            {services.title}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {services.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.items.map((service: any) => (
            <Card key={service.id} className="hover:shadow-lg transition-shadow duration-300 overflow-hidden">
              <div className="relative">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
              </div>
              
              <CardHeader>
                <CardTitle className="text-xl text-gray-800">
                  {service.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent>
                <p className="text-gray-600 mb-6">
                  {service.description}
                </p>
                
                {service.capabilities && service.capabilities.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {service.capabilities.map((capability: string, index: number) => (
                      <Badge key={index} variant="secondary" className="bg-amber-100 text-amber-800 text-xs">
                        {capability}
                      </Badge>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
