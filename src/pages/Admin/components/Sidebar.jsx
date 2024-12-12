import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  const [active, setActive] = useState(""); 
  const location = useLocation(); 
  
  React.useEffect(() => {
    setActive(location.pathname);
  }, [location]);

  return (
    <div className="w-64 h-screen bg-white border-r border-gray-200 flex flex-col justify-between">
      {/* Top Section */}
      <div>
        <div className="p-6">
          <h1 className="text-2xl font-bold">3legant.</h1>
        </div>
        <nav className="space-y-3 px-4">
          {[
            { path: "/dashboard/dash", label: "Dashboard" },
            { path: "/dashboard/products", label: "Products" },
            { path: "/dashboard/favorites", label: "Favorites" },
            { path: "/dashboard/inbox", label: "Inbox" },
            { path: "/dashboard/order-list", label: "Order Lists" },
            { path: "/dashboard/product-stock", label: "Product Stock" },
          ].map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center px-6 py-3 text-sm font-medium rounded-md ${
                active === item.path
                  ? "text-white bg-black"
                  : "text-gray-700 hover:text-black hover:bg-gray-100"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>

      {/* Bottom Section */}
      <div className="p-4 space-y-3">
        <Link
          to="/settings"
          className={`flex items-center px-6 py-3 text-sm font-medium rounded-md ${
            active === "/settings"
              ? "text-white bg-black"
              : "text-gray-700 hover:text-black hover:bg-gray-100"
          }`}
        >
          Settings
        </Link>
        <Link
          to="/logout"
          className={`flex items-center px-6 py-3 text-sm font-medium rounded-md ${
            active === "/logout"
              ? "text-white bg-black"
              : "text-gray-700 hover:text-black hover:bg-gray-100"
          }`}
        >
          Logout
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
