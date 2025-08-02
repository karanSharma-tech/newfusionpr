import React from "react";
import { FaTwitter, FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-10 mt-12">
      <div className="max-w-6xl mx-auto px-6">
        {/* Contact Information */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
          <p className="text-gray-400">Email: info@pixlfusion.dev</p>
          <p className="text-gray-400">Phone: +91 98765 43210</p>
        </div>

        {/* Quick Links */}
        <div className="mb-8 flex justify-center space-x-6">
          <a
            href="/"
            className="text-gray-400 hover:text-white"
          >
            Home
          </a>
          <a
            href="/about"
            className="text-gray-400 hover:text-white"
          >
            About
          </a>
          <a
            href="/contact"
            className="text-gray-400 hover:text-white"
          >
            Contact
          </a>
        </div>

        {/* Social Media Icons */}
        <div className="mb-8 flex justify-center space-x-6">
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white"
          >
            <FaTwitter size={24} />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white"
          >
            <FaLinkedin size={24} />
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white"
          >
            <FaGithub size={24} />
          </a>
        </div>

        {/* Newsletter Subscription */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4">Stay Updated</h3>
          <p className="text-gray-400 mb-4">Sign up for our newsletter to get the latest updates.</p>
          <form className="flex justify-center items-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="p-2 rounded-l-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
            <button
              type="submit"
              className="bg-yellow-400 text-black p-2 rounded-r-lg hover:bg-yellow-500 focus:outline-none"
            >
              Subscribe
            </button>
          </form>
        </div>

        {/* Footer Text */}
        <div className="text-center text-gray-500">
          <p>© 2025 PixelFusion. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
