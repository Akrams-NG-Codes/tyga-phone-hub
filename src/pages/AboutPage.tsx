
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Package, Smartphone, ShoppingBag, Headphones, MapPin } from 'lucide-react';

const AboutPage = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="bg-gray-900 text-white">
        <div className="container px-4 sm:px-6 mx-auto py-16 md:py-24">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About TygaPhone</h1>
            <p className="text-xl text-gray-300 mb-8">
              Your trusted destination for premium smartphones and accessories since 2010.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16">
        <div className="container px-4 sm:px-6 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-gray-600 mb-4">
                TygaPhone was founded by tech enthusiast Tyga Johnson in 2010 with a simple mission: 
                to provide customers with high-quality smartphones and accessories with exceptional service.
              </p>
              <p className="text-gray-600 mb-4">
                What began as a small kiosk in a local mall has grown into a trusted name in mobile technology retail,
                with multiple locations and a strong online presence. Throughout our growth, we've maintained our 
                commitment to personalized service and expert knowledge.
              </p>
              <p className="text-gray-600">
                Today, TygaPhone is known for offering the latest devices from Apple and Samsung,
                along with a carefully curated selection of accessories that enhance the mobile experience.
              </p>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1581287053822-fd7bf4f4bfec?q=80&w=1000" 
                alt="Mobile phone store" 
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-gray-50">
        <div className="container px-4 sm:px-6 mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              At TygaPhone, our core values guide everything we do, from product selection to customer service.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="p-3 bg-tyga-50 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <Smartphone className="h-7 w-7 text-tyga-500" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Quality</h3>
              <p className="text-gray-600">
                We offer only the highest quality products that meet our strict standards for performance and reliability.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="p-3 bg-tyga-50 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <Headphones className="h-7 w-7 text-tyga-500" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Expertise</h3>
              <p className="text-gray-600">
                Our team consists of mobile technology experts who stay informed about the latest innovations and trends.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="p-3 bg-tyga-50 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <ShoppingBag className="h-7 w-7 text-tyga-500" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Service</h3>
              <p className="text-gray-600">
                We believe in providing exceptional customer service that goes beyond the transaction.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="container px-4 sm:px-6 mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our passionate team of experts is dedicated to helping you find the perfect mobile device and accessories.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="rounded-full overflow-hidden w-48 h-48 mx-auto mb-4">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000" 
                  alt="Tyga Johnson" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-1">Tyga Johnson</h3>
              <p className="text-tyga-500 mb-3">Founder & CEO</p>
              <p className="text-gray-600 px-4">
                Passionate about technology and customer experience.
              </p>
            </div>

            <div className="text-center">
              <div className="rounded-full overflow-hidden w-48 h-48 mx-auto mb-4">
                <img 
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1000" 
                  alt="Sarah Chen" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-1">Sarah Chen</h3>
              <p className="text-tyga-500 mb-3">Head of Product</p>
              <p className="text-gray-600 px-4">
                Curates our product selection with an eye for quality and innovation.
              </p>
            </div>

            <div className="text-center">
              <div className="rounded-full overflow-hidden w-48 h-48 mx-auto mb-4">
                <img 
                  src="https://images.unsplash.com/photo-1531384441138-2736e62e0919?q=80&w=1000" 
                  alt="Marcus Williams" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-1">Marcus Williams</h3>
              <p className="text-tyga-500 mb-3">Tech Support Lead</p>
              <p className="text-gray-600 px-4">
                Ensures our customers get expert technical assistance when needed.
              </p>
            </div>

            <div className="text-center">
              <div className="rounded-full overflow-hidden w-48 h-48 mx-auto mb-4">
                <img 
                  src="https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1000" 
                  alt="Aisha Patel" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-1">Aisha Patel</h3>
              <p className="text-tyga-500 mb-3">Customer Experience</p>
              <p className="text-gray-600 px-4">
                Dedicated to creating the best shopping experience for our customers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Store Locations */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container px-4 sm:px-6 mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Locations</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Visit one of our stores to experience our products and services in person.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-800 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <MapPin className="h-5 w-5 text-tyga-500 mr-2" />
                <h3 className="text-xl font-semibold">Downtown Tech Center</h3>
              </div>
              <p className="text-gray-300 mb-2">123 Main Street</p>
              <p className="text-gray-300 mb-2">San Francisco, CA 94105</p>
              <p className="text-gray-300 mb-4">(415) 555-1234</p>
              <p className="text-gray-400 text-sm">Mon-Sat: 10AM-8PM</p>
              <p className="text-gray-400 text-sm">Sun: 11AM-6PM</p>
            </div>

            <div className="bg-gray-800 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <MapPin className="h-5 w-5 text-tyga-500 mr-2" />
                <h3 className="text-xl font-semibold">Westfield Mall</h3>
              </div>
              <p className="text-gray-300 mb-2">456 Shopping Lane</p>
              <p className="text-gray-300 mb-2">Los Angeles, CA 90067</p>
              <p className="text-gray-300 mb-4">(310) 555-5678</p>
              <p className="text-gray-400 text-sm">Mon-Sat: 10AM-9PM</p>
              <p className="text-gray-400 text-sm">Sun: 11AM-7PM</p>
            </div>

            <div className="bg-gray-800 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <MapPin className="h-5 w-5 text-tyga-500 mr-2" />
                <h3 className="text-xl font-semibold">East Side Plaza</h3>
              </div>
              <p className="text-gray-300 mb-2">789 Tech Avenue</p>
              <p className="text-gray-300 mb-2">New York, NY 10022</p>
              <p className="text-gray-300 mb-4">(212) 555-9012</p>
              <p className="text-gray-400 text-sm">Mon-Sat: 9AM-9PM</p>
              <p className="text-gray-400 text-sm">Sun: 10AM-7PM</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16">
        <div className="container px-4 sm:px-6 mx-auto">
          <div className="bg-tyga-50 rounded-lg shadow-md p-8 flex flex-col lg:flex-row items-center justify-between">
            <div className="mb-6 lg:mb-0 lg:mr-6 text-center lg:text-left">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">Ready to explore our collection?</h2>
              <p className="text-gray-600 max-w-xl">
                Check out our latest smartphones and accessories or visit one of our store locations.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild className="bg-tyga-500 hover:bg-tyga-600 text-white px-8 py-3">
                <Link to="/category/smartphones">
                  Shop Now
                </Link>
              </Button>
              <Button asChild variant="outline" className="border-tyga-500 text-tyga-500 hover:bg-tyga-50 px-8 py-3">
                <Link to="/contact">
                  Contact Us
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
