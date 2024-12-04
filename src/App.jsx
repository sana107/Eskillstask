import React, { useState } from "react";
import { PiUsersThreeFill } from "react-icons/pi";
import { FaWarehouse } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { TbReportSearch } from "react-icons/tb";
import { BsThreeDotsVertical } from "react-icons/bs";
import RevenueCard from "./Components/Progress";
import StatisticsCard from "./Components/Statistics";
import ProductList from "./Components/TopProducts";
import SalesList from "./Components/SalesCategory";
import InvoiceCard from "./Components/Invoide";
import RecentOrders from "./Components/Orders";
import WarehouseManagement from "./Components/WareHouse";

const App = () => {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <>
      <div className="flex max-h-full bg-gray-50">
        {/* <!-- Sidebar --> */}
        <aside
          className={`h-full z-50 bg-gray-100 p-5 w-[1/5] lg:static fixed top-0 left-0 transition-transform transform ${
            navOpen ? "translate-x-0" : "max-lg:-translate-x-full"
          }`}
        >
          <button
            className="hidden max-lg:block text-gray-600 absolute top-4 right-4 bg-gray-200 rounded-full p-2 hover:bg-gray-300"
            onClick={() => setNavOpen((prev) => !prev)}
          >
            <span className="material-symbols-rounded">close</span>
          </button>

          <h2 className="text-lg font-bold mb-4   bg-rose-100 inline-block px-2 py-1 rounded ">
            Dashboard
          </h2>

          <ul className="space-y-2">
            <li>
              <a href="#" className="block p-2 rounded hover:bg-gray-200">
                User List
              </a>
            </li>
            <li>
              <a href="#" className="block p-2 rounded hover:bg-gray-200">
                Product Management
              </a>
            </li>
            <li>
              <a href="#" className="block p-2 rounded hover:bg-gray-200">
                Inventory Management
              </a>
            </li>
            <li>
              <a href="#" className="block p-2 rounded hover:bg-gray-200">
                Warehouse Management
              </a>
            </li>
            <li>
              <a href="#" className="block p-2 rounded hover:bg-gray-200">
                Sale
              </a>
            </li>
          </ul>
        </aside>

        {/* <!-- Main Content --> */}

        <main className=" bg-gray-50 p-6 lg:w-4/5 w-full">
          {/* <!-- Header --> */}
          <div className=" flex justify-between items-center ">
            <div>
              <button
                className="menu-btn lg:hidden mb-2 mr-4"
                onClick={() => setNavOpen((prev) => !prev)}
              >
                <span className="material-symbols-rounded">
                  {navOpen ? "close" : "menu"}
                </span>
              </button>
            </div>
            <div className="flex justify-between items-center mb-6 w-[950px] mt-4 mr-4">
              <div>
                <h1 className="text-2xl font-bold">Welcome Back, Jay</h1>
                <p className="text-gray-600">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
              </div>
              <div>
                <input
                  type="date"
                  className="border border-gray-300 rounded px-3 py-1.5"
                />
              </div>
            </div>
          </div>

          {/* <!-- Statistics Section --> */}
          <div className="grid grid-cols-1 sm:grid:cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-4 bg-black text-white rounded-lg shadow">
              <PiUsersThreeFill />
              <h3 class="text-lg font-semibold">Total Users</h3>
              <p class="text-3xl font-bold">500</p>
            </div>
            <div class="p-4 bg-purple-500 text-white rounded-lg shadow">
              <FaWarehouse />
              <h3 class="text-lg font-semibold">Total Warehouse</h3>
              <p class="text-3xl font-bold">30</p>
            </div>
            <div class="p-4 bg-blue-500 text-white rounded-lg shadow">
              <FaShoppingCart />
              <h3 class="text-lg font-semibold">Total Products</h3>
              <p class="text-3xl font-bold">2400</p>
            </div>
            <div class="p-4 bg-orange-500 text-white rounded-lg shadow">
              <TbReportSearch />
              <h3 class="text-lg font-semibold">Total Reports</h3>
              <p class="text-3xl font-bold">247</p>
            </div>
          </div>

          {/* <!-- Revenue and Statistics Section --> */}
          <div className="lg:flex gap-4">
            <RevenueCard />

            <StatisticsCard />
          </div>
        </main>
      </div>

      {/* <!--Section Content --> */}

      <section className="bg-gray-50 flex justify-center items-center w-[100%] mx-auto ">
        <div class="grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1 gap-4">
          <div className="p-4 bg-white rounded-lg shadow mb-4">
            <div className="flex justify-between mb-2 ml-2">
              <div>
                <h2 className="text-lg font-semibold text-gray-700">
                  Invoice Status
                </h2>
              </div>
              <BsThreeDotsVertical />
            </div>

            <InvoiceCard />
          </div>

          <div class="p-4 bg-white rounded-lg shadow mb-4">
            <div className="flex justify-between mb-2 ml-2">
              <div>
                <h2 className="text-lg font-semibold text-gray-700">
                  Top Product
                </h2>
                <p className="text-sm text-gray-500">Top Product This Month</p>
              </div>
              <BsThreeDotsVertical />
            </div>
            <ProductList />
          </div>

          <div className="p-4 bg-white rounded-lg shadow mb-4">
            <div className="flex justify-between mb-2 ml-2 bg-white">
              <div>
                <h2 className="text-lg font-semibold text-gray-700">
                  Top Sales Category
                </h2>
                <p className="text-sm text-gray-500">
                  Top Sales Category This Month
                </p>
              </div>
              <BsThreeDotsVertical />
            </div>
            <SalesList />
          </div>
        </div>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 p-6 bg-gray-50 ">
        {/* Recent Orders Card */}
        <div className="bg-white rounded-lg shadow-md p-4 grid col-span-2">
          <RecentOrders />
        </div>

        {/* Warehouse Management Card */}

        <div className="p-4 bg-white rounded-lg shadow mb-6">
          <div className="flex justify-between mb-2 ml-2">
            <div>
              <h2 className="text-lg font-semibold text-gray-700">
                WarehouseManagement
              </h2>
              <p className="text-sm text-gray-500">Location</p>
            </div>
            <BsThreeDotsVertical />
          </div>

          <WarehouseManagement />
        </div>
      </div>
    </>
  );
};

export default App;
