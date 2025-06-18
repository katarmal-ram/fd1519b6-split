
import React from 'react';
import { MapPin, Phone, Mail, Clock, Facebook, Linkedin, Twitter, Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';

interface FooterProps {
  config: any;
}

const socialIcons = {
  facebook: Facebook,
  linkedin: Linkedin,
  twitter: Twitter,
  instagram: Instagram,
};

const Footer: React.FC<FooterProps> = ({ config }) => {
  if (!config) return null;

  const { company, contact, footer } = config;

  // Default navigation with defensive rendering
  const defaultNavigation = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Products", href: "/products" },
    { label: "Contact", href: "/contact" }
  ];
  
  const navigationLinks = Array.isArray(footer?.navigation) 
    ? footer.navigation.filter(link => link?.label && link?.href)
    : defaultNavigation;

  // Filter and validate social links
  const socialLinks = Array.isArray(footer?.social) 
    ? footer.social.filter(social => 
        social?.platform && 
        social?.url && 
        social?.icon && 
        socialIcons[social.icon as keyof typeof socialIcons]
      )
    : [];

  // Hardcoded branding
  const brandingConfig = {
    text: "Made with ❤️ by",
    company: "Ferralabs",
    url: "https://ferralabs.in"
  };

  // Get timing information with defensive checks
  const timingInfo = Array.isArray(contact?.timing) 
    ? contact.timing.filter(time => time?.label && time?.hours)
    : [{ label: "Mon - Sat", hours: "9:00 AM - 6:00 PM" }];

  return (
    <footer id="contact" className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      
      <div className="container mx-auto px-4 py-16 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            {company && (
              <>
                <div className="flex items-center space-x-2 mb-6">
                  {company.logo && (
                    <div className="relative">
                      <img src={company.logo} alt={company.name || "Company"} className="w-10 h-10" />
                      <div className="absolute inset-0 bg-white rounded-full opacity-20" />
                    </div>
                  )}
                  <div>
                    {company.name && (
                      <h3 className="text-xl font-bold">{company.name}</h3>
                    )}
                    {company.tagline && (
                      <p className="text-blue-200 text-sm">{company.tagline}</p>
                    )}
                  </div>
                </div>
                {company.description && (
                  <p className="text-blue-100 mb-6 leading-relaxed">
                    {company.description}
                  </p>
                )}
              </>
            )}
            
            {socialLinks.length > 0 && (
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => {
                  const IconComponent = socialIcons[social.icon as keyof typeof socialIcons];
                  return (
                    <a
                      key={index}
                      href={social.url}
                      className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-500 transition-all duration-300 hover:scale-110 hover:shadow-lg"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <IconComponent className="w-5 h-5" />
                    </a>
                  );
                })}
              </div>
            )}
          </div>

          {/* Quick Links */}
          {navigationLinks.length > 0 && (
            <div>
              <h4 className="text-lg font-semibold mb-6 text-blue-200">Quick Links</h4>
              <ul className="space-y-3">
                {navigationLinks.map((link: any, index: number) => (
                  <li key={index}>
                    <Link 
                      to={link.href} 
                      className="text-blue-100 hover:text-white transition-colors duration-200 hover:translate-x-1 transform inline-block"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Contact Info */}
          {contact && (
            <div>
              <h4 className="text-lg font-semibold mb-6 text-blue-200">Contact Information</h4>
              <div className="space-y-4">
                {contact.address && (
                  <div className="flex items-start space-x-3 group">
                    <MapPin className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0 group-hover:text-blue-300 transition-colors" />
                    <span className="text-blue-100 text-sm leading-relaxed">{contact.address}</span>
                  </div>
                )}
                {contact.phone && (
                  <div className="flex items-center space-x-3 group">
                    <Phone className="w-5 h-5 text-blue-400 flex-shrink-0 group-hover:text-blue-300 transition-colors" />
                    <span className="text-blue-100">{contact.phone}</span>
                  </div>
                )}
                {contact.email && (
                  <div className="flex items-center space-x-3 group">
                    <Mail className="w-5 h-5 text-blue-400 flex-shrink-0 group-hover:text-blue-300 transition-colors" />
                    <span className="text-blue-100">{contact.email}</span>
                  </div>
                )}
                {timingInfo.map((time, index) => (
                  <div key={index} className="flex items-center space-x-3 group">
                    <Clock className="w-5 h-5 text-blue-400 flex-shrink-0 group-hover:text-blue-300 transition-colors" />
                    <span className="text-blue-100">{time.label}: {time.hours}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="border-t border-blue-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-blue-200 mb-4 md:mb-0">
            © 2024 {company?.name || "Company"}. All rights reserved.
          </p>
          <div className="text-blue-200 text-sm">
            {brandingConfig.text}{' '}
            <a 
              href={brandingConfig.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 transition-colors font-medium"
            >
              {brandingConfig.company}
            </a>
          </div>
        </div>
      </div>

      {/* Custom styles for background pattern */}
      <style>{`
        .bg-grid-pattern {
          background-image: radial-gradient(circle at 1px 1px, rgba(255, 255, 255, 0.15) 1px, transparent 0);
          background-size: 20px 20px;
        }
      `}</style>
    </footer>
  );
};

export default Footer;
