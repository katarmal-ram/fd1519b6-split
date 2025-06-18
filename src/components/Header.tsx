
import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link, useLocation } from 'react-router-dom';

interface HeaderProps {
  config: any;
}

const Header: React.FC<HeaderProps> = ({ config }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!config) return null;

  const { company, header } = config;
  const navLinks = header?.navigation || [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Products", href: "/products" },
    { label: "Contact", href: "/contact" }
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-lg border-b border-blue-100 shadow-lg shadow-blue-50' 
        : 'bg-white/90 backdrop-blur-sm'
    }`}>
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <img src={company.logo} alt={company.name} className="w-12 h-12 transition-transform group-hover:scale-105" />
              <div className="absolute inset-0 bg-blue-500 rounded-full opacity-0 group-hover:opacity-10 transition-opacity" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors">
                {company.name}
              </h1>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link: any, index: number) => (
              <Link
                key={index}
                to={link.href}
                className={`font-medium transition-all duration-200 relative group ${
                  location.pathname === link.href
                    ? 'text-blue-600'
                    : 'text-gray-700 hover:text-blue-600'
                }`}
              >
                {link.label}
                <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 transform origin-left transition-transform duration-200 ${
                  location.pathname === link.href ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                }`} />
              </Link>
            ))}
            <Link to="/contact">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-200 hover:shadow-blue-300 transition-all duration-200 hover:scale-105">
                Get Quote
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden p-2 rounded-lg hover:bg-blue-50 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-gray-800" />
            ) : (
              <Menu className="w-6 h-6 text-gray-800" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 py-4 border-t border-blue-100 bg-white/95 backdrop-blur-lg rounded-lg shadow-lg">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link: any, index: number) => (
                <Link
                  key={index}
                  to={link.href}
                  className={`font-medium transition-colors px-4 py-2 rounded-lg ${
                    location.pathname === link.href
                      ? 'text-blue-600 bg-blue-50'
                      : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Link to="/contact" className="px-4">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white w-full shadow-lg shadow-blue-200">
                  Get Quote
                </Button>
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
