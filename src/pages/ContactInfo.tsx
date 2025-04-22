
import { MapPin, Phone, Mail, Clock, Facebook, Twitter, Instagram } from 'lucide-react';

const ContactInfo = () => (
  <div className="lg:col-span-1">
    <h2 className="text-2xl font-bold text-gray-900 mb-6">Get In Touch</h2>
    <div className="space-y-6">
      <div className="flex items-start">
        <MapPin className="h-5 w-5 text-tyga-500 mt-1 mr-3" />
        <div>
          <h3 className="font-medium text-gray-900 mb-1">Store Location</h3>
          <p className="text-gray-600">Jonson street / Kalungi Commercial Plaza</p>
        </div>
      </div>
      <div className="flex items-start">
        <Phone className="h-5 w-5 text-tyga-500 mt-1 mr-3" />
        <div>
          <h3 className="font-medium text-gray-900 mb-1">Phone</h3>
          <p className="text-gray-600">+256 742 088 424</p>
          <p className="text-gray-600">+256 786 758 249</p>
        </div>
      </div>
      <div className="flex items-start">
        <Mail className="h-5 w-5 text-tyga-500 mt-1 mr-3" />
        <div>
          <h3 className="font-medium text-gray-900 mb-1">Email</h3>
          <p className="text-gray-600">tygaofficial790@gmail.com</p>
        </div>
      </div>
      <div className="flex items-start">
        <Clock className="h-5 w-5 text-tyga-500 mt-1 mr-3" />
        <div>
          <h3 className="font-medium text-gray-900 mb-1">Hours</h3>
          <p className="text-gray-600">Monday - Friday: 9AM - 6PM</p>
          <p className="text-gray-600">Saturday: 10AM - 4PM</p>
          <p className="text-gray-600">Sunday: Closed</p>
        </div>
      </div>
    </div>
    <div className="mt-8">
      <h3 className="font-medium text-gray-900 mb-3">Connect With Us</h3>
      <div className="flex space-x-4">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"
          className="bg-gray-100 p-2 rounded-full text-gray-600 hover:text-tyga-500 transition-colors">
          <Facebook size={20} />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"
          className="bg-gray-100 p-2 rounded-full text-gray-600 hover:text-tyga-500 transition-colors">
          <Twitter size={20} />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"
          className="bg-gray-100 p-2 rounded-full text-gray-600 hover:text-tyga-500 transition-colors">
          <Instagram size={20} />
        </a>
      </div>
    </div>
  </div>
);

export default ContactInfo;
