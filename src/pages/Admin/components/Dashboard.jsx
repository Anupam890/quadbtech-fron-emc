import React, { useState, useEffect } from "react";
import { UsersRound } from "lucide-react";

const Dashboard = () => {
  const [users, setTotalUsers] = useState(0);

  useEffect(() => {
    fetch("http://localhost:3000/api/auth/totalUsers")
      .then((res) => res.json())
      .then((data) => {
        setTotalUsers(data.length);
      });
  }, []);

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Dashboard</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <div className="card bg-white p-4 rounded-lg shadow-md flex items-center justify-between">
          <div className="card-info">
            <h2 className="text-3xl font-extrabold text-gray-700">{users}</h2>
            <p className="text-sm text-gray-500">Total Users</p>
          </div>
          <div className="text-gray-600">
            <UsersRound size={40} />
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-sm">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
          <h2 className="text-xl font-bold text-gray-800 mb-2 md:mb-0">
            Sales Details
          </h2>
          <select className="border border-gray-300 rounded-md p-2 text-sm text-gray-600">
            <option>October</option>
            <option>September</option>
            <option>August</option>
          </select>
        </div>

        {/* Placeholder for sales data */}
        <div className="text-gray-500 text-sm">
          No sales data available for the selected month.
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
