
import { Link } from 'react-router-dom';
import { Banner as BannerType } from '@/lib/types';
import { Button } from '@/components/ui/button';

interface BannerProps {
  banner: BannerType;
}

const Banner: React.FC<BannerProps> = ({ banner }) => {
  return (
    <div className="relative overflow-hidden rounded-lg">
      <div className="h-[400px] md:h-[500px] w-full">
        <img 
          src={banner.image} 
          alt={banner.title} 
          className="w-full h-full object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent flex flex-col justify-center p-6 sm:p-12">
        <div className="max-w-md animate-slideIn">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3">
            {banner.title}
          </h2>
          <p className="text-lg sm:text-xl text-white/90 mb-6">
            {banner.subtitle}
          </p>
          <Button
            asChild
            className="bg-tyga-500 hover:bg-tyga-600 text-white px-6 py-3 text-lg"
          >
            <Link to={banner.link}>
              {banner.buttonText}
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
