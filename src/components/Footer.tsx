import React from 'react';
import { Facebook, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-oxford-blue text-white py-10">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Top Notch Studio</h3>
            <p>Unlock your full potential and transform your life with our state-of-the-art facilities and expert trainers.</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-fluorescent-cyan">Home</a></li>
              <li><a href="#" className="hover:text-fluorescent-cyan">Classes</a></li>
              <li><a href="#" className="hover:text-fluorescent-cyan">Membership</a></li>
              <li><a href="#" className="hover:text-fluorescent-cyan">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-fluorescent-cyan"><Facebook /></a>
              <a href="#" className="hover:text-fluorescent-cyan"><Instagram /></a>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p>&copy; 2024 Top Notch Studio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;