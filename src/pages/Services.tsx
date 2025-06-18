
import React from 'react';
import { usePageConfig } from '@/hooks/usePageConfig';
import { useConfig } from '@/hooks/useConfig';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import SectionRenderer from '@/components/SectionRenderer';
import Footer from '@/components/Footer';
import LoadingScreen from '@/components/LoadingScreen';

const Services = () => {
  const { config: pageConfig, loading: pageLoading, error: pageError } = usePageConfig('services');
  const { config: globalConfig, loading: globalLoading } = useConfig();

  if (pageLoading || globalLoading) {
    return <LoadingScreen title={pageConfig?.meta?.title || "Our Services"} />;
  }

  if (pageError) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-red-600 mb-4">Error Loading Page</h1>
          <p className="text-gray-600">{pageError}</p>
        </div>
      </div>
    );
  }

  // Fixed section order for Services page
  const sectionOrder = [
    'services',
    'capabilities',
    'manufacturing-process',
    'cta'
  ];

  return (
    <div className="min-h-screen">
      <Header config={globalConfig} />
      {pageConfig?.hero && <Hero config={{ hero: pageConfig.hero }} />}
      
      {sectionOrder.map((sectionKey) => {
        const section = pageConfig?.sections?.[sectionKey];
        if (!section) return null;
        
        return (
          <SectionRenderer 
            key={sectionKey} 
            sectionKey={sectionKey} 
            section={section}
          />
        );
      })}
      
      <Footer config={globalConfig} />
    </div>
  );
};

export default Services;
