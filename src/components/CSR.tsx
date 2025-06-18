
import React from 'react';
import { Heart, TreePine, GraduationCap, Stethoscope } from 'lucide-react';

interface CSRProps {
  config: any;
}

const iconMap = {
  education: GraduationCap,
  environment: TreePine,
  healthcare: Stethoscope,
  'skill-development': Heart,
};

const CSR: React.FC<CSRProps> = ({ config }) => {
  if (!config) return null;

  const { csr } = config;

  return (
    <section className="py-20 bg-gradient-to-br from-green-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            {csr.title}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {csr.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {csr.initiatives.map((initiative: any) => {
            const IconComponent = iconMap[initiative.id as keyof typeof iconMap] || Heart;
            
            return (
              <div
                key={initiative.id}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <IconComponent className="w-8 h-8 text-green-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">
                      {initiative.title}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {initiative.description}
                    </p>
                    <div className="bg-green-50 px-4 py-2 rounded-lg">
                      <span className="text-green-800 font-medium">
                        Impact: {initiative.impact}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CSR;
