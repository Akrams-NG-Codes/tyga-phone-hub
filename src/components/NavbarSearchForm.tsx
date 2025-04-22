
import { useState } from 'react';
import { Search } from 'lucide-react';

type Props = {
  onSubmit?: () => void;
  className?: string;
};

const NavbarSearchForm = ({ onSubmit, className }: Props) => {
  const [query, setQuery] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSubmit) onSubmit();
    // Implement your search logic here
    console.log('Search query:', query);
    setQuery('');
  };

  return (
    <form onSubmit={handleSubmit} className={className + ' items-center relative'}>
      <input
        type="text"
        placeholder="Search products..."
        className="py-2 pl-3 pr-10 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-tyga-500 focus:border-transparent"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button type="submit" className="absolute right-3 text-gray-500">
        <Search size={18} />
      </button>
    </form>
  );
};

export default NavbarSearchForm;
