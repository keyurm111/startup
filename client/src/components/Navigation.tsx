import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';
import { Button } from './ui/button';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 py-4 px-4 md:px-6 backdrop-blur-md z-50">
      <div className="flex justify-between items-center">
        <Link to="/" className="z-10 hover:scale-105 transition-transform duration-200">
          <Logo />
        </Link>
        
        {/* Mobile menu button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white focus:outline-none hover:bg-white/10 p-2 rounded-md transition-colors duration-200"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        
        {/* Desktop navigation */}
        <div className="hidden md:flex items-center gap-8">
          <Link 
            to="/" 
            className="text-white hover:text-startup-blue transition-colors duration-200 relative group"
          >
            Home
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-startup-blue transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link 
            to="/ai-validator" 
            className="text-white hover:text-startup-blue transition-colors duration-200 relative group"
          >
            Idea Validator
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-startup-blue transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link 
            to="/how-it-works" 
            className="text-white hover:text-startup-blue transition-colors duration-200 relative group"
          >
            How It Works
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-startup-blue transition-all duration-300 group-hover:w-full"></span>
          </Link>
        </div>
        
        <div className="hidden md:block">
          <Button 
            className="bg-startup-blue hover:bg-startup-darkBlue text-white px-6 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200"
            onClick={() => window.location.href = '/ai-validator'}
          >
            Get Started
          </Button>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-0 left-0 right-0 bg-black/90 backdrop-blur-md p-6 pt-20 z-0 border-b border-gray-800 animate-fade-in">
          <div className="flex flex-col gap-6">
            <Link 
              to="/" 
              className="text-white hover:text-startup-blue transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/ai-validator" 
              className="text-white hover:text-startup-blue transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Idea Validator
            </Link>
            <Link 
              to="/how-it-works" 
              className="text-white hover:text-startup-blue transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              How It Works
            </Link>
            <Button 
              className="bg-startup-blue hover:bg-startup-darkBlue text-white w-full"
              onClick={() => window.location.href = '/ai-validator'}
            >
              Get Started
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
