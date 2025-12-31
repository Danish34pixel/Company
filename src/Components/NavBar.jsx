import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Phone,
  Mail,
  Search,
  ChevronDown,
  Menu,
  X,
  MapPin,
  CheckCircle,
} from "lucide-react";

const NavBar = () => {
  const navigate = useNavigate();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileProductsOpen, setIsMobileProductsOpen] = useState(false);
  const [active, setActive] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const tabs = [
  { label: "HOME", path: "/" },
  { label: "ABOUT US", path: "/about-us" },
  { label: "CONTACT US", path: "/contact-us" },
];
const handleTabClick = (index, path) => {
  setActive(index);
  navigate(path);
  setIsMobileMenuOpen(false);
};

  const products = [
    "Woven Roving",
    "Woven Roving Mat",
    "Woven Roving Fabric",
    "Fiberglass Mat",
    "Fiberglass Products",
  ];

  const productIdMap = {
    "Woven Roving": "woven-roving",
    "Woven Roving Mat": "woven-roving-mat",
    "Woven Roving Fabric": "woven-roving-fabric",
    "Fiberglass Mat": "fiberglass-mat",
    "Fiberglass Products": "fiberglass-products",
  };

  const [search, setSearch] = useState("");

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

  const handleSearch = () => {
    const query = search.trim().toLowerCase();
    if (!query) return;
    const match = allProducts.find((p) =>
      p.title.toLowerCase().includes(query)
    );
    if (match) {
      console.log(`Navigate to: /product/${match.id}`);
      setSearch("");
    } else {
      alert("No matching product found.");
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
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
      className={`w-full bg-gradient-to-br from-slate-50 via-white to-amber-50/30 transition-all duration-500 sticky top-0 z-50 ${
        isScrolled ? "shadow-2xl backdrop-blur-md bg-opacity-95" : "shadow-lg"
      }`}
      style={{ minHeight: "48px" }}
    >
      {/* Top Info Bar */}
      <div className="bg-gradient-to-r from-slate-800 via-slate-700 to-slate-800 text-white py-0 px-2">
        <div className="max-w-7xl mx-auto flex items-center justify-between text-[10px] h-10 sm:text-xs">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 hover:scale-105 transition-transform">
              <MapPin className="w-3 h-3 sm:w-4 sm:h-4 text-amber-400" />
              <span className="hidden sm:inline">
                Khairthal-Tijara, Rajasthan
              </span>
              <span className="sm:hidden">Rajasthan</span>
            </div>
            <div className="hidden md:flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-emerald-400" />
              <span>GST: 08AAFCJ0644M1ZD</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
            <span className="font-medium">81% Response Rate</span>
          </div>
        </div>
      </div>

      {/* Main Navigation Container */}
      <div className="max-w-7xl mx-auto px-2 sm:px-4">
        {/* Top Section */}
        <div className="flex items-center justify-between py-0.5 sm:py-1 gap-1 sm:gap-2">
          {/* Logo and Company Info */}
          <div className="flex items-center gap-3 md:gap-5 group flex-1 min-w-0">
            <div className="relative">
              <div className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 bg-gradient-to-br from-slate-800 via-slate-700 to-amber-600 rounded-2xl flex items-center justify-center shadow-2xl hover:shadow-amber-500/30 hover:scale-110 hover:rotate-6 transition-all duration-500 cursor-pointer flex-shrink-0 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/30 to-white/0 group-hover:translate-x-full transition-transform duration-700"></div>
                <div className="text-white font-black text-lg md:text-2xl relative z-10 tracking-wider">
                  JD
                </div>
              </div>
              <div className="absolute -bottom-1 -right-1 w-2.5 h-2.5 bg-emerald-500 rounded-full border border-white shadow-lg"></div>
            </div>
            <div className="transform group-hover:translate-x-1 transition-transform duration-300 min-w-0">
              <h1 className="text-xs xs:text-sm sm:text-lg md:text-2xl font-black bg-gradient-to-r from-slate-800 via-slate-700 to-amber-600 bg-clip-text text-transparent hover:from-slate-700 hover:via-slate-600 hover:to-amber-500 transition-all duration-500 tracking-tight">
                Fibertechinovation
              </h1>
              <p className="text-[9px] xs:text-[10px] md:text-xs font-semibold text-slate-600 mt-0.5 tracking-wide">
                Premium Fiberglass Solutions
              </p>
            </div>
          </div>

          {/* Desktop Navigation Menu */}
          <div className="hidden lg:flex items-center gap-0.5 bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-slate-200/50 p-0.5 relative overflow-hidden min-h-[40px]">
            <div className="absolute inset-0 bg-gradient-to-r from-slate-50/50 via-amber-50/30 to-slate-50/50"></div>

            <div
              className="absolute top-1 left-1 h-[calc(100%-8px)] bg-gradient-to-r from-slate-800 via-slate-700 to-amber-600 rounded-xl transition-all duration-500 ease-out shadow-lg"
              style={{
                width: "110px",
                transform: `translateX(${active * 114}px)`,
              }}
            />

            <div className="flex items-center relative z-10 gap-1">
              {tabs.map((tab, index) => (
                <button
                  key={tab.label}
                  onClick={() => handleTabClick(index, tab.path)}
                  className={`w-[110px] px-3 py-2 font-bold text-xs transition-all duration-500 relative rounded-xl ${
                    active === index
                      ? "text-white scale-105"
                      : "text-slate-700 hover:text-slate-900 hover:bg-slate-50"
                  }`}
                >
                  <span className="relative z-10 tracking-wide">{tab.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Contact Info - Desktop */}
          <div className="hidden md:flex flex-col gap-0.5 min-h-[40px]">
            <a
              href="tel:+919559422555"
              className="flex items-center gap-1 px-2 py-0.5 bg-white rounded-xl hover:bg-slate-50 border border-slate-200 hover:border-amber-300 hover:shadow-lg hover:shadow-amber-100 transition-all duration-300 group cursor-pointer"
            >
              <div className="w-5 h-5 bg-gradient-to-br from-slate-800 to-amber-600 rounded-lg flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                <Phone className="w-4 h-4 text-white group-hover:rotate-12 transition-transform" />
              </div>
              <div>
                <div className="text-slate-900 font-bold text-[9px]">
                  +919559422555     
                </div>
                <div className="text-[7px] text-slate-600">Click to Call</div>
              </div>
            </a>
            <button className="bg-gradient-to-r from-slate-800 via-slate-700 to-amber-600 text-white px-2 py-0.5 rounded-xl flex items-center justify-center gap-1 hover:shadow-xl hover:shadow-amber-500/30 hover:scale-105 transition-all duration-300 relative overflow-hidden group font-bold text-xs">
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 group-hover:translate-x-full transition-transform duration-700"></div>
              <Mail className="w-5 h-5 relative z-10" />
              <span className="relative z-10">Send Enquiry</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-1 rounded-xl hover:bg-slate-100 transition-all duration-300 border border-slate-200"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-slate-700" />
            ) : (
              <Menu className="w-6 h-6 text-slate-700" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-slate-200 py-2 space-y-2 animate-in slide-in-from-top duration-300">
            <div className="space-y-1">
              {tabs.map((tab, index) => (
                <button
                  key={tab}
                  onClick={() => {
                    setActive(index);
                    setIsMobileMenuOpen(false);
                  }}
                  className={`w-full px-5 py-2.5 rounded-xl font-bold transition-all duration-300 text-left shadow-md ${
                    active === index
                      ? "bg-gradient-to-r from-slate-800 via-slate-700 to-amber-600 text-white shadow-lg shadow-amber-500/20"
                      : "bg-white text-slate-700 hover:bg-slate-50 hover:text-slate-900 border border-slate-200"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            <div className="md:hidden space-y-2 pt-2 border-t border-slate-200">
              <a
                href="tel:07942542768"
                className="flex items-center gap-2 p-2 bg-white hover:bg-slate-50 rounded-xl border border-slate-200 hover:border-amber-300 transition-all duration-300"
              >
                <div className="w-8 h-8 bg-gradient-to-br from-slate-800 to-amber-600 rounded-lg flex items-center justify-center shadow-md">
                  <Phone className="w-4 h-4 text-white" />
                </div>
                <div>
                  <div className="text-slate-900 font-bold text-xs">
                    07942542768
                  </div>
                  <div className="text-[10px] text-slate-600">Tap to Call</div>
                </div>
              </a>
              <button className="w-full bg-gradient-to-r from-slate-800 via-slate-700 to-amber-600 text-white px-4 py-2 rounded-xl flex items-center justify-center gap-2 hover:shadow-xl hover:shadow-amber-500/30 transition-all duration-300 font-bold text-xs">
                <Mail className="w-5 h-5" />
                <span>Send Enquiry</span>
              </button>
            </div>
          </div>
        )}

        {/* Products Menu */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center gap-2 border-t border-slate-200 py-2 bg-gradient-to-r from-slate-50/50 via-white to-amber-50/30 rounded-t-3xl -mx-2 sm:-mx-4 px-2 sm:px-4 overflow-x-auto">
          <div className="flex items-center gap-3 w-full lg:w-auto">
            <Link to="/" className="bg-gradient-to-r from-slate-800 via-slate-700 to-amber-600 text-white px-3 py-1.5 rounded-xl font-black text-xs tracking-wider shadow-lg whitespace-nowrap hover:shadow-amber-500/30 hover:scale-105 transition-all duration-300">
              OUR PRODUCTS
            </Link>
          </div>

          {/* Desktop Products */}
          <div className="hidden lg:flex items-center gap-1 flex-wrap">
            {products.map((product) => (
              <button
                key={product}
                className="px-3 py-1.5 text-slate-700 hover:text-amber-700 transition-all duration-300 relative group rounded-xl hover:bg-gradient-to-r hover:from-amber-50 hover:to-slate-50 whitespace-nowrap font-semibold border border-transparent hover:border-amber-200 hover:shadow-md text-xs"
                onClick={() => {
                  if (productIdMap[product]) {
                    navigate(`/product/${productIdMap[product]}`);
                  }
                }}
              >
                <span className="relative z-10">{product}</span>
              </button>
            ))}

            <div className="relative">
              <button
                className="px-3 py-1.5 text-slate-700 hover:text-amber-700 transition-all duration-300 flex items-center gap-2 group rounded-xl hover:bg-gradient-to-r hover:from-amber-50 hover:to-slate-50 whitespace-nowrap font-semibold border border-transparent hover:border-amber-200 text-xs"
                onMouseEnter={() => setIsDropdownOpen(true)}
                onMouseLeave={() => setIsDropdownOpen(false)}
              >
                <span>More</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-300 ${
                    isDropdownOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {isDropdownOpen && (
                <div
                  className="absolute  top-full left-0 mt-2 w-64 bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden z-50 animate-in fade-in slide-in-from-top-2 duration-300"
                  onMouseEnter={() => setIsDropdownOpen(true)}
                  onMouseLeave={() => setIsDropdownOpen(false)}
                >
                  <div className="py-2">
                    {[
                      "Advanced Product 1",
                      "Premium Product 2",
                      "Special Product 3",
                      "Custom Product 4",
                    ].map((product, i) => (
                      <button
                        key={i}
                        className="w-full px-4 py-2 text-left text-slate-700 hover:bg-gradient-to-r hover:from-amber-50 hover:to-slate-50 hover:text-amber-700 transition-all duration-200 flex items-center gap-2 group font-medium text-xs"
                      >
                        <div className="w-1.5 h-1.5 bg-gradient-to-r from-slate-800 to-amber-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
                        {product}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Mobile Products */}
          <div className="lg:hidden flex gap-1 overflow-x-auto pb-1 w-full scrollbar-hide">
            {products.map((product) => (
              <button
                key={product}
                className="px-3 py-1.5 text-slate-700 bg-white hover:text-amber-700 hover:bg-gradient-to-r hover:from-amber-50 hover:to-slate-50 transition-all duration-300 rounded-xl whitespace-nowrap text-xs font-semibold border border-slate-200 hover:border-amber-300 flex-shrink-0 shadow-sm hover:shadow-md"
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
                className="px-3 py-1.5 text-slate-700 bg-white hover:text-amber-700 hover:bg-gradient-to-r hover:from-amber-50 hover:to-slate-50 transition-all duration-300 rounded-xl whitespace-nowrap text-xs font-semibold border border-slate-200 flex items-center gap-2 shadow-sm"
                onClick={() => setIsMobileProductsOpen((v) => !v)}
              >
                More
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-300 ${
                    isMobileProductsOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              {isMobileProductsOpen && (
                <div className="absolute left-0 top-full mt-2 w-56 bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden z-50 animate-in fade-in slide-in-from-top-2 duration-300">
                  <div className="py-2">
                    {[
                      "Advanced Product 1",
                      "Premium Product 2",
                      "Special Product 3",
                      "Custom Product 4",
                    ].map((product, i) => (
                      <button
                        key={i}
                        className="w-full px-4 py-2 text-left text-slate-700 hover:bg-gradient-to-r hover:from-amber-50 hover:to-slate-50 hover:text-amber-700 transition-all duration-200 flex items-center gap-2 group font-medium text-xs"
                        onClick={() => setIsMobileProductsOpen(false)}
                      >
                        <div className="w-1.5 h-1.5 bg-gradient-to-r from-slate-800 to-amber-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        {product}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Search Bar */}
          <div className="w-full lg:w-64 lg:ml-auto flex items-center border-2 border-slate-300 rounded-xl px-3 py-2 hover:border-amber-400 focus-within:border-amber-500 focus-within:shadow-xl focus-within:shadow-amber-500/20 transition-all duration-300 bg-white group">
            <input
              type="text"
              placeholder="Search our products..."
              className="flex-1 outline-none text-xs bg-transparent placeholder-slate-400 font-medium"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              onKeyPress={handleKeyPress}
            />
            <button
              onClick={handleSearch}
              className="p-1 bg-gradient-to-r from-slate-800 to-amber-600 rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-110"
            >
              <Search className="w-3.5 h-3.5 text-white flex-shrink-0" />
            </button>
          </div>
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
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-in {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </div>
  );
};

export default NavBar;
