import React, { useEffect, useState } from "react";

const productData = [
  {
    id: "woven-roving",
    title: "Woven Fiberglass Roving",
    description:
      "High-quality woven fiberglass roving for industrial applications.",
    price: "₹125",
    priceUnit: "/ Kg",
    minimumOrder: "100 Kg",
    image: "/fiberglass-roving-500x500.webp",
    specifications: {
      usage: "INSULATION & COMPOSITES",
      color: "SILVER",
      size: "200MM TO 3000MM",
      material: "E GLASS FIBERGLASS",
      packagingType: "WRAPPED IN POLY AND PACKED IN STRONG CORRUGATED CARTON",
      filamentDiameter: "12-15MICRONS",
      rollWeight: "45 TO 60 KGS",
      countryOfOrigin: "Made in India",
      gsm: "200 TO 610",
      width: "200MM TO 3000MM",
      qualityGrade: "A",
    },
    description2:
      "FIBERGLASS E GLASS WOVEN ROVING FABRIC 360 GSM. Woven roving is a bidirectional fabric made by interweaving direct roving. Woven roving is compatible with many resins, such as polyester, vinyl ester and epoxy resins. Woven roving is a high-performance reinforcement and widely used in processes such as in hand lay-up, molding, and pultrusion for the production of boats, automotive parts, furniture, sport facilities and other FRP Products.",
    features: [
      "Multi-resin-compatible and fast wet-out",
      "Easy shape adaptation",
      "Easy impregnation",
      "Excellent Corrosion resistance",
      "Excellent mechanical properties",
      "Even thickness with low fuzz",
      "Very high laminate strength properties",
    ],
    packaging:
      "Supplied as rolls sealed in moisture-proof polyethylene bags and packed in Corrugated carton boxes",
    storage:
      "Unless otherwise specified, fiberglass products should be stored in a dry, cool and rain-proof area. The room temperature and humidity should be always maintained at 15-35% and 35%-65% respectively",
    safetyInfo: "Toxicologically harmless, Not respirable.",
    standards:
      "Fiberglass Woven Roving are manufactured in accordance with specifications laid down in IS 11273 and BS 3749.",
    additionalInfo: {
      itemCode: "70194000",
      productionCapacity: "4000 KGS / DAY",
      deliveryTime: "EX WORKS 3 TO 5 DAYS",
      packagingDetails: "STRONG CORRUGATED CARTONS",
    },
  },
];

const ProductPage = () => {
  const [product] = useState(productData[0]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-amber-50/30 to-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <nav className="text-sm text-gray-700 mb-6 flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-3 rounded-lg shadow-sm border border-amber-100/50">
          <span className="hover:text-amber-700 cursor-pointer transition-colors font-medium">
            Home
          </span>
          <span className="text-amber-600">›</span>
          <span className="hover:text-amber-700 cursor-pointer transition-colors font-medium">
            Woven Roving Fabrics
          </span>
          <span className="text-amber-600">›</span>
          <span className="text-slate-900 font-semibold">{product.title}</span>
        </nav>

        {/* Main Title */}
        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-3">
            <span className="bg-gradient-to-r from-amber-600 via-amber-500 to-yellow-600 bg-clip-text text-transparent">
              {product.title}
            </span>
          </h1>
          <div className="h-1.5 w-24 bg-gradient-to-r from-amber-600 via-amber-500 to-yellow-600 rounded-full shadow-sm"></div>
        </div>

        {/* Product description paragraph */}
        {product.description && (
          <p className="text-slate-700 mb-8 text-lg leading-relaxed bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-sm border border-amber-100/50">
            {product.description}
          </p>
        )}

        {/* Product Overview Section */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8 border border-amber-100/30 hover:shadow-2xl transition-all duration-300 hover:border-amber-200">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Product Image */}
            <div className="lg:w-1/2">
              <div className="relative group overflow-hidden rounded-xl shadow-lg bg-gradient-to-br from-slate-100 to-amber-50">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-96 object-cover transition-transform duration-500 group-hover:scale-110"
                  onError={(e) => {
                    e.target.src =
                      'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="400"%3E%3Crect fill="%23f1f5f9" width="400" height="400"/%3E%3Ctext x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle" fill="%23cbd5e1" font-family="Arial" font-size="24"%3EProduct Image%3C/text%3E%3C/svg%3E';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-amber-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>

            {/* Product Info */}
            <div className="lg:w-1/2 flex flex-col">
              <div className="bg-gradient-to-br from-amber-50 via-yellow-50 to-amber-100/50 p-6 rounded-xl mb-6 border border-amber-200/50 shadow-sm">
                <div className="flex items-baseline gap-4 mb-4">
                  <div className="text-5xl font-bold bg-gradient-to-r from-amber-700 via-amber-600 to-yellow-600 bg-clip-text text-transparent">
                    {product.price}
                  </div>
                  {product.priceUnit && (
                    <div className="text-xl text-slate-600 font-medium">
                      {product.priceUnit}
                    </div>
                  )}
                </div>
                <a
                  href="#"
                  className="text-amber-700 hover:text-amber-800 font-semibold hover:underline inline-flex items-center gap-2 transition-colors"
                >
                  💰 Request Custom Price
                  <span className="text-sm">→</span>
                </a>
              </div>

              <div className="bg-amber-50 border-l-4 border-amber-600 p-4 mb-6 rounded-r-lg shadow-sm">
                <span className="font-semibold text-slate-900">
                  Minimum Order:
                </span>{" "}
                <span className="text-amber-800 font-bold">
                  {product.minimumOrder}
                </span>
              </div>

              <a
                href="#"
                className="text-slate-700 hover:text-slate-900 font-semibold mb-6 flex items-center gap-3 p-4 bg-slate-50 rounded-lg hover:bg-slate-100 transition-all group border border-slate-200"
              >
                <span className="text-2xl group-hover:scale-110 transition-transform">
                  📄
                </span>
                <span>Download Product Brochure</span>
              </a>

              <div className="space-y-3">
                <button className="w-full border-2 border-amber-600 text-amber-700 font-semibold px-6 py-4 rounded-xl hover:bg-amber-600 hover:text-white transition-all duration-300 flex items-center justify-center gap-3 shadow-md hover:shadow-lg group">
                  <span className="text-xl group-hover:scale-110 transition-transform">
                    📞
                  </span>
                  REQUEST A CALL BACK
                </button>

                <button className="w-full bg-gradient-to-r from-amber-600 via-amber-500 to-yellow-600 text-white font-semibold px-6 py-4 rounded-xl hover:from-amber-700 hover:via-amber-600 hover:to-yellow-700 transition-all duration-300 flex items-center justify-center gap-3 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                  <span className="text-xl">✉️</span>
                  GET BEST QUOTE
                </button>

                <button className="w-full border-2 border-green-600 bg-green-50 text-green-700 font-bold px-6 py-4 rounded-xl hover:bg-green-600 hover:text-white transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5">
                  ✓ YES! I AM INTERESTED
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Specifications Table */}
        {product.specifications && (
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8 border border-amber-100/30 hover:shadow-2xl transition-all duration-300">
            <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center gap-3">
              <span className="text-amber-600">📋</span>
              Technical Specifications
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {Object.entries(product.specifications).map(([key, value]) => (
                <div
                  key={key}
                  className="bg-gradient-to-r from-slate-50 to-amber-50/50 p-4 rounded-lg border border-slate-200 hover:border-amber-300 transition-all hover:shadow-md"
                >
                  <div className="text-sm text-slate-600 font-medium mb-1 uppercase tracking-wide">
                    {key.replace(/([A-Z])/g, " $1").trim()}
                  </div>
                  <div className="text-slate-900 font-bold text-lg">
                    {value}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Description */}
        {product.description2 && (
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8 border border-amber-100/30 hover:shadow-2xl transition-all duration-300">
            <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center gap-3">
              <span className="text-amber-600">📝</span>
              Product Description
            </h2>
            <p className="text-slate-700 leading-relaxed text-lg">
              {product.description2}
            </p>
          </div>
        )}

        {/* Features */}
        {product.features && product.features.length > 0 && (
          <div className="bg-gradient-to-br from-white via-amber-50/20 to-white rounded-2xl shadow-xl p-8 mb-8 border border-amber-100/30 hover:shadow-2xl transition-all duration-300">
            <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center gap-3">
              <span className="text-amber-600">✨</span>
              Key Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {product.features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-all border border-slate-100 hover:border-amber-300"
                >
                  <span className="text-amber-600 font-bold text-xl mt-0.5">
                    ✓
                  </span>
                  <span className="text-slate-700 leading-relaxed">
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Info Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {product.packaging && (
            <div className="bg-white rounded-2xl shadow-xl p-6 border border-amber-100/30 hover:shadow-2xl transition-all hover:border-amber-300">
              <h3 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
                <span className="text-2xl">📦</span>
                Packaging
              </h3>
              <p className="text-slate-700 leading-relaxed">
                {product.packaging}
              </p>
            </div>
          )}

          {product.storage && (
            <div className="bg-white rounded-2xl shadow-xl p-6 border border-amber-100/30 hover:shadow-2xl transition-all hover:border-amber-300">
              <h3 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
                <span className="text-2xl">🏭</span>
                Storage
              </h3>
              <p className="text-slate-700 leading-relaxed">
                {product.storage}
              </p>
            </div>
          )}

          {product.safetyInfo && (
            <div className="bg-white rounded-2xl shadow-xl p-6 border border-green-100 hover:shadow-2xl transition-all hover:border-green-300">
              <h3 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
                <span className="text-2xl">🛡️</span>
                Safety Information
              </h3>
              <p className="text-slate-700 leading-relaxed">
                {product.safetyInfo}
              </p>
            </div>
          )}

          {product.standards && (
            <div className="bg-white rounded-2xl shadow-xl p-6 border border-amber-100/30 hover:shadow-2xl transition-all hover:border-amber-400">
              <h3 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
                <span className="text-2xl">🏆</span>
                Standards
              </h3>
              <p className="text-slate-700 leading-relaxed">
                {product.standards}
              </p>
            </div>
          )}
        </div>

        {/* Additional Information */}
        {product.additionalInfo && (
          <div className="bg-gradient-to-br from-amber-50 via-yellow-50/50 to-amber-100/30 rounded-2xl shadow-xl p-8 border border-amber-200/50 hover:shadow-2xl transition-all duration-300">
            <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center gap-3">
              <span className="text-amber-600">ℹ️</span>
              Additional Information
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {Object.entries(product.additionalInfo).map(([key, value]) => (
                <div
                  key={key}
                  className="flex items-start gap-3 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-all border border-amber-100"
                >
                  <span className="text-amber-600 font-bold text-lg mt-0.5">
                    ▸
                  </span>
                  <div>
                    <span className="font-semibold text-slate-900 capitalize">
                      {key.replace(/([A-Z])/g, " $1").trim()}:
                    </span>{" "}
                    <span className="text-slate-700">{value}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductPage;
