import React, { useState } from 'react';

// Sample product data
const products = [
  {
    id: 1,
    name: "Wireless Headphones",
    image: "/headphones.jpg",
    description: "High-quality wireless headphones with noise cancellation.",
  },
  {
    id: 2,
    name: "Smartphone",
    image: "/smartphone.jpg",
    description: "Latest smartphone with cutting-edge features.",
  },
  {
    id: 3,
    name: "4K TV",
    image: "/tv.jpg",
    description: "Ultra HD 4K TV with vibrant colors and smart features.",
  },
  {
    id: 4,
    name: "Smartwatch",
    image: "/smartwatch.jpg",
    description: "Stylish smartwatch with fitness tracking and notifications.",
  },
  {
    id: 5,
    name: "Bluetooth Speaker",
    image: "/speaker.jpg",
    description: "Portable Bluetooth speaker with high-quality sound.",
  },
  // Add more products as needed
];

const Products = () => {
  const [showMore, setShowMore] = useState(false);

  const displayedProducts = showMore ? products : products.slice(0, 3);

  return (
    <div className="parallax py-12">
      <div className="mx-6 px-6">
        <h2 className="text-4xl font-bold text-center mb-10 text-white">Our Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {displayedProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                  {product.name}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {product.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        {products.length > 3 && (
          <div className="text-center mt-6">
            <button
              onClick={() => setShowMore(!showMore)}
              className="bg-blue-500 text-white px-6 py-3 rounded-md shadow-md hover:bg-blue-600 transition-colors duration-300"
            >
              {showMore ? 'Show Less' : 'See More'}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;
