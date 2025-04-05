import React, { useState } from 'react';
import { Link } from 'wouter';

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      closeMobileMenu();
    }
  };

  return (
    <nav className="sticky top-0 z-50 bg-cream bg-opacity-90 backdrop-blur-sm border-b border-gold border-opacity-30 px-4 py-3">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <img 
            src="https://images.unsplash.com/photo-1605722625766-a4c989c747a4?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100&q=80" 
            alt="Logo" 
            className="h-12 w-12 rounded-full border-2 border-gold" 
          />
          <h1 className="ml-3 text-2xl font-playfair font-bold text-dark">
            <span className="text-maroon">Rahul</span> Sharma
          </h1>
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8 items-center">
          <button 
            onClick={() => scrollToSection('about')} 
            className="nav-link font-montserrat text-dark hover:text-maroon transition"
          >
            About
          </button>
          <button 
            onClick={() => scrollToSection('music')} 
            className="nav-link font-montserrat text-dark hover:text-maroon transition"
          >
            Music
          </button>
          <button 
            onClick={() => scrollToSection('gallery')} 
            className="nav-link font-montserrat text-dark hover:text-maroon transition"
          >
            Gallery
          </button>
          <button 
            onClick={() => scrollToSection('events')} 
            className="nav-link font-montserrat text-dark hover:text-maroon transition"
          >
            Events
          </button>
          <button 
            onClick={() => scrollToSection('contact')} 
            className="font-montserrat font-semibold px-5 py-2 bg-maroon text-cream rounded-md shadow-md hover:bg-opacity-90 transition"
          >
            Contact
          </button>
        </div>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-dark focus:outline-none" 
          onClick={toggleMobileMenu}
        >
          <i className="ri-menu-line text-2xl"></i>
        </button>
      </div>
      
      {/* Mobile Navigation */}
      <div className={`mobile-menu md:hidden absolute top-full left-0 w-full bg-cream bg-opacity-95 border-b border-gold border-opacity-30 pt-2 pb-4 px-4 ${mobileMenuOpen ? '' : 'hidden'}`}>
        <div className="flex flex-col space-y-3">
          <button 
            onClick={() => scrollToSection('about')} 
            className="font-montserrat text-dark hover:text-maroon py-2 px-3 rounded-md hover:bg-cream transition text-left"
          >
            About
          </button>
          <button 
            onClick={() => scrollToSection('music')} 
            className="font-montserrat text-dark hover:text-maroon py-2 px-3 rounded-md hover:bg-cream transition text-left"
          >
            Music
          </button>
          <button 
            onClick={() => scrollToSection('gallery')} 
            className="font-montserrat text-dark hover:text-maroon py-2 px-3 rounded-md hover:bg-cream transition text-left"
          >
            Gallery
          </button>
          <button 
            onClick={() => scrollToSection('events')} 
            className="font-montserrat text-dark hover:text-maroon py-2 px-3 rounded-md hover:bg-cream transition text-left"
          >
            Events
          </button>
          <button 
            onClick={() => scrollToSection('contact')} 
            className="font-montserrat font-semibold py-2 px-3 bg-maroon text-cream rounded-md shadow-sm hover:bg-opacity-90 transition text-left"
          >
            Contact
          </button>
        </div>
      </div>
    </nav>
  );
}
