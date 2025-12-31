import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import About from "./Components/About";
import Contact from "./Components/Contact";
import Products from "./Components/Products";
import NotFound from "./Components/NotFound";
import Screen from "./Components/Screen";
import ProductPage from "./Components/productpage";

import NavBar from "./Components/NavBar";
import Image from "./Components/Image";
import Header from "./Components/Header";
import Rating from "./Components/Rating";
import Contacts from "./Components/Contacts";

const App = () => {
  return (
    <Router>
      <NavBar />
     

      <main>
        <Routes>
          <Route path="/about-us" element={<About/>} />
          <Route path="/contact-us" element={<Contacts/>} />
          <Route
            path="/"
            element={
              <>
                <Image />
                <Header />
                <Products />
                <About />
                <Rating />
                <Contact />
              </>
            }
          />

          <Route path="/screen" element={<Screen />} />
          <Route path="/product/:productId" element={<ProductPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </Router>
  );
};

export default App;
