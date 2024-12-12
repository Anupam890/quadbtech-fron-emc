import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom"; 
import { ChevronLeft, ChevronRight, Plus, Edit } from "lucide-react";
import { Outlet } from "react-router-dom";

const Products = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch("http://localhost:3000/api/products/products");
      const data = await response.json();
      setProducts(data);
    };

    fetchProducts();
  }, []);

  const handleEdit = (productId) => {
    navigate(`/edit-product/${productId}`);
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-6">Products</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <div key={product._id} className="bg-white shadow-lg rounded-lg p-6">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
            <p className="text-gray-600 mb-4">{product.description}</p>
            <p className="text-lg font-bold">{`$${product.price}`}</p>
            <button
              onClick={() => handleEdit(product._id)}
              className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-600 flex items-center space-x-2"
            >
              <Edit size={16} />
              <span>Edit</span>
            </button>
          </div>
        ))}
      </div>

      <Link
        to={"edit-product"}
        className="fixed bottom-6 right-6 bg-white text-black p-4 rounded-full shadow-lg flex items-center space-x-2"
      >
        <Plus size={24} />
        <span>Add New Product</span>
      </Link>

      <Outlet />
    </div>
  );
};

export default Products;
