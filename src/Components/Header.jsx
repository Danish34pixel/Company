import React, { useState } from "react";
import {
  Factory,
  Users,
  Globe,
  FileText,
  Scale,
  TrendingUp,
  Award,
  CheckCircle,
  ChevronDown,
  Building2,
  Calendar,
  DollarSign,
  Shield,
} from "lucide-react";

const Header = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);

  const companyDetails1 = [
    {
      icon: Factory,
      label: "Nature of Business",
      value: "Manufacturer",
      color: "from-amber-500 to-amber-600",
    },
    {
      icon: Users,
      label: "Total Number of Employees",
      value: "11 to 15 People",
      color: "from-emerald-500 to-emerald-600",
    },
    {
      icon: Calendar,
      label: "GST Registration Date",
      value: "11-09-2025",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: Scale,
      label: "Legal Status of Firm",
      value: "Limited Company",
      color: "from-purple-500 to-purple-600",
    },
  ];

  const companyDetails2 = [
    {
      icon: TrendingUp,
      label: "Annual Turnover",
      value: "₹2 - 3 Cr",
      color: "from-green-500 to-green-600",
    },

    {
      icon: FileText,
      label: "GST No.",
      value: "08AAKFF7513P1ZU",
      color: "from-orange-500 to-orange-600",
    },
    {
      icon: Building2,
      label: "CIN No.",
      value: "U17299RJ2021PTC072843",
      color: "from-pink-500 to-pink-600",
    },
  ];

  return (
    <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-16 px-6 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-amber-600/10 rounded-full translate-x-48 -translate-y-48 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-slate-700/20 rounded-full -translate-x-48 translate-y-48 blur-3xl"></div>
      <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-amber-500/5 rounded-full -translate-x-32 -translate-y-32 blur-2xl"></div>

      {/* Main Header Content */}
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Hero Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-8 mb-12 animate-fadeIn">
          <div className="flex-1">
            <div className="inline-block mb-4">
              <div className="flex items-center gap-2 bg-gradient-to-r from-amber-500/20 to-amber-600/20 border border-amber-500/30 rounded-full px-4 py-2 backdrop-blur-sm">
                <Award className="w-4 h-4 text-amber-400" />
                <span className="text-sm font-bold text-amber-400">
                  Certified Manufacturer
                </span>
              </div>
            </div>

            <h1 className="text-4xl lg:text-5xl font-black mb-6 bg-gradient-to-r from-white via-amber-200 to-amber-400 bg-clip-text text-transparent leading-tight">
              About Fibertechinovation
            </h1>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 lg:p-8 shadow-2xl">
              <p className="text-lg lg:text-xl leading-relaxed text-slate-200">
                <span className="font-bold text-amber-400">
                  Fibertechinovation
                </span>{" "}
                has commenced its E glass Weaving facility at Jaipur, Rajasthan
                with installed capacity of about{" "}
                <span className="font-bold text-white">4000 kgs per day</span>.
                The Company is Manufacturing high quality Woven Roving Fabric
                with cutting-edge technology and commitment to excellence.
              </p>

              {isExpanded && (
                <div className="mt-6 pt-6 border-t border-white/10 space-y-4 animate-slideDown">
                  <p className="text-slate-300 leading-relaxed">
                    Our state-of-the-art manufacturing facility combines
                    traditional craftsmanship with modern technology to produce
                    premium fiberglass products. We serve diverse industries
                    including automotive, marine, construction, and aerospace
                    sectors.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                    <div className="bg-gradient-to-br from-slate-800 to-slate-700 rounded-xl p-4 border border-amber-500/20">
                      <CheckCircle className="w-6 h-6 text-amber-400 mb-2" />
                      <p className="text-sm font-bold text-white">
                        ISO Certified
                      </p>
                      <p className="text-xs text-slate-400 mt-1">
                        Quality Management
                      </p>
                    </div>
                    <div className="bg-gradient-to-br from-slate-800 to-slate-700 rounded-xl p-4 border border-amber-500/20">
                      <Shield className="w-6 h-6 text-amber-400 mb-2" />
                      <p className="text-sm font-bold text-white">
                        100% Quality
                      </p>
                      <p className="text-xs text-slate-400 mt-1">
                        Tested Products
                      </p>
                    </div>
                    <div className="bg-gradient-to-br from-slate-800 to-slate-700 rounded-xl p-4 border border-amber-500/20">
                      <TrendingUp className="w-6 h-6 text-amber-400 mb-2" />
                      <p className="text-sm font-bold text-white">
                        Growing Fast
                      </p>
                      <p className="text-xs text-slate-400 mt-1">
                        Pan India Presence
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className="text-center mt-6">
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="group border-2 border-white/20 hover:border-amber-500 bg-white/5 hover:bg-gradient-to-r hover:from-slate-800 hover:to-amber-600 px-8 py-3 rounded-xl transition-all duration-300 font-bold hover:shadow-xl hover:shadow-amber-500/20 hover:scale-105 backdrop-blur-sm"
              >
                <span className="flex items-center gap-2">
                  {isExpanded ? "Show Less" : "Read More"}
                  <ChevronDown
                    className={`w-5 h-5 transition-transform duration-300 ${
                      isExpanded ? "rotate-180" : ""
                    }`}
                  />
                </span>
              </button>
            </div>
          </div>

          {/* Trust Seal */}
          <div
            className="flex-shrink-0 animate-fadeIn"
            style={{ animationDelay: "0.2s" }}
          >
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full blur-xl opacity-50 group-hover:opacity-75 transition-opacity"></div>
              <div className="relative bg-gradient-to-br from-amber-400 to-amber-600 rounded-full w-28 h-28 lg:w-32 lg:h-32 flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-300">
                <div className="text-center">
                  <Award className="w-8 h-8 text-slate-900 mx-auto mb-1" />
                  <div className="text-xs font-black text-slate-900">TRUST</div>
                  <div className="text-xs font-black text-slate-900">SEAL</div>
                  <div className="text-xs font-bold text-white mt-1 bg-slate-900 px-2 py-0.5 rounded">
                    IndiaMART
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-emerald-500 rounded-full flex items-center justify-center border-4 border-slate-900 shadow-lg">
                <CheckCircle className="w-5 h-5 text-white" />
              </div>
            </div>
          </div>
        </div>

        {/* Company Details Grid - First Row */}
        <div className="mb-8">
          <h3 className="text-2xl font-black mb-6 text-center">
            <span className="bg-gradient-to-r from-white to-amber-400 bg-clip-text text-transparent">
              Company Information
            </span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {companyDetails1.map((detail, index) => {
              const Icon = detail.icon;
              return (
                <div
                  key={index}
                  onMouseEnter={() => setHoveredCard(`detail1-${index}`)}
                  onMouseLeave={() => setHoveredCard(null)}
                  className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-amber-500/30 transition-all duration-300 hover:shadow-2xl hover:shadow-amber-500/10 hover:-translate-y-2 animate-fadeIn"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div
                    className={`w-14 h-14 bg-gradient-to-br ${detail.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg`}
                  >
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <p className="text-sm text-slate-400 mb-2 font-medium">
                    {detail.label}
                  </p>
                  <p className="font-bold text-lg text-white group-hover:text-amber-400 transition-colors">
                    {detail.value}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Company Details Grid - Second Row */}
        <div className="mb-12">
          <h3 className="text-2xl font-black mb-6 text-center">
            <span className="bg-gradient-to-r from-white to-amber-400 bg-clip-text text-transparent">
              Business Credentials
            </span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {companyDetails2.map((detail, index) => {
              const Icon = detail.icon;
              return (
                <div
                  key={index}
                  onMouseEnter={() => setHoveredCard(`detail2-${index}`)}
                  onMouseLeave={() => setHoveredCard(null)}
                  className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-amber-500/30 transition-all duration-300 hover:shadow-2xl hover:shadow-amber-500/10 hover:-translate-y-2 animate-fadeIn"
                  style={{ animationDelay: `${(index + 4) * 0.1}s` }}
                >
                  <div
                    className={`w-14 h-14 bg-gradient-to-br ${detail.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg`}
                  >
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <p className="text-sm text-slate-400 mb-2 font-medium">
                    {detail.label}
                  </p>
                  <p className="font-bold text-lg text-white group-hover:text-amber-400 transition-colors break-all">
                    {detail.value}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Contact CTA Section */}
        <div
          className="text-center bg-gradient-to-r from-slate-800/50 to-slate-700/50 backdrop-blur-sm border border-white/10 rounded-3xl py-12 px-6 shadow-2xl animate-fadeIn"
          style={{ animationDelay: "0.8s" }}
        >
          <h2 className="text-3xl lg:text-4xl font-black mb-4 bg-gradient-to-r from-white to-amber-400 bg-clip-text text-transparent">
            Ready to Start Your Project?
          </h2>
          <p className="text-slate-300 text-lg mb-8 max-w-2xl mx-auto">
            Get in touch with us for the best deals and premium quality
            fiberglass solutions
          </p>
          <button className="group bg-gradient-to-r from-slate-800 via-slate-700 to-amber-600 text-white px-12 py-4 rounded-xl font-bold text-lg hover:shadow-2xl hover:shadow-amber-500/30 hover:scale-110 transition-all duration-300 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 group-hover:translate-x-full transition-transform duration-700"></div>
            <span className="relative z-10 flex items-center justify-center gap-3">
              Contact Us Now
              <ChevronDown className="-rotate-90 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
          </button>
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideDown {
          from { opacity: 0; max-height: 0; }
          to { opacity: 1; max-height: 500px; }
        }
        .animate-fadeIn {
          animation: fadeIn 0.6s ease-out forwards;
          opacity: 0;
        }
        .animate-slideDown {
          animation: slideDown 0.5s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default Header;
