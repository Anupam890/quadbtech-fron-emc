import React, { useState } from "react";
import { Plus, ChevronDown, Upload } from "lucide-react";
import { useEffect } from "react";
import toast, {Toaster} from 'react-hot-toast'

const EditProduct = () => {
  const [productData, setProductData] = useState({
    productname: "",
    description: "",
    price: "",
    mrp: "",
    category: "",
    measurements: "",
    details: "",
    colors: [],
    additionalInfo: "",
    stock: "",
    sku_id: "",
    images: [],
    packaging: { width: "", height: "", length: "" },
  });

  const [imageFiles, setImageFiles] = useState([]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProductData({ ...productData, [name]: value });
  };

  
  const handleFileUpload = (e) => {
    const files = Array.from(e.target.files);
    if (imageFiles.length + files.length > 3) {
      alert("You can only upload up to 3 images.");
      return;
    }
    setImageFiles([...imageFiles, ...files]);
  };
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
  
    // Append images
    imageFiles.forEach((file) => {
      formData.append("images", file);
    });
  
    // Append other product data
    Object.keys(productData).forEach((key) => {
      if (key === "packaging") {
     
        formData.append("packaging", JSON.stringify(productData[key]));
      } else {
        formData.append(key, productData[key]);
      }
    });
  
    try {
      const response = await fetch("http://localhost:3000/api/products/addproduct", {
        method: "POST",
        body: formData, // Send FormData directly
      });
  
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(`HTTP error! Status: ${response.status}, Message: ${errorData.message || 'Unknown error'}`);
      }
  
      const data = await response.json();
      console.log(data);
      toast.success("Product added successfully");
    } catch (error) {
      console.error("Error submitting product:", error);
      toast.error("Failed to add product");
    }
  };
  

  return (
    <div className="p-6 md:p-12 bg-gray-50 min-h-screen flex flex-col md:flex-row">
      
      <div className="w-full md:w-1/2 bg-white shadow-md rounded-lg p-6 md:p-10">
        <h2 className="text-xl font-bold mb-4">Upload Product Images</h2>
        <p className="text-gray-500 mb-4">
          You can upload up to 3 images for the product.
        </p>
        <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 flex flex-col items-center justify-center">
          <Upload size={40} className="text-gray-400 mb-2" />
          <input
            type="file"
            multiple
            accept="image/*"
            onChange={handleFileUpload}
            className="hidden"
            id="imageUpload"
          />
          <label
            htmlFor="imageUpload"
            className="cursor-pointer text-blue-500 hover:underline"
          >
            Click to upload images
          </label>
        </div>
        {/* Display uploaded images */}
        <div className="mt-4 flex space-x-4 overflow-x-auto">
          {imageFiles.map((file, index) => (
            <img
              key={index}
              src={URL.createObjectURL(file)}
              alt={`Preview ${index + 1}`}
              className="w-24 h-24 object-cover rounded-lg shadow-sm"
            />
          ))}
        </div>
      </div>

      {/* Product Form Section */}
      <div className="w-full md:w-1/2 bg-white shadow-md rounded-lg p-6 md:p-10 mt-6 md:mt-0 md:ml-6">
        <h2 className="text-xl font-bold mb-4">Add Product Details</h2>
        <form onSubmit={handleSubmit}>
          {/* Product Name */}
          <div className="mb-4">
            <label className="block text-gray-600 mb-2">Product Name</label>
            <input
              type="text"
              name="productname"
              value={productData.productname}
              onChange={handleInputChange}
              className="w-full border-gray-300 rounded-lg shadow-sm p-3"
              placeholder="Enter product name"
              required
            />
          </div>

          {/* Description */}
          <div className="mb-4">
            <label className="block text-gray-600 mb-2">Description</label>
            <textarea
              name="description"
              value={productData.description}
              onChange={handleInputChange}
              className="w-full border-gray-300 rounded-lg shadow-sm p-3"
              placeholder="Enter product description"
            />
          </div>

          {/* Price and MRP */}
          <div className="mb-4 flex space-x-4">
            <div className="flex-1">
              <label className="block text-gray-600 mb-2">Price</label>
              <input
                type="number"
                name="price"
                value={productData.price}
                onChange={handleInputChange}
                className="w-full border-gray-300 rounded-lg shadow-sm p-3"
                placeholder="Enter price"
                required
              />
            </div>
            <div className="flex-1">
              <label className="block text-gray-600 mb-2">MRP</label>
              <input
                type="number"
                name="mrp"
                value={productData.mrp}
                onChange={handleInputChange}
                className="w-full border-gray-300 rounded-lg shadow-sm p-3"
                placeholder="Enter MRP"
              />
            </div>
          </div>

          {/* Category */}
          <div className="mb-4">
            <label className="block text-gray-600 mb-2">Category</label>
            <select
              name="category"
              value={productData.category}
              onChange={handleInputChange}
              className="w-full border-gray-300 rounded-lg shadow-sm p-3"
            >
              <option value="">Select a category</option>
              <option value="Living Room">Living Room</option>
              <option value="Bedroom">Bedroom</option>
              <option value="Kitchen">Kitchen</option>
            </select>
          </div>

          {/* Measurements */}
          <div className="mb-4">
            <label className="block text-gray-600 mb-2">Measurements</label>
            <input
              type="text"
              name="measurements"
              value={productData.measurements}
              onChange={handleInputChange}
              className="w-full border-gray-300 rounded-lg shadow-sm p-3"
              placeholder="Enter product measurements"
            />
          </div>

          {/* Stock and SKU */}
          <div className="mb-4 flex space-x-4">
            <div className="flex-1">
              <label className="block text-gray-600 mb-2">Stock</label>
              <input
                type="number"
                name="stock"
                value={productData.stock}
                onChange={handleInputChange}
                className="w-full border-gray-300 rounded-lg shadow-sm p-3"
                placeholder="Enter stock quantity"
              />
            </div>
            <div className="flex-1">
              <label className="block text-gray-600 mb-2">SKU ID</label>
              <input
                type="text"
                name="sku_id"
                value={productData.sku_id}
                onChange={handleInputChange}
                className="w-full border-gray-300 rounded-lg shadow-sm p-3"
                placeholder="Enter SKU ID"
              />
            </div>
          </div>

          {/* Additional Info */}
          <div className="mb-4">
            <label className="block text-gray-600 mb-2">Additional Info</label>
            <textarea
              name="additionalInfo"
              value={productData.additionalInfo}
              onChange={handleInputChange}
              className="w-full border-gray-300 rounded-lg shadow-sm p-3"
              placeholder="Enter any additional information"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-black text-white px-6 py-3 rounded-lg shadow-md hover:bg-gray-800"
          >
            Add Product
          </button>
        </form>
      </div>
      <Toaster />
    </div>
  );
};

export default EditProduct;
