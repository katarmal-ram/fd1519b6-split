
import React from 'react';
import { CheckCircle, Shield, Award, Microscope } from 'lucide-react';

const QualityAssurance: React.FC = () => {
  const qualityFeatures = [
    {
      icon: Shield,
      title: "Quality Management System",
      description: "ISO 9001:2015 certified quality management system ensuring consistent product quality and customer satisfaction."
    },
    {
      icon: Microscope,
      title: "Advanced Testing Lab",
      description: "State-of-the-art testing laboratory with precision instruments for material testing and quality verification."
    },
    {
      icon: CheckCircle,
      title: "Multi-Stage Inspection",
      description: "Rigorous quality checks at every stage of production from raw material to finished product."
    },
    {
      icon: Award,
      title: "International Standards",
      description: "Compliance with international standards including ASTM, DIN, JIS, and customer-specific requirements."
    }
  ];

  return (
    <section id="quality" className="py-20 bg-gradient-to-br from-amber-50 to-orange-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Quality Assurance Process
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Our commitment to excellence through rigorous quality control and continuous improvement
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {qualityFeatures.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mb-6">
                  <IconComponent className="w-8 h-8 text-amber-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8">
          <h3 className="text-2xl font-bold text-center text-gray-800 mb-8">
            Our Quality Promise
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-amber-600 mb-2">100%</div>
              <div className="text-gray-600">Product Inspection</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-amber-600 mb-2">Zero</div>
              <div className="text-gray-600">Defect Tolerance</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-amber-600 mb-2">24/7</div>
              <div className="text-gray-600">Quality Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QualityAssurance;
