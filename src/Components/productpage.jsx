import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

// All product and category data
const productData = [
  // For Image.jsx: EWR 360 GSM Fiberglass Woven Roving
  {
    id: "ewr-360-gsm-fiberglass-woven-roving",
    title: "EWR 360 GSM Fiberglass Woven Roving",
    description:
      "360 GSM EWR fiberglass woven roving for high-performance composites.",
    price: "₹130",
    priceUnit: "/ Kg",
    minimumOrder: "100 Kg",
    image: "/ewr360-gsm-fiberglass-woven-roving-125x125.webp",
    specifications: {
      usage: "COMPOSITES",
      color: "WHITE",
      size: "1000MM",
      material: "E GLASS FIBERGLASS",
      packagingType: "POLY WRAPPED, CARTON BOX",
      gsm: "360",
      width: "1000MM",
      qualityGrade: "A",
    },
    description2:
      "EWR 360 GSM woven roving is used for demanding composite applications.",
    features: ["High strength", "Durable", "Easy to handle"],
    packaging: "Poly bags, cartons",
    storage: "Store in a dry, cool area.",
    safetyInfo: "Non-toxic.",
    standards: "IS 11273",
    additionalInfo: {
      itemCode: "70194013",
      productionCapacity: "1500 KGS / DAY",
      deliveryTime: "3 TO 5 DAYS",
      packagingDetails: "CARTONS",
    },
  },
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
  // For Image.jsx: 200 GSM Woven Roving Fabric
  {
    id: "200-gsm-woven-roving-fabric",
    title: "200 GSM Woven Roving Fabric",
    description:
      "High-quality 200 GSM woven roving fabric for industrial applications.",
    price: "₹110",
    priceUnit: "/ Kg",
    minimumOrder: "100 Kg",
    image: "/200-gsm-woven-roving-fabric-500x500.webp",
    specifications: {
      usage: "INSULATION & COMPOSITES",
      color: "WHITE",
      size: "1000MM",
      material: "E GLASS FIBERGLASS",
      packagingType: "POLY WRAPPED, CARTON BOX",
      gsm: "200",
      width: "1000MM",
      qualityGrade: "A",
    },
    description2:
      "200 GSM woven roving fabric is ideal for hand lay-up, molding, and pultrusion for the production of boats, automotive parts, furniture, and other FRP products.",
    features: [
      "Easy impregnation",
      "Excellent mechanical properties",
      "Even thickness",
      "High laminate strength",
    ],
    packaging: "Rolls in moisture-proof polyethylene bags, packed in cartons",
    storage: "Store in a dry, cool, rain-proof area.",
    safetyInfo: "Non-toxic, not respirable.",
    standards: "IS 11273, BS 3749",
    additionalInfo: {
      itemCode: "70194010",
      productionCapacity: "3000 KGS / DAY",
      deliveryTime: "3 TO 5 DAYS",
      packagingDetails: "CARTONS",
    },
  },
  // For Image.jsx: Fiberglass Roving
  {
    id: "fiberglass-roving",
    title: "Fiberglass Roving",
    description: "Premium fiberglass roving for composite reinforcement.",
    price: "₹120",
    priceUnit: "/ Kg",
    minimumOrder: "50 Kg",
    image: "/fiberglass-roving-500x500.webp",
    specifications: {
      usage: "COMPOSITES",
      color: "SILVER",
      size: "200MM TO 3000MM",
      material: "E GLASS FIBERGLASS",
      packagingType: "POLY WRAPPED, CARTON BOX",
      gsm: "200 TO 610",
      width: "200MM TO 3000MM",
      qualityGrade: "A",
    },
    description2:
      "Fiberglass roving is used in a variety of composite applications for its strength and durability.",
    features: [
      "High tensile strength",
      "Corrosion resistance",
      "Easy to handle",
    ],
    packaging: "Rolls in polyethylene bags, packed in cartons",
    storage: "Store in a dry, cool, rain-proof area.",
    safetyInfo: "Non-toxic, not respirable.",
    standards: "IS 11273, BS 3749",
    additionalInfo: {
      itemCode: "70194011",
      productionCapacity: "2000 KGS / DAY",
      deliveryTime: "3 TO 5 DAYS",
      packagingDetails: "CARTONS",
    },
  },
  // For Image.jsx: Fiberglass fabric raw material
  {
    id: "fiberglass-fabric-raw-material",
    title: "Fiberglass fabric raw material",
    description: "Raw material for fiberglass fabric production.",
    price: "₹100",
    priceUnit: "/ Kg",
    minimumOrder: "100 Kg",
    image: "/fiberglass-raw-material-125x125.webp",
    specifications: {
      usage: "FABRIC PRODUCTION",
      color: "WHITE",
      size: "1000MM",
      material: "E GLASS FIBERGLASS",
      packagingType: "POLY WRAPPED, CARTON BOX",
      gsm: "Varies",
      width: "1000MM",
      qualityGrade: "A",
    },
    description2: "Used as a base material for various fiberglass products.",
    features: ["Consistent quality", "Easy to process"],
    packaging: "Poly bags, cartons",
    storage: "Store in a dry, cool area.",
    safetyInfo: "Non-toxic.",
    standards: "IS 11273",
    additionalInfo: {
      itemCode: "70194012",
      productionCapacity: "1000 KGS / DAY",
      deliveryTime: "3 TO 5 DAYS",
      packagingDetails: "CARTONS",
    },
  },
  // For Image.jsx: EWR 360 GSM Fiberglass Woven Roving
  {
    id: "ewr-360-gsm-fiberglass-woven-roving",
    title: "EWR 360 GSM Fiberglass Woven Roving",
    description:
      "360 GSM EWR fiberglass woven roving for high-performance composites.",
    price: "₹130",
    priceUnit: "/ Kg",
    minimumOrder: "100 Kg",
    image: "/ewr360-gsm-fiberglass-woven-roving-125x125.webp",
    specifications: {
      usage: "COMPOSITES",
      color: "WHITE",
      size: "1000MM",
      material: "E GLASS FIBERGLASS",
      packagingType: "POLY WRAPPED, CARTON BOX",
      gsm: "360",
      width: "1000MM",
      qualityGrade: "A",
    },
    description2:
      "EWR 360 GSM woven roving is used for demanding composite applications.",
    features: ["High strength", "Durable", "Easy to handle"],
    packaging: "Poly bags, cartons",
    storage: "Store in a dry, cool area.",
    safetyInfo: "Non-toxic.",
    standards: "IS 11273",
    additionalInfo: {
      itemCode: "70194013",
      productionCapacity: "1500 KGS / DAY",
      deliveryTime: "3 TO 5 DAYS",
      packagingDetails: "CARTONS",
    },
  },
  // For Image.jsx: fiberglass continuous filament mats
  {
    id: "fiberglass-continuous-filament-mats",
    title: "fiberglass continuous filament mats",
    description: "Continuous filament mats for composite reinforcement.",
    price: "₹115",
    priceUnit: "/ Kg",
    minimumOrder: "100 Kg",
    image:
      "/fiberglass-continuous-filament-mats-cfm300-gsm-cfm450-gsm-125x125.webp",
    specifications: {
      usage: "COMPOSITES",
      color: "WHITE",
      size: "1000MM",
      material: "E GLASS FIBERGLASS",
      packagingType: "POLY WRAPPED, CARTON BOX",
      gsm: "300/450",
      width: "1000MM",
      qualityGrade: "A",
    },
    description2: "Used for high-strength composite applications.",
    features: ["Continuous filament", "High strength"],
    packaging: "Poly bags, cartons",
    storage: "Store in a dry, cool area.",
    safetyInfo: "Non-toxic.",
    standards: "IS 11273",
    additionalInfo: {
      itemCode: "70194014",
      productionCapacity: "1200 KGS / DAY",
      deliveryTime: "3 TO 5 DAYS",
      packagingDetails: "CARTONS",
    },
  },
  // For Image.jsx: fiberglass stitch mats EMK300 gsm & EMK450 gsm
  {
    id: "fiberglass-stitch-mats-emk300-gsm-emk450-gsm",
    title: "fiberglass stitch mats EMK300 gsm & EMK450 gsm",
    description: "Stitch mats for composite reinforcement.",
    price: "₹125",
    priceUnit: "/ Kg",
    minimumOrder: "100 Kg",
    image: "/fiberglass-stitch-mats-emk300-gsm-emk450-gsm-125x125.webp",
    specifications: {
      usage: "COMPOSITES",
      color: "WHITE",
      size: "1000MM",
      material: "E GLASS FIBERGLASS",
      packagingType: "POLY WRAPPED, CARTON BOX",
      gsm: "300/450",
      width: "1000MM",
      qualityGrade: "A",
    },
    description2: "Stitch mats for a variety of composite applications.",
    features: ["Stitch bonded", "High strength"],
    packaging: "Poly bags, cartons",
    storage: "Store in a dry, cool area.",
    safetyInfo: "Non-toxic.",
    standards: "IS 11273",
    additionalInfo: {
      itemCode: "70194015",
      productionCapacity: "1100 KGS / DAY",
      deliveryTime: "3 TO 5 DAYS",
      packagingDetails: "CARTONS",
    },
  },
  {
    id: "woven-roving-mat",
    title: "Woven Roving Mat",
    description: "Mat for reinforcement and industrial use.",
    price: "₹1,000",
    priceUnit: "/ Roll",
    minimumOrder: "10 Rolls",
    image: "/200-gsm-woven-roving-fabric-500x500.webp",
    specifications: {
      usage: "REINFORCEMENT & COMPOSITES",
      color: "WHITE",
      size: "1000MM",
      material: "E GLASS FIBERGLASS",
      packagingType: "ROLLED AND PACKED IN CARTON",
      rollWeight: "50 KGS",
      countryOfOrigin: "Made in India",
      gsm: "200",
      width: "1000MM",
      qualityGrade: "A",
    },
    description2:
      "Premium woven roving mat designed for various reinforcement applications in composite manufacturing. Ideal for hand lay-up processes and compatible with polyester, vinyl ester, and epoxy resin systems.",
    features: [
      "High tensile strength",
      "Excellent resin compatibility",
      "Easy to handle and cut",
      "Consistent quality throughout the roll",
      "Good drapability for complex shapes",
    ],
    packaging: "Supplied as rolls in protective polyethylene wrapping",
    storage:
      "Store in dry conditions away from direct sunlight. Maintain temperature between 15-30°C",
    safetyInfo:
      "Use appropriate protective equipment when handling. Non-toxic material.",
    standards:
      "Meets IS 11273 standards for fiberglass reinforcement materials",
    additionalInfo: {
      itemCode: "70194001",
      productionCapacity: "5000 ROLLS / MONTH",
      deliveryTime: "3 TO 7 DAYS",
      packagingDetails: "CORRUGATED CARTONS",
    },
  },
  {
    id: "woven-roving-fabric",
    title: "Woven Roving Fabric",
    description:
      "High-performance woven roving fabric for composite applications.",
    price: "₹1,200",
    priceUnit: "/ Roll",
    minimumOrder: "5 Rolls",
    image: "/ewr360-gsm-fiberglass-woven-roving-125x125.webp",
    specifications: {
      usage: "COMPOSITES",
      color: "GRAY",
      size: "1200MM",
      material: "E GLASS FIBERGLASS",
      packagingType: "CARTON PACKED",
      gsm: "360",
      width: "1200MM",
      qualityGrade: "A+",
    },
    description2:
      "Woven roving fabric is ideal for high-strength composite manufacturing, offering excellent drapability and resin compatibility.",
    features: [
      "Superior strength",
      "Uniform thickness",
      "Easy to handle",
      "Excellent wet-out",
    ],
    packaging: "Carton packed rolls",
    storage: "Store in a cool, dry place away from sunlight.",
    safetyInfo: "Non-toxic, safe to handle.",
    standards: "Complies with IS 11273 and international standards.",
    additionalInfo: {
      itemCode: "70194002",
      productionCapacity: "3000 ROLLS / MONTH",
      deliveryTime: "3 TO 7 DAYS",
      packagingDetails: "CARTONS",
    },
  },
  {
    id: "fiberglass-mat",
    title: "Fiberglass Mat",
    description: "Durable fiberglass mat for industrial and composite use.",
    price: "₹950",
    priceUnit: "/ Roll",
    minimumOrder: "8 Rolls",
    image:
      "/fiberglass-continuous-filament-mats-cfm300-gsm-cfm450-gsm-125x125.webp",
    specifications: {
      usage: "INDUSTRIAL & COMPOSITES",
      color: "WHITE",
      size: "1000MM",
      material: "E GLASS FIBERGLASS",
      packagingType: "CARTON PACKED",
      gsm: "300/450",
      width: "1000MM",
      qualityGrade: "A",
    },
    description2:
      "Fiberglass mat is used for reinforcement in a variety of composite applications, providing excellent strength and durability.",
    features: [
      "Good drapability",
      "High strength",
      "Easy to cut",
      "Consistent quality",
    ],
    packaging: "Carton packed rolls",
    storage: "Store in a dry, cool place.",
    safetyInfo: "Non-toxic, safe to handle.",
    standards: "Complies with IS 11273.",
    additionalInfo: {
      itemCode: "70194003",
      productionCapacity: "2500 ROLLS / MONTH",
      deliveryTime: "3 TO 7 DAYS",
      packagingDetails: "CARTONS",
    },
  },
  {
    id: "fiberglass-products",
    title: "Fiberglass Products",
    description: "Wide range of fiberglass products for various applications.",
    price: "₹1,500",
    priceUnit: "/ Set",
    minimumOrder: "2 Sets",
    image: "/fiberglass-stitch-mats-emk300-gsm-emk450-gsm-125x125.webp",
    specifications: {
      usage: "MULTI-PURPOSE",
      color: "WHITE",
      size: "VARIOUS",
      material: "E GLASS FIBERGLASS",
      packagingType: "CARTON PACKED",
      gsm: "VARIOUS",
      width: "VARIOUS",
      qualityGrade: "A",
    },
    description2:
      "Our fiberglass products are designed for strength, durability, and versatility in a wide range of industrial and commercial uses.",
    features: ["Versatile", "Durable", "High quality", "Customizable"],
    packaging: "Carton packed sets",
    storage: "Store in a dry, cool place.",
    safetyInfo: "Non-toxic, safe to handle.",
    standards: "Complies with IS 11273.",
    additionalInfo: {
      itemCode: "70194004",
      productionCapacity: "1000 SETS / MONTH",
      deliveryTime: "3 TO 7 DAYS",
      packagingDetails: "CARTONS",
    },
  },
  {
    id: "fiber-mat",
    title: "Fiber Mat",
    description: "Premium fiber mat for composite and insulation applications.",
    price: "₹1,100",
    priceUnit: "/ Roll",
    minimumOrder: "6 Rolls",
    image: "/fiberglass-raw-material-125x125.webp",
    specifications: {
      usage: "COMPOSITES & INSULATION",
      color: "WHITE",
      size: "1000MM",
      material: "E GLASS FIBERGLASS",
      packagingType: "CARTON PACKED",
      gsm: "Varies",
      width: "1000MM",
      qualityGrade: "A",
    },
    description2:
      "Fiber mat is ideal for insulation and composite manufacturing, offering excellent performance and reliability.",
    features: ["High insulation", "Flexible", "Easy to install", "Reliable"],
    packaging: "Carton packed rolls",
    storage: "Store in a dry, cool place.",
    safetyInfo: "Non-toxic, safe to handle.",
    standards: "Complies with IS 11273.",
    additionalInfo: {
      itemCode: "70194005",
      productionCapacity: "2000 ROLLS / MONTH",
      deliveryTime: "3 TO 7 DAYS",
      packagingDetails: "CARTONS",
    },
  },
];

const ProductPage = () => {
  const { productId } = useParams();
  const product = productData.find((p) => p.id === productId) || productData[0];

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [productId]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Product Selector (optional: remove or keep for demo) */}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <nav className="text-sm text-gray-600 mb-6 flex items-center gap-2 bg-white/60 backdrop-blur-sm px-4 py-3 rounded-lg shadow-sm">
          <span className="hover:text-blue-600 cursor-pointer transition-colors">
            Home
          </span>
          <span>›</span>
          <span className="hover:text-blue-600 cursor-pointer transition-colors">
            Woven Roving Fabrics
          </span>
          <span>›</span>
          <span className="text-gray-900 font-medium">{product.title}</span>
        </nav>

        {/* Main Title */}
        <div className="mb-8">
          <h1 className="h-15 text-4xl md:text-5xl font-bold text-gray-900 mb-3 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            {product.title}
          </h1>
          <div className="h-1.5 w-24 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full"></div>
        </div>

        {/* Product description paragraph */}
        {product.description && (
          <p className="text-gray-700 mb-8 text-lg leading-relaxed bg-white/60 backdrop-blur-sm p-6 rounded-xl shadow-sm border border-gray-100">
            {product.description}
          </p>
        )}

        {/* Product Overview Section */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8 border border-gray-100 hover:shadow-2xl transition-shadow duration-300">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Product Image */}
            <div className="lg:w-1/2">
              <div className="relative group overflow-hidden rounded-xl shadow-lg bg-gray-100">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-96 object-cover transition-transform duration-500 group-hover:scale-110"
                  onError={(e) => {
                    e.target.src =
                      'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="400"%3E%3Crect fill="%23e5e7eb" width="400" height="400"/%3E%3Ctext x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle" fill="%239ca3af" font-family="Arial" font-size="24"%3EProduct Image%3C/text%3E%3C/svg%3E';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>

            {/* Product Info */}
            <div className="lg:w-1/2 flex flex-col">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl mb-6 border border-blue-100">
                <div className="flex items-baseline gap-4 mb-4">
                  <div className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                    {product.price}
                  </div>
                  {product.priceUnit && (
                    <div className="text-xl text-gray-600 font-medium">
                      {product.priceUnit}
                    </div>
                  )}
                </div>
                <a
                  href="#"
                  className="text-blue-600 hover:text-blue-700 font-semibold hover:underline inline-flex items-center gap-2 transition-colors"
                >
                  💰 Request Custom Price
                  <span className="text-sm">→</span>
                </a>
              </div>

              <div className="bg-amber-50 border-l-4 border-amber-500 p-4 mb-6 rounded-r-lg">
                <span className="font-semibold text-gray-900">
                  Minimum Order:
                </span>{" "}
                <span className="text-amber-700 font-bold">
                  {product.minimumOrder}
                </span>
              </div>

              <a
                href="#"
                className="text-red-600 hover:text-red-700 font-semibold mb-6 flex items-center gap-3 p-4 bg-red-50 rounded-lg hover:bg-red-100 transition-all group border border-red-200"
              >
                <span className="text-2xl group-hover:scale-110 transition-transform">
                  📄
                </span>
                <span>Download Product Brochure</span>
              </a>

              <div className="space-y-3">
                <button className="w-full border-2 border-blue-600 text-blue-600 font-semibold px-6 py-4 rounded-xl hover:bg-blue-600 hover:text-white transition-all duration-300 flex items-center justify-center gap-3 shadow-md hover:shadow-lg group">
                  <span className="text-xl group-hover:scale-110 transition-transform">
                    📞
                  </span>
                  REQUEST A CALL BACK
                </button>

                <button className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold px-6 py-4 rounded-xl hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 flex items-center justify-center gap-3 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
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
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8 border border-gray-100 hover:shadow-2xl transition-shadow duration-300">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <span className="text-blue-600">📋</span>
              Technical Specifications
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {Object.entries(product.specifications).map(([key, value]) => (
                <div
                  key={key}
                  className="bg-gradient-to-r from-gray-50 to-blue-50 p-4 rounded-lg border border-gray-200 hover:border-blue-300 transition-all hover:shadow-md"
                >
                  <div className="text-sm text-gray-600 font-medium mb-1 uppercase tracking-wide">
                    {key.replace(/([A-Z])/g, " $1").trim()}
                  </div>
                  <div className="text-gray-900 font-bold text-lg">{value}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Description */}
        {product.description2 && (
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8 border border-gray-100 hover:shadow-2xl transition-shadow duration-300">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <span className="text-blue-600">📝</span>
              Product Description
            </h2>
            <p className="text-gray-700 leading-relaxed text-lg">
              {product.description2}
            </p>
          </div>
        )}

        {/* Features */}
        {product.features && product.features.length > 0 && (
          <div className="bg-gradient-to-br from-white to-blue-50 rounded-2xl shadow-xl p-8 mb-8 border border-gray-100 hover:shadow-2xl transition-shadow duration-300">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <span className="text-blue-600">✨</span>
              Key Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {product.features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-all border border-gray-100 hover:border-blue-300"
                >
                  <span className="text-blue-600 font-bold text-xl mt-0.5">
                    ✓
                  </span>
                  <span className="text-gray-700 leading-relaxed">
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Info Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {/* Packaging */}
          {product.packaging && (
            <div className="bg-white rounded-2xl shadow-xl p-6 border border-gray-100 hover:shadow-2xl transition-all hover:border-blue-300">
              <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                <span className="text-2xl">📦</span>
                Packaging
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {product.packaging}
              </p>
            </div>
          )}

          {/* Storage */}
          {product.storage && (
            <div className="bg-white rounded-2xl shadow-xl p-6 border border-gray-100 hover:shadow-2xl transition-all hover:border-blue-300">
              <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                <span className="text-2xl">🏭</span>
                Storage
              </h3>
              <p className="text-gray-700 leading-relaxed">{product.storage}</p>
            </div>
          )}

          {/* Safety Information */}
          {product.safetyInfo && (
            <div className="bg-white rounded-2xl shadow-xl p-6 border border-gray-100 hover:shadow-2xl transition-all hover:border-green-300">
              <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                <span className="text-2xl">🛡️</span>
                Safety Information
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {product.safetyInfo}
              </p>
            </div>
          )}

          {/* Standards */}
          {product.standards && (
            <div className="bg-white rounded-2xl shadow-xl p-6 border border-gray-100 hover:shadow-2xl transition-all hover:border-purple-300">
              <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                <span className="text-2xl">🏆</span>
                Standards
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {product.standards}
              </p>
            </div>
          )}
        </div>

        {/* Additional Information */}
        {product.additionalInfo && (
          <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl shadow-xl p-8 border border-indigo-100 hover:shadow-2xl transition-shadow duration-300">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <span className="text-indigo-600">ℹ️</span>
              Additional Information
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {Object.entries(product.additionalInfo).map(([key, value]) => (
                <div
                  key={key}
                  className="flex items-start gap-3 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-all border border-indigo-100"
                >
                  <span className="text-indigo-600 font-bold text-lg mt-0.5">
                    ▸
                  </span>
                  <div>
                    <span className="font-semibold text-gray-900 capitalize">
                      {key.replace(/([A-Z])/g, " $1").trim()}:
                    </span>{" "}
                    <span className="text-gray-700">{value}</span>
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
