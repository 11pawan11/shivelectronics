import React from "react";

const services = [
  {
    title: "Electronic Device Repair",
    description:
      "Expert repair services for all types of electronic devices, from smartphones to laptops.",
    image: "/repair.jpg", // Replace with a relevant image
  },
  {
    title: "Photo Printing",
    description:
      "High-quality photo printing services for your cherished memories.",
    image: "/print.jpg", // Replace with a relevant image
  },
  {
    title: "Videography",
    description:
      "Professional videography services for events, promotional videos, and more.",
    image: "/videography.jpg", // Replace with a relevant image
  },
  {
    title: "Freefire Top-Up",
    description: "Instant top-up services for Freefire game credits.",
    image: "/topup.jpg", // Replace with a relevant image
  },
  {
    title: "Online Payment",
    description:
      "Secure and convenient online payment solutions for all your needs.",
    image: "/payment.jpg", 
  },
];

const Ourservices = () => {
  return (
    <div className="py-12 bg-gray-200">
      <div className="mx-6 px-6">
        <h2 className="text-4xl font-bold text-center text-black mb-10">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-800 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Ourservices;
