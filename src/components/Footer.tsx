
import { Link } from 'react-router-dom';
import { Package, Facebook, Instagram, Twitter } from 'lucide-react';
import { categories } from '@/lib/data';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 sm:px-6 pt-12 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <Package className="h-8 w-8 text-tyga-500" />
              <span className="text-xl font-bold">
                Tyga<span className="text-tyga-500">Phone</span>
              </span>
            </Link>
            <p className="text-gray-400 mb-4">
              Your one-stop shop for the latest smartphones and accessories from Apple and Samsung.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-tyga-500 transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-tyga-500 transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-tyga-500 transition-colors"
              >
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Shop */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Shop</h3>
            <ul className="space-y-2">
              {categories.map((category) => (
                <li key={category.id}>
                  <Link 
                    to={`/category/${category.slug}`}
                    className="text-gray-400 hover:text-tyga-500 transition-colors"
                  >
                    {category.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link 
                  to="/new-arrivals"
                  className="text-gray-400 hover:text-tyga-500 transition-colors"
                >
                  New Arrivals
                </Link>
              </li>
              <li>
                <Link 
                  to="/deals"
                  className="text-gray-400 hover:text-tyga-500 transition-colors"
                >
                  Deals & Offers
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Customer Service</h3>
            <ul className="space-y-2">
              <li>
                <Link 
                  to="/contact"
                  className="text-gray-400 hover:text-tyga-500 transition-colors"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link 
                  to="/faq"
                  className="text-gray-400 hover:text-tyga-500 transition-colors"
                >
                  FAQs
                </Link>
              </li>
              <li>
                <Link 
                  to="/shipping"
                  className="text-gray-400 hover:text-tyga-500 transition-colors"
                >
                  Shipping & Delivery
                </Link>
              </li>
              <li>
                <Link 
                  to="/returns"
                  className="text-gray-400 hover:text-tyga-500 transition-colors"
                >
                  Returns & Exchanges
                </Link>
              </li>
              <li>
                <Link 
                  to="/warranty"
                  className="text-gray-400 hover:text-tyga-500 transition-colors"
                >
                  Warranty Information
                </Link>
              </li>
            </ul>
          </div>

          {/* About Us */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">About Us</h3>
            <ul className="space-y-2">
              <li>
                <Link 
                  to="/about"
                  className="text-gray-400 hover:text-tyga-500 transition-colors"
                >
                  Our Story
                </Link>
              </li>
              <li>
                <Link 
                  to="/stores"
                  className="text-gray-400 hover:text-tyga-500 transition-colors"
                >
                  Store Locations
                </Link>
              </li>
              <li>
                <Link 
                  to="/careers"
                  className="text-gray-400 hover:text-tyga-500 transition-colors"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link 
                  to="/privacy"
                  className="text-gray-400 hover:text-tyga-500 transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link 
                  to="/terms"
                  className="text-gray-400 hover:text-tyga-500 transition-colors"
                >
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800 py-6">
        <div className="container mx-auto px-4 sm:px-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm text-center md:text-left mb-4 md:mb-0">
            © {currentYear} TygaPhone. All rights reserved.
          </p>
          <div className="flex space-x-4">
            <img src="https://cdn-icons-png.flaticon.com/128/196/196578.png" alt="Visa" className="h-8 w-auto" />
            <img src="https://cdn-icons-png.flaticon.com/128/196/196561.png" alt="MasterCard" className="h-8 w-auto" />
            <img src="https://cdn-icons-png.flaticon.com/128/196/196539.png" alt="PayPal" className="h-8 w-auto" />
            <img src="https://cdn-icons-png.flaticon.com/128/196/196565.png" alt="Discover" className="h-8 w-auto" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
