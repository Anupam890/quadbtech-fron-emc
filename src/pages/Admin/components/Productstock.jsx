import React from "react";
import { Edit, Trash } from "lucide-react";
import { useEffect,useState } from "react";



const products = [
    {
        id: 1,
        image: "https://via.placeholder.com/50",
        name: "Apple Watch Series 4",
        category: "Digital Product",
        price: 690,
        pieces: 63,
        colors: ["#000000", "#C0C0C0", "#FFC0CB"],
    },
    {
        id: 2,
        image: "https://via.placeholder.com/50",
        name: "Microsoft Headsquare",
        category: "Digital Product",
        price: 190,
        pieces: 13,
        colors: ["#000000", "#FFC0CB", "#FFD700"],
    },
    {
        id: 3,
        image: "https://via.placeholder.com/50",
        name: "Women's Dress",
        category: "Fashion",
        price: 640,
        pieces: 635,
        colors: ["#800080", "#000000", "#000080"],
    },
    {
        id: 4,
        image: "https://via.placeholder.com/50",
        name: "Samsung A50",
        category: "Mobile",
        price: 400,
        pieces: 67,
        colors: ["#000000", "#FF0000", "#800080"],
    },
    {
        id: 5,
        image: "https://via.placeholder.com/50",
        name: "Camera",
        category: "Electronic",
        price: 420,
        pieces: 52,
        colors: ["#000000", "#000000", "#FF0000"],
    },
];

const ProductStock = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch("http://localhost:3000/api/products/product");
                const data = await response.json();
                setProducts(data);
                console.log(data)
            } catch (error) {
                console.error(error);
            }
        }
        fetchProducts()
    },[])


    return (
        <div className="p-6">
            <h2 className="text-2xl font-semibold mb-6">Product Stock</h2>
            {/* Search Bar */}
            <div className="mb-4 flex justify-end">
                <div className="relative w-64">
                    <input
                        type="text"
                        placeholder="Search product name"
                        className="border border-gray-300 rounded-full pl-10 pr-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <div className="absolute inset-y-0 left-3 flex items-center">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 text-gray-400"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M11 4a7 7 0 017 7m-7-7a7 7 0 100 14m0-14a7 7 0 100 14m9 4l-4.35-4.35"
                            />
                        </svg>
                    </div>
                </div>
            </div>


            {/* Table */}
            <div className="overflow-x-auto">
                <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                    <thead>
                        <tr className="bg-gray-100">
                            <th className="p-4 text-left">Image</th>
                            <th className="p-4 text-left">Product Name</th>
                            <th className="p-4 text-left">Category</th>
                            <th className="p-4 text-left">Price</th>
                            <th className="p-4 text-left">Piece</th>
                            <th className="p-4 text-left">Available Color</th>
                            <th className="p-4 text-left">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((product) => (
                            <tr key={product.id} className="border-b hover:bg-gray-50">
                                <td className="p-4">
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        className="w-12 h-12 rounded-lg"
                                    />
                                </td>
                                <td className="p-4">{product.name}</td>
                                <td className="p-4">{product.category}</td>
                                <td className="p-4">${product.price.toFixed(2)}</td>
                                <td className="p-4">{product.pieces}</td>
                                <td className="p-4">
                                    <div className="flex space-x-2">
                                        {product.colors.map((color, index) => (
                                            <span
                                                key={index}
                                                className="w-4 h-4 rounded-full"
                                                style={{ backgroundColor: color }}
                                            ></span>
                                        ))}
                                    </div>
                                </td>
                                <td className="p-4">
                                    <div className="flex space-x-2">
                                        <button className="p-2 bg-gray-100 rounded-full hover:bg-gray-200">
                                            <Edit size={16} className="text-gray-500" />
                                        </button>
                                        <button className="p-2 bg-gray-100 rounded-full hover:bg-gray-200">
                                            <Trash size={16} className="text-red-500" />
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Pagination */}
            <div className="mt-4 flex justify-between items-center">
                <p className="text-sm text-gray-600">Showing 1-5 of {products.length}</p>
                <div className="flex space-x-2">
                    <button className="px-4 py-2 bg-gray-100 rounded-lg hover:bg-gray-200">
                        Previous
                    </button>
                    <button className="px-4 py-2 bg-gray-100 rounded-lg hover:bg-gray-200">
                        Next
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductStock;
