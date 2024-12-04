import React from "react";

const WarehouseManagement = () => {
  const warehouses = [
    {
      location: "Bhopal",
      products: 1240,
      percentage: 80,
      color: "bg-blue-400",
    },
    {
      location: "Indore",
      products: 1240,
      percentage: 60,
      color: "bg-orange-400",
    },
    {
      location: "Jabalpur",
      products: 1240,
      percentage: 49,
      color: "bg-gray-400",
    },
    {
      location: "Dewas",
      products: 1240,
      percentage: 100,
      color: "bg-purple-400",
    },
    {
      location: "Ratlam",
      products: 1240,
      percentage: 50,
      color: "bg-green-400",
    },
  ];

  return (
    <div>
      

      {/* Map */}
      <div className="mb-4">
        <iframe
          title="Warehouse Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241317.1160991003!2d72.74110150427725!3d19.082522310682997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b91d3e19a097%3A0x9e1267b21153140a!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1688033986847!5m2!1sen!2sin"
          width="100%"
          height="200"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="rounded-lg"
        ></iframe>
      </div>

      {/* Warehouse Stats */}
      <div className="space-y-2">
        {warehouses.map((warehouse, index) => (
          <div key={index} className="flex items-center justify-between  pt-2 lg:w-[300px] ">
            <div>
              <div className="text-sm text-gray-700">{warehouse.location}</div>
              <div className="text-sm text-gray-500">
                {warehouse.products} Products
              </div>
            </div>
            <div className="w-1/4 bg-gray-200 rounded-full h-2 overflow-hidden flex items-center justify-between ">
              <div
                className={`${warehouse.color} h-full `}
                style={{ width: `${warehouse.percentage}%` }}
              ></div>

              {/* <div className="text-sm text-gray-700">{warehouse.percentage}%</div> */}
            </div>
            <div className="text-sm text-gray-700">{warehouse.percentage}%</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WarehouseManagement;
