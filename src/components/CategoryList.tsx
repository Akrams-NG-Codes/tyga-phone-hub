
import { categories } from '@/lib/data';
import CategoryCard from './CategoryCard';

const CategoryList = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container px-4 sm:px-6 mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Shop by Category</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Browse our catalog of the latest smartphones and accessories from top brands.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryList;
