
import { useState } from 'react';

interface ProductGalleryProps {
  images: string[];
  productName: string;
}

const ProductGallery: React.FC<ProductGalleryProps> = ({ images, productName }) => {
  const [selectedImage, setSelectedImage] = useState(0);

  return (
    <div className="flex flex-col">
      {/* Main image */}
      <div className="w-full aspect-square rounded-lg overflow-hidden mb-4">
        <img 
          src={images[selectedImage]} 
          alt={`${productName} - image ${selectedImage + 1}`} 
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Thumbnails */}
      <div className="flex space-x-3 overflow-x-auto">
        {images.map((image, index) => (
          <div 
            key={index}
            className={`
              cursor-pointer w-20 h-20 flex-shrink-0 rounded-md overflow-hidden border-2
              ${selectedImage === index ? 'border-tyga-500' : 'border-transparent'}
            `}
            onClick={() => setSelectedImage(index)}
          >
            <img 
              src={image} 
              alt={`${productName} - thumbnail ${index + 1}`} 
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductGallery;
