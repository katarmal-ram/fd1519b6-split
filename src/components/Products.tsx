
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useNavigate } from 'react-router-dom';
import ProductDetailDialog from './ProductDetailDialog';

interface ProductsProps {
  products: any;
}

const Products: React.FC<ProductsProps> = ({ products }) => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [showByCategory, setShowByCategory] = useState(false);
  const navigate = useNavigate();

  if (!products || !products.categories) return null;

  const handleRequestQuote = () => {
    navigate('/contact');
  };

  const handleProductClick = (product: any) => {
    setSelectedProduct(product);
    setIsDialogOpen(true);
  };

  const allProducts = products.categories.flatMap((category: any) => 
    category.products.map((product: any) => ({
      ...product,
      categoryName: category.name
    }))
  );

  // Get text content from products data or use fallbacks
  const allProductsTitle = products.allProductsTitle || "All Products";
  const allProductsSubtitle = products.allProductsSubtitle || "Browse our complete collection of precision-engineered products";
  const categoriesTitle = products.categoriesTitle || "Our Product Range";
  const categoriesSubtitle = products.categoriesSubtitle || "Comprehensive range of precision-engineered products for diverse industrial applications";

  if (!showByCategory) {
    return (
      <section id="products" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              {allProductsTitle}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
              {allProductsSubtitle}
            </p>
            <Button 
              onClick={() => setShowByCategory(true)}
              variant="outline"
              className="mb-8"
            >
              View by Categories
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allProducts.map((product: any) => (
              <Card 
                key={product.id} 
                className="hover:shadow-lg transition-shadow duration-300 cursor-pointer"
                onClick={() => handleProductClick(product)}
              >
                <CardHeader>
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                  <Badge className="w-fit mb-2 bg-amber-100 text-amber-800">
                    {product.categoryName}
                  </Badge>
                  <CardTitle className="text-xl text-gray-800">
                    {product.name}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    {product.description}
                  </p>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-800 mb-2">Key Specs:</h4>
                    <div className="flex flex-wrap gap-1">
                      {product.specifications.slice(0, 2).map((spec: string, index: number) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {spec}
                        </Badge>
                      ))}
                      {product.specifications.length > 2 && (
                        <Badge variant="outline" className="text-xs">
                          +{product.specifications.length - 2} more
                        </Badge>
                      )}
                    </div>
                  </div>

                  <Button 
                    onClick={(e) => {
                      e.stopPropagation();
                      handleRequestQuote();
                    }}
                    className="w-full bg-amber-600 hover:bg-amber-700"
                  >
                    Request Quote
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <ProductDetailDialog
            product={selectedProduct}
            isOpen={isDialogOpen}
            onClose={() => setIsDialogOpen(false)}
          />
        </div>
      </section>
    );
  }

  return (
    <section id="products" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            {categoriesTitle}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            {categoriesSubtitle}
          </p>
          <Button 
            onClick={() => setShowByCategory(false)}
            className="bg-amber-600 hover:bg-amber-700"
          >
            Show All Products
          </Button>
        </div>

        <Tabs defaultValue={products.categories[0]?.id} className="w-full">
          <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 mb-8">
            {products.categories.map((category: any) => (
              <TabsTrigger
                key={category.id}
                value={category.id}
                className="text-sm px-4 py-2"
              >
                {category.name}
              </TabsTrigger>
            ))}
          </TabsList>

          {products.categories.map((category: any) => (
            <TabsContent key={category.id} value={category.id}>
              <div className="mb-8">
                <div className="text-center mb-12">
                  <h3 className="text-3xl font-bold text-gray-800 mb-4">
                    {category.name}
                  </h3>
                  <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                    {category.description}
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {category.products.map((product: any) => (
                    <Card 
                      key={product.id} 
                      className="hover:shadow-lg transition-shadow duration-300 cursor-pointer"
                      onClick={() => handleProductClick(product)}
                    >
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
                        
                        <div className="mb-4">
                          <h4 className="font-semibold text-gray-800 mb-2">Specifications:</h4>
                          <div className="flex flex-wrap gap-1">
                            {product.specifications.map((spec: string, index: number) => (
                              <Badge key={index} variant="outline" className="text-xs">
                                {spec}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        <div className="mb-6">
                          <h4 className="font-semibold text-gray-800 mb-2">Applications:</h4>
                          <div className="flex flex-wrap gap-1">
                            {product.applications.map((app: string, index: number) => (
                              <Badge key={index} className="bg-amber-100 text-amber-800 text-xs">
                                {app}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        <Button 
                          onClick={(e) => {
                            e.stopPropagation();
                            handleRequestQuote();
                          }}
                          className="w-full bg-amber-600 hover:bg-amber-700"
                        >
                          Request Quote
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>

        <ProductDetailDialog
          product={selectedProduct}
          isOpen={isDialogOpen}
          onClose={() => setIsDialogOpen(false)}
        />
      </div>
    </section>
  );
};

export default Products;
