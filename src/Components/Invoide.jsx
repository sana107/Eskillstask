import React from "react";
import { Pie } from "react-chartjs-2"; // Import Pie chart from react-chartjs-2
import { BsThreeDotsVertical } from "react-icons/bs"; // Icon for the three dots menu
import { Doughnut } from "react-chartjs-2"; // Import Doughnut chart
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js"; // Register Chart.js components

// Register required Chart.js components
ChartJS.register(ArcElement, Tooltip, Legend);

const InvoiceCard = () => {
  const data = {
    labels: ["Paid", "Unpaid", "Due", "Overdue"], // Labels for the chart
    datasets: [
      {
        data: [100, 50, 75, 120], // Corresponding values
        backgroundColor: [
          "#10b981", // Green for Paid
          "#ef4444", // Red for Unpaid
          "#fbbf24", // Yellow for Due
          "#f97316", // Orange for Overdue
        ],
        hoverOffset: 4, // Adds a hover effect
      },
    ],
  };

  // Options for the chart
  const options = {
    responsive: true, // Ensures the chart adjusts to its container
    maintainAspectRatio: false, // Allows customization of width/height
    plugins: {
      legend: {
        position: "top", // Position of the legend
      },
      tooltip: {
        enabled: true, // Enables tooltips
      },
    },

    cutout: "80%", 
  };


  const centerTextPlugin = {
    id: "centerText",
    beforeDraw(chart) {
      const { width } = chart;
      const { height } = chart;
      const { ctx } = chart;

      ctx.save();

      // Add your text
      ctx.font = "bold 20px Arial";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillStyle = "#374151"; // Text color
      ctx.fillText("₹175k", width / 2, height / 2 + 15); // Title text
      ctx.font = "15px Arial";
      ctx.fillStyle = "#6b7280"; // Text color
      ctx.fillText("Total Invoice Amount", width / 2, height / 2 + 35); // Subtext
      ctx.font = "14px Arial";
      ctx.fillStyle = "#00ff00"; // Text color
      ctx.fillText("+10%", width / 2, height / 2 + 55); // Subtext

      ctx.restore();
    },
  };

  return (


    <div className="mt-10"  >

      {/* Circular Chart */}
      <div className="relative h-64 w-64 mx-auto mb-4">
        <Doughnut data={data} options={options}   plugins={[centerTextPlugin]}/>
        {/* <Pie data={data} options={options} /> */}
        {/* <span className="text-xl font-bold text-gray-800 absolute">75.55%</span> */}
      </div>

      {/* Invoice Details */}
      <ul className="space-y-2 ">
        <li className="flex justify-between items-center">
          <span className="relative before:content-[''] before:inline-block before:w-3 before:h-3 before:rounded-full before:bg-green-500 before:mr-3">
            Paid
          </span>
          <span className="text-green-500">₹10,000</span>
        </li>
        <li className="flex justify-between items-center">
          <span className="relative before:content-[''] before:inline-block before:w-3 before:h-3 before:rounded-full before:bg-red-500 before:mr-3">
            Unpaid
          </span>
          <span className="text-red-500">₹50,000</span>
        </li>
        <li className="flex justify-between items-center">
          <span className="relative before:content-[''] before:inline-block before:w-3 before:h-3 before:rounded-full before:bg-yellow-500 before:mr-3">
            Due
          </span>
          <span className="text-yellow-500">₹80,000</span>
        </li>
        <li className="flex justify-between items-center">
          <span className="relative before:content-[''] before:inline-block before:w-3 before:h-3 before:rounded-full before:bg-orange-500 before:mr-3">
            Overdue
          </span>
          <span className="text-orange-500">₹150,000</span>
        </li>
      </ul>
    </div>
  );
};

export default InvoiceCard;
