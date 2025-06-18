
import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

interface ProductDetailDialogProps {
  product: any;
  isOpen: boolean;
  onClose: () => void;
}

const ProductDetailDialog: React.FC<ProductDetailDialogProps> = ({ 
  product, 
  isOpen, 
  onClose 
}) => {
  const navigate = useNavigate();

  if (!product) return null;

  const handleRequestQuote = () => {
    navigate('/contact');
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl text-gray-800 mb-4">
            {product.name}
          </DialogTitle>
        </DialogHeader>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-64 object-cover rounded-lg"
            />
          </div>
          
          <div>
            <p className="text-gray-600 mb-6 text-lg">
              {product.description}
            </p>
            
            <div className="mb-6">
              <h4 className="font-semibold text-gray-800 mb-3 text-lg">Technical Specifications:</h4>
              <div className="space-y-2">
                {product.specifications.map((spec: string, index: number) => (
                  <div key={index} className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-amber-600 rounded-full"></div>
                    <span className="text-gray-700">{spec}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-6">
              <h4 className="font-semibold text-gray-800 mb-3 text-lg">Applications:</h4>
              <div className="flex flex-wrap gap-2">
                {product.applications.map((app: string, index: number) => (
                  <Badge key={index} className="bg-amber-100 text-amber-800">
                    {app}
                  </Badge>
                ))}
              </div>
            </div>
            
            <div className="flex space-x-3">
              <Button 
                onClick={handleRequestQuote}
                className="flex-1 bg-amber-600 hover:bg-amber-700"
              >
                Request Quote
              </Button>
              <Button 
                variant="outline"
                onClick={onClose}
                className="flex-1"
              >
                Close
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProductDetailDialog;
