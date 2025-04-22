
import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getProductBySlug, getRelatedProducts } from '@/lib/data';
import { Product } from '@/lib/types';
import { useCart } from '@/lib/CartContext';
import { Button } from '@/components/ui/button';
import { ShoppingCart, Truck, Shield, ArrowLeft, Plus, Minus } from 'lucide-react';
import ProductGallery from '@/components/ProductGallery';
import ProductList from '@/components/ProductList';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const ProductPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const [product, setProduct] = useState<Product | undefined>(undefined);
  const [relatedProducts, setRelatedProducts] = useState<Product[]>([]);
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();

  useEffect(() => {
    if (slug) {
      const foundProduct = getProductBySlug(slug);
      setProduct(foundProduct);

      if (foundProduct) {
        setRelatedProducts(getRelatedProducts(foundProduct.id));
      }
    }
    
    // Reset quantity when product changes
    setQuantity(1);
    
    // Scroll to top
    window.scrollTo(0, 0);
  }, [slug]);

  if (!product) {
    return (
      <div className="container px-4 sm:px-6 mx-auto py-16 text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Product Not Found</h2>
        <p className="text-gray-600 mb-8">The product you're looking for doesn't exist or has been removed.</p>
        <Button asChild>
          <Link to="/">Return to Home</Link>
        </Button>
      </div>
    );
  }

  const formattedPrice = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(product.price);

  const formattedDiscountPrice = product.discountPrice
    ? new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
      }).format(product.discountPrice)
    : null;

  const handleAddToCart = () => {
    addToCart(product, quantity);
  };

  const handleQuantityChange = (newQuantity: number) => {
    if (newQuantity >= 1 && newQuantity <= product.stock) {
      setQuantity(newQuantity);
    }
  };

  return (
    <div className="bg-white">
      {/* Breadcrumbs */}
      <div className="container px-4 sm:px-6 mx-auto py-4">
        <nav className="flex text-sm text-gray-500">
          <Link to="/" className="hover:text-tyga-500">Home</Link>
          <span className="mx-2">/</span>
          <Link to={`/category/${product.category}`} className="hover:text-tyga-500">
            {product.category.charAt(0).toUpperCase() + product.category.slice(1)}
          </Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900">{product.name}</span>
        </nav>
      </div>

      {/* Product Detail */}
      <section className="container px-4 sm:px-6 mx-auto py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Left: Product Gallery */}
          <div>
            <ProductGallery images={product.images} productName={product.name} />
          </div>

          {/* Right: Product Info */}
          <div>
            <div className="mb-2 flex items-center">
              <span className="text-tyga-500 font-medium">{product.brand}</span>
              {product.isNew && (
                <span className="ml-3 bg-tyga-500 text-white text-xs px-2 py-1 rounded">NEW</span>
              )}
              {product.discountPrice && (
                <span className="ml-3 bg-red-500 text-white text-xs px-2 py-1 rounded">SALE</span>
              )}
            </div>

            <h1 className="text-3xl font-bold text-gray-900 mb-4">{product.name}</h1>

            <div className="flex items-center mb-6">
              {formattedDiscountPrice ? (
                <>
                  <span className="text-2xl font-bold text-tyga-500">{formattedDiscountPrice}</span>
                  <span className="ml-3 text-lg text-gray-500 line-through">{formattedPrice}</span>
                </>
              ) : (
                <span className="text-2xl font-bold text-gray-900">{formattedPrice}</span>
              )}
            </div>

            <p className="text-gray-600 mb-8">{product.description}</p>

            {/* Stock Status */}
            <div className="mb-6">
              <div className="flex items-center text-sm">
                <span className="font-medium text-gray-900 mr-2">Availability:</span>
                {product.stock > 0 ? (
                  <span className="text-green-600">In Stock ({product.stock} available)</span>
                ) : (
                  <span className="text-red-600">Out of Stock</span>
                )}
              </div>
            </div>

            {/* Quantity selector */}
            <div className="mb-6">
              <div className="flex items-center">
                <span className="font-medium text-gray-900 mr-4">Quantity:</span>
                <div className="flex items-center border rounded-md">
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    className="h-10 w-10"
                    onClick={() => handleQuantityChange(quantity - 1)}
                    disabled={quantity <= 1}
                  >
                    <Minus className="h-4 w-4" />
                  </Button>
                  <span className="w-10 text-center">{quantity}</span>
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    className="h-10 w-10"
                    onClick={() => handleQuantityChange(quantity + 1)}
                    disabled={quantity >= product.stock}
                  >
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Add to Cart */}
            <div className="mb-8">
              <Button
                onClick={handleAddToCart}
                className="w-full md:w-auto bg-tyga-500 hover:bg-tyga-600 text-white py-3 px-8 text-lg"
                disabled={product.stock === 0}
              >
                <ShoppingCart className="mr-2 h-5 w-5" />
                Add to Cart
              </Button>
            </div>

            {/* Shipping & Warranty */}
            <div className="space-y-4 mb-8 border-t border-b py-6">
              <div className="flex">
                <Truck className="h-5 w-5 text-tyga-500 mr-3 flex-shrink-0" />
                <div>
                  <span className="font-medium text-gray-900">Free Shipping</span>
                  <p className="text-sm text-gray-600">Free standard shipping on orders over $50</p>
                </div>
              </div>
              <div className="flex">
                <Shield className="h-5 w-5 text-tyga-500 mr-3 flex-shrink-0" />
                <div>
                  <span className="font-medium text-gray-900">1-Year Warranty</span>
                  <p className="text-sm text-gray-600">All products include a standard 1-year manufacturer warranty</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Tabs */}
      <section className="container px-4 sm:px-6 mx-auto py-8">
        <Tabs defaultValue="description">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-3 mb-8">
            <TabsTrigger value="description">Description</TabsTrigger>
            <TabsTrigger value="specifications">Specifications</TabsTrigger>
            <TabsTrigger value="shipping">Shipping & Returns</TabsTrigger>
          </TabsList>
          <TabsContent value="description" className="bg-white p-6 rounded-lg border">
            <h3 className="text-xl font-semibold mb-4">Product Description</h3>
            <p className="text-gray-600">{product.description}</p>
            <p className="text-gray-600 mt-4">
              {product.brand === "Apple" ? (
                "Experience the innovation and quality that Apple is known for. This device combines cutting-edge technology with the sleek design and intuitive user experience that has made Apple a leader in mobile technology."
              ) : (
                "Samsung continues to push the boundaries of what's possible with their latest devices. Featuring innovative display technology, powerful performance, and versatile camera systems, Samsung devices are designed to enhance every aspect of your digital life."
              )}
            </p>
          </TabsContent>
          <TabsContent value="specifications" className="bg-white p-6 rounded-lg border">
            <h3 className="text-xl font-semibold mb-4">Technical Specifications</h3>
            {product.specifications ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {Object.entries(product.specifications).map(([key, value]) => (
                  <div key={key} className="border-b pb-2">
                    <span className="font-medium text-gray-900">{key}:</span>{" "}
                    <span className="text-gray-600">{value}</span>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-gray-600">Specifications not available for this product.</p>
            )}
          </TabsContent>
          <TabsContent value="shipping" className="bg-white p-6 rounded-lg border">
            <h3 className="text-xl font-semibold mb-4">Shipping Information</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-medium text-gray-900 mb-1">Shipping</h4>
                <p className="text-gray-600">
                  Free standard shipping on all orders over $50. Standard shipping typically takes 3-5 business days.
                  Express shipping options are available at checkout for an additional fee.
                </p>
              </div>
              <div>
                <h4 className="font-medium text-gray-900 mb-1">Returns</h4>
                <p className="text-gray-600">
                  We offer a 30-day return policy on most items. Items must be returned in their original packaging
                  and in unused condition. Please note that certain products may not be eligible for return once opened
                  due to hygiene reasons.
                </p>
              </div>
              <div>
                <h4 className="font-medium text-gray-900 mb-1">Warranty</h4>
                <p className="text-gray-600">
                  All products include the standard manufacturer's warranty. Extended warranty options may be available
                  at checkout for select products.
                </p>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </section>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="bg-gray-50 py-12">
          <ProductList 
            products={relatedProducts} 
            title="You May Also Like" 
            description="Explore more products similar to this one" 
          />
        </section>
      )}

      {/* Back Button */}
      <div className="container px-4 sm:px-6 mx-auto py-8">
        <Button asChild variant="outline" className="flex items-center">
          <Link to="/">
            <ArrowLeft className="mr-2 h-4 w-4" /> 
            Continue Shopping
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default ProductPage;
