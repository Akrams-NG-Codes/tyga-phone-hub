
import { Link } from 'react-router-dom';
import { Package, Facebook, Instagram, Twitter } from 'lucide-react';

const FooterCompanyInfo = () => (
  <div className="col-span-1">
    <Link to="/" className="flex items-center space-x-2 mb-4">
      <Package className="h-8 w-8 text-tyga-500" />
      <span className="text-xl font-bold">
        Tyga<span className="text-tyga-500">Gadgets</span>Store
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
);

export default FooterCompanyInfo;
