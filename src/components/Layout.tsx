import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Clock, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface LayoutProps {
  children: React.ReactNode;
  onOpenModal: () => void;
}

export default function Layout({ children, onOpenModal }: LayoutProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="min-h-screen flex flex-col font-sans text-gray-800 bg-slate-50">
      {/* Top Bar */}
      <div className="bg-blue-600 text-white py-2 text-sm hidden md:block">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <Phone size={14} />
              <span>+91 98765 43210</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock size={14} />
              <span>Mon - Sat: 9:00 AM - 8:00 PM</span>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <a href="#" className="hover:text-blue-200 transition-colors"><Facebook size={16} /></a>
            <a href="#" className="hover:text-blue-200 transition-colors"><Twitter size={16} /></a>
            <a href="#" className="hover:text-blue-200 transition-colors"><Instagram size={16} /></a>
            <a href="#" className="hover:text-blue-200 transition-colors"><Linkedin size={16} /></a>
          </div>
        </div>
      </div>

      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md shadow-sm border-b border-gray-100 transition-all duration-300">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-700 rounded-lg flex items-center justify-center text-white font-bold text-xl shadow-lg group-hover:shadow-blue-500/30 transition-all duration-300">
              SH
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-xl text-gray-900 leading-none group-hover:text-blue-600 transition-colors">Sri Hariram</span>
              <span className="text-xs text-gray-500 font-medium tracking-wider uppercase">Dental Care</span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors relative py-1 ${
                  isActive(link.path) ? 'text-blue-600' : 'text-gray-600 hover:text-blue-600'
                }`}
              >
                {link.name}
                {isActive(link.path) && (
                  <motion.div
                    layoutId="underline"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600 rounded-full"
                  />
                )}
              </Link>
            ))}
            <button
              onClick={onOpenModal}
              className="bg-gradient-to-r from-blue-600 to-blue-500 text-white px-6 py-2.5 rounded-full font-medium shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 hover:-translate-y-0.5 transition-all duration-300 text-sm"
            >
              Book Appointment
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-600 hover:text-blue-600 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white border-t border-gray-100 overflow-hidden"
            >
              <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`text-base font-medium py-2 border-b border-gray-50 ${
                      isActive(link.path) ? 'text-blue-600' : 'text-gray-600'
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                ))}
                <button
                  onClick={() => {
                    onOpenModal();
                    setIsMenuOpen(false);
                  }}
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium shadow-md w-full text-center"
                >
                  Book Appointment
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-white pt-16 pb-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            {/* Brand */}
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">
                  SH
                </div>
                <div className="flex flex-col">
                  <span className="font-bold text-xl leading-none">Sri Hariram</span>
                  <span className="text-xs text-gray-400 font-medium tracking-wider uppercase">Dental Care</span>
                </div>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                Providing advanced dental care with compassion and precision. Your smile is our priority.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-gray-400 hover:bg-blue-600 hover:text-white transition-all duration-300">
                  <Facebook size={16} />
                </a>
                <a href="#" className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-gray-400 hover:bg-blue-600 hover:text-white transition-all duration-300">
                  <Twitter size={16} />
                </a>
                <a href="#" className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-gray-400 hover:bg-blue-600 hover:text-white transition-all duration-300">
                  <Instagram size={16} />
                </a>
                <a href="#" className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-gray-400 hover:bg-blue-600 hover:text-white transition-all duration-300">
                  <Linkedin size={16} />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-bold mb-6 relative inline-block">
                Quick Links
                <span className="absolute -bottom-2 left-0 w-12 h-1 bg-blue-600 rounded-full"></span>
              </h3>
              <ul className="space-y-3">
                {navLinks.map((link) => (
                  <li key={link.path}>
                    <Link to={link.path} className="text-gray-400 hover:text-blue-400 transition-colors text-sm flex items-center">
                      <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2 opacity-0 hover:opacity-100 transition-opacity"></span>
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-lg font-bold mb-6 relative inline-block">
                Our Services
                <span className="absolute -bottom-2 left-0 w-12 h-1 bg-blue-600 rounded-full"></span>
              </h3>
              <ul className="space-y-3">
                {['Root Canal Treatment', 'Teeth Whitening', 'Dental Implants', 'Braces & Aligners', 'Pediatric Dentistry'].map((service) => (
                  <li key={service}>
                    <Link to="/services" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">
                      {service}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-bold mb-6 relative inline-block">
                Contact Us
                <span className="absolute -bottom-2 left-0 w-12 h-1 bg-blue-600 rounded-full"></span>
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3 text-gray-400 text-sm">
                  <MapPin size={18} className="text-blue-600 mt-0.5 flex-shrink-0" />
                  <span>123, Health Avenue, Main Road,<br />Chennai, Tamil Nadu 600001, India</span>
                </li>
                <li className="flex items-center space-x-3 text-gray-400 text-sm">
                  <Phone size={18} className="text-blue-600 flex-shrink-0" />
                  <span>+91 98765 43210</span>
                </li>
                <li className="flex items-center space-x-3 text-gray-400 text-sm">
                  <Clock size={18} className="text-blue-600 flex-shrink-0" />
                  <span>Mon - Sat: 9:00 AM - 8:00 PM</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
            <p>&copy; 2026 Sri Hariram Dental Care and General Hospital. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
