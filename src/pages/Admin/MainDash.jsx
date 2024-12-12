import React from "react";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";

const MainDash = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Navbar />
        <div className="flex-1 overflow-y-auto p-6 bg-[#F9FAFB]">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default MainDash;
