import React, { useState } from 'react';
import image_man from "../assets/image_man.jpg";

const ProductList = () => {
  // Initial state with a list of products
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Men's Classic White T-Shirt",
      category: "Men's Clothing",
      price: 1240,
      icon: image_man
    },
    {
      id: 2,
      name: "Formal Shirts For Men",
      category: "Men's Clothing",
      price: 1189,
      icon: image_man
    },
    {
      id: 3,
      name: "Formal Trousers For Men",
      category: "Men's Clothing",
      price: 1100,
      icon: image_man
    },
    {
      id: 4,
      name: "Formal Trousers For Men",
      category: "Men's Clothing",
      price: 908,
      icon: image_man
    },
    {
      id: 5,
      name: "Formal Trousers For Men",
      category: "Men's Clothing",
      price: 908,
      icon: image_man
    },
    {
      id: 6,
      name: "Formal Trousers For Men",
      category: "Men's Clothing",
      price: 908,
      icon: image_man
    },
    {
      id: 7,
      name: "Formal Trousers For Men",
      category: "Men's Clothing",
      price: 908,
      icon: image_man
    }
  ]);

  return (
    <div className="list_1 space-y-4">
      {products.map((product) => (
        <div key={product.id} className="element flex justify-between items-center bg-white rounded-lg">
          <span className="flex items-center space-x-3">
            
            <img src={product.icon} alt={product.name} className="w-12 h-12 object-cover rounded-full" />
            <div className="detail">
              <h6 className="font-semibold text-gray-800">{product.name}</h6>
              <p className="text-sm text-gray-500">{product.category}</p>
            </div>
          </span>
          <h5 className="text-black font-semibold">₹{product.price}</h5>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
