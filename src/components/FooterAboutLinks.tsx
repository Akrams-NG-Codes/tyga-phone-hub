
import { Link } from 'react-router-dom';

const FooterAboutLinks = () => (
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
);

export default FooterAboutLinks;
