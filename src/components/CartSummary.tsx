
import { useCart } from '@/lib/CartContext';
import { Button } from '@/components/ui/button';

interface CartSummaryProps {
  onCheckout?: () => void;
}

const CartSummary: React.FC<CartSummaryProps> = ({ onCheckout }) => {
  const { cartItems, cartTotal } = useCart();
  
  const subtotal = cartTotal;
  const shipping = cartItems.length > 0 ? 10 : 0;
  const tax = cartTotal * 0.08; // 8% tax
  const total = subtotal + shipping + tax;

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(amount);
  };

  return (
    <div className="bg-gray-50 rounded-lg p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Order Summary</h3>
      
      <div className="space-y-3 mb-6">
        <div className="flex justify-between text-gray-600">
          <span>Subtotal</span>
          <span>{formatCurrency(subtotal)}</span>
        </div>
        <div className="flex justify-between text-gray-600">
          <span>Shipping</span>
          <span>{shipping > 0 ? formatCurrency(shipping) : 'Free'}</span>
        </div>
        <div className="flex justify-between text-gray-600">
          <span>Tax (8%)</span>
          <span>{formatCurrency(tax)}</span>
        </div>
        <div className="border-t pt-3 flex justify-between font-semibold text-gray-900">
          <span>Total</span>
          <span>{formatCurrency(total)}</span>
        </div>
      </div>
      
      <Button 
        className="w-full bg-tyga-500 hover:bg-tyga-600 text-white"
        disabled={cartItems.length === 0}
        onClick={onCheckout}
      >
        Proceed to Checkout
      </Button>

      <div className="mt-4 flex items-center justify-center space-x-2">
        <img src="https://cdn-icons-png.flaticon.com/128/196/196578.png" alt="Visa" className="h-6 w-auto" />
        <img src="https://cdn-icons-png.flaticon.com/128/196/196561.png" alt="MasterCard" className="h-6 w-auto" />
        <img src="https://cdn-icons-png.flaticon.com/128/196/196539.png" alt="PayPal" className="h-6 w-auto" />
        <img src="https://cdn-icons-png.flaticon.com/128/196/196565.png" alt="Discover" className="h-6 w-auto" />
      </div>
    </div>
  );
};

export default CartSummary;
