
import { Link } from 'react-router-dom';
import { Package } from 'lucide-react';

const NavbarLogo = () => (
  <div className="flex-shrink-0">
    <Link to="/" className="flex items-center space-x-2">
      <Package className="h-8 w-8 text-tyga-500" />
      <span className="text-xl font-bold text-gray-900">
        Tyga<span className="text-tyga-500">Gadgets</span>Store
      </span>
    </Link>
  </div>
);

export default NavbarLogo;
