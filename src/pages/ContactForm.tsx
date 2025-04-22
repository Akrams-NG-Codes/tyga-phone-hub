
import { useState } from 'react';
import { Button } from '@/components/ui/button';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    setTimeout(() => {
      setFormStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
      setTimeout(() => setFormStatus('idle'), 3000);
    }, 1500);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md border">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h2>
      {formStatus === 'success' ? (
        <div className="bg-green-50 text-green-700 p-4 rounded-lg mb-6">
          <h3 className="font-medium text-green-800 mb-1">Message Sent!</h3>
          <p>Thank you for contacting us. We'll get back to you as soon as possible.</p>
        </div>
      ) : formStatus === 'error' ? (
        <div className="bg-red-50 text-red-700 p-4 rounded-lg mb-6">
          <h3 className="font-medium text-red-800 mb-1">Error</h3>
          <p>There was a problem sending your message. Please try again later.</p>
        </div>
      ) : null}
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              Your Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-tyga-500"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email Address *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-tyga-500"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-tyga-500"
            />
          </div>
          <div>
            <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
              Subject *
            </label>
            <select
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-tyga-500"
            >
              <option value="">Select a topic</option>
              <option value="order">Order Inquiry</option>
              <option value="product">Product Information</option>
              <option value="support">Technical Support</option>
              <option value="warranty">Warranty Claim</option>
              <option value="feedback">Feedback</option>
              <option value="other">Other</option>
            </select>
          </div>
        </div>
        <div className="mb-6">
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
            Message *
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={5}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-tyga-500"
          ></textarea>
        </div>
        <Button
          type="submit"
          className="bg-tyga-500 hover:bg-tyga-600 text-white px-6 py-3"
          disabled={formStatus === 'submitting'}
        >
          {formStatus === 'submitting' ? 'Sending...' : 'Send Message'}
        </Button>
      </form>
    </div>
  );
};

export default ContactForm;
