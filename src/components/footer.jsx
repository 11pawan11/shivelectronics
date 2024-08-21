import React from "react";

const ContactUsWithFooter = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* Contact Us Section */}
      <div className="flex-grow flex items-center justify-center py-12 px-4">
        <div className="max-w-2xl w-full bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
            Contact Us
          </h2>
          <form className="space-y-2">
            <div>
              <label
                htmlFor="name"
                className="block text-gray-700 text-sm font-semibold mb-2"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your Name"
                className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-gray-700 text-sm font-semibold mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Your Email"
                className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div>
              <label
                htmlFor="subject"
                className="block text-gray-700 text-sm font-semibold mb-2"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                placeholder="Subject"
                className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-gray-700 text-sm font-semibold mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="Your Message"
                rows="6"
                className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              ></textarea>
            </div>

            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-blue-500 text-white px-6 py-3 rounded-md shadow-md hover:bg-blue-600 transition-colors duration-300"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Footer Section */}
      <footer className="bg-gradient-to-r from-black via-gray-800 to-black p-4 text-white py-6">
        <div className="max-w-6xl mx-auto px-4 flex flex-col items-center">
          <div className="text-center">
            <p className="text-lg font-semibold mb-2">Shiv Electronics Spot</p>
            <p className="text-sm mb-2">Kirne, Dolkha, Nepal</p>
            <p className="text-sm mb-2">Email: ubishnu987@gmail.com</p>
            <p className="text-sm mb-2">Phone: +977-9844246198</p>
          </div>
          <div className="mt-4 flex space-x-4">
            <a href="#" className="hover:underline">
              Privacy Policy
            </a>
            <a href="#" className="hover:underline">
              Terms of Service
            </a>
            <a href="#" className="hover:underline">
              Support
            </a>
          </div>
          <p className="mt-4 text-sm">
            © 2024 Shiv Electronics Spot. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default ContactUsWithFooter;
