
import React, { useEffect, useState } from 'react';

interface StatsSectionProps {
  section: {
    title: string;
    subtitle: string;
    items: Array<{
      number: string;
      label: string;
    }>;
  };
}

const CountUpAnimation: React.FC<{ 
  target: string; 
  duration?: number; 
  delay?: number;
}> = ({ target, duration = 2000, delay = 0 }) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          const numericTarget = parseInt(target.replace(/[^\d]/g, '')) || 0;
          const suffix = target.replace(/[\d]/g, '');
          
          if (numericTarget === 0) {
            setCount(target as any);
            return;
          }

          const timer = setTimeout(() => {
            const increment = numericTarget / (duration / 50);
            let current = 0;
            
            const interval = setInterval(() => {
              current += increment;
              if (current >= numericTarget) {
                setCount(numericTarget + suffix as any);
                clearInterval(interval);
              } else {
                setCount(Math.floor(current) + suffix as any);
              }
            }, 50);
          }, delay);

          return () => clearTimeout(timer);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById(`stat-${target}`);
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, [target, duration, delay, hasAnimated]);

  return (
    <span id={`stat-${target}`} className="text-3xl md:text-4xl font-bold text-amber-600 mb-2 block">
      {count}
    </span>
  );
};

const StatsSection: React.FC<StatsSectionProps> = ({ section }) => {
  if (!section?.items?.length) {
    console.warn('StatsSection: No items provided');
    return null;
  }

  const backgroundPattern = "data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23f59e0b' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E";

  return (
    <section className="py-20 bg-gradient-to-br from-amber-50 to-orange-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{ backgroundImage: `url("${backgroundPattern}")` }}
      ></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
            {section.title}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {section.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          {section.items.map((stat, index) => (
            <div 
              key={index} 
              className="text-center group hover:scale-105 transition-all duration-300 p-6 rounded-xl bg-white/50 backdrop-blur-sm border border-amber-100 hover:shadow-xl hover:bg-white/80"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="animate-fade-in">
                <CountUpAnimation 
                  target={stat.number} 
                  delay={index * 200}
                />
                <div className="text-sm md:text-base text-gray-600 font-medium">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
