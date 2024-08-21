import React from "react";

const Aboutus = () => {
  return (
    <div className=" about-parallax p-10">
      <div className=" gap-5 text-layer grid grid-cols-2 ">
        <div>
          <img src="/headphones.jpg" alt="about" />
        </div>
        <div>
          <p className="text-4xl font-medium mb-4 text-black">About Us</p>
          <span className="text-lg text-gray-600 leading-relaxed">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam
            cupiditate modi et perspiciatis dolorum nihil ipsa magnam quas
            architecto iste, ut animi, earum neque expedita at voluptatem omnis
            atque ipsam.
          </span>
        </div>
      </div>
    </div>
  );
};

export default Aboutus;
