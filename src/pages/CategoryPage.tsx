
import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getProductsByCategory, getCategoryBySlug } from '@/lib/data';
import { Product, Category } from '@/lib/types';
import ProductList from '@/components/ProductList';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

const CategoryPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const [products, setProducts] = useState<Product[]>([]);
  const [category, setCategory] = useState<Category | undefined>(undefined);
  const [sortBy, setSortBy] = useState<string>('featured');

  useEffect(() => {
    if (slug) {
      const foundCategory = getCategoryBySlug(slug);
      setCategory(foundCategory);

      let categoryProducts = getProductsByCategory(slug);
      
      // Apply sorting
      switch (sortBy) {
        case 'price-low':
          categoryProducts = [...categoryProducts].sort((a, b) => 
            (a.discountPrice || a.price) - (b.discountPrice || b.price)
          );
          break;
        case 'price-high':
          categoryProducts = [...categoryProducts].sort((a, b) => 
            (b.discountPrice || b.price) - (a.discountPrice || a.price)
          );
          break;
        case 'newest':
          categoryProducts = [...categoryProducts].sort((a, b) => 
            (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0)
          );
          break;
        case 'featured':
        default:
          categoryProducts = [...categoryProducts].sort((a, b) => 
            (b.featured ? 1 : 0) - (a.featured ? 1 : 0)
          );
          break;
      }
      
      setProducts(categoryProducts);
    }
    
    // Scroll to top
    window.scrollTo(0, 0);
  }, [slug, sortBy]);

  if (!category) {
    return (
      <div className="container px-4 sm:px-6 mx-auto py-16 text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Category Not Found</h2>
        <p className="text-gray-600 mb-8">The category you're looking for doesn't exist or has been removed.</p>
        <Button asChild>
          <Link to="/">Return to Home</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Category Header */}
      <div className="relative">
        <div className="h-64 w-full">
          <img 
            src={category.image} 
            alt={category.name} 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-black/50 flex flex-col justify-center px-4 sm:px-6">
          <div className="container mx-auto">
            <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">{category.name}</h1>
            <p className="text-lg text-white/90 max-w-2xl">{category.description}</p>
          </div>
        </div>
      </div>

      {/* Sorting Controls */}
      <div className="container px-4 sm:px-6 mx-auto py-6">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          {/* Breadcrumbs */}
          <nav className="flex text-sm text-gray-500">
            <Link to="/" className="hover:text-tyga-500">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900">{category.name}</span>
          </nav>

          {/* Sorting */}
          <div className="flex items-center space-x-3">
            <span className="text-sm text-gray-600">Sort by:</span>
            <select 
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="border border-gray-300 rounded-md py-1 px-3 focus:outline-none focus:ring-2 focus:ring-tyga-500 focus:border-transparent"
            >
              <option value="featured">Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="newest">Newest</option>
            </select>
          </div>
        </div>
      </div>

      {/* Product List */}
      <ProductList products={products} />

      {/* No Products Message */}
      {products.length === 0 && (
        <div className="container px-4 sm:px-6 mx-auto py-16 text-center">
          <h2 className="text-xl font-medium text-gray-900 mb-4">No products found in this category</h2>
          <p className="text-gray-600 mb-8">Try browsing our other categories or check back later.</p>
          <Button asChild>
            <Link to="/">Return to Home</Link>
          </Button>
        </div>
      )}

      {/* Back Button */}
      <div className="container px-4 sm:px-6 mx-auto py-8">
        <Button asChild variant="outline" className="flex items-center">
          <Link to="/">
            <ArrowLeft className="mr-2 h-4 w-4" /> 
            Back to Home
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default CategoryPage;
