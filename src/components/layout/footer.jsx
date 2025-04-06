import {
  Briefcase,
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Twitter
} from 'lucide-react';
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Footer = () => {
  const year = new Date().getFullYear();
  const location = useLocation();

  const SafeLink = ({ to, children, className }) => {
    const routeExists = !['/employers', '/trainers', '/help', '/privacy', '/terms', '/about', '/cookies'].includes(to);

    if (routeExists) {
      return (
        <Link to={to} className={className}>
          {children}
        </Link>
      );
    }

    return (
      <a
        href="#"
        className={className}
        onClick={(e) => {
          e.preventDefault();
          console.log(`Route '${to}' doesn't exist yet`);
        }}
      >
        {children}
      </a>
    );
  };

  return (
    <footer className="bg-gray-100 text-gray-700 pt-12 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <SafeLink to="/" className="text-2xl font-bold text-jobify-primary flex items-center gap-1 mb-4">
              <Briefcase className="h-6 w-6" />
              <span>JobConnect</span>
            </SafeLink>
            <p className="mb-4 text-gray-600">
              Connecting talent with opportunity and skills with growth
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-500 hover:text-jobify-primary">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-jobify-primary">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-jobify-primary">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-jobify-primary">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <SafeLink to="/jobs" className="text-gray-600 hover:text-jobify-primary">Find Jobs</SafeLink>
              </li>
              <li>
                <SafeLink to="/courses" className="text-gray-600 hover:text-jobify-primary">Browse Courses</SafeLink>
              </li>
              <li>
                <SafeLink to="/employers" className="text-gray-600 hover:text-jobify-primary">For Employers</SafeLink>
              </li>
              <li>
                <SafeLink to="/trainers" className="text-gray-600 hover:text-jobify-primary">For Trainers</SafeLink>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <SafeLink to="/help" className="text-gray-600 hover:text-jobify-primary">Help Center</SafeLink>
              </li>
              <li>
                <SafeLink to="/privacy" className="text-gray-600 hover:text-jobify-primary">Privacy Policy</SafeLink>
              </li>
              <li>
                <SafeLink to="/terms" className="text-gray-600 hover:text-jobify-primary">Terms of Service</SafeLink>
              </li>
              <li>
                <SafeLink to="/about" className="text-gray-600 hover:text-jobify-primary">About Us</SafeLink>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 text-jobify-primary" />
                <span className="text-gray-600">123 Job Street, Career City, 10001</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-jobify-primary" />
                <span className="text-gray-600">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-jobify-primary" />
                <span className="text-gray-600">contact@jobconnect.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 text-sm mb-4 md:mb-0">
            © {year} JobConnect. All rights reserved.
          </p>
          <div className="flex space-x-4">
            <SafeLink to="/privacy" className="text-gray-600 hover:text-jobify-primary text-sm">Privacy</SafeLink>
            <SafeLink to="/terms" className="text-gray-600 hover:text-jobify-primary text-sm">Terms</SafeLink>
            <SafeLink to="/cookies" className="text-gray-600 hover:text-jobify-primary text-sm">Cookies</SafeLink>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
  