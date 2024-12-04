import React from "react";
import { Line } from "react-chartjs-2";
import { BsThreeDotsVertical } from "react-icons/bs";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Legend,
  Tooltip,
} from "chart.js";

// Register Chart.js components
ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Legend,
  Tooltip
);

const StatisticsCard = () => {
  // Chart data
  const data = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        label: "Stock",
        data: [400, 600, 700, 500, 800, 300, 900, 700, 600, 800, 900, 1000],
        borderColor: "#F87171", // Red
        backgroundColor: "rgba(248, 113, 113, 0.1)", // Transparent red
        tension: 0.4,
        fill: true,
      },
      {
        label: "Sales",
        data: [300, 500, 600, 400, 700, 200, 800, 600, 500, 700, 800, 900],
        borderColor: "#FBBF24", // Orange
        backgroundColor: "rgba(251, 191, 36, 0.1)", // Transparent orange
        tension: 0.4,
        fill: true,
      },
    ],
  };

  // Chart options
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        labels: {
          color: "#4B5563", // Tailwind Gray 700
          font: { size: 12 },
        },
      },
    },
    scales: {
      x: {
        ticks: { color: "#6B7280" }, // Tailwind Gray 500
        grid: { display: false },
      },
      y: {
        ticks: { color: "#6B7280" }, // Tailwind Gray 500
        grid: { color: "#E5E7EB" }, // Tailwind Gray 200
      },
    },
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 lg:w-3/5 mt-4">
      <div className="flex justify-between">
        <div>
          <h2 className="text-lg font-semibold text-gray-700">Statistics</h2>
          <p className="text-sm text-gray-500 mb-4">Stock and Sales</p>

        </div>

        <BsThreeDotsVertical />
      </div>
      <div className="h-64">
        <Line data={data} options={options} />
      </div>
    </div>
  );
};

export default StatisticsCard;
