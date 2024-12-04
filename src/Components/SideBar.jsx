// import React, { useState } from 'react'

// const SideBar = () => {


//   const [navOpen, setNavOpen] = useState(false);
//   return (
//     <aside
//     className={`fixed top-0 left-0 h-full z-50 bg-gray-100 p-5 transition-transform transform ${
//       navOpen ? "translate-x-0" : "-translate-x-full"
//     } lg:translate-x-0 lg:block w-1/5 sm:h-screen`}
//   >


//     {/* Close Button (Visible on Small Screens) */}
//     <button
//       className="sm:block hidden text-gray-600 absolute top-4 right-4 bg-gray-200 rounded-full p-2 hover:bg-gray-300"
//       onClick={() => setNavOpen(false)}
//     >
//       <span className="material-symbols-rounded">close</span>
//     </button>



//     <h2 className="text-lg font-bold mb-4   bg-rose-100 inline-block px-2 py-1 rounded ">
//       Dashboard
//     </h2>

//     <ul className="space-y-2">
//       <li>
//         <a href="#" className="block p-2 rounded hover:bg-gray-200">
//           User List
//         </a>
//       </li>
//       <li>
//         <a href="#" className="block p-2 rounded hover:bg-gray-200">
//           Product Management
//         </a>
//       </li>
//       <li>
//         <a href="#" className="block p-2 rounded hover:bg-gray-200">
//           Inventory Management
//         </a>
//       </li>
//       <li>
//         <a href="#" className="block p-2 rounded hover:bg-gray-200">
//           Warehouse Management
//         </a>
//       </li>
//       <li>
//         <a href="#" className="block p-2 rounded hover:bg-gray-200">
//           Sale
//         </a>
//       </li>
//     </ul>
//   </aside>
//   )
// }

// export default SideBar
