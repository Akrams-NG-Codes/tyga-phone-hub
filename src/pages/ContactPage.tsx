import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock,
  Facebook,
  Twitter,
  Instagram
} from 'lucide-react';
import ContactInfo from './ContactInfo';
import ContactForm from './ContactForm';
import ContactMap from './ContactMap';
import ContactFAQ from './ContactFAQ';

const ContactPage = () => (
  <div className="bg-white min-h-screen">
    {/* Hero Section */}
    <section className="bg-gray-900 text-white">
      <div className="container px-4 sm:px-6 mx-auto py-16 md:py-24">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Tyga Gadgets Store</h1>
          <p className="text-xl text-gray-300">
            We're here to help. Reach out to us with any questions or concerns.
          </p>
        </div>
      </div>
    </section>

    {/* Contact Information and Form */}
    <section className="py-16">
      <div className="container px-4 sm:px-6 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <ContactInfo />
          <div className="lg:col-span-2">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>

    <ContactMap />
    <ContactFAQ />
  </div>
);

export default ContactPage;
