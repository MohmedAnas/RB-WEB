import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 p-8 mt-12">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-white text-xl font-bold mb-4">R.B. Computers & Software Solution</h3>
          <p className="text-sm">Your Trusted Partner of Busy Accounting Software for Over 20 Years.</p>
          <p className="text-sm mt-2">&copy; {new Date().getFullYear()} All rights reserved.</p>
        </div>
        <div>
          <h3 className="text-white text-xl font-bold mb-4">Contact Info</h3>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center space-x-2">
              <Mail size={16} className="text-orange-400" />
              <span>rbcomphmt@yahoo.com</span>
            </li>
            <li className="flex items-center space-x-2">
              <Phone size={16} className="text-orange-400" />
              <span>+91 9374140307</span>
            </li>
            <li className="flex items-center space-x-2">
              <MapPin size={16} className="text-orange-400" />
              <span>4th floor, al-muqam complex, 36, circle, Sanklit Nagar, Vishala, Ahmedabad, Gujarat 380056</span>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-white text-xl font-bold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:text-orange-400 transition-colors">Products</Link></li>
            <li><Link to="/shop" className="hover:text-orange-400 transition-colors">Shop</Link></li>
            <li><Link to="/feedback" className="hover:text-orange-400 transition-colors">Feedback</Link></li>
            <li><Link to="/payment" className="hover:text-orange-400 transition-colors">Payment</Link></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
