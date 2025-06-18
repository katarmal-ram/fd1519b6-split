
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { usePageConfig } from '@/hooks/usePageConfig';

interface FeaturedProductsSectionProps {
  section: {
    title: string;
    subtitle: string;
    items: string[]; // Array of product IDs
  };
}

const FeaturedProductsSection: React.FC<FeaturedProductsSectionProps> = ({ section }) => {
  const { config: productsConfig } = usePageConfig('products');

  if (!section?.items?.length || !productsConfig?.products) {
    console.warn('FeaturedProductsSection: No items provided or products not loaded');
    return null;
  }

  // Find featured products by IDs
  const featuredProducts = section.items.map(productId => {
    for (const category of productsConfig.products.categories) {
      const product = category.products.find((p: any) => p.id === productId);
      if (product) {
        return { ...product, categoryId: category.id };
      }
    }
    return null;
  }).filter(Boolean);

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            {section.title}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {section.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProducts.map((product: any) => (
            <Card key={product.id} className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <CardTitle className="text-xl text-gray-800">
                  {product.name}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  {product.description}
                </p>
                <Button className="w-full bg-amber-600 hover:bg-amber-700">
                  View Details
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProductsSection;
