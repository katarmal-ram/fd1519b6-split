
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

interface TestimonialsSectionProps {
  section: {
    title: string;
    subtitle: string;
    items: Array<{
      id: string;
      name: string;
      company: string;
      designation: string;
      content: string;
      rating: number;
      image: string;
    }>;
  };
}

const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({ section }) => {
  if (!section?.items?.length) {
    console.warn('TestimonialsSection: No items provided');
    return null;
  }

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            {section.title}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {section.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {section.items.map((testimonial) => (
            <Card key={testimonial.id} className="p-6">
              <CardContent className="p-0">
                <div className="flex items-start space-x-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div className="flex-1">
                    <div className="flex items-center mb-2">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <span key={i} className="text-amber-400">★</span>
                      ))}
                    </div>
                    <p className="text-gray-600 mb-4 italic">
                      "{testimonial.content}"
                    </p>
                    <div>
                      <h4 className="font-semibold text-gray-800">
                        {testimonial.name}
                      </h4>
                      <p className="text-sm text-gray-500">
                        {testimonial.designation}, {testimonial.company}
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
