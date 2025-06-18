
import React from 'react';

interface CertificatesProps {
  config: any;
}

const Certificates: React.FC<CertificatesProps> = ({ config }) => {
  if (!config) return null;

  const { certificates } = config;

  // Add safety check for certificates and items
  if (!certificates || !certificates.items) {
    console.warn('Certificates data or items missing:', certificates);
    return null;
  }

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            {certificates.title}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {certificates.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {certificates.items.map((cert: any) => (
            <div
              key={cert.id}
              className="bg-gray-50 p-6 rounded-xl text-center hover:shadow-lg transition-shadow duration-300"
            >
              <div className="w-24 h-24 mx-auto mb-4 bg-white rounded-full flex items-center justify-center shadow-md">
                <img src={cert.image} alt={cert.name} className="w-16 h-16 object-contain" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {cert.name}
              </h3>
              <p className="text-gray-600 text-sm">
                {cert.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
