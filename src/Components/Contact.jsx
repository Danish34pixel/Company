import React, { useState } from "react";
import {
  Home,
  Info,
  Package,
  Mail,
  MapPin,
  Phone,
  Clock,
  ChevronRight,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
} from "lucide-react";

const Footer = () => {
  const [hoveredLink, setHoveredLink] = useState(null);

  const companyLinks = [
    { name: "Home", href: "/", icon: Home },
    { name: "About Us", href: "/about", icon: Info },
    { name: "Our Products", href: "/products", icon: Package },
    { name: "Contact Us", href: "/contact", icon: Mail },
    { name: "Sitemap", href: "/sitemap", icon: MapPin },
  ];

  const productLinks = [
    { name: "Woven Roving", href: "/woven-roving" },
    { name: "Woven Roving Mat", href: "/woven-roving-mat" },
    { name: "Woven Roving Fabric", href: "/woven-roving-fabric" },
    { name: "Fiberglass Mat", href: "/fiberglass-mat" },
    { name: "Continuous Filament Mats", href: "/continuous-filament-mats" },
  ];

  const fiberglassProducts = [
    { name: "Fiber Mat", href: "/fiber-mat" },
    { name: "Chopped Strand Mat", href: "/chopped-strand-mat" },
    { name: "Fiberglass Cloth", href: "/fiberglass-cloth" },
    { name: "Stitch Mats", href: "/stitch-mats" },
  ];

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-amber-600/5 rounded-full -translate-x-48 -translate-y-48 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-slate-700/10 rounded-full translate-x-48 translate-y-48 blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-8 py-16 relative z-10">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div className="space-y-6 animate-fadeIn">
            <div>
              <div className="w-16 h-16 bg-gradient-to-br from-slate-800 via-slate-700 to-amber-600 rounded-xl flex items-center justify-center shadow-xl mb-4 group-hover:scale-110 transition-transform duration-300">
                <img src="/akDc8-WhatsAppImage20251126at63801PM.webp" alt="" />
              </div>
              <h3 className="text-2xl font-black bg-gradient-to-r from-white to-amber-400 bg-clip-text text-transparent mb-2">
                Fibertechinovations
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Leading manufacturer and supplier of premium quality fiberglass
                products for industrial applications.
              </p>
            </div>

            {/* Quick Contact */}
            <div className="space-y-3">
              <a
                href="tel:+919559422555"
                className="flex items-center gap-3 text-slate-300 hover:text-amber-400 transition-colors group"
              >
                <div className="w-10 h-10 bg-slate-700/50 rounded-lg flex items-center justify-center group-hover:bg-amber-600/20 transition-colors">
                  <Phone className="w-5 h-5" />
                </div>
                <span className="font-semibold">+919559422555</span>
              </a>

              <div className="flex items-center gap-3 text-slate-300">
                <div className="w-10 h-10 bg-slate-700/50 rounded-lg flex items-center justify-center">
                  <Clock className="w-5 h-5" />
                </div>
                <span className="text-sm">Mon-Sat: 8 AM - 10 PM</span>
              </div>
            </div>

            {/* Social Media */}
            <div>
              <p className="text-sm font-bold text-slate-400 mb-3">
                CONNECT WITH US
              </p>
              <div className="flex gap-3">
                <a
                  href="#"
                  className="w-10 h-10 bg-slate-700/50 rounded-lg flex items-center justify-center hover:bg-gradient-to-br hover:from-slate-700 hover:to-amber-600 transition-all duration-300 hover:scale-110 hover:-translate-y-1 group"
                >
                  <Facebook className="w-5 h-5 text-slate-300 group-hover:text-white transition-colors" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-slate-700/50 rounded-lg flex items-center justify-center hover:bg-gradient-to-br hover:from-slate-700 hover:to-amber-600 transition-all duration-300 hover:scale-110 hover:-translate-y-1 group"
                >
                  <Twitter className="w-5 h-5 text-slate-300 group-hover:text-white transition-colors" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-slate-700/50 rounded-lg flex items-center justify-center hover:bg-gradient-to-br hover:from-slate-700 hover:to-amber-600 transition-all duration-300 hover:scale-110 hover:-translate-y-1 group"
                >
                  <Linkedin className="w-5 h-5 text-slate-300 group-hover:text-white transition-colors" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-slate-700/50 rounded-lg flex items-center justify-center hover:bg-gradient-to-br hover:from-slate-700 hover:to-amber-600 transition-all duration-300 hover:scale-110 hover:-translate-y-1 group"
                >
                  <Instagram className="w-5 h-5 text-slate-300 group-hover:text-white transition-colors" />
                </a>
              </div>
            </div>
          </div>

          {/* Our Company Section */}
          <div className="animate-fadeIn" style={{ animationDelay: "0.1s" }}>
            <h3 className="text-xl font-black mb-6 uppercase relative inline-block">
              Our Company
              <div className="absolute -bottom-2 left-0 w-12 h-1 bg-gradient-to-r from-amber-600 to-transparent rounded-full"></div>
            </h3>
            <ul className="space-y-3">
              {companyLinks.map((link, index) => {
                const Icon = link.icon;
                return (
                  <li key={index}>
                    <a
                      href={link.href}
                      onMouseEnter={() => setHoveredLink(`company-${index}`)}
                      onMouseLeave={() => setHoveredLink(null)}
                      className="flex items-center gap-3 text-slate-300 hover:text-amber-400 transition-all duration-300 group"
                    >
                      <Icon className="w-4 h-4 group-hover:scale-110 transition-transform" />
                      <span className="group-hover:translate-x-1 transition-transform">
                        {link.name}
                      </span>
                      <ChevronRight
                        className={`w-4 h-4 transition-all duration-300 ${
                          hoveredLink === `company-${index}`
                            ? "opacity-100 translate-x-1"
                            : "opacity-0 -translate-x-2"
                        }`}
                      />
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Our Products Section */}
          <div className="animate-fadeIn" style={{ animationDelay: "0.2s" }}>
            <h3 className="text-xl font-black mb-6 uppercase relative inline-block">
              Our Products
              <div className="absolute -bottom-2 left-0 w-12 h-1 bg-gradient-to-r from-amber-600 to-transparent rounded-full"></div>
            </h3>
            <ul className="space-y-3">
              {productLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    onMouseEnter={() => setHoveredLink(`product-${index}`)}
                    onMouseLeave={() => setHoveredLink(null)}
                    className="flex items-center gap-2 text-slate-300 hover:text-amber-400 transition-all duration-300 group"
                  >
                    <div className="w-1.5 h-1.5 bg-amber-600 rounded-full group-hover:scale-150 transition-transform"></div>
                    <span className="group-hover:translate-x-1 transition-transform">
                      {link.name}
                    </span>
                    <ChevronRight
                      className={`w-4 h-4 transition-all duration-300 ${
                        hoveredLink === `product-${index}`
                          ? "opacity-100 translate-x-1"
                          : "opacity-0 -translate-x-2"
                      }`}
                    />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Fiberglass Products Section */}
          <div className="animate-fadeIn" style={{ animationDelay: "0.3s" }}>
            <h3 className="text-xl font-black mb-6 uppercase relative inline-block">
              Fiberglass Products
              <div className="absolute -bottom-2 left-0 w-12 h-1 bg-gradient-to-r from-amber-600 to-transparent rounded-full"></div>
            </h3>
            <ul className="space-y-3">
              {fiberglassProducts.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    onMouseEnter={() => setHoveredLink(`fiber-${index}`)}
                    onMouseLeave={() => setHoveredLink(null)}
                    className="flex items-center gap-2 text-slate-300 hover:text-amber-400 transition-all duration-300 group"
                  >
                    <div className="w-1.5 h-1.5 bg-amber-600 rounded-full group-hover:scale-150 transition-transform"></div>
                    <span className="group-hover:translate-x-1 transition-transform">
                      {link.name}
                    </span>
                    <ChevronRight
                      className={`w-4 h-4 transition-all duration-300 ${
                        hoveredLink === `fiber-${index}`
                          ? "opacity-100 translate-x-1"
                          : "opacity-0 -translate-x-2"
                      }`}
                    />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="border-t border-slate-700/50 pt-8 mb-8">
          <div className="bg-gradient-to-r from-slate-800/50 to-slate-700/50 rounded-2xl p-8 backdrop-blur-sm border border-slate-700/30">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="text-2xl font-black mb-2 bg-gradient-to-r from-white to-amber-400 bg-clip-text text-transparent">
                  Stay Updated
                </h3>
                <p className="text-slate-400">
                  Subscribe to get the latest product updates and offers
                </p>
              </div>
              <div className="flex gap-3 w-full md:w-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="px-4 py-3 bg-slate-900/50 border border-slate-600 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 transition-all duration-300 w-full md:w-80"
                />
                <button className="px-6 py-3 bg-gradient-to-r from-slate-800 via-slate-700 to-amber-600 rounded-xl font-bold hover:shadow-xl hover:shadow-amber-500/20 hover:scale-105 transition-all duration-300 whitespace-nowrap">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-700/50 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-sm text-slate-400 space-y-2">
            <p className="flex items-center gap-2 flex-wrap justify-center md:justify-start">
              <span>© 2024 Fibertechinovation. All Rights Reserved</span>
              <span className="hidden md:inline">•</span>
              <a
                href="/terms"
                className="text-amber-400 hover:text-amber-300 transition-colors underline"
              >
                Terms of Use
              </a>
              <span className="hidden md:inline">•</span>
              <a
                href="/privacy"
                className="text-amber-400 hover:text-amber-300 transition-colors underline"
              >
                Privacy Policy
              </a>
            </p>
            <p className="text-center md:text-left">
              Developed and managed by{" "}
              <a
                href="https://indiamart.com"
                className="text-amber-400 hover:text-amber-300 transition-colors underline font-semibold"
                target="_blank"
                rel="noopener noreferrer"
              >
                IndiaMART InterMESH Ltd.
              </a>
            </p>
          </div>

          <div className="flex items-center gap-4 flex-shrink-0">
            <div className="bg-white p-3 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Indiamart_Logo.svg/200px-Indiamart_Logo.svg.png"
                alt="IndiaMART Member"
                className="h-10 w-auto"
              />
            </div>
            <div className="bg-gradient-to-r from-slate-800 to-amber-600 px-4 py-2 rounded-xl">
              <p className="text-xs font-bold text-white">TRUSTED MEMBER</p>
              <p className="text-lg font-black text-white">SINCE 2010</p>
            </div>
          </div>
        </div>

        {/* Back to Top Button */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-br from-slate-800 via-slate-700 to-amber-600 rounded-full flex items-center justify-center shadow-2xl hover:shadow-amber-500/30 hover:scale-110 transition-all duration-300 group z-50"
        >
          <ChevronRight className="w-6 h-6 text-white -rotate-90 group-hover:-translate-y-1 transition-transform" />
        </button>
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.6s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </footer>
  );
};

export default Footer;
