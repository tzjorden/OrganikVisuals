import React from 'react';
import { FaInstagram } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <div>
            <h3 className="text-xl font-bold mb-2">Organik Visuals</h3>
            <div className="flex space-x-4">
              <a 
                href="https://www.instagram.com/organikvisual?igsh=NGVhN2U2NjQ0Yg%3D%3D&utm_source=qr" 
                className="text-gray-400 hover:text-white transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram size={24} />
              </a>
            </div>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-2">Quick Links</h4>
            <div className="grid grid-cols-2 gap-x-4 gap-y-1">
              <a href="#intro" className="text-base hover:text-gray-300 transition-colors">Home</a>
              <a href="#gallery" className="text-base hover:text-gray-300 transition-colors">Gallery</a>
              <a href="#plans" className="text-base hover:text-gray-300 transition-colors">Plans</a>
              <a href="#services" className="text-base hover:text-gray-300 transition-colors">Services</a>
            </div>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-2">Contact</h4>
            <p className="text-base mb-1">Phone: (510) 375-3929</p>
            <p className="text-base">Email: tenzinsangay@berkeley.edu</p>
          </div>
        </div>
        <div className="pt-4 border-t border-gray-800 text-center text-sm">
          <p>&copy; 2024 Organik Visuals. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;