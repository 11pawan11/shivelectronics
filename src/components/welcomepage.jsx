import React, { useEffect, useState } from "react";

export const TypeWriter = ({ text, delay }) => {
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setCurrentText((prevText) => prevText + text[currentIndex]);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }, delay);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text, delay]);

  return <span className="text-white font-mono">{currentText}</span>;
};

const Welcomepage = () => {
  return (
    <div className="relative h-screen flex flex-col justify-center items-center overflow-hidden bg-black text-center">
      {/* Background animation */}
      <div className="absolute inset-0">
        <div className="absolute w-full h-full bg-gradient-to-r from-teal-500 via-blue-500 to-purple-500 opacity-50 mix-blend-multiply animate-background"></div>
      </div>
      
      <div className="relative p-8 max-w-3xl w-full bg-gradient-to-br from-gray-800 via-gray-900 to-gray-700 rounded-3xl shadow-2xl transform transition-transform duration-500 hover:scale-105">
        <p className="text-6xl font-extrabold text-white mb-6 leading-snug animate-text-gradient animate-slide-up">
          Welcome, we are here at your service!
        </p>
        <p className="text-2xl text-white mt-4">
          <TypeWriter
            text={"We are happy to serve you and fulfill your demands"}
            delay={50}
          />
        </p>
      </div>
    </div>
  );
};

export default Welcomepage;
