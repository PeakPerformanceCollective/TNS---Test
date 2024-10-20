import React from 'react';
import { Facebook, Instagram } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-white text-verdigris py-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <img 
            src="https://i.ibb.co/bdyhVfZ/logo.png" 
            alt="Top Notch Studio Logo" 
            className="h-12 mr-2"
          />
          <button className="btn-primary ml-4">Join</button>
        </div>
        <div className="flex items-center">
          <nav className="mr-6">
            <ul className="flex space-x-6">
              <li><a href="#" className="hover:text-fluorescent-cyan">Home</a></li>
              <li><a href="#" className="hover:text-fluorescent-cyan">Our Gym</a></li>
              <li><a href="#" className="hover:text-fluorescent-cyan">Special Offers</a></li>
              <li><a href="#" className="hover:text-fluorescent-cyan">What Our Members Say</a></li>
            </ul>
          </nav>
          <div className="flex space-x-4">
            <a href="#" className="text-verdigris hover:text-fluorescent-cyan"><Facebook size={24} /></a>
            <a href="#" className="text-verdigris hover:text-fluorescent-cyan"><Instagram size={24} /></a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;