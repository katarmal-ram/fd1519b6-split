
import React from 'react';
import { CheckCircle, Shield } from 'lucide-react';

interface CompanyOverviewSectionProps {
  section: {
    title: string;
    subtitle: string;
    image: string;
    items: Array<{
      id: string;
      content: string;
      highlights: string[];
    }>;
    metrics?: Array<{
      icon: string;
      label: string;
      value: string;
    }>;
  };
}

const CompanyOverviewSection: React.FC<CompanyOverviewSectionProps> = ({ section }) => {
  if (!section) {
    console.warn('CompanyOverviewSection: No section data provided');
    return null;
  }

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {section.title}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {section.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
          <div className="order-2 lg:order-1">
            <div className="prose prose-lg max-w-none">
              {section.items.map((item) => (
                <p key={item.id} className="text-gray-700 text-lg leading-relaxed mb-8">
                  {item.content}
                </p>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
              {section.items[0]?.highlights.slice(0, 4).map((highlight, index) => (
                <div key={index} className="flex items-start space-x-3 p-4 bg-white rounded-lg shadow-sm border border-gray-100">
                  <CheckCircle className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-800 font-medium">{highlight}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <div className="relative">
              <img
                src={section.image}
                alt="Company Overview"
                className="w-full h-96 object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>

        {/* Key Metrics Section - Only show if metrics are provided */}
        {section.metrics && section.metrics.length > 0 && (
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-16">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-12">
              Our Impact in Numbers
            </h3>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {section.metrics.map((metric, index) => (
                <div key={index} className="text-center group">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-100 rounded-full mb-4 group-hover:bg-amber-200 transition-colors duration-300">
                    <div className="w-8 h-8 text-amber-600 font-bold text-lg">{metric.icon}</div>
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">{metric.value}</div>
                  <div className="text-gray-600 font-medium">{metric.label}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Additional Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {section.items[0]?.highlights.slice(4).map((highlight, index) => (
            <div key={index} className="flex items-center space-x-4 p-6 bg-white rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow duration-300">
              <Shield className="w-8 h-8 text-amber-600 flex-shrink-0" />
              <span className="text-gray-800 font-medium text-lg">{highlight}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompanyOverviewSection;
