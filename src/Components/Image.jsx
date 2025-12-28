import React, { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight, Eye } from "lucide-react";
import { useNavigate } from "react-router-dom";

const products = [
  {
    image: "/200-gsm-woven-roving-fabric-500x500.webp",
    name: "200 GSM Woven Roving Fabric",
  },
  {
    image: "/fiberglass-roving-500x500.webp",
    name: "Fiberglass Roving",
  },
  {
    image: "/fiberglass-raw-material-125x125.webp",
    name: "Fiberglass fabric raw material",
  },
  {
    image: "/ewr360-gsm-fiberglass-woven-roving-125x125.webp",
    name: "EWR 360 GSM Fiberglass Woven Roving",
  },
  {
    image:
      "/fiberglass-continuous-filament-mats-cfm300-gsm-cfm450-gsm-125x125.webp",
    name: "fiberglass continuous filament mats",
    category: "Footwear",
  },
  {
    image: "/fiberglass-stitch-mats-emk300-gsm-emk450-gsm-125x125.webp",
    name: "fiberglass stitch mats EMK300 gsm & EMK450 gsm",
  },
];

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(2);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const cardRefs = useRef([]);
  const animationRef = useRef(null);

  const transformStyles = [
    {
      transform: "rotate(8deg) translateX(-280px) scale(0.75)",
      opacity: 0.4,
      zIndex: 1,
    },
    {
      transform: "rotate(4deg) translateX(-140px) scale(0.85)",
      opacity: 0.7,
      zIndex: 3,
    },
    {
      transform: "rotate(0deg) translateX(0px) scale(1)",
      opacity: 1,
      zIndex: 10,
    },
    {
      transform: "rotate(-4deg) translateX(140px) scale(0.85)",
      opacity: 0.7,
      zIndex: 3,
    },
    {
      transform: "rotate(-8deg) translateX(280px) scale(0.75)",
      opacity: 0.4,
      zIndex: 1,
    },
  ];

  useEffect(() => {
    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
    }

    cardRefs.current.forEach((el, i) => {
      if (el) {
        const style = transformStyles[i];
        Object.assign(el.style, {
          transform: style.transform,
          opacity: style.opacity,
          zIndex: style.zIndex,
          transition: "all 0.7s cubic-bezier(0.34, 1.56, 0.64, 1)",
        });
      }
    });
  }, [currentIndex]);

  const getVisibleProducts = () => {
    const arr = [];
    for (let i = -2; i <= 2; i++) {
      arr.push(
        products[(currentIndex + i + products.length) % products.length]
      );
    }
    return arr;
  };

  const visibleProducts = getVisibleProducts();

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % products.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + products.length) % products.length);
  };

  const navigate = useNavigate();
  // Helper to create a productId from product name
  const toProductId = (name) =>
    name
      .toLowerCase()
      .replace(/\s+/g, "-")
      .replace(/[^a-z0-9\-]/g, "");

  const handleCardClick = (index) => {
    if (index === 2) {
      // Center card: go to product page
      navigate(`/product/${toProductId(visibleProducts[2].name)}`);
    } else if (index < 2) {
      prevSlide();
    } else {
      nextSlide();
    }
  };

  return (
    <div className="flex items-center justify-center p-8">
      <div className="w-full max-w-7xl">
        <h1 className="text-5xl font-bold text-white text-center mb-4 tracking-tight"></h1>
        <p className="text-center text-white/60 mb-16 text-lg">
          Discover our premium collection
        </p>

        <div className="relative h-[400px] flex items-center justify-center overflow-hidden">
          {visibleProducts.map((product, i) => (
            <div
              key={i}
              ref={(el) => (cardRefs.current[i] = el)}
              className="absolute cursor-pointer group"
              style={{
                left: "50%",
                top: "50%",
                marginLeft: "-160px",
                marginTop: "-200px",
                width: "320px",
                height: "400px",
              }}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
              onClick={() => handleCardClick(i)}
            >
              <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700"
                  style={{
                    transform:
                      hoveredIndex === i && i === 2 ? "scale(1.1)" : "scale(1)",
                  }}
                />

                <div
                  className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent transition-opacity duration-500"
                  style={{
                    opacity: hoveredIndex === i && i === 2 ? 1 : 0,
                  }}
                />

                <div
                  className="absolute inset-0 flex flex-col items-center justify-center text-white transition-all duration-500 px-6"
                  style={{
                    opacity: hoveredIndex === i && i === 2 ? 1 : 0,
                    transform:
                      hoveredIndex === i && i === 2
                        ? "translateY(0)"
                        : "translateY(20px)",
                  }}
                >
                  <div className="text-sm font-semibold text-blue-400 mb-2 tracking-wider uppercase">
                    {product.category}
                  </div>
                  <h3 className="text-3xl font-bold mb-6 drop-shadow-lg text-center">
                    {product.name}
                  </h3>
                  <button className="flex items-center gap-2 bg-white text-gray-900 px-6 py-3 rounded-full font-semibold hover:bg-blue-400 hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105">
                    <Eye className="w-5 h-5" />
                    View Details
                  </button>
                </div>

                {i === 2 && (
                  <div
                    className="absolute bottom-6 left-6 right-6 text-white transition-opacity duration-500"
                    style={{
                      opacity: hoveredIndex === i ? 0 : 1,
                    }}
                  >
                    <div className="text-xs font-semibold text-blue-300 mb-1 tracking-wider uppercase">
                      {product.category}
                    </div>
                    <h3 className="text-xl font-bold drop-shadow-lg">
                      {product.name}
                    </h3>
                  </div>
                )}
              </div>
            </div>
          ))}

          <button
            onClick={prevSlide}
            className="absolute left-8 top-1/2 -translate-y-1/2 bg-white/95 backdrop-blur-sm hover:bg-white hover:scale-110 rounded-full p-4 transition-all duration-300 shadow-2xl hover:shadow-blue-500/50 z-20"
            aria-label="Previous product"
          >
            <ChevronLeft className="w-7 h-7 text-gray-900" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-8 top-1/2 -translate-y-1/2 bg-white/95 backdrop-blur-sm hover:bg-white hover:scale-110 rounded-full p-4 transition-all duration-300 shadow-2xl hover:shadow-blue-500/50 z-20"
            aria-label="Next product"
          >
            <ChevronRight className="w-7 h-7 text-gray-900" />
          </button>
        </div>

        <div className="flex justify-center gap-3 mt-12">
          {products.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2.5 rounded-full transition-all duration-500 ${
                currentIndex === index
                  ? "bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 w-16 shadow-lg shadow-blue-500/50"
                  : "bg-white/30 hover:bg-white/50 w-2.5"
              }`}
              aria-label={`Go to product ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;
