import React from "react";

const Aboutus = () => {
  return (
    <div className="about-parallax p-10 bg-gray-100">
      <div className="gap-10 text-layer grid md:grid-cols-2 items-center">
        <div className="flex justify-center">
          <img src="/shiv.jpg" alt="about" className="rounded-lg shadow-lg w-full md:w-3/4" />
        </div>
        <div className="flex flex-col justify-center">
          <p className="text-5xl font-bold mb-6 text-gray-800">About Us</p>
          <span className="text-lg text-gray-700 leading-relaxed">
            Welcome to <strong>Shiv Electronics Spot</strong>, your go-to destination for top-notch electronics and tech solutions. Our shop is dedicated to bringing you the latest in electronics, from high-quality wireless headphones to cutting-edge smartphones, and ultra HD 4K TVs. 
            <br/><br/>
            Our mission is to provide our customers with the best products and exceptional service, ensuring a seamless shopping experience. We also offer a range of services, including electronic repairs, photo printing, videography, Freefire top-up, and online payment solutions.
            <br/><br/>
            At Shiv Electronics Spot, customer satisfaction is our priority. We believe in quality, innovation, and trust. Visit us and experience the future of electronics today.
          </span>
        </div>
      </div>
    </div>
  );
};

export default Aboutus;
