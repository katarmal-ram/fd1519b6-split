
import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

interface FAQProps {
  config: any;
}

const FAQ: React.FC<FAQProps> = ({ config }) => {
  if (!config) return null;

  const { faqs } = config;

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Find answers to common questions about our products and services
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq: any) => (
              <AccordionItem
                key={faq.id}
                value={faq.id}
                className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <AccordionTrigger className="px-6 py-4 text-left font-semibold text-gray-800 hover:text-blue-600">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-600">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
