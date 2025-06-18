import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Phone } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
interface CTASectionProps {
  title: string;
  subtitle: string;
  primaryCTA: {
    text: string;
    action: string;
  };
  secondaryCTA?: {
    text: string;
    action: string;
  };
}
const CTASection: React.FC<CTASectionProps> = ({
  title,
  subtitle,
  primaryCTA,
  secondaryCTA
}) => {
  const navigate = useNavigate();
  const handleCTAClick = (action: string) => {
    if (action.startsWith('/')) {
      navigate(action);
    } else if (action.startsWith('tel:') || action.startsWith('mailto:')) {
      window.location.href = action;
    }
  };
  return <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-700 relative overflow-hidden">
      <div className="absolute inset-0 bg-black/10"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {title}
          </h2>
          <p className="text-xl text-white/90 mb-12 leading-relaxed">
            {subtitle}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button size="lg" onClick={() => handleCTAClick(primaryCTA.action)} className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl">
              {primaryCTA.text}
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            
            {secondaryCTA && <Button size="lg" variant="outline" onClick={() => handleCTAClick(secondaryCTA.action)} className="border-2 border-white hover:bg-white px-8 py-4 text-lg font-semibold transition-all duration-300 hover:scale-105 text-blue-600">
                <Phone className="w-5 h-5 mr-2" />
                {secondaryCTA.text}
              </Button>}
          </div>
        </div>
      </div>
    </section>;
};
export default CTASection;