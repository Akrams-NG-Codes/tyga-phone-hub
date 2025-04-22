
import { Link } from 'react-router-dom';
import { Category } from '@/lib/types';

interface CategoryCardProps {
  category: Category;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ category }) => {
  return (
    <Link to={`/category/${category.slug}`} className="block">
      <div className="relative rounded-lg overflow-hidden category-card-transition">
        <div className="aspect-[16/9] w-full">
          <img 
            src={category.image} 
            alt={category.name} 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-4">
          <h3 className="text-xl font-bold text-white mb-1">{category.name}</h3>
          <p className="text-sm text-white/80">{category.description}</p>
        </div>
      </div>
    </Link>
  );
};

export default CategoryCard;
