
import { Product, Category, Banner } from "./types";

export const products: Product[] = [
  {
    id: "iphone-15-pro",
    name: "iPhone 15 Pro",
    description: "The most advanced iPhone yet with titanium design and A17 Pro chip for unprecedented performance.",
    price: 999,
    images: [
      "https://images.unsplash.com/photo-1632661674596-df8be070a5c5?q=80&w=1000",
      "https://images.unsplash.com/photo-1591337676887-a217a6970a8a?q=80&w=1000"
    ],
    category: "smartphones",
    brand: "Apple",
    featured: true,
    specifications: {
      "Display": "6.1-inch Super Retina XDR",
      "Processor": "A17 Pro chip",
      "Camera": "48MP main camera",
      "Battery": "All-day battery life",
      "Storage": "128GB, 256GB, 512GB, 1TB",
      "OS": "iOS 17"
    },
    stock: 25,
    slug: "iphone-15-pro",
    relatedProductIds: ["iphone-15", "iphone-14-pro", "airpods-pro"],
    isNew: true
  },
  {
    id: "iphone-15",
    name: "iPhone 15",
    description: "Featuring a stunning design, advanced camera system and A16 Bionic chip.",
    price: 799,
    images: [
      "https://images.unsplash.com/photo-1695046665921-d1bdb4f2aeaf?q=80&w=1000",
      "https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?q=80&w=1000"
    ],
    category: "smartphones",
    brand: "Apple",
    featured: true,
    specifications: {
      "Display": "6.1-inch Super Retina XDR",
      "Processor": "A16 Bionic chip",
      "Camera": "Dual 12MP camera system",
      "Battery": "Up to 20 hours video playback",
      "Storage": "128GB, 256GB, 512GB",
      "OS": "iOS 17"
    },
    stock: 42,
    slug: "iphone-15",
    relatedProductIds: ["iphone-15-pro", "iphone-14", "airpods-pro"],
    isNew: true
  },
  {
    id: "iphone-14-pro",
    name: "iPhone 14 Pro",
    description: "Pro-level camera, display, and performance with innovative safety features.",
    price: 899,
    discountPrice: 799,
    images: [
      "https://images.unsplash.com/photo-1664478546384-d57ffe74a478?q=80&w=1000",
      "https://images.unsplash.com/photo-1580910051074-3eb694886505?q=80&w=1000"
    ],
    category: "smartphones",
    brand: "Apple",
    specifications: {
      "Display": "6.1-inch Super Retina XDR with ProMotion",
      "Processor": "A16 Bionic chip",
      "Camera": "48MP main camera",
      "Battery": "Up to 23 hours video playback",
      "Storage": "128GB, 256GB, 512GB, 1TB",
      "OS": "iOS 16, upgradable to iOS 17"
    },
    stock: 18,
    slug: "iphone-14-pro",
    relatedProductIds: ["iphone-15-pro", "iphone-14", "airpods-pro"]
  },
  {
    id: "samsung-galaxy-s23-ultra",
    name: "Samsung Galaxy S23 Ultra",
    description: "Revolutionary camera experience with a built-in S Pen and powerful performance.",
    price: 1199,
    images: [
      "https://images.unsplash.com/photo-1678911820864-e5f41b0dbcb5?q=80&w=1000",
      "https://images.unsplash.com/photo-1610945264803-c22b62d2a7b3?q=80&w=1000"
    ],
    category: "smartphones",
    brand: "Samsung",
    featured: true,
    specifications: {
      "Display": "6.8-inch Dynamic AMOLED 2X",
      "Processor": "Snapdragon 8 Gen 2",
      "Camera": "200MP main camera",
      "Battery": "5000mAh",
      "Storage": "256GB, 512GB, 1TB",
      "OS": "Android 13, One UI 5.1"
    },
    stock: 15,
    slug: "samsung-galaxy-s23-ultra",
    relatedProductIds: ["samsung-galaxy-s23", "samsung-galaxy-z-fold-5", "samsung-galaxy-buds-2-pro"],
    isNew: true
  },
  {
    id: "samsung-galaxy-s23",
    name: "Samsung Galaxy S23",
    description: "Featuring a premium design with powerful performance and enhanced camera capabilities.",
    price: 799,
    images: [
      "https://images.unsplash.com/photo-1676380226025-212b4ee05223?q=80&w=1000",
      "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?q=80&w=1000"
    ],
    category: "smartphones",
    brand: "Samsung",
    specifications: {
      "Display": "6.1-inch Dynamic AMOLED 2X",
      "Processor": "Snapdragon 8 Gen 2",
      "Camera": "50MP main camera",
      "Battery": "3900mAh",
      "Storage": "128GB, 256GB",
      "OS": "Android 13, One UI 5.1"
    },
    stock: 31,
    slug: "samsung-galaxy-s23",
    relatedProductIds: ["samsung-galaxy-s23-ultra", "samsung-galaxy-s22", "samsung-galaxy-buds-2-pro"]
  },
  {
    id: "samsung-galaxy-z-fold-5",
    name: "Samsung Galaxy Z Fold 5",
    description: "The ultimate productivity device with a foldable display and multitasking capabilities.",
    price: 1799,
    images: [
      "https://images.unsplash.com/photo-1669380432759-bbb2e5687a95?q=80&w=1000",
      "https://images.unsplash.com/photo-1662947795866-487e3f6e1718?q=80&w=1000"
    ],
    category: "smartphones",
    brand: "Samsung",
    featured: true,
    specifications: {
      "Display": "7.6-inch Dynamic AMOLED 2X (Main), 6.2-inch (Cover)",
      "Processor": "Snapdragon 8 Gen 2",
      "Camera": "50MP main camera",
      "Battery": "4400mAh",
      "Storage": "256GB, 512GB, 1TB",
      "OS": "Android 13, One UI 5.1.1"
    },
    stock: 10,
    slug: "samsung-galaxy-z-fold-5",
    relatedProductIds: ["samsung-galaxy-z-flip-5", "samsung-galaxy-s23-ultra", "samsung-galaxy-buds-2-pro"],
    isNew: true
  },
  {
    id: "airpods-pro",
    name: "AirPods Pro (2nd generation)",
    description: "Active Noise Cancellation, Transparency mode, and personalized Spatial Audio.",
    price: 249,
    images: [
      "https://images.unsplash.com/photo-1603351154351-5e2d0600bb77?q=80&w=1000",
      "https://images.unsplash.com/photo-1588423771073-b8903fbb85b5?q=80&w=1000"
    ],
    category: "accessories",
    brand: "Apple",
    specifications: {
      "Chip": "H2 chip",
      "Noise Control": "Active Noise Cancellation, Transparency mode",
      "Connectivity": "Bluetooth 5.3",
      "Battery": "Up to 6 hours listening time",
      "Charging": "MagSafe Charging Case, USB-C",
      "Water Resistance": "IPX4 sweat and water resistant"
    },
    stock: 45,
    slug: "airpods-pro",
    relatedProductIds: ["iphone-15-pro", "iphone-15", "apple-watch-series-9"]
  },
  {
    id: "samsung-galaxy-buds-2-pro",
    name: "Samsung Galaxy Buds 2 Pro",
    description: "Premium earbuds with intelligent Active Noise Cancellation and Hi-Fi sound quality.",
    price: 229,
    discountPrice: 199,
    images: [
      "https://images.unsplash.com/photo-1668485893647-e0397791dcca?q=80&w=1000",
      "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?q=80&w=1000"
    ],
    category: "accessories",
    brand: "Samsung",
    specifications: {
      "Connectivity": "Bluetooth 5.3",
      "Sound": "24bit Hi-Fi sound, 360 Audio",
      "Noise Control": "Intelligent ANC",
      "Battery": "Up to 5 hours with ANC on",
      "Charging": "USB-C, Wireless charging",
      "Water Resistance": "IPX7 water resistant"
    },
    stock: 27,
    slug: "samsung-galaxy-buds-2-pro",
    relatedProductIds: ["samsung-galaxy-s23-ultra", "samsung-galaxy-s23", "samsung-galaxy-z-fold-5"]
  },
  {
    id: "apple-watch-series-9",
    name: "Apple Watch Series 9",
    description: "The most powerful Apple Watch yet with new chip, brighter display, and faster charging.",
    price: 399,
    images: [
      "https://images.unsplash.com/photo-1611353329484-a4d02513e5e0?q=80&w=1000",
      "https://images.unsplash.com/photo-1546868871-7041f2a55e12?q=80&w=1000"
    ],
    category: "accessories",
    brand: "Apple",
    featured: true,
    specifications: {
      "Display": "Always-On Retina display",
      "Processor": "S9 SiP",
      "Health Features": "ECG, Blood Oxygen, Temperature sensing",
      "Battery": "Up to 18 hours",
      "Water Resistance": "Water resistant 50 meters",
      "Connectivity": "GPS, Cellular optional"
    },
    stock: 22,
    slug: "apple-watch-series-9",
    relatedProductIds: ["iphone-15-pro", "airpods-pro", "iphone-15"],
    isNew: true
  },
  {
    id: "magsafe-charger",
    name: "MagSafe Charger",
    description: "The MagSafe Charger makes wireless charging a snap for your iPhone.",
    price: 39,
    images: [
      "https://images.unsplash.com/photo-1618757840917-33b292dbfb1e?q=80&w=1000",
      "https://images.unsplash.com/photo-1617997455403-41f333d44d76?q=80&w=1000"
    ],
    category: "accessories",
    brand: "Apple",
    specifications: {
      "Compatibility": "iPhone 12 and later, AirPods with MagSafe case",
      "Connection": "USB-C",
      "Charging": "Up to 15W wireless charging",
      "Design": "Maintains compatibility with Qi charging"
    },
    stock: 50,
    slug: "magsafe-charger",
    relatedProductIds: ["iphone-15-pro", "iphone-15", "airpods-pro"]
  },
  {
    id: "samsung-25w-travel-adapter",
    name: "Samsung 25W Travel Adapter",
    description: "Fast charging solution for your Samsung Galaxy devices with USB-C output.",
    price: 19.99,
    images: [
      "https://images.unsplash.com/photo-1586235871414-09c3b38adc67?q=80&w=1000",
      "https://images.unsplash.com/photo-1583863788674-95ef966559d8?q=80&w=1000"
    ],
    category: "accessories",
    brand: "Samsung",
    specifications: {
      "Output": "USB-C, up to 25W",
      "Input": "100-240V",
      "Compatibility": "Samsung Galaxy smartphones and tablets",
      "Features": "Adaptive Fast Charging technology"
    },
    stock: 65,
    slug: "samsung-25w-travel-adapter",
    relatedProductIds: ["samsung-galaxy-s23-ultra", "samsung-galaxy-s23", "samsung-galaxy-buds-2-pro"]
  },
  {
    id: "iphone-15-silicone-case",
    name: "iPhone 15 Silicone Case",
    description: "Designed by Apple to complement iPhone 15, this silicone case fits snugly over the volume buttons, side button, and curves without adding bulk.",
    price: 49,
    images: [
      "https://images.unsplash.com/photo-1623126908029-58cb08a2b272?q=80&w=1000",
      "https://images.unsplash.com/photo-1613483187636-c2024013d54a?q=80&w=1000"
    ],
    category: "accessories",
    brand: "Apple",
    specifications: {
      "Material": "Silicone exterior, microfiber lining",
      "Compatibility": "iPhone 15",
      "Features": "MagSafe compatible, wireless charging compatible",
      "Colors": "Various colors available"
    },
    stock: 38,
    slug: "iphone-15-silicone-case",
    relatedProductIds: ["iphone-15", "iphone-15-pro", "magsafe-charger"]
  }
];

export const categories: Category[] = [
  {
    id: "smartphones",
    name: "Smartphones",
    description: "Latest smartphones from Apple and Samsung",
    slug: "smartphones",
    image: "https://images.unsplash.com/photo-1556656793-08538906a9f8?q=80&w=1000"
  },
  {
    id: "accessories",
    name: "Accessories",
    description: "Cases, chargers, headphones, and more",
    slug: "accessories",
    image: "https://images.unsplash.com/photo-1625287298117-2d118b6341df?q=80&w=1000"
  },
  {
    id: "apple",
    name: "Apple",
    description: "All Apple products including iPhone and accessories",
    slug: "apple",
    image: "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?q=80&w=1000"
  },
  {
    id: "samsung",
    name: "Samsung",
    description: "All Samsung products including Galaxy phones and accessories",
    slug: "samsung",
    image: "https://images.unsplash.com/photo-1610805146070-178859ab9ef1?q=80&w=1000"
  }
];

export const banners: Banner[] = [
  {
    id: "banner-1",
    title: "iPhone 15 Pro",
    subtitle: "The ultimate iPhone with titanium design and A17 Pro chip.",
    buttonText: "Shop Now",
    image: "https://images.unsplash.com/photo-1632661674596-df8be070a5c5?q=80&w=1000",
    link: "/product/iphone-15-pro"
  },
  {
    id: "banner-2",
    title: "Samsung Galaxy S23 Ultra",
    subtitle: "Revolutionary camera with 200MP and powerful performance.",
    buttonText: "Explore",
    image: "https://images.unsplash.com/photo-1678911820864-e5f41b0dbcb5?q=80&w=1000",
    link: "/product/samsung-galaxy-s23-ultra"
  },
  {
    id: "banner-3",
    title: "Accessory Sale",
    subtitle: "Save up to 20% on select phone accessories.",
    buttonText: "View Deals",
    image: "https://images.unsplash.com/photo-1625287298117-2d118b6341df?q=80&w=1000",
    link: "/category/accessories"
  }
];

// Helper function to get product by ID
export const getProductById = (id: string): Product | undefined => {
  return products.find(product => product.id === id);
};

// Helper function to get product by slug
export const getProductBySlug = (slug: string): Product | undefined => {
  return products.find(product => product.slug === slug);
};

// Helper function to get products by category
export const getProductsByCategory = (categorySlug: string): Product[] => {
  return products.filter(product => {
    if (categorySlug === "apple") {
      return product.brand === "Apple";
    }
    if (categorySlug === "samsung") {
      return product.brand === "Samsung";
    }
    return product.category === categorySlug;
  });
};

// Helper function to get featured products
export const getFeaturedProducts = (): Product[] => {
  return products.filter(product => product.featured);
};

// Helper function to get related products
export const getRelatedProducts = (productId: string): Product[] => {
  const product = getProductById(productId);
  if (!product || !product.relatedProductIds) return [];
  
  return product.relatedProductIds
    .map(id => getProductById(id))
    .filter((p): p is Product => p !== undefined);
};

// Helper function to get category by slug
export const getCategoryBySlug = (slug: string): Category | undefined => {
  return categories.find(category => category.slug === slug);
};
