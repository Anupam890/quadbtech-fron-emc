import { Search, ChevronDown } from "lucide-react";

const Navbar = () => {
    return (
        <div className="w-full h-16 bg-white border-b border-gray-200 flex items-center justify-between px-6">

            <div className="flex items-center w-1/2">
                <div className="relative w-full max-w-md">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
                    <input
                        type="text"
                        placeholder="Search"
                        className="w-full pl-10 pr-4 py-2 text-sm text-gray-700 bg-gray-100 border border-transparent rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white focus:border-blue-500"
                    />
                </div>
            </div>
            <div className="flex items-center space-x-4">

                <img
                    src="https://via.placeholder.com/32"
                    alt="Profile"
                    className="w-10 h-10 rounded-full"
                />
                <div>
                    <p className="text-sm font-medium text-gray-700">Moni Roy</p>
                    <p className="text-xs text-gray-500">Admin</p>
                </div>

                <ChevronDown className="w-5 h-5 text-gray-500" />
            </div>
        </div>
    );
};

export default Navbar;
