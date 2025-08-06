'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Search, User, Menu, X } from 'lucide-react';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="fixed top-0 left-0 w-full bg-white/95 backdrop-blur-md border-b border-gray-100 z-50 transition-all duration-300">
      <header className="w-full h-20" style={{ maxWidth: '1512px', margin: '0 auto' }}>
        <nav className="w-full h-full px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-full max-w-none">
          {/* Logo & Brand */}
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 lg:w-10 lg:h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg lg:text-xl">K</span>
            </div>
            <span className="text-xl lg:text-2xl font-bold text-gray-900">
              KnusWonen
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-12">
            <a 
              href="#" 
              className="text-blue-600 font-semibold text-base hover:text-blue-700 transition-colors duration-200 relative after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-0.5 after:bg-blue-600"
            >
              ik huur
            </a>
            <a 
              href="#" 
              className="text-gray-600 font-medium text-base hover:text-blue-600 transition-colors duration-200"
            >
              ik zoek
            </a>
            <a 
              href="#" 
              className="text-gray-600 font-medium text-base hover:text-blue-600 transition-colors duration-200"
            >
              over ons
            </a>
            <a 
              href="#" 
              className="text-gray-600 font-medium text-base hover:text-blue-600 transition-colors duration-200"
            >
              projecten
            </a>
          </div>

          {/* Desktop Action Icons */}
          <div className="hidden lg:flex items-center space-x-6">
            <button 
              className="p-3 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200"
              aria-label="Search"
            >
              <Search size={22} />
            </button>
            <button 
              className="p-3 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200"
              aria-label="User Profile"
            >
              <User size={22} />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="lg:hidden p-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200"
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-gray-100 bg-white/95 backdrop-blur-md">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a 
                href="#" 
                className="block px-3 py-2 text-blue-600 font-semibold text-base bg-blue-50 rounded-lg"
              >
                ik huur
              </a>
              <a 
                href="#" 
                className="block px-3 py-2 text-gray-600 font-medium text-base hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200"
              >
                ik zoek
              </a>
              <a 
                href="#" 
                className="block px-3 py-2 text-gray-600 font-medium text-base hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200"
              >
                over ons
              </a>
              <a 
                href="#" 
                className="block px-3 py-2 text-gray-600 font-medium text-base hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200"
              >
                projecten
              </a>
            </div>
            <div className="px-2 pb-3 border-t border-gray-100">
              <div className="flex items-center space-x-4 pt-3">
                <button 
                  className="flex items-center space-x-2 px-3 py-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200"
                  aria-label="Search"
                >
                  <Search size={18} />
                  <span className="text-sm font-medium">Search</span>
                </button>
                <button 
                  className="flex items-center space-x-2 px-3 py-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200"
                  aria-label="Profile"
                >
                  <User size={18} />
                  <span className="text-sm font-medium">Profile</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
    </div>
  );
}
