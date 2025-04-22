import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '@/lib/CartContext';
import { categories } from '@/lib/data';
import { Button } from '@/components/ui/button';
import { ShoppingCart, Menu, X, Search, Package } from 'lucide-react';
import NavbarLogo from './NavbarLogo';
import NavbarLinks from './NavbarLinks';
import NavbarSearchForm from './NavbarSearchForm';
import NavbarCartIcon from './NavbarCartIcon';

const Navbar = () => {
  const { cartCount } = useCart();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-sm border-b">
      <div className="container px-4 sm:px-6 mx-auto">
        <div className="flex items-center justify-between h-16">
          <NavbarLogo />

          {/* Desktop Navigation */}
          <NavbarLinks className="hidden md:flex md:items-center md:space-x-6" />

          {/* Search, Cart, Menu */}
          <div className="flex items-center space-x-4">
            <div className="hidden sm:flex">
              <NavbarSearchForm />
            </div>
            <NavbarCartIcon />
            <button
              className="md:hidden text-gray-600 hover:text-tyga-500"
              onClick={toggleMobileMenu}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200 animate-fadeIn">
            <div className="mb-4">
              <NavbarSearchForm />
            </div>
            <NavbarLinks className="space-y-1 flex flex-col" onClick={() => setMobileMenuOpen(false)} />
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
