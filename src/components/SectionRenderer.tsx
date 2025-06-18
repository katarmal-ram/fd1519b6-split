import React from 'react';
import WhyChooseUs from './WhyChooseUs';
import Services from './Services';
import Products from './Products';
import Certificates from './Certificates';
import FAQ from './FAQ';
import StatsSection from './sections/StatsSection';
import TestimonialsSection from './sections/TestimonialsSection';
import CompanyOverviewSection from './sections/CompanyOverviewSection';
import CompanyJourneySection from './sections/CompanyJourneySection';
import AboutUsIntroSection from './sections/AboutUsIntroSection';
import ContactFormSection from './sections/ContactFormSection';
import InfrastructureSection from './sections/InfrastructureSection';
import ManufacturingProcessSection from './sections/ManufacturingProcessSection';
import AwardsSection from './sections/AwardsSection';
import ExpertiseSection from './sections/ExpertiseSection';
import CTASection from './sections/CTASection';
import CapabilitiesSection from './sections/CapabilitiesSection';

interface SectionRendererProps {
  sectionKey: string;
  section: any;
  products?: any;
}

const SectionRenderer: React.FC<SectionRendererProps> = ({ sectionKey, section, products }) => {
  // Skip disabled sections
  if (section.enabled === false) {
    return null;
  }

  try {
    switch (section.type) {
      case 'why-choose-us':
        return <WhyChooseUs config={{ whyChooseUs: section }} />;
      
      case 'services':
        return <Services config={{ services: section }} />;
      
      case 'products':
        return <Products products={products} />;
      
      case 'certificates':
        return <Certificates config={{ certificates: section }} />;
      
      case 'faqs':
        return <FAQ config={{ faqs: section.items }} />;
      
      case 'stats':
        return <StatsSection section={section} />;
      
      case 'testimonials':
        return <TestimonialsSection section={section} />;
      
      case 'company-overview':
        return <CompanyOverviewSection section={section} />;
      
      case 'company-journey':
        return <CompanyJourneySection section={section} />;
      
      case 'about-us-intro':
        return <AboutUsIntroSection section={section} />;
      
      case 'contact-form':
        return <ContactFormSection section={section} />;
      
      case 'infrastructure':
        return <InfrastructureSection section={section} />;
      
      case 'manufacturing-process':
        return <ManufacturingProcessSection section={section} />;
      
      case 'awards':
        return <AwardsSection section={section} />;
      
      case 'expertise':
        return <ExpertiseSection section={section} />;
      
      case 'cta':
        return <CTASection {...section} />;
      
      case 'capabilities':
        return <CapabilitiesSection section={section} />;
      
      default:
        console.warn(`Unknown section type: ${section.type}`);
        return null;
    }
  } catch (error) {
    console.error(`Error rendering section ${sectionKey}:`, error);
    return (
      <div className="py-8 text-center text-red-600">
        <p>Error loading section: {sectionKey}</p>
      </div>
    );
  }
};

export default SectionRenderer;
