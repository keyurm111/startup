import { Link } from 'react-router-dom';
import { Rocket, Mail, Twitter, Linkedin, Github } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900/90 backdrop-blur-lg border-t border-gray-700 py-8 sm:py-12 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-6 sm:mb-8">
          {/* Brand Section */}
          <div className="space-y-3 sm:space-y-4">
            <div className="flex items-center gap-3">
              <Rocket className="h-6 w-6 sm:h-7 sm:w-7 text-startup-blue" />
              <span className="text-xl sm:text-2xl font-bold text-white">StartupSpark</span>
            </div>
            <p className="text-gray-300 text-xs sm:text-sm">
              AI-powered validation for your next big idea.
            </p>
            <div className="flex gap-3 sm:gap-4 pt-1 sm:pt-2">
              <a href="#" className="text-gray-400 hover:text-startup-blue transition-colors">
                <Twitter className="h-4 w-4 sm:h-5 sm:w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-startup-blue transition-colors">
                <Linkedin className="h-4 w-4 sm:h-5 sm:w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-startup-blue transition-colors">
                <Github className="h-4 w-4 sm:h-5 sm:w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-3 sm:mb-4 text-base sm:text-lg">Quick Links</h3>
            <ul className="space-y-2 sm:space-y-3">
              <li><Link to="/" className="text-gray-300 hover:text-startup-blue transition-colors text-sm">Home</Link></li>
              <li><Link to="/ai-validator" className="text-gray-300 hover:text-startup-blue transition-colors text-sm">Idea Validator</Link></li>
              <li><Link to="/how-it-works" className="text-gray-300 hover:text-startup-blue transition-colors text-sm">How It Works</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="sm:col-span-2 lg:col-span-1">
            <h3 className="text-white font-semibold mb-3 sm:mb-4 text-base sm:text-lg">Contact Us</h3>
            <div className="flex items-center gap-2 sm:gap-3 text-gray-300 mb-3 sm:mb-4">
              <Mail className="h-4 w-4 sm:h-5 sm:w-5" />
              <span className="text-sm">hello@startupspark.com</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 sm:pt-8 border-t border-gray-700 flex flex-col items-center sm:flex-row justify-between text-center sm:text-left">
          <div className="flex flex-col items-center text-center gap-1 sm:gap-2 text-gray-400 text-xs sm:text-sm mb-3 sm:mb-0 w-full">
            <div className="w-full text-center">&copy; {new Date().getFullYear()} StartupSpark. All rights reserved.</div>
            <div className="flex items-center justify-center gap-1 sm:gap-2 w-full">
              <span>Developed by </span>
              <a 
                href="https://xdev.onrender.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-startup-blue hover:underline font-bold text-base mb-1"
              >
                xDev Solutions
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
