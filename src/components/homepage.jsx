import React from "react";

const Homepage = () => {
  const headersTopic = ["Home", "About Us", "Products", "Our Services", "Contact Us"];
  
  return (
    <div className="bg-gradient-to-r from-black via-gray-800 to-black p-4 text-white">
      <div className="flex justify-between items-center">
        <div className="logo flex items-center gap-4">
          <img src="/logo.png" alt="logo" className="h-16 w-16 rounded-full shadow-lg" />
          <p className="font-extrabold text-2xl tracking-wider" style={{ fontFamily: 'Pacifico, cursive' }}>
            Shiv Electronics Spot
          </p>
        </div>
        <nav className="flex gap-6">
          {headersTopic.map((header, index) => (
            <a
              key={index}
              href={`#${header.toLowerCase().replace(" ", "")}`}
              className="hover:bg-gray-200 hover:text-black rounded-lg px-3 py-2 transition-all duration-300 ease-in-out shadow-lg text-lg font-semibold"
            >
              {header}
            </a>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default Homepage;
