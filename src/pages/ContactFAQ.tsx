
const ContactFAQ = () => (
  <section className="py-16">
    <div className="container px-4 sm:px-6 mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Find quick answers to common questions or contact us for more information.
        </p>
      </div>
      <div className="max-w-3xl mx-auto grid grid-cols-1 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">What are your shipping options?</h3>
          <p className="text-gray-600">
            We offer standard shipping (3-5 business days), express shipping (1-2 business days), and same-day delivery in select areas. 
            Shipping is free on orders over $50.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">What is your return policy?</h3>
          <p className="text-gray-600">
            We offer a 30-day return policy on most items. Products must be returned in their original packaging and in like-new condition. 
            Some items may have specific return restrictions which will be noted on the product page.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Do you offer warranty on products?</h3>
          <p className="text-gray-600">
            All products come with the manufacturer's standard warranty. We also offer extended warranty options on select products 
            for additional peace of mind.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Can I pick up my order in-store?</h3>
          <p className="text-gray-600">
            Yes, we offer in-store pickup at all of our locations. Select "In-Store Pickup" during checkout and choose your 
            preferred store location. We'll notify you when your order is ready for pickup.
          </p>
        </div>
      </div>
    </div>
  </section>
);
export default ContactFAQ;
