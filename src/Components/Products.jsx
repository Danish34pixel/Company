import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const navigate = useNavigate();
  // Map product display names to product page ids
  const productIdMap = {
    "Woven Fiberglass Roving": "woven-roving",
    "200 GSM Fiberglass Woven Roving Fabric": "woven-roving-mat",
    "Woven Roving Mat": "woven-roving-mat",
    "Woven Roving Fabric": "woven-roving-fabric",
    "EWR360 GSM Fiberglass Woven Roving": "woven-roving-fabric",
    "Fiberglass Continuous Filament Mats CFM300 GSM & CFM450 GSM":
      "fiberglass-mat",
    "Fiberglass Stitch Mats EMK300 GSM & EMK450 GSM": "fiberglass-products",
    "Fiberglass Fabric Raw Material": "fiber-mat",
    // Add more mappings as needed
  };

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
        "Fiberglass Continuous Filament Mats CFM300 GSM & CFM450 GSM",
        "Fiberglass Combo Mats ECW900 (600/300) & ECW1050 (600/450)",
        "Fiberglass Surface Tissue Mats SM30 & Carbon Tissue SCM30 GSM",
      ],
    },
    {
      title: "Fiberglass Products ",
      image: "/fiberglass-stitch-mats-emk300-gsm-emk450-gsm-125x125.webp",
      products: [
        "Fiberglass Stitch Mats EMK300 GSM & EMK450 GSM",
        "Multiple Smaller Width Production Possible",
        "High Temperature Fiberglass",
      ],
    },
    {
      title: "Fiber Mat",
      image: "/fiberglass-raw-material-125x125.webp",
      products: [
        "Fiberglass Fabric Raw Material",
        "Chopped Strand ",
        "E Glass Chopped Strand Mat",
      ],
    },
  ];

  const handleCategoryClick = (index) => {
    setSelectedCategory(index);
    // Optionally navigate to a category page
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-amber-50/30 to-slate-100 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-3">
            <span className="bg-gradient-to-r from-amber-600 via-amber-500 to-yellow-600 bg-clip-text text-transparent">
              WOVEN ROVING FABRICS
            </span>
          </h1>
          <div className="w-20 h-1.5 bg-gradient-to-r from-amber-600 via-amber-500 to-yellow-600 mx-auto rounded-full shadow-sm"></div>
          <p className="mt-4 text-slate-600 text-lg">
            Premium fiberglass solutions for industrial applications
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {productCategories.map((category, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group cursor-pointer border border-amber-100/30"
              onClick={() => {
                // Try to navigate to the first product in the category if it has a mapping
                const firstProduct = productCategories[index].products[0];
                if (productIdMap[firstProduct]) {
                  navigate(`/product/${productIdMap[firstProduct]}`);
                } else {
                  handleCategoryClick(index);
                }
              }}
            >
              <div className="p-6">
                <div className="mb-6 bg-gradient-to-br from-slate-100 to-amber-50 rounded-xl overflow-hidden h-64 flex items-center justify-center relative">
                  <img
                    src={category.image}
                    alt={category.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    onError={(e) => {
                      e.target.src =
                        'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="400"%3E%3Crect fill="%23f1f5f9" width="400" height="400"/%3E%3Ctext x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle" fill="%23cbd5e1" font-family="Arial" font-size="20"%3EProduct Image%3C/text%3E%3C/svg%3E';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-amber-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>

                <h2 className="text-2xl font-bold text-slate-900 mb-6 group-hover:text-amber-600 transition-colors duration-300">
                  {category.title}
                </h2>

                <div className="space-y-3 mb-6">
                  {category.products.map((product, idx) => (
                    <div
                      key={idx}
                      className="text-slate-600 hover:text-amber-700 hover:translate-x-2 cursor-pointer transition-all duration-300 py-2 border-b border-slate-100 last:border-b-0 flex items-center group/item"
                      onClick={(e) => {
                        e.stopPropagation();
                        if (productIdMap[product]) {
                          navigate(`/product/${productIdMap[product]}`);
                        }
                      }}
                    >
                      <span className="w-2 h-2 bg-amber-600 rounded-full mr-3 opacity-0 group-hover/item:opacity-100 transition-opacity duration-300"></span>
                      <span className="text-sm">{product}</span>
                    </div>
                  ))}
                </div>

                <button
                  className="w-full bg-gradient-to-r from-amber-600 via-amber-500 to-yellow-600 text-white font-semibold text-lg hover:from-amber-700 hover:via-amber-600 hover:to-yellow-700 transition-all duration-300 py-3 rounded-lg shadow-md hover:shadow-lg transform hover:scale-105"
                  onClick={(e) => e.stopPropagation()}
                >
                  + View All
                </button>
              </div>
            </div>
          ))}
        </div>

        {selectedCategory !== null && (
          <div className="mt-8 p-6 bg-white/80 backdrop-blur-sm rounded-xl border border-amber-200 shadow-lg">
            <p className="text-slate-700 text-center">
              Selected:{" "}
              <span className="font-bold text-amber-700">
                {productCategories[selectedCategory].title}
              </span>
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;
