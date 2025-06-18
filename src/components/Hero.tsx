
import React from 'react';
import { Button } from '@/components/ui/button';
import { Play } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface HeroProps {
  config: any;
}

const Hero: React.FC<HeroProps> = ({ config }) => {
  const navigate = useNavigate();

  if (!config) return null;

  const { hero } = config;

  const handlePrimaryClick = () => {
    const action = hero.cta?.primaryAction || '/products';
    navigate(action);
  };

  const handleSecondaryClick = () => {
    const action = hero.cta?.secondaryAction || '/contact';
    navigate(action);
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center bg-gradient-to-br from-blue-50 to-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-slide-in-left">
            <div className="space-y-6">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
                <span className="text-gray-900">{hero.title?.split(' ').slice(0, -2).join(' ')}</span>
                <span className="block text-blue-gradient">{hero.title?.split(' ').slice(-2).join(' ')}</span>
              </h1>
              
              <p className="text-xl sm:text-2xl text-gray-600 leading-relaxed max-w-2xl">
                {hero.subtitle}
              </p>
            </div>

            {/* CTA buttons */}
            {hero.cta && (
              <div className="flex flex-col sm:flex-row gap-4 lg:gap-6">
                <Button
                  size="lg"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl shadow-blue-200"
                  onClick={handlePrimaryClick}
                >
                  {hero.cta.primary}
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  onClick={handleSecondaryClick}
                  className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl"
                >
                  <Play className="w-5 h-5 mr-2" />
                  {hero.cta.secondary}
                </Button>
              </div>
            )}
          </div>

          {/* Right Visual */}
          <div className="relative animate-slide-in-right">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              {hero.type === 'video' ? (
                <div className="aspect-[4/3] lg:aspect-[3/4] xl:aspect-[4/3]">
                  <video 
                    autoPlay 
                    muted 
                    loop 
                    playsInline 
                    className="w-full h-full object-cover"
                  >
                    <source src={hero.backgroundVideo} type="video/mp4" />
                  </video>
                </div>
              ) : (
                <div 
                  className="aspect-[4/3] lg:aspect-[3/4] xl:aspect-[4/3] bg-cover bg-center"
                  style={{
                    backgroundImage: `url(${hero.backgroundImage})`
                  }}
                />
              )}
              
              {/* Overlay with subtle blue tint */}
              <div className="absolute inset-0 bg-blue-900/20" />
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-200 rounded-full opacity-60 blur-xl" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-blue-100 rounded-full opacity-40 blur-xl" />
          </div>
        </div>
      </div>

      {/* Custom Background Pattern */}
      <style>{`
        .bg-grid-pattern {
          background-image: radial-gradient(circle at 1px 1px, rgba(59, 130, 246, 0.3) 1px, transparent 0);
          background-size: 20px 20px;
        }
      `}</style>
    </section>
  );
};

export default Hero;
