import { Link } from 'react-router-dom';
import { Rocket, Mail, Twitter, Linkedin, Github } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900/90 backdrop-blur-lg border-t border-gray-700 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Rocket className="h-7 w-7 text-startup-blue" />
              <span className="text-2xl font-bold text-white">StartupSpark</span>
            </div>
            <p className="text-gray-300 text-sm">
              AI-powered validation for your next big idea.
            </p>
            <div className="flex gap-4 pt-2">
              <a href="#" className="text-gray-400 hover:text-startup-blue transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-startup-blue transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-startup-blue transition-colors">
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-lg">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link to="/" className="text-gray-300 hover:text-startup-blue transition-colors">Home</Link></li>
              <li><Link to="/ai-validator" className="text-gray-300 hover:text-startup-blue transition-colors">Idea Validator</Link></li>
              <li><Link to="/how-it-works" className="text-gray-300 hover:text-startup-blue transition-colors">How It Works</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-lg">Contact Us</h3>
            <div className="flex items-center gap-3 text-gray-300 mb-4">
              <Mail className="h-5 w-5" />
              <span>hello@startupspark.com</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center gap-2 text-gray-400 text-sm mb-4 md:mb-0">
            <span>&copy; {new Date().getFullYear()} StartupSpark. All rights reserved.</span>
            <span className="hidden md:block">•</span>
            <span>Developed by </span>
            <a 
              href="https://xdev.onrender.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-startup-blue hover:underline font-bold text-base"
            >
              xDev Solutions
            </a>
          </div>
          <div className="flex gap-6">
            <Link to="/privacy" className="text-gray-400 hover:text-startup-blue transition-colors text-sm">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-gray-400 hover:text-startup-blue transition-colors text-sm">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
