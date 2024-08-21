import React, { useState } from "react";
import ContactUsWithFooter from "./footer";
import Ourservices from "./our-services";
import Products from "./products";
import Aboutus from "./aboutus";
import Welcomepage from "./welcomepage";


const Homepage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const headersTopic = ["Home", "About Us", "Products", "Our Services", "Contact Us"];

  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false); // Close the menu on small screens
    }
  };

  return (
    <div className="bg-gradient-to-r from-black via-gray-800 to-black p-4 text-white">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="logo flex items-center gap-4">
          <img src="/logo.png" alt="logo" className="h-16 w-16 rounded-full shadow-lg" />
          <p className="font-extrabold sm:text-lg lg:text-2xl tracking-wider" style={{ fontFamily: 'Pacifico, cursive' }}>
            Shiv Electronics Spot
          </p>
        </div>

        {/* Navbar for large screens */}
        <nav className="hidden md:flex gap-6">
          {headersTopic.map((header, index) => (
            <button
              key={index}
              onClick={() => handleScroll(header.toLowerCase().replace(" ", ""))}
              className="hover:bg-gray-200 hover:text-black rounded-lg px-3 py-2 transition-all duration-300 ease-in-out shadow-lg text-lg font-semibold"
            >
              {header}
            </button>
          ))}
        </nav>

        {/* Hamburger Menu for small screens */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white focus:outline-none"
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 right-4 z-50 bg-gray-800 text-white rounded-lg shadow-lg w-48">
          <div className="flex flex-col p-4">
            {headersTopic.map((header, index) => (
              <button
                key={index}
                onClick={() => handleScroll(header.toLowerCase().replace(" ", ""))}
                className="block py-2 px-4 rounded-lg hover:bg-gray-700 transition-all duration-300 ease-in-out"
              >
                {header}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Page Sections */}
      <div id="home">
        <Welcomepage />
      </div>
      <div id="aboutus">
        <Aboutus />
      </div>
      <div id="products">
        <Products />
      </div>
      <div id="ourservices">
        <Ourservices />
      </div>
      <div id="contactus">
        <ContactUsWithFooter />
      </div>
    </div>
  );
};

export default Homepage;
