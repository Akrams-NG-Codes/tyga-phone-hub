
import { Link } from 'react-router-dom';

const FooterCustomerServiceLinks = () => (
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
);

export default FooterCustomerServiceLinks;
