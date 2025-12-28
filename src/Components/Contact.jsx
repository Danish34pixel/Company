import React from "react";

const Contact = () => {
  return (
    <footer className="bg-gray-800 text-white py-12 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-8">
          {/* Our Company Section */}
          <div>
            <h3 className="text-xl font-bold mb-4 uppercase">Our Company</h3>
            <ul className="space-y-2">
              <li>
                <a href="/" className="hover:text-gray-300 transition">
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className="hover:text-gray-300 transition">
                  About Us
                </a>
              </li>
              <li>
                <a href="/products" className="hover:text-gray-300 transition">
                  Our Products
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-gray-300 transition">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="/sitemap" className="hover:text-gray-300 transition">
                  Sitemap
                </a>
              </li>
            </ul>
          </div>

          {/* Our Products Section */}
          <div>
            <h3 className="text-xl font-bold mb-4 uppercase">Our Products</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="/woven-roving"
                  className="hover:text-gray-300 transition"
                >
                  Woven Roving
                </a>
              </li>
              <li>
                <a
                  href="/woven-roving-mat"
                  className="hover:text-gray-300 transition"
                >
                  Woven Roving Mat
                </a>
              </li>
              <li>
                <a
                  href="/woven-roving-fabric"
                  className="hover:text-gray-300 transition"
                >
                  Woven Roving Fabric
                </a>
              </li>
              <li>
                <a
                  href="/fiberglass-mat"
                  className="hover:text-gray-300 transition"
                >
                  Fiberglass Mat
                </a>
              </li>
            </ul>
          </div>

          {/* Fiberglass Products Section */}
          <div>
            <h3 className="text-xl font-bold mb-4 uppercase">
              Fiberglass Products
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="/fiber-mat" className="hover:text-gray-300 transition">
                  Fiber Mat
                </a>
              </li>
              <li>
                <a
                  href="/chopped-strand-mat"
                  className="hover:text-gray-300 transition"
                >
                  Chopped Strand Mat
                </a>
              </li>
              <li>
                <a
                  href="/fiberglass-cloth"
                  className="hover:text-gray-300 transition"
                >
                  Fiberglass Cloth
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-gray-400">
            <p>
              © Fibertechinovation. All Rights Reserved{" "}
              <a href="/terms" className="underline hover:text-gray-300">
                (Terms of Use)
              </a>
            </p>
            <p>
              Developed and managed by{" "}
              <a
                href="https://indiamart.com"
                className="underline hover:text-gray-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                IndiaMART InterMESH Ltd.
              </a>
            </p>
          </div>

          <div className="flex-shrink-0">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Indiamart_Logo.svg/200px-Indiamart_Logo.svg.png"
              alt="IndiaMART Member"
              className="h-12 w-auto bg-white p-1 rounded"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
