import React, { useState } from "react";
import { Phone, Mail, Search, ChevronDown, Menu, X } from "lucide-react";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileProductsOpen, setIsMobileProductsOpen] = useState(false);
  const [active, setActive] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const tabs = ["HOME", "ABOUT US", "CONTACT US"];
  const products = [
    "Woven Roving",
    "Woven Roving Mat",
    "Woven Roving Fabric",
    "Fiberglass Mat",
    "Fiberglass Products",
  ];

  // Map product name to productId for navigation
  const productIdMap = {
    "Woven Roving": "woven-roving",
    "Woven Roving Mat": "woven-roving-mat",
    "Woven Roving Fabric": "woven-roving-fabric",
    "Fiberglass Mat": "fiberglass-mat",
    "Fiberglass Products": "fiberglass-products",
  };

  const navigate = useNavigate();

  // Search state
  const [search, setSearch] = useState("");

  // All product data for search (imported from productpage.jsx)
  const allProducts = [
    {
      id: "ewr-360-gsm-fiberglass-woven-roving",
      title: "EWR 360 GSM Fiberglass Woven Roving",
    },
    { id: "woven-roving", title: "Woven Fiberglass Roving" },
    { id: "200-gsm-woven-roving-fabric", title: "200 GSM Woven Roving Fabric" },
    { id: "fiberglass-roving", title: "Fiberglass Roving" },
    {
      id: "fiberglass-fabric-raw-material",
      title: "Fiberglass fabric raw material",
    },
    {
      id: "fiberglass-continuous-filament-mats",
      title: "fiberglass continuous filament mats",
    },
    {
      id: "fiberglass-stitch-mats-emk300-gsm-emk450-gsm",
      title: "fiberglass stitch mats EMK300 gsm & EMK450 gsm",
    },
    { id: "woven-roving-mat", title: "Woven Roving Mat" },
    { id: "woven-roving-fabric", title: "Woven Roving Fabric" },
    { id: "fiberglass-mat", title: "Fiberglass Mat" },
    { id: "fiberglass-products", title: "Fiberglass Products" },
    { id: "fiber-mat", title: "Fiber Mat" },
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    const query = search.trim().toLowerCase();
    if (!query) return;
    // Find first product whose title includes the search
    const match = allProducts.find((p) =>
      p.title.toLowerCase().includes(query)
    );
    if (match) {
      navigate(`/product/${match.id}`);
      setSearch("");
    } else {
      alert("No matching product found.");
    }
  };

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`w-full bg-gradient-to-r from-white via-blue-50 to-white transition-all duration-300 ${
        isScrolled ? "shadow-2xl" : "shadow-md"
      }`}
    >
      {/* Main Navigation Container */}
      <div className="max-w-7xl mx-auto px-2 sm:px-4">
        {/* Top Section */}
        <div className="flex items-center justify-between py-2 sm:py-4 gap-2 sm:gap-4 flex-wrap">
          {/* Logo and Company Info */}
          <div className="flex items-center gap-2 md:gap-4 group flex-1 min-w-0">
            <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-20 md:h-20 bg-gradient-to-br from-blue-500 to-blue-700 border-2 md:border-4 border-white rounded-full flex items-center justify-center shadow-lg hover:shadow-2xl hover:scale-110 transition-all duration-300 cursor-pointer relative overflow-hidden flex-shrink-0">
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              <div className="text-white font-bold text-lg md:text-2xl relative z-10 drop-shadow-lg">
                JD
              </div>
              {/* Animated ring effect */}
              <div className="absolute inset-0 border-2 border-white rounded-full animate-ping opacity-20"></div>
            </div>
            <div className="transform group-hover:translate-x-2 transition-transform duration-300 min-w-0">
              <h1 className="text-xs xs:text-sm sm:text-lg md:text-2xl font-bold bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900 bg-clip-text text-transparent hover:from-blue-600 hover:via-blue-800 hover:to-blue-600 transition-all duration-500 truncate">
                Fibertechinovation
              </h1>
              <div className="flex items-center gap-1 xs:gap-2 md:gap-4 text-[10px] xs:text-xs md:text-sm text-gray-600 mt-1 flex-wrap">
                <div className="flex items-center gap-1 hover:text-blue-600 transition-colors duration-200 cursor-pointer whitespace-nowrap">
                  <span className="animate-bounce">📍</span>
                  <span className="hidden sm:inline">
                    Khairthal-Tijara, Rajasthan
                  </span>
                  <span className="sm:hidden">Jaipur</span>
                </div>
                <div className="flex items-center gap-1 hover:text-green-600 transition-colors duration-200 cursor-pointer">
                  <span className="text-green-500">✓</span>
                  <span className="hidden lg:inline">
                    GST No. 08AAFCJ0644M1ZD
                  </span>
                  <span className="lg:hidden">GST Verified</span>
                </div>
              </div>
            </div>
          </div>

          {/* Desktop Navigation Menu */}
          <div className="hidden lg:block relative border border-gray-200 rounded-xl overflow-hidden shadow-lg backdrop-blur-sm bg-white/80 min-w-[150px]">
            {/* Blue moving box with glow effect */}
            <div
              className="absolute top-0 left-0 h-full w-[150px] bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 transition-all duration-500 ease-out"
              style={{
                transform: `translateX(${active * 150}px)`,
                boxShadow:
                  "0 0 30px rgba(59, 130, 246, 0.6), inset 0 0 20px rgba(255, 255, 255, 0.2)",
              }}
            />

            {/* Buttons */}
            <div className="flex items-center relative z-10">
              {tabs.map((tab, index) => (
                <button
                  key={tab}
                  onClick={() => setActive(index)}
                  className={`w-[150px] px-6 py-4 font-semibold transition-all duration-300 relative overflow-hidden group/btn
              ${
                active === index
                  ? "text-white scale-105"
                  : "text-gray-700 hover:text-blue-600"
              }`}
                >
                  <span className="relative z-10 tracking-wide">{tab}</span>
                  {active !== index && (
                    <>
                      <span className="absolute inset-0 bg-gradient-to-r from-blue-50 to-blue-100 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></span>
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover/btn:w-full transition-all duration-300"></span>
                    </>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Contact Info - Desktop */}
          <div className="hidden md:flex flex-col gap-1 sm:gap-2">
            <div className="flex items-center gap-2 text-blue-600 font-semibold group cursor-pointer hover:scale-105 transition-transform duration-300">
              <Phone className="w-4 h-4 lg:w-5 lg:h-5 group-hover:rotate-12 transition-transform duration-300" />
              <div>
                <div className="group-hover:text-blue-700 transition-colors text-sm lg:text-base">
                  Call 07942542768
                </div>
                <div className="text-xs text-gray-600 flex items-center gap-1">
                  <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                  <span>81% Response Rate</span>
                </div>
              </div>
            </div>
            <button className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-4 lg:px-6 py-2 rounded-lg flex items-center gap-2 hover:from-blue-700 hover:to-blue-800 hover:shadow-xl hover:scale-105 transition-all duration-300 relative overflow-hidden group text-sm lg:text-base">
              <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
              <Mail className="w-4 h-4 relative z-10 group-hover:rotate-12 transition-transform duration-300" />
              <span className="relative z-10">Send Enquiry</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-blue-50 transition-colors duration-300"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-gray-700" />
            ) : (
              <Menu className="w-6 h-6 text-gray-700" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-gray-200 py-2 sm:py-4 space-y-2 sm:space-y-4 animate-in slide-in-from-top duration-300">
            {/* Mobile Navigation */}
            <div className="space-y-1 sm:space-y-2">
              {tabs.map((tab, index) => (
                <button
                  key={tab}
                  onClick={() => {
                    setActive(index);
                    setIsMobileMenuOpen(false);
                  }}
                  className={`w-full px-4 py-3 rounded-lg font-semibold transition-all duration-300 text-left ${
                    active === index
                      ? "bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg"
                      : "bg-white text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Mobile Contact Info */}
            <div className="md:hidden space-y-2 sm:space-y-3 pt-2 sm:pt-4 border-t border-gray-200">
              <a
                href="tel:07942542768"
                className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors duration-300"
              >
                <Phone className="w-5 h-5 text-blue-600" />
                <div>
                  <div className="text-blue-600 font-semibold">
                    Call 07942542768
                  </div>
                  <div className="text-xs text-gray-600 flex items-center gap-1">
                    <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                    <span>81% Response Rate</span>
                  </div>
                </div>
              </a>
              <button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-3 rounded-lg flex items-center justify-center gap-2 hover:from-blue-700 hover:to-blue-800 hover:shadow-xl transition-all duration-300">
                <Mail className="w-4 h-4" />
                <span>Send Enquiry</span>
              </button>
            </div>
          </div>
        )}

        {/* Products Menu */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center gap-2 sm:gap-3 lg:gap-1 border-t border-gray-200 py-2 sm:py-3 bg-gradient-to-r from-transparent via-blue-50/30 to-transparent overflow-x-auto">
          <div className="flex items-center gap-1 xs:gap-2 w-full lg:w-auto">
            <span className="text-blue-600 font-bold text-base lg:text-lg relative whitespace-nowrap">
              OUR RANGE
              <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-blue-400 to-blue-600"></span>
            </span>
            <span className="text-gray-400 hidden lg:inline">|</span>
          </div>

          {/* Desktop Products */}
          <div className="hidden lg:flex items-center gap-1 flex-wrap">
            {products.map((product) => (
              <button
                key={product}
                className="px-4 py-2 text-gray-700 hover:text-blue-600 transition-all duration-300 relative group rounded-lg hover:bg-blue-50 whitespace-nowrap"
                onClick={() => {
                  if (productIdMap[product]) {
                    navigate(`/product/${productIdMap[product]}`);
                  }
                }}
              >
                <span className="relative z-10">{product}</span>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
              </button>
            ))}

            <div className="relative">
              <button
                className="px-4 py-2 text-gray-700 hover:text-blue-600 transition-all duration-300 flex items-center gap-1 group rounded-lg hover:bg-blue-50 whitespace-nowrap"
                onMouseEnter={() => setIsDropdownOpen(true)}
                onMouseLeave={() => setIsDropdownOpen(false)}
              >
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-300 ${
                    isDropdownOpen ? "rotate-180" : ""
                  }`}
                />
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
              </button>

              {/* Dropdown Menu */}
              {isDropdownOpen && (
                <div
                  className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-2xl border border-gray-100 overflow-hidden z-50 animate-in fade-in slide-in-from-top-2 duration-300"
                  onMouseEnter={() => setIsDropdownOpen(true)}
                  onMouseLeave={() => setIsDropdownOpen(false)}
                >
                  <div className="py-2">
                    {["Product 1", "Product 2", "Product 3", "Product 4"].map(
                      (product, i) => (
                        <button
                          key={i}
                          className="w-full px-4 py-3 text-left text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-all duration-200 flex items-center gap-2 group"
                        >
                          <span className="w-2 h-2 bg-blue-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200"></span>
                          {product}
                        </button>
                      )
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Mobile Products - Horizontal Scroll */}
          <div className="lg:hidden flex gap-1 xs:gap-2 overflow-x-auto pb-1 sm:pb-2 w-full scrollbar-hide">
            {products.map((product) => (
              <button
                key={product}
                className="px-3 py-2 sm:px-4 text-gray-700 bg-white hover:text-blue-600 hover:bg-blue-50 transition-all duration-300 rounded-lg whitespace-nowrap text-xs sm:text-sm border border-gray-200 flex-shrink-0"
                onClick={() => {
                  if (productIdMap[product]) {
                    navigate(`/product/${productIdMap[product]}`);
                  }
                }}
              >
                {product}
              </button>
            ))}
            <div className="relative flex-shrink-0">
              <button
                className="px-3 py-2 sm:px-4 text-gray-700 bg-white hover:text-blue-600 hover:bg-blue-50 transition-all duration-300 rounded-lg whitespace-nowrap text-xs sm:text-sm border border-gray-200 flex items-center gap-1"
                onClick={() => setIsMobileProductsOpen((v) => !v)}
              >
                More Products
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-300 ${
                    isMobileProductsOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              {isMobileProductsOpen && (
                <div className="absolute left-0 top-full mt-1 w-48 bg-white rounded-lg shadow-2xl border border-gray-100 overflow-hidden z-50 animate-in fade-in slide-in-from-top-2 duration-300">
                  <div className="py-2">
                    {["Product 1", "Product 2", "Product 3", "Product 4"].map(
                      (product, i) => (
                        <button
                          key={i}
                          className="w-full px-4 py-3 text-left text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-all duration-200 flex items-center gap-2 group"
                          onClick={() => setIsMobileProductsOpen(false)}
                        >
                          <span className="w-2 h-2 bg-blue-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200"></span>
                          {product}
                        </button>
                      )
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Search Bar */}
          <form
            className="w-full lg:w-64 lg:ml-auto flex items-center border-2 border-gray-300 rounded-lg px-2 sm:px-3 py-2 hover:border-blue-500 focus-within:border-blue-600 focus-within:shadow-lg transition-all duration-300 bg-white group mt-1 sm:mt-0"
            onSubmit={handleSearch}
          >
            <input
              type="text"
              placeholder="Search Products/Services"
              className="flex-1 outline-none text-xs sm:text-sm bg-transparent"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <button type="submit">
              <Search className="w-5 h-5 text-gray-400 group-hover:text-blue-600 group-focus-within:text-blue-600 transition-colors duration-300 flex-shrink-0" />
            </button>
          </form>
        </div>
      </div>

      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
};

export default NavBar;
