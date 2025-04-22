
import { Link } from 'react-router-dom';
import { categories } from '@/lib/data';

const FooterShopLinks = () => (
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
);

export default FooterShopLinks;
