
import { Link } from 'react-router-dom';
import { ShoppingCart } from 'lucide-react';
import { useCart } from '@/lib/CartContext';

const NavbarCartIcon = () => {
  const { cartCount } = useCart();

  return (
    <Link to="/cart" className="relative text-gray-600 hover:text-tyga-500">
      <ShoppingCart size={24} />
      {cartCount > 0 && (
        <span className="absolute -top-2 -right-2 bg-tyga-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
          {cartCount}
        </span>
      )}
    </Link>
  );
};

export default NavbarCartIcon;
