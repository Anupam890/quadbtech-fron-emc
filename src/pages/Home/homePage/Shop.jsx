import { useState ,useEffect} from "react";
import { Star, Grid, List, LayoutGrid } from "lucide-react";
import img1 from "../../../assets/images/img1.png";
import img2 from "../../../assets/images/img2.png";
import img3 from "../../../assets/images/img3.png";
import img4 from "../../../assets/images/img4.png";
import shopBanner from "../../../assets/images/shop.png"; 
import { Link } from "react-router-dom";

export default function ShopPage() {
  const [viewMode, setViewMode] = useState("grid");
  const [product,setProduct] = useState([]);
   

  useEffect(()=>{
    const fetchProduct = async ()=>{
      try {
        const data = await fetch("http://localhost:3000/api/products/product");
        const response = await data.json();
        console.log(response);
      } catch (error) {
        console.log(error);
      }
     }
      fetchProduct();
  },[]);
   


  const products = [
    { id: 1, name: "Luxurious Sofa", price: 599.99, rating: 5, image: img1, isNew: true },
    { id: 2, name: "Luxury Sofa", price: 699.99, rating: 5, image: img2, isNew: true },
    { id: 3, name: "Table Lamp", price: 89.99, rating: 4, image: img3, isNew: true },
    { id: 4, name: "Cozy Sofa", price: 499.99, rating: 5, image: img4, isNew: true },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
     
      <div className="relative w-full h-64 sm:h-80 lg:h-96 mb-12">
        <img
          src={shopBanner}
          alt="Shop Banner"
          className="w-full h-full object-cover "
        />
        <div className="absolute inset-0  flex items-center justify-center rounded-lg">
        <div className="text-center mb-12">
        <nav className="flex justify-center space-x-4 mb-4 text-sm">
          <Link to="/" className="text-black hover:text-gray-900">
            Home
          </Link>
          <span className="text-gray-300">/</span>
          <Link to="/shop" className="text-gray-900 font-medium">
            Shop
          </Link>
        </nav>
        <h1 className="text-4xl font-semibold mb-2">Shop Page</h1>
        <p className="text-black">Let's design the place you always imagined.</p>
      </div>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row justify-between items-center mb-8 space-y-4 sm:space-y-0">
        <div className="flex space-x-4 w-full sm:w-auto">
          <select className="border rounded-md px-4 py-2 w-full sm:w-48">
            <option>Living Room</option>
            <option>Bedroom</option>
            <option>Kitchen</option>
          </select>
          <select className="border rounded-md px-4 py-2 w-full sm:w-48">
            <option>All Prices</option>
            <option>$0 - $100</option>
            <option>$100 - $500</option>
            <option>$500+</option>
          </select>
        </div>
        <div className="flex items-center space-x-4">
          <span className="text-gray-600">Sort by:</span>
          <div className="flex space-x-2">
            <button
              onClick={() => setViewMode("grid")}
              className={`p-2 ${viewMode === "grid" ? "text-gray-900" : "text-gray-400"}`}
            >
              <Grid size={20} />
            </button>
            <button
              onClick={() => setViewMode("list")}
              className={`p-2 ${viewMode === "list" ? "text-gray-900" : "text-gray-400"}`}
            >
              <List size={20} />
            </button>
            <button
              onClick={() => setViewMode("large")}
              className={`p-2 ${viewMode === "large" ? "text-gray-900" : "text-gray-400"}`}
            >
              <LayoutGrid size={20} />
            </button>
          </div>
        </div>
      </div>

      <div
        className={`grid gap-6 ${
          viewMode === "grid"
            ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
            : viewMode === "list"
            ? "grid-cols-1"
            : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
        }`}
      >
        {products.map((product) => (
          <div
            key={product.id}
            className={`group relative ${
              viewMode === "list" ? "flex space-x-4" : "flex flex-col"
            }`}
          >
           
            <div
              className={`relative ${
                viewMode === "list" ? "w-48 h-48" : "w-full aspect-square"
              }`}
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover rounded-lg"
              />
              {product.isNew && (
                <span className="absolute top-2 left-2 bg-green-500 text-white text-xs px-2 py-1 rounded">
                  NEW
                </span>
              )}
              <button className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white text-gray-900 px-6 py-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Add to cart
              </button>
            </div>

            {/* Product Info */}
            <div
              className={`flex flex-col ${
                viewMode === "list" ? "flex-1 pl-4" : "mt-4"
              }`}
            >
              <div className="flex items-center mb-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className={i < product.rating ? "fill-black text-yellow-400" : "text-gray-300"}
                  />
                ))}
              </div>
              <h3 className="text-gray-900 font-medium">{product.name}</h3>
              <p className="text-gray-600">${product.price.toFixed(2)}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Load More Button */}
      <div className="text-center mt-12">
        <button className="border-2 border-gray-900 text-gray-900 px-8 py-2 rounded-full hover:bg-gray-900 hover:text-white transition-colors">
          Show more
        </button>
      </div>
    </div>
  );
}
