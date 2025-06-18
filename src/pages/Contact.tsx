
import React from 'react';
import { usePageConfig } from '@/hooks/usePageConfig';
import { useConfig } from '@/hooks/useConfig';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Footer from '@/components/Footer';
import LoadingScreen from '@/components/LoadingScreen';
import { MapPin, Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Contact = () => {
  const { config: pageConfig, loading: pageLoading, error: pageError } = usePageConfig('contact');
  const { config: globalConfig, loading: globalLoading } = useConfig();

  if (pageLoading || globalLoading) {
    return <LoadingScreen title={pageConfig?.meta?.title || "Contact Us"} />;
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

  const iconMap = {
    'map-pin': MapPin,
    'phone': Phone,
    'mail': Mail,
  };

  return (
    <div className="min-h-screen">
      <Header config={globalConfig} />
      {pageConfig?.hero && <Hero config={{ hero: pageConfig.hero }} />}
      
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-8">
                Contact Information
              </h2>
              <div className="space-y-6">
                {pageConfig?.sections?.contactInfo?.items?.map((item: any, index: number) => {
                  const IconComponent = iconMap[item.icon as keyof typeof iconMap];
                  return (
                    <div key={index} className="flex items-start space-x-4">
                      {IconComponent && <IconComponent className="w-6 h-6 text-blue-600 mt-1" />}
                      <div>
                        <h3 className="font-semibold text-gray-800 mb-1">
                          {item.title}
                        </h3>
                        <p className="text-gray-600">
                          {item.content}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Contact Form */}
            <Card>
              <CardHeader>
                <CardTitle>Send us a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input
                      type="text"
                      placeholder="First Name"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                    <input
                      type="text"
                      placeholder="Last Name"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <textarea
                    placeholder="Your Message"
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  ></textarea>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      <Footer config={globalConfig} />
    </div>
  );
};

export default Contact;
