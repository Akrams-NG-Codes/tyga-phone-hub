
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { CartItem as CartItemType } from '@/lib/types';
import { useCart } from '@/lib/CartContext';
import { Button } from '@/components/ui/button';
import { Trash, Plus, Minus } from 'lucide-react';

interface CartItemProps {
  item: CartItemType;
}

const CartItem: React.FC<CartItemProps> = ({ item }) => {
  const { product, quantity } = item;
  const { updateQuantity, removeFromCart } = useCart();
  const [isRemoving, setIsRemoving] = useState(false);

  const handleRemove = () => {
    setIsRemoving(true);
    setTimeout(() => {
      removeFromCart(product.id);
    }, 300);
  };

  const handleIncrease = () => {
    updateQuantity(product.id, quantity + 1);
  };

  const handleDecrease = () => {
    if (quantity > 1) {
      updateQuantity(product.id, quantity - 1);
    }
  };

  const formattedPrice = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(product.discountPrice || product.price);

  const formattedTotal = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format((product.discountPrice || product.price) * quantity);

  return (
    <div className={`flex border-b py-4 ${isRemoving ? 'opacity-0 transition-opacity duration-300' : ''}`}>
      {/* Product Image */}
      <div className="w-24 h-24 flex-shrink-0 rounded-md overflow-hidden">
        <Link to={`/product/${product.slug}`}>
          <img 
            src={product.images[0]} 
            alt={product.name} 
            className="w-full h-full object-cover"
          />
        </Link>
      </div>

      {/* Product Details */}
      <div className="ml-4 flex-grow">
        <Link to={`/product/${product.slug}`} className="text-lg font-medium text-gray-900 hover:text-tyga-500">
          {product.name}
        </Link>
        <div className="text-sm text-gray-500 mt-1">{product.brand}</div>
        <div className="text-tyga-500 font-medium mt-1">{formattedPrice}</div>
        
        <div className="flex items-center justify-between mt-3">
          {/* Quantity Controls */}
          <div className="flex items-center">
            <Button 
              variant="outline" 
              size="icon" 
              className="h-8 w-8 rounded-md"
              onClick={handleDecrease}
              disabled={quantity <= 1}
            >
              <Minus className="h-4 w-4" />
            </Button>
            <span className="mx-3 w-8 text-center">{quantity}</span>
            <Button 
              variant="outline" 
              size="icon" 
              className="h-8 w-8 rounded-md"
              onClick={handleIncrease}
            >
              <Plus className="h-4 w-4" />
            </Button>
          </div>
          
          {/* Subtotal and Remove */}
          <div className="flex items-center space-x-4">
            <div className="text-gray-900 font-medium">{formattedTotal}</div>
            <Button 
              variant="ghost" 
              size="icon" 
              className="h-8 w-8 text-gray-500 hover:text-red-500"
              onClick={handleRemove}
            >
              <Trash className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
