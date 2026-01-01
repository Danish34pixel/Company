import React, { useState } from "react";
import {
  MapPin,
  Phone,
  User,
  Send,
  Facebook,
  Twitter,
  Linkedin,
  Mail,
  Clock,
  Award,
} from "lucide-react";

const Contact = () => {
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [hoveredSocial, setHoveredSocial] = useState(null);

  const handleSubmit = () => {
    if (message.trim() && name.trim()) {
      setIsSubmitting(true);
      console.log("Message submitted:", { name, email, phone, message });

      setTimeout(() => {
        alert("Thank you for your message! We will get back to you soon.");
        setMessage("");
        setName("");
        setEmail("");
        setPhone("");
        setIsSubmitting(false);
      }, 1000);
    } else {
      alert("Please fill in at least your name and message.");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-amber-50/30 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12 animate-fadeIn">
          <h1 className="text-4xl lg:text-5xl font-black bg-gradient-to-r from-slate-800 via-slate-700 to-amber-600 bg-clip-text text-transparent mb-4">
            Get In Touch
          </h1>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            We're here to help and answer any questions you might have
          </p>
          <div className="w-24 h-1.5 bg-gradient-to-r from-slate-800 to-amber-600 mx-auto mt-6 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Section - Contact Information */}
          <div className="bg-gradient-to-br from-slate-800 via-slate-700 to-amber-600 text-white rounded-2xl p-8 lg:p-12 shadow-2xl relative overflow-hidden group animate-slideInLeft">
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-32 translate-x-32 group-hover:scale-150 transition-transform duration-700"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-amber-500/10 rounded-full translate-y-24 -translate-x-24 group-hover:scale-150 transition-transform duration-700"></div>

            <div className="relative z-10">
              <h1 className="text-3xl lg:text-4xl font-black mb-3">
                Fibertechinovations
              </h1>
              <p className="text-amber-200 text-sm mb-12 font-medium">
                Premium Fiberglass Solutions Since 2010
              </p>

              {/* Contact Person */}
              <div className="mb-10 group/item hover:translate-x-2 transition-transform duration-300">
                <div className="flex items-start gap-4 mb-2">
                  <div className="bg-white rounded-xl p-3 flex-shrink-0 shadow-lg group-hover/item:scale-110 group-hover/item:rotate-6 transition-all duration-300">
                    <User className="w-6 h-6 text-slate-800" />
                  </div>
                  <div>
                    <h2 className="text-sm font-bold mb-1 text-amber-200 tracking-wider">
                      CONTACT PERSON
                    </h2>
                    <p className="text-xl font-bold">
                      Ankit Shukla <br />
                      Mirdul Shukla <br />
                      Sandeep
                    </p>
                    <p className="text-amber-100 text-sm mt-1">
                      Chief Executive Officer
                    </p>
                  </div>
                </div>
              </div>

              {/* Address */}
              <div className="mb-10 group/item hover:translate-x-2 transition-transform duration-300">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 bg-white/10 rounded-xl p-3 backdrop-blur-sm group-hover/item:bg-white/20 transition-all duration-300">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h2 className="text-sm font-bold mb-2 text-amber-200 tracking-wider">
                      ADDRESS
                    </h2>
                    <p className="text-lg font-bold mb-1"></p>
                    <p className="text-base leading-relaxed text-white/90">
                      Building No./Flat No.: GI-66 Road/Street: RIICO INDUSTRIAL
                      AREA City/Town/Village: Tapukara District: Khairthal
                      Tijara State: Rajasthan PIN Code: 301707
                    </p>
                    <a
                      href="#"
                      className="text-amber-300 hover:text-amber-200 mt-3 inline-flex items-center gap-2 font-semibold group/link"
                    >
                      Get Directions
                      <span className="group-hover/link:translate-x-1 transition-transform">
                        →
                      </span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Contact Number */}
              <div className="mb-10 group/item hover:translate-x-2 transition-transform duration-300">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 bg-white/10 rounded-xl p-3 backdrop-blur-sm group-hover/item:bg-white/20 transition-all duration-300">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h2 className="text-sm font-bold mb-1 text-amber-200 tracking-wider">
                      CONTACT NUMBER
                    </h2>
                    <a
                      href="tel:+919559422555"
                      className="text-2xl font-black hover:text-amber-300 transition-colors"
                    >
                      +919559422555 <br />
                      +919024242304 <br />
                      +919991732322
                    </a>
                    <p className="text-white/80 text-sm mt-1">
                      Available Mon-Sat, 8 AM - 10 PM
                    </p>
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="mb-12 group/item hover:translate-x-2 transition-transform duration-300">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 bg-white/10 rounded-xl p-3 backdrop-blur-sm group-hover/item:bg-white/20 transition-all duration-300">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h2 className="text-sm font-bold mb-1 text-amber-200 tracking-wider">
                      EMAIL
                    </h2>
                    <a
                      href="mailto:sales@fibertechinnovations.com"
                      className="text-lg font-bold hover:text-amber-300 transition-colors"
                    >
                      sales@fibertechinnovations.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="border-t border-white/20 pt-8">
                <span className="text-lg font-bold mb-4 block">
                  Connect With Us
                </span>
                <div className="flex gap-4">
                  <a
                    href="#"
                    onMouseEnter={() => setHoveredSocial("facebook")}
                    onMouseLeave={() => setHoveredSocial(null)}
                    className="bg-white rounded-xl w-12 h-12 flex items-center justify-center hover:bg-amber-500 transition-all duration-300 group/social shadow-lg hover:scale-110 hover:-translate-y-1"
                  >
                    <Facebook
                      className={`w-5 h-5 transition-colors duration-300 ${
                        hoveredSocial === "facebook"
                          ? "text-white"
                          : "text-slate-800"
                      }`}
                    />
                  </a>
                  <a
                    href="#"
                    onMouseEnter={() => setHoveredSocial("twitter")}
                    onMouseLeave={() => setHoveredSocial(null)}
                    className="bg-white rounded-xl w-12 h-12 flex items-center justify-center hover:bg-amber-500 transition-all duration-300 group/social shadow-lg hover:scale-110 hover:-translate-y-1"
                  >
                    <Twitter
                      className={`w-5 h-5 transition-colors duration-300 ${
                        hoveredSocial === "twitter"
                          ? "text-white"
                          : "text-slate-800"
                      }`}
                    />
                  </a>
                  <a
                    href="#"
                    onMouseEnter={() => setHoveredSocial("linkedin")}
                    onMouseLeave={() => setHoveredSocial(null)}
                    className="bg-white rounded-xl w-12 h-12 flex items-center justify-center hover:bg-amber-500 transition-all duration-300 group/social shadow-lg hover:scale-110 hover:-translate-y-1"
                  >
                    <Linkedin
                      className={`w-5 h-5 transition-colors duration-300 ${
                        hoveredSocial === "linkedin"
                          ? "text-white"
                          : "text-slate-800"
                      }`}
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Section - Contact Form */}
          <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-2xl border border-slate-200 animate-slideInRight">
            <h2 className="text-3xl lg:text-4xl font-black bg-gradient-to-r from-slate-800 to-amber-600 bg-clip-text text-transparent mb-4">
              Send Us a Message
            </h2>
            <div className="w-20 h-1.5 bg-gradient-to-r from-slate-800 to-amber-600 mb-8 rounded-full"></div>

            <div className="space-y-6">
              {/* Name Input */}
              <div className="group">
                <label
                  htmlFor="name"
                  className="block text-sm font-bold text-slate-700 mb-2 tracking-wide"
                >
                  Full Name *
                </label>
                <input
                  id="name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter your full name"
                  className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none text-slate-700 transition-all duration-300 group-hover:border-slate-300"
                />
              </div>

              {/* Email Input */}
              <div className="group">
                <label
                  htmlFor="email"
                  className="block text-sm font-bold text-slate-700 mb-2 tracking-wide"
                >
                  Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your.email@example.com"
                  className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none text-slate-700 transition-all duration-300 group-hover:border-slate-300"
                />
              </div>

              {/* Phone Input */}
              <div className="group">
                <label
                  htmlFor="phone"
                  className="block text-sm font-bold text-slate-700 mb-2 tracking-wide"
                >
                  Phone Number
                </label>
                <input
                  id="phone"
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+91 XXXXX XXXXX"
                  className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none text-slate-700 transition-all duration-300 group-hover:border-slate-300"
                />
              </div>

              {/* Message Textarea */}
              <div className="group">
                <label
                  htmlFor="message"
                  className="block text-sm font-bold text-slate-700 mb-2 tracking-wide"
                >
                  Your Message *
                </label>
                <textarea
                  id="message"
                  rows="6"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Describe your requirement in detail..."
                  className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none text-slate-700 transition-all duration-300 group-hover:border-slate-300 resize-none"
                />
              </div>

              <button
                onClick={handleSubmit}
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-slate-800 via-slate-700 to-amber-600 text-white px-8 py-4 rounded-xl text-lg font-bold hover:shadow-2xl hover:shadow-amber-500/30 hover:scale-105 transition-all duration-300 relative overflow-hidden group disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 group-hover:translate-x-full transition-transform duration-700"></div>
                <span className="relative z-10 flex items-center justify-center gap-2">
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Send Message
                    </>
                  )}
                </span>
              </button>

              <p className="text-sm text-slate-500 text-center">
                We typically respond within 24 hours
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          <div className="bg-white rounded-xl p-6 shadow-lg border border-slate-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
            <div className="w-14 h-14 bg-gradient-to-br from-slate-800 to-amber-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
              <Clock className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-xl font-bold text-slate-800 mb-2">
              Quick Response
            </h3>
            <p className="text-slate-600">
              We respond to all inquiries within 24 hours
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-lg border border-slate-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
            <div className="w-14 h-14 bg-gradient-to-br from-slate-800 to-amber-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
              <Award className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-xl font-bold text-slate-800 mb-2">
              Expert Support
            </h3>
            <p className="text-slate-600">
              Professional guidance from industry experts
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-lg border border-slate-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
            <div className="w-14 h-14 bg-gradient-to-br from-slate-800 to-amber-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
              <Phone className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-xl font-bold text-slate-800 mb-2">
              24/7 Available
            </h3>
            <p className="text-slate-600">
              Emergency support line available anytime
            </p>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideInLeft {
          from { opacity: 0; transform: translateX(-30px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes slideInRight {
          from { opacity: 0; transform: translateX(30px); }
          to { opacity: 1; transform: translateX(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.6s ease-out;
        }
        .animate-slideInLeft {
          animation: slideInLeft 0.6s ease-out;
        }
        .animate-slideInRight {
          animation: slideInRight 0.6s ease-out;
        }
      `}</style>
    </div>
  );
};

export default Contact;
