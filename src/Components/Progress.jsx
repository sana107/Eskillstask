import React from 'react';
import { Pie } from 'react-chartjs-2'; // Import Pie chart from react-chartjs-2
import { BsThreeDotsVertical } from 'react-icons/bs'; // Icon for the three dots menu
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  CategoryScale,
  LinearScale
} from 'chart.js';

// Register Chart.js components
ChartJS.register(Title, Tooltip, Legend, ArcElement, CategoryScale, LinearScale);

const RevenueCard = () => {
  // Define the data for the circular progress chart (Pie chart)
  const data = {
    datasets: [
      {
        data: [75.55, 24.45], // [current percentage, remaining percentage]
        backgroundColor: ['#f87171', '#e5e7eb'], // Red for progress, Gray for remaining
        borderWidth: 0,
      },
    ],
  };

  // Define options for the chart (circular appearance)
  const options = {
    responsive: true,
    cutout: '80%', // Makes the circle hollow to create a progress ring
    plugins: {
      tooltip: {
        enabled: false, // Disable tooltip
      },
    },
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 lg:w-2/5 max-lg:w-full mt-4">
      <div className="flex justify-between">
        <div>
          <h2 className="text-lg font-semibold text-gray-700">Revenue</h2>
          <p className="text-sm text-gray-500">Revenue Target</p>
        </div>
        <BsThreeDotsVertical />
      </div>

      {/* Circular Progress Bar */}
      <div className="relative flex items-center justify-center h-32 w-32 mx-auto my-4">
        <Pie data={data} options={options} />
        <span className="text-xl font-bold text-gray-800 absolute">75.55%</span>
      </div>

      {/* Revenue Details */}
      <p className="text-sm text-gray-600 mt-4">
        You earned{' '}
        <span className="font-medium text-green-600">₹15,000</span> today,
        which is higher than yesterday.
      </p>

      <div className="flex justify-between mt-4">
        <div>
          <p className="text-sm text-gray-500">Total Revenue</p>
          <p className="text-lg font-semibold text-gray-800">
            ₹100K <span className="text-green-500">↑</span>
          </p>
        </div>
        <div>
          <p className="text-sm text-gray-500">Today</p>
          <p className="text-lg font-semibold text-gray-800">
            ₹15K <span className="text-green-500">↑</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RevenueCard;
