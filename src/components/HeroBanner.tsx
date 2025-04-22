
import { useState, useEffect } from 'react';
import { banners } from '@/lib/data';
import Banner from './Banner';

const HeroBanner = () => {
  const [currentBannerIndex, setCurrentBannerIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBannerIndex((prevIndex) => (prevIndex + 1) % banners.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="container px-4 sm:px-6 mx-auto py-6">
      <div className="relative">
        <Banner banner={banners[currentBannerIndex]} />
        
        {/* Banner dots/indicators */}
        {banners.length > 1 && (
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {banners.map((_, index) => (
              <button
                key={index}
                className={`w-2.5 h-2.5 rounded-full transition-colors ${
                  index === currentBannerIndex ? 'bg-white' : 'bg-white/50'
                }`}
                onClick={() => setCurrentBannerIndex(index)}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default HeroBanner;
