
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '@/lib/CartContext';
import CartItem from '@/components/CartItem';
import CartSummary from '@/components/CartSummary';
import { Button } from '@/components/ui/button';
import { ShoppingCart, ArrowLeft } from 'lucide-react';

const CartPage = () => {
  const { cartItems, clearCart } = useCart();
  const [isCheckingOut, setIsCheckingOut] = useState(false);

  const handleCheckout = () => {
    setIsCheckingOut(true);
    // Simulate a checkout process (would be replaced with actual checkout implementation)
    setTimeout(() => {
      alert('Checkout functionality would be implemented here. Your cart will be cleared to simulate a completed order.');
      clearCart();
      setIsCheckingOut(false);
    }, 1500);
  };

  return (
    <div className="bg-white min-h-screen">
      <div className="container px-4 sm:px-6 mx-auto py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Your Cart</h1>

        {cartItems.length > 0 ? (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Cart Items */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-sm border p-6">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl font-semibold text-gray-900">Shopping Cart ({cartItems.length} items)</h2>
                  <Button 
                    variant="ghost" 
                    className="text-gray-500 hover:text-red-500"
                    onClick={clearCart}
                  >
                    Clear Cart
                  </Button>
                </div>
                
                <div className="divide-y">
                  {cartItems.map((item) => (
                    <CartItem key={item.product.id} item={item} />
                  ))}
                </div>
                
                <div className="mt-6">
                  <Button asChild variant="outline" className="flex items-center">
                    <Link to="/">
                      <ArrowLeft className="mr-2 h-4 w-4" /> 
                      Continue Shopping
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
            
            {/* Order Summary */}
            <div className="lg:col-span-1">
              <CartSummary onCheckout={handleCheckout} />
              
              {isCheckingOut && (
                <div className="mt-4 p-4 bg-blue-50 text-blue-700 rounded-lg">
                  <p className="font-medium">Processing your order...</p>
                  <p className="text-sm mt-1">Please do not refresh the page.</p>
                </div>
              )}
            </div>
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-100 rounded-full mb-6">
              <ShoppingCart className="h-8 w-8 text-gray-500" />
            </div>
            <h2 className="text-2xl font-medium text-gray-900 mb-4">Your cart is empty</h2>
            <p className="text-gray-600 mb-8 max-w-md mx-auto">
              Looks like you haven't added any products to your cart yet. Explore our collection to find what you need.
            </p>
            <Button asChild className="bg-tyga-500 hover:bg-tyga-600 text-white">
              <Link to="/">Start Shopping</Link>
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartPage;
