
import HeroBanner from '@/components/HeroBanner';
import FeaturedProducts from '@/components/FeaturedProducts';
import CategoryList from '@/components/CategoryList';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Smartphone, ShoppingBag, Headphones, Package } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroBanner />
      
      {/* Featured Products */}
      <FeaturedProducts />
      
      {/* Category List */}
      <CategoryList />
      
      {/* Why Choose Us */}
      <section className="py-12">
        <div className="container px-4 sm:px-6 mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose TygaPhone</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We're committed to providing the best shopping experience for all your mobile needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="flex flex-col items-center text-center p-6 rounded-lg bg-white shadow-sm">
              <div className="p-3 bg-tyga-50 rounded-full mb-4">
                <Smartphone className="h-8 w-8 text-tyga-500" />
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">Latest Models</h3>
              <p className="text-gray-600">
                Get the newest iPhone and Samsung devices as soon as they're released.
              </p>
            </div>
            
            <div className="flex flex-col items-center text-center p-6 rounded-lg bg-white shadow-sm">
              <div className="p-3 bg-tyga-50 rounded-full mb-4">
                <ShoppingBag className="h-8 w-8 text-tyga-500" />
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">Free Shipping</h3>
              <p className="text-gray-600">
                Enjoy free shipping on all orders over $50. Fast and reliable delivery.
              </p>
            </div>
            
            <div className="flex flex-col items-center text-center p-6 rounded-lg bg-white shadow-sm">
              <div className="p-3 bg-tyga-50 rounded-full mb-4">
                <Headphones className="h-8 w-8 text-tyga-500" />
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">Expert Support</h3>
              <p className="text-gray-600">
                Our knowledgeable team is ready to assist with any questions you may have.
              </p>
            </div>
            
            <div className="flex flex-col items-center text-center p-6 rounded-lg bg-white shadow-sm">
              <div className="p-3 bg-tyga-50 rounded-full mb-4">
                <Package className="h-8 w-8 text-tyga-500" />
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">Secure Packaging</h3>
              <p className="text-gray-600">
                All products are carefully packaged to ensure they arrive in perfect condition.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Newsletter Section */}
      <section className="py-16 bg-tyga-500 text-white">
        <div className="container px-4 sm:px-6 mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Stay Connected</h2>
            <p className="text-lg mb-8 text-white/90">
              Subscribe to our newsletter for the latest product releases, special offers, and tech news.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="px-4 py-3 rounded-lg text-gray-900 w-full sm:w-auto sm:min-w-[300px]"
              />
              <Button className="bg-gray-900 hover:bg-gray-800 text-white border-none">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-16 bg-gray-100">
        <div className="container px-4 sm:px-6 mx-auto">
          <div className="bg-white rounded-lg shadow-md p-8 flex flex-col lg:flex-row items-center justify-between">
            <div className="mb-6 lg:mb-0 lg:mr-6 text-center lg:text-left">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">Ready to upgrade your phone?</h2>
              <p className="text-gray-600 max-w-xl">
                Browse our extensive collection of the latest smartphones and accessories from top brands.
              </p>
            </div>
            <Button asChild className="bg-tyga-500 hover:bg-tyga-600 text-white px-8 py-3 text-lg">
              <Link to="/category/smartphones">
                Shop Now
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
