import { Percent, X } from "lucide-react";
import { useState } from "react";

const Banner = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null; 

  return (
    <div className="bg-gray-100 border-b border-gray-200">
      <div className="container mx-auto px-4 py-3 flex items-center justify-center gap-2">
       
        <div className="flex items-center space-x-3">
          <Percent className="w-5 h-5 text-gray-700" />
          <p className="text-sm text-gray-700">
            <strong>30% off storewide</strong> — Limited time!
          </p>
          <a
            href="#"
            className="text-sm text-blue-500 hover:text-blue-700 transition"
          >
            Shop Now →
          </a>
        </div>

        <div className="flex items-center  space-x-4">
          
          <button
            className="text-gray-500 hover:text-gray-700 transition"
            onClick={() => setIsVisible(false)}
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
