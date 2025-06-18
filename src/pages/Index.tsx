
import React from 'react';
import { useConfig } from '@/hooks/useConfig';
import { usePageConfig } from '@/hooks/usePageConfig';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import WhyChooseUs from '@/components/WhyChooseUs';
import Services from '@/components/Services';
import Products from '@/components/Products';
import Certificates from '@/components/Certificates';
import Infrastructure from '@/components/Infrastructure';
import Process from '@/components/Process';
import QualityAssurance from '@/components/QualityAssurance';
import Awards from '@/components/Awards';
import CSR from '@/components/CSR';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';

const Index = () => {
  const { config, loading, error } = useConfig();
  const { config: productsConfig } = usePageConfig('products');

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-amber-600"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-red-600 mb-4">Error Loading Configuration</h1>
          <p className="text-gray-600">{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Header config={config} />
      <Hero config={config} />
      <WhyChooseUs config={config} />
      <Services config={config} />
      <Products products={productsConfig?.products} />
      <Certificates config={config} />
      <Infrastructure config={config} />
      <Process config={config} />
      <QualityAssurance />
      <Awards config={config} />
      <CSR config={config} />
      <FAQ config={config} />
      <Footer config={config} />
    </div>
  );
};

export default Index;
