
const FooterBottom = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="border-t border-gray-800 py-6">
      <div className="container mx-auto px-4 sm:px-6 flex flex-col md:flex-row justify-between items-center">
        <p className="text-gray-400 text-sm text-center md:text-left mb-4 md:mb-0">
          © {currentYear} Tyga Gadgets Store. All rights reserved.
        </p>
        <div className="flex space-x-4">
          <img src="https://cdn-icons-png.flaticon.com/128/196/196578.png" alt="Visa" className="h-8 w-auto" />
          <img src="https://cdn-icons-png.flaticon.com/128/196/196561.png" alt="MasterCard" className="h-8 w-auto" />
          <img src="https://cdn-icons-png.flaticon.com/128/196/196539.png" alt="PayPal" className="h-8 w-auto" />
          <img src="https://cdn-icons-png.flaticon.com/128/196/196565.png" alt="Discover" className="h-8 w-auto" />
        </div>
      </div>
    </div>
  );
};
export default FooterBottom;
