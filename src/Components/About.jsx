import React, { useState } from "react";
import { MapPin, Phone, User } from "lucide-react";

const Contact = () => {
  const [message, setMessage] = useState("");

  const handleSubmit = () => {
    if (message.trim()) {
      console.log("Message submitted:", message);
      alert("Thank you for your message! We will get back to you soon.");
      setMessage("");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Section - Contact Information */}
          <div className="bg-blue-600 text-white rounded-lg p-8 lg:p-12">
            <h1 className="text-3xl lg:text-4xl font-bold mb-12">
              Fibertechinovation
            </h1>

            {/* Contact Person */}
            <div className="mb-10">
              <div className="flex items-start gap-4 mb-2">
                <div className="bg-white rounded-full p-3 flex-shrink-0">
                  <User className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h2 className="text-xl font-semibold mb-1">CONTACT PERSON</h2>
                  <p className="text-lg font-medium">Prakash Singhee | CEO</p>
                </div>
              </div>
            </div>

            {/* Address */}
            <div className="mb-10">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h2 className="text-xl font-semibold mb-2">ADDRESS</h2>
                  <p className="text-lg font-medium mb-1">Fibertechinovation</p>
                  <p className="text-base leading-relaxed">
                    Khairthal-Tijara, Rajasthan
                  </p>
                  <a
                    href="#"
                    className="text-white underline hover:text-blue-200 mt-2 inline-block"
                  >
                    Get Directions
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Number */}
            <div className="mb-12">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h2 className="text-xl font-semibold mb-1">CONTACT NUMBER</h2>
                  <p className="text-2xl font-bold">07942542768</p>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="flex items-center gap-4">
              <span className="text-lg">Share us on</span>
              <div className="flex gap-3">
                <a
                  href="#"
                  className="bg-white rounded-full w-10 h-10 flex items-center justify-center hover:bg-gray-100 transition-colors"
                >
                  <span className="text-blue-600 font-bold text-xl">f</span>
                </a>
                <a
                  href="#"
                  className="bg-white rounded-full w-10 h-10 flex items-center justify-center hover:bg-gray-100 transition-colors"
                >
                  <span className="text-blue-600 font-bold text-xl">t</span>
                </a>
                <a
                  href="#"
                  className="bg-white rounded-full w-10 h-10 flex items-center justify-center hover:bg-gray-100 transition-colors"
                >
                  <span className="text-blue-600 font-bold text-xl">in</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Section - Contact Form */}
          <div className="bg-white rounded-lg p-8 lg:p-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-8">CONTACT US</h2>
            <div className="w-16 h-1 bg-blue-600 mb-8"></div>

            <div>
              <div className="mb-6">
                <label
                  htmlFor="message"
                  className="block text-lg font-medium text-gray-700 mb-3"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  rows="8"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Describe you requirement in detail"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none text-gray-700"
                />
              </div>

              <button
                onClick={handleSubmit}
                className="bg-blue-600 text-white px-12 py-3 rounded-md text-lg font-medium hover:bg-blue-700 transition-colors"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
