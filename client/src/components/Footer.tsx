import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-secondary text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                <span className="text-secondary font-heading font-bold text-lg">MSA</span>
              </div>
              <h3 className="font-heading font-semibold text-lg">Mehran Shah Autos</h3>
            </div>
            <p className="mb-4 text-neutral-200">Your Automotive Solutions Partner</p>
            <p className="text-sm text-neutral-300">
              Bridging Pakistan's automotive heritage with modern solutions for all your transportation needs.
            </p>
          </div>
          
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#services" className="text-neutral-300 hover:text-white transition">Services</a></li>
              <li><a href="#vehicles" className="text-neutral-300 hover:text-white transition">Vehicles</a></li>
              <li><a href="#pricing" className="text-neutral-300 hover:text-white transition">Pricing</a></li>
              <li><a href="#about" className="text-neutral-300 hover:text-white transition">About Us</a></li>
              <li><a href="#contact" className="text-neutral-300 hover:text-white transition">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-neutral-300 hover:text-white transition">Terms of Service</a></li>
              <li><a href="#" className="text-neutral-300 hover:text-white transition">Privacy Policy</a></li>
              <li><a href="#" className="text-neutral-300 hover:text-white transition">Cookie Policy</a></li>
              <li><a href="#" className="text-neutral-300 hover:text-white transition">FAQ</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">Connect With Us</h3>
            <div className="flex space-x-4 mb-4">
              <a href="#" className="w-10 h-10 bg-secondary-light rounded-full flex items-center justify-center hover:bg-primary hover:text-secondary transition">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="w-10 h-10 bg-secondary-light rounded-full flex items-center justify-center hover:bg-primary hover:text-secondary transition">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="w-10 h-10 bg-secondary-light rounded-full flex items-center justify-center hover:bg-primary hover:text-secondary transition">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="#" className="w-10 h-10 bg-secondary-light rounded-full flex items-center justify-center hover:bg-primary hover:text-secondary transition">
                <i className="fab fa-youtube"></i>
              </a>
            </div>
            <div>
              <h4 className="text-sm font-medium mb-2">Subscribe to Newsletter</h4>
              <form className="flex" onSubmit={(e) => e.preventDefault()}>
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="bg-secondary-light text-white rounded-l py-2 px-3 w-full outline-none" 
                />
                <button 
                  type="submit" 
                  className="bg-primary text-secondary font-medium px-3 rounded-r"
                  aria-label="Subscribe"
                >
                  <i className="fas fa-paper-plane"></i>
                </button>
              </form>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/20 pt-6 flex flex-col md:flex-row justify-between items-center">
          <div className="text-neutral-300 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Mehran Shah Autos. All rights reserved.
          </div>
          <div className="text-neutral-300 text-sm">
            Design: <a href="#" className="hover:text-white transition">MSA Web Team</a> | Powered by React Three Fiber
          </div>
        </div>
      </div>
    </footer>
  );
}
