import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import backgroundImage from './images/back-school-concept-with-school-supplies-1.jpg';
import ProductDetails from './ProductDetails';

const products = [
  {
    id: 1,
    name: 'Machined Mechanical Pencil',
    href: '#',
    price: '$48',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg',
    imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
    description: 'Experience the joy of writing with our high-quality machined mechanical pencil. Crafted with precision, it features a sleek black design with a durable machined steel body, complemented by a luxurious brass tip and top. Elevate your writing experience with this stylish and reliable mechanical pencil.',
  },
  {
    id: 2,
    name: 'Zebra SL-F1 Mini Ballpoin',
    href: '#',
    price: '$35',
    imageSrc: 'https://images.squarespace-cdn.com/content/v1/5005c8fc84ae929b37214ebd/1558983623530-LG7DMQOVVI87655FQCP3/Zebra+SL-F1+Mini+Ballpoint+Pen.jpg',
    imageAlt: 'Person using a mini pen',
    description: 'Introducing the Zebra SL-F1 Mini Ballpoint Pen – a compact and stylish writing instrument. This mini pen is perfect for those who appreciate both functionality and aesthetics. With smooth ink flow and a sleek design, it is a must-have accessory for your on-the-go writing needs.',
  },
  {
    id: 3,
    name: 'Focus Paper Refill',
    href: '#',
    price: '$89',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg',
    imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
    description: 'Maximize your productivity with the Focus Paper Refill. This premium paper refill is designed for those who value quality in every detail. Its smooth texture provides an excellent writing surface, making it the ideal choice for jotting down notes, tasks, and ideas. Elevate your writing experience with Focus Paper Refill.',
  },
  {
    id: 4,
    name: 'Mini-note book',
    href: '#',
    price: '$35',
    imageSrc: 'https://www.voicesofyouth.org/sites/voy/files/styles/blog_teaser/public/images/2021-08/pexels-karolina-grabowska-4195410.jpg?h=ff9783c5&itok=krxG434D.jpg',
    imageAlt: 'Some cheap pen with a mini-book on a desk',
    description: 'Capture your thoughts on the go with our Mini-notebook. Despite its compact size, this notebook is big on convenience. Perfect for quick notes, sketches, or doodles, it fits easily into your pocket or bag. The durable cover ensures your notes stay protected, making it an essential companion for your daily adventures.',
  },
  {
    id: 5,
    name: 'Weekly Planner Book',
    href: '#',
    price: '$40',
    imageSrc: 'https://upload.jaknot.com/2023/09/images/products/d062c0/original/ashuka-weekly-planner-book-for-52-weeks-buku-catatan-mingguan-a5-ash-52.jpg',
    imageAlt: 'Some elegant and expensive note book',
    description: 'Stay organized and stylish with our Weekly Planner Book. This elegant planner is designed to help you plan your weeks with precision. With dedicated spaces for each day and additional sections for notes, goals, and priorities, it is the perfect tool to keep your life on track. Elevate your planning with the Ashuka Weekly Planner Book.',
  },
  {
    id: 6,
    name: 'Journal Note Book w/ Vintage Cover',
    href: '#',
    price: '$42',
    imageSrc: 'https://upload.jaknot.com/2023/08/images/products/4196bc/original/buku-catatan-jurnal-notebook-cover-vintage-pattern-a6-wh-1564.jpg',
    imageAlt: 'A Vintage cover Journal book',
    description: 'Rediscover the joy of journaling with our Journal Notebook featuring a Vintage Patterned Cover. Immerse yourself in the charm of the past while expressing your thoughts on the pages within. The compact A6 size makes it easy to carry, allowing you to capture your ideas and memories wherever you go.',
  },
  {
    id: 7,
    name: 'Natural-oak Swan Leg Vinoti Workbench',
    href: '#',
    price: '$121',
    imageSrc: 'https://www.vinoti.com/wp-content/uploads/2023/03/natural-oak-baru.jpg',
    imageAlt: 'Very expensive minimalist leg-workbench',
    description: 'Transform your workspace with the Natural-oak Swan Leg Vinoti Workbench. Crafted with precision and designed for functionality, this workbench combines the beauty of natural oak with a minimalist swan leg design. Create a productive and inspiring work environment with this elegant and durable workbench.',
  },
  {
    id: 8,
    name: 'Modern-minimalist Meeting Desk',
    href: '#',
    price: '$142',
    imageSrc: 'https://images.pexels.com/photos/416320/pexels-photo-416320.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2.jpg',
    imageAlt: 'A modern-futuristic meeting desk and workchair in it',
    description: 'Upgrade your meetings with the Modern-minimalist Meeting Desk. This sleek and futuristic desk is designed to enhance collaboration and productivity. The integrated workchair ensures comfort during long discussions. Elevate your workspace with this modern and minimalist meeting solution.',
  },
  {
    id: 9,
    name: 'Modern Setup-Workbench',
    href: '#',
    price: '$123',
    imageSrc: 'https://images.pexels.com/photos/2528116/pexels-photo-2528116.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2.jpg',
    imageAlt: 'A modern setup for work',
    description: 'Optimize your work environment with the Modern Setup-Workbench. This thoughtfully designed workbench provides a modern and efficient setup for your tasks. With ample space and a contemporary aesthetic, it is perfect for creating a focused and comfortable workspace. Elevate your work experience with this modern setup.',
  }
]

const Product = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleProductClick = (product) => {
    console.log('Product clicked:', product);
    setSelectedProduct(product);
  };

  const handleCloseDetails = () => {
    console.log('Closing details');
    setSelectedProduct(null);
  };

  return (
    <div
      className="h-full"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="h-full">
        <Navbar />

        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 className="sr-only">Products</h2>

          <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {products.map((product) => (
              <div key={product.id} className="group">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="h-full w-full object-cover object-center group-hover:opacity-75"
                />
              </div>
              <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
              <p className="mt-1 text-lg font-medium text-gray-900">{product.price}</p>
              <button onClick={() => handleProductClick(product)}>
                View Details
              </button>
            </div>
          ))}
        </div>
      </div>
      
      {selectedProduct && (
        <ProductDetails
          product={selectedProduct}
          onClose={handleCloseDetails}
        />
      )}

    </div>
    <footer className='App-footer' class='h-0 block pt-32 pb-0' style={{ marginTop: '40px' }}>
      <Footer />
    </footer>
    </div>
  );
}

export default Product;
