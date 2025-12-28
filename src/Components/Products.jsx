import React from "react";
import { useNavigate } from "react-router-dom";

const Products = () => {
  const productCategories = [
    {
      title: "Woven Roving",
      image: "/fiberglass-roving-500x500.webp",
      products: [
        "Woven Fiberglass Roving",
        "Glass Woven Roving Fabric 200 GSM",
        "400 GSM Fiberglass Woven Roving Fabric",
      ],
    },
    {
      title: "Woven Roving Mat",
      image: "/200-gsm-woven-roving-fabric-500x500.webp",
      products: [
        "200 GSM Fiberglass Woven Roving Fabric",
        "320 GSM Glass Woven Roving Fabric",
        "500 GSM Glass Woven Roving Fabric",
      ],
    },
    {
      title: "Woven Roving Fabric",
      image: "/ewr360-gsm-fiberglass-woven-roving-125x125.webp",
      products: [
        "EWR360 GSM Fiberglass Woven Roving",
        "EWR610 GSM Fiberglass Woven Roving",
        "Fiberglass Woven Roving Manufacturers in Gaziabad",
      ],
    },
    {
      title: "Fiberglass Mat",
      image:
        "/fiberglass-continuous-filament-mats-cfm300-gsm-cfm450-gsm-125x125.webp",
      products: [
        "EWR360 GSM Fiberglass Woven Roving",
        "EWR610 GSM Fiberglass Woven Roving",
        "Fiberglass Woven Roving Manufacturers in Gaziabad",
      ],
    },
    {
      title: "Fiberglass Products ",
      image: "/fiberglass-stitch-mats-emk300-gsm-emk450-gsm-125x125.webp",
      products: [
        "EWR360 GSM Fiberglass Woven Roving",
        "EWR610 GSM Fiberglass Woven Roving",
        "Fiberglass Woven Roving Manufacturers in Gaziabad",
      ],
    },
    {
      title: "Fiber Mat",
      image: "/fiberglass-raw-material-125x125.webp",
      products: [
        "EWR360 GSM Fiberglass Woven Roving",
        "EWR610 GSM Fiberglass Woven Roving",
        "Fiberglass Woven Roving Manufacturers in Gaziabad",
      ],
    },
  ];

  const navigate = useNavigate();

  // Helper to create a productId from product name
  const toProductId = (name) =>
    name
      .toLowerCase()
      .replace(/\s+/g, "-")
      .replace(/[^a-z0-9\-]/g, "");

  // Import productData ids in order (manually sync with productpage.jsx)
  const productIds = [
    "woven-roving",
    "woven-roving-mat",
    "woven-roving-fabric",
    "fiberglass-mat",
    "fiberglass-products",
    "fiber-mat",
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">
            WOVEN ROVING FABRICS
          </h1>
          <div className="w-16 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {productCategories.map((category, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group cursor-pointer"
              onClick={() => {
                if (productIds[index]) {
                  navigate(`/product/${productIds[index]}`);
                }
              }}
            >
              <div className="p-6">
                <div className="mb-6 bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl overflow-hidden h-64 flex items-center justify-center relative">
                  <img
                    src={category.image}
                    alt={category.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-blue-600 opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
                </div>

                <h2 className="text-2xl font-bold text-gray-800 mb-6 group-hover:text-blue-600 transition-colors duration-300">
                  {category.title}
                </h2>

                <div className="space-y-3 mb-6">
                  {category.products.map((product, idx) => (
                    <div
                      key={idx}
                      className="text-gray-600 hover:text-blue-600 hover:translate-x-2 cursor-pointer transition-all duration-300 py-2 border-b border-gray-100 last:border-b-0 flex items-center group/item"
                      onClick={(e) => {
                        e.stopPropagation();
                        // Optionally, map to a product id if you want sub-products to have their own pages
                        // navigate(`/product/${toProductId(product)}`);
                      }}
                    >
                      <span className="w-2 h-2 bg-blue-600 rounded-full mr-3 opacity-0 group-hover/item:opacity-100 transition-opacity duration-300"></span>
                      {product}
                    </div>
                  ))}
                </div>

                <button
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold text-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300 py-3 rounded-lg shadow-md hover:shadow-lg transform hover:scale-105"
                  onClick={(e) => e.stopPropagation()}
                >
                  + View All
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
