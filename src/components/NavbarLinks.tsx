
import { Link } from 'react-router-dom';
import { categories } from '@/lib/data';

type Props = {
  onClick?: () => void;
  className?: string;
};

const NavbarLinks = ({ onClick, className }: Props) => (
  <div className={className}>
    <Link to="/" className="text-gray-600 hover:text-tyga-500 px-3 py-2 font-medium" onClick={onClick}>
      Home
    </Link>
    {categories.map((category) => (
      <Link
        key={category.id}
        to={`/category/${category.slug}`}
        className="text-gray-600 hover:text-tyga-500 px-3 py-2 font-medium"
        onClick={onClick}
      >
        {category.name}
      </Link>
    ))}
  </div>
);

export default NavbarLinks;
