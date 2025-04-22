
import { Link } from 'react-router-dom';
import { Product } from '@/lib/types';
import { Button } from '@/components/ui/button';
import { useCart } from '@/lib/CartContext';
import { ShoppingCart } from 'lucide-react';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();

  const formattedPrice = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(product.price);

  const formattedDiscountPrice = product.discountPrice
    ? new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
      }).format(product.discountPrice)
    : null;

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden product-card-transition">
      {/* Product Image */}
      <Link to={`/product/${product.slug}`} className="block relative aspect-square overflow-hidden">
        <img 
          src={product.images[0]} 
          alt={product.name} 
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
        {product.isNew && (
          <div className="absolute top-2 right-2 bg-tyga-500 text-white text-xs px-2 py-1 rounded">
            NEW
          </div>
        )}
        {product.discountPrice && (
          <div className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
            SALE
          </div>
        )}
      </Link>

      {/* Product Info */}
      <div className="p-4">
        <div className="flex items-center text-sm text-gray-500 mb-1">
          <span className="capitalize">{product.brand}</span>
        </div>
        <Link to={`/product/${product.slug}`} className="block">
          <h3 className="text-lg font-medium mb-2 text-gray-900 hover:text-tyga-500 transition-colors">
            {product.name}
          </h3>
        </Link>
        <div className="flex items-center mb-3">
          {formattedDiscountPrice ? (
            <>
              <span className="text-lg font-bold text-tyga-500">{formattedDiscountPrice}</span>
              <span className="ml-2 text-sm text-gray-500 line-through">{formattedPrice}</span>
            </>
          ) : (
            <span className="text-lg font-bold text-gray-900">{formattedPrice}</span>
          )}
        </div>

        {/* Add to Cart Button */}
        <Button
          onClick={() => addToCart(product, 1)}
          className="w-full bg-tyga-500 hover:bg-tyga-600 text-white"
        >
          <ShoppingCart className="mr-2 h-4 w-4" />
          Add to Cart
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;
