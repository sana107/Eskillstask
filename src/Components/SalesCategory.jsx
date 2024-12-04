import React, { useState } from "react";
import image_pant from "../assets/image_pant.png";

const SalesList = () => {
  // Initial state with a list of products
  const [category, setCategory] = useState([
    {
      id: 1,
      name: "Slim Fit",
      price: 1509,
      icon: image_pant,
      discount: "+12%",
    },
    {
      id: 2,
      name: "Regular Fit",
      price: 1460,
      icon: image_pant,
      discount: "+0%",
    },
    {
      id: 3,
      name: "Relaxed Fit",
      price: 1229,
      icon: image_pant,
      discount: "+0%",
    },
    {
      id: 4,
      name: "Skinny Fit",
      price: 982,
      icon: image_pant,
      discount: "+19%",
    },
    {
      id: 5,
      name: "Tappered Fit",

      price: 791,
      icon: image_pant,
      discount: "+0%",
    },
    {
      id: 6,
      name: "Straight Fit",

      price: 679,
      icon: image_pant,
      discount: "+11%",
    },
    {
      id: 7,
      name: "Bootcut",

      price: 679,
      icon: image_pant,
      discount: "+11%",
    },
  ]);

  return (
    <div className="list_1 space-y-4">
      {category.map((item) => (
        <div
          key={item.id}
          className="element flex justify-between items-center  rounded-lg"
        >
          <span className="flex items-center space-x-3">
            {/* <i className={`${product.icon} text-xl text-gray-600`} /> */}
            <img
              src={item.icon}
              alt={item.name}
              className="w-12 h-12 object-cover rounded-full"
            />
            <div className="detail">
              <h6 className="font-semibold text-gray-800">{item.name}</h6>
            </div>
          </span>
          <div className="flex justify-between items-center w-[100px]">
            <h5 className="text-black font-semibold">₹{item.price}</h5>
            {/* <button className='bg-orange-400 rounded-lg p-1 text-sm'>{item.discount}</button> */}
            <button
              className={`${
                item.discount === 0 ? "bg-red-500" : "bg-gray-200"
              } rounded-lg p-1 text-[10px] w-[40px] h-[20px] flex items-center justify-center`}
            >
              {item.discount}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SalesList;
