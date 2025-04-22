
import { useState, useEffect } from 'react';
import { getFeaturedProducts } from '@/lib/data';
import { Product } from '@/lib/types';
import ProductCard from './ProductCard';

const FeaturedProducts = () => {
  const [featuredProducts, setFeaturedProducts] = useState<Product[]>([]);

  useEffect(() => {
    setFeaturedProducts(getFeaturedProducts());
  }, []);

  return (
    <section className="py-12">
      <div className="container px-4 sm:px-6 mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Products</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our selection of premium phones and accessories chosen for their exceptional features and value.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
