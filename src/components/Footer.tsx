import { Link } from 'react-router-dom';
import { Package, Facebook, Instagram, Twitter } from 'lucide-react';
import { categories } from '@/lib/data';
import FooterCompanyInfo from './FooterCompanyInfo';
import FooterShopLinks from './FooterShopLinks';
import FooterCustomerServiceLinks from './FooterCustomerServiceLinks';
import FooterAboutLinks from './FooterAboutLinks';
import FooterBottom from './FooterBottom';

const Footer = () => (
  <footer className="bg-gray-900 text-white">
    <div className="container mx-auto px-4 sm:px-6 pt-12 pb-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <FooterCompanyInfo />
        <FooterShopLinks />
        <FooterCustomerServiceLinks />
        <FooterAboutLinks />
      </div>
    </div>
    <FooterBottom />
  </footer>
);

export default Footer;
