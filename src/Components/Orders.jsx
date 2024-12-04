import React, { useState } from "react";
import { CiCalendarDate } from "react-icons/ci";
import { GiAbacus } from "react-icons/gi";

const RecentOrders = () => {
  const orders = [
    {
      product: "Men's White T-Shirt",
      customer: "John Doe",
      email: "john@example.com",
      quantity: 500,
      total: "₹1000",
      status: "Processing",
    },
    {
      product: "Chinos",
      customer: "Jane Smith",
      email: "jane@example.com",
      quantity: 600,
      total: "₹1500",
      status: "Shipped",
    },
    {
      product: "Cargo Pants",
      customer: "Bob Brown",
      email: "bob@example.com",
      quantity: 600,
      total: "₹2000",
      status: "Delivered",
    },
    {
      product: "Sweatpant",
      customer: "Bob Brown",
      email: "bob@example.com",
      quantity: 600,
      total: "₹2000",
      status: "Delivered",
    },
    {
      product: "Joggers",
      customer: "Bob Brown",
      email: "bob@example.com",
      quantity: 600,
      total: "₹2000",
      status: "Delivered",
    },
   
  ];



    // State for Pagination
    const [currentPage, setCurrentPage] = useState(1);
    const ordersPerPage = 5;
  
    // Calculate Pagination
    const totalPages = Math.ceil(orders.length / ordersPerPage);
    const startIndex = (currentPage - 1) * ordersPerPage;
    const currentOrders = orders.slice(startIndex, startIndex + ordersPerPage);

  const getStatusClass = (status) => {
    switch (status) {
      case "Processing":
        return "bg-yellow-200 text-yellow-600";
      case "Shipped":
        return "bg-blue-200 text-blue-600";
      case "Delivered":
        return "bg-green-200 text-green-600";
      default:
        return "bg-gray-200 text-gray-600";
    }
  };

  return (
    <div >
      
      
      
      
      {/* <h2 className="text-xl font-semibold mb-4">Recent Orders</h2> */}
         {/* Header with buttons */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold">Recent Orders</h2>
        <div className="flex items-center space-x-2">
          {/* Select Date Button */}
          <button className="px-3 py-1.5 bg-white border border-gray-300 rounded-md text-sm text-gray-400 hover:bg-gray-200">
          <div className="flex items-center justify-center">
            <CiCalendarDate /> &nbsp; Select Date
          </div>
          </button>
          {/* Filters Button */}
          <button className="px-3 py-1.5 bg-white border border-gray-300 rounded-md text-sm text-gray-400 hover:bg-gray-200">
           
            <div className="flex items-center justify-center">
            <GiAbacus />  &nbsp; Filters
            </div>
          </button>
          {/* See All Button */}
          <button className="px-4 py-1.5 bg-red-200 text-red-600 rounded-md text-sm hover:bg-red-400 hover:text-white">
            See All
          </button>
        </div>
      </div>















      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse border border-gray-200">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-3 text-left text-sm font-medium text-gray-600 border-b">Product</th>
              <th className="p-3 text-left text-sm font-medium text-gray-600 border-b">Customer</th>
              <th className="p-3 text-left text-sm font-medium text-gray-600 border-b">Total</th>
              <th className="p-3 text-left text-sm font-medium text-gray-600 border-b">Status</th>
              <th className="p-3 text-center text-sm font-medium text-gray-600 border-b">Action</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) => (
              <tr key={index} className="hover:bg-gray-50">
                <td className="p-3 text-sm text-gray-700 border-b">
                  {order.product}
                  <div className="text-xs text-gray-500">Qty: {order.quantity}</div>
                </td>
                <td className="p-3 text-sm text-gray-700 border-b">
                  {order.customer}
                  <div className="text-xs text-gray-500">{order.email}</div>
                </td>
                <td className="p-3 text-sm text-gray-700 border-b">{order.total}</td>
                <td className="p-3 text-sm border-b">
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-semibold ${getStatusClass(
                      order.status
                    )}`}
                  >
                    {order.status}
                  </span>
                </td>
                <td className="p-3 text-center border-b">
                  <button className="text-blue-500 hover:text-blue-700 mr-2">
                    👁️
                  </button>
                  <button className="text-red-500 hover:text-red-700">
                    🗑️
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>


       {/* Pagination */}
      <div className="flex items-center justify-between mt-16">
        <button
          className="px-3 py-1 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 disabled:opacity-50"
          disabled={currentPage === 1}
          onClick={() => setCurrentPage(currentPage - 1)}
        >
          Previous
        </button>
        <div className="text-sm text-gray-600">
          Page {currentPage} of {totalPages}
        </div>
        <button
          className="px-3 py-1 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 disabled:opacity-50"
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage(currentPage + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default RecentOrders;
