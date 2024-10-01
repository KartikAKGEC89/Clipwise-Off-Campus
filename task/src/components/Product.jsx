import React from 'react';
import groupImage from '../assests/Sales.png';

const Product = () => {
  const products = [
    {
      id: 1,
      name: 'CRYSTAL AGATE PHONE GRIP',
      price: '18.99$',
      imageUrl: groupImage,
    },
    {
      id: 2,
      name: 'CRYSTAL AGATE PHONE GRIP',
      price: '18.99$',
      imageUrl: groupImage,
    },
    {
      id: 3,
      name: 'CRYSTAL AGATE PHONE GRIP',
      price: '18.99$',
      imageUrl: groupImage,
    },
    {
      id: 4,
      name: 'CRYSTAL AGATE PHONE GRIP',
      price: '18.99$',
      imageUrl: groupImage,
    },
    {
      id: 5,
      name: 'CRYSTAL AGATE PHONE GRIP',
      price: '18.99$',
      imageUrl: groupImage,
    },
    {
      id: 6,
      name: 'CRYSTAL AGATE PHONE GRIP',
      price: '18.99$',
      imageUrl: groupImage,
    },
    {
      id: 7,
      name: 'CRYSTAL AGATE PHONE GRIP',
      price: '18.99$',
      imageUrl: groupImage,
    },
    {
      id: 8,
      name: 'CRYSTAL AGATE PHONE GRIP',
      price: '18.99$',
      imageUrl: groupImage,
    },
  ];

  return (
    <div className="flex flex-col items-center">
    
      <h1 className="text-5xl font-bold mt-10 mb-6 text-[#326A99]">All Product</h1>

      <hr className="w-12 border-t-2 border-gray-300 my-2" />

      
      <div className="flex justify-start w-full max-w-7xl mb-8">
        <div className="text-[hsla(205,25%,30%,1)]  mr-12 font-semibold">Filter: <span className="font-bold text-[hsla(205,55%,43%,1)]">All Products</span> &#9660;</div>
        <div className="text-[hsla(205,25%,30%,1)] font-semibold">Sort: <span className="font-bold text-[hsla(205,55%,43%,1)]">Best Selling</span> &#9660;</div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-8xl mb-8">
        {products.map((product) => (
          <div
            key={product.id}
            className="relative bg-white rounded-3xl shadow-lg p-8 flex flex-col items-center transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl hover:z-10"
          >
            <img src={product.imageUrl} alt={product.name} className="h-48 w-48 object-contain mb-4" />
            <h2 className="font-semibold text-xl mb-2 text-center text-[hsla(205,25%,30%,1)]">{product.name}</h2>
            <p className="text-[hsla(205,55%,43%,1)] font-bold mb-4 text-xl">{product.price}</p>
            <button className="bg-white text-[#6FB4FF] px-8 py-2 border-2 border-[#6FB4FF] rounded-lg transition-all duration-300 hover:bg-gradient-to-r from-[#75CCEB] to-[#6FB4FF] hover:text-white">
              Buy Now
            </button>
          </div>
        ))}
      </div>
      <button className="bg-white text-[#6FB4FF] px-8 py-2 border-2 border-[#6FB4FF] rounded-lg transition-all duration-300 hover:bg-gradient-to-r from-[#75CCEB] to-[#6FB4FF] hover:text-white mb-12">
        View All
      </button>
    </div>
  );
};

export default Product;