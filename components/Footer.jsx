import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-purple-900 dark:bg-gray-800 p-4 md:p-8 lg:p-10">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="text-white mb-4 md:mb-0">
          <span>&copy; 2024 PennyWise. All rights reserved.</span>
        </div>
        <div className="flex space-x-4 mb-4 md:mb-0">
          <a href="/about" className="text-white hover:text-gray-400">About</a>
          <a href="/contact" className="text-white hover:text-gray-400">Contact</a>
        </div>
        <div className="flex space-x-4">
          <a href="https://facebook.com" className="text-white hover:text-gray-400">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="https://twitter.com" className="text-white hover:text-gray-400">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="https://instagram.com" className="text-white hover:text-gray-400">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}
