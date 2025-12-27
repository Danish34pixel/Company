import React from "react";
import {
  Factory,
  Users,
  Globe,
  FileText,
  Scale,
  TrendingUp,
} from "lucide-react";

const Header = () => {
  return (
    <div className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white py-12 px-6">
      {/* Main Header Content */}
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-start mb-8">
          <div className="flex-1">
            <p className="text-lg md:text-xl leading-relaxed max-w-5xl">
              <span className="font-semibold">JD Techfab Private Limited</span>{" "}
              has commenced its E glass Weaving facility at Jaipur, Rajasthan
              with installed capacity of about 4000 kgs per day. The Company is
              Manufacturing high quality Woven Roving Fabric.
            </p>
          </div>
          <div className="ml-6 flex-shrink-0">
            <div className="bg-yellow-400 rounded-full w-20 h-20 flex items-center justify-center">
              <div className="text-center">
                <div className="text-xs font-bold text-blue-900">TRUST</div>
                <div className="text-xs font-bold text-blue-900">SEAL</div>
                <div className="text-xs font-semibold text-red-600 mt-1">
                  Indiamart
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mb-8">
          <button className="border-2 border-white px-8 py-2 rounded hover:bg-white hover:text-blue-600 transition-colors">
            + Read More
          </button>
        </div>

        {/* Company Details Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          {/* Nature of Business */}
          <div className="flex items-start space-x-3">
            <Factory className="w-8 h-8 flex-shrink-0" />
            <div>
              <p className="text-sm opacity-90">Nature of Business</p>
              <p className="font-semibold text-lg">Manufacturer</p>
            </div>
          </div>

          {/* Total Employees */}
          <div className="flex items-start space-x-3">
            <Users className="w-8 h-8 flex-shrink-0" />
            <div>
              <p className="text-sm opacity-90">Total Number of Employees</p>
              <p className="font-semibold text-lg">11 to 25 People</p>
            </div>
          </div>

          {/* GST Registration */}
          <div className="flex items-start space-x-3">
            <FileText className="w-8 h-8 flex-shrink-0" />
            <div>
              <p className="text-sm opacity-90">GST Registration Date</p>
              <p className="font-semibold text-lg">12-02-2021</p>
            </div>
          </div>

          {/* Legal Status */}
          <div className="flex items-start space-x-3">
            <Scale className="w-8 h-8 flex-shrink-0" />
            <div>
              <p className="text-sm opacity-90">Legal Status of Firm</p>
              <p className="font-semibold text-lg">Limited Company</p>
            </div>
          </div>
        </div>

        {/* Second Row of Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Annual Turnover */}
          <div className="flex items-start space-x-3">
            <TrendingUp className="w-8 h-8 flex-shrink-0" />
            <div>
              <p className="text-sm opacity-90">Annual Turnover</p>
              <p className="font-semibold text-lg">5 - 25 Cr</p>
            </div>
          </div>

          {/* Import Export Code */}
          <div className="flex items-start space-x-3">
            <Globe className="w-8 h-8 flex-shrink-0" />
            <div>
              <p className="text-sm opacity-90">Import Export Code (IEC)</p>
              <p className="font-semibold text-lg">AAFCJ0644M</p>
            </div>
          </div>

          {/* GST No */}
          <div className="flex items-start space-x-3">
            <FileText className="w-8 h-8 flex-shrink-0" />
            <div>
              <p className="text-sm opacity-90">GST No.</p>
              <p className="font-semibold text-lg">08AAFCJ0644M1ZD</p>
            </div>
          </div>

          {/* CIN No */}
          <div className="flex items-start space-x-3">
            <FileText className="w-8 h-8 flex-shrink-0" />
            <div>
              <p className="text-sm opacity-90">CIN No.</p>
              <p className="font-semibold text-lg">U17299RJ2021PTC072843</p>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="mt-12 text-center">
          <h2 className="text-2xl font-semibold mb-4">
            Get in touch with us for best deals
          </h2>
          <button className="bg-white text-blue-600 px-10 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
