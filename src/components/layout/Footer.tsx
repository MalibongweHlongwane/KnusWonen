'use client';

import { Phone, Mail, MapPin, Clock, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

export default function Footer() {
  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Instagram, href: '#', label: 'Instagram' }
  ];

  return (
    <footer className="bg-gray-900 text-white" style={{
      width: '1512px',
      height: '236px',
      margin: '0 auto'
    }}>
      <div className="w-full h-full px-4 sm:px-6 lg:px-8 py-8 flex items-center">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 w-full">
          {/* Contact Phone & Email */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold mb-4">Bel of mail ons</h4>
            
            <div className="flex items-center space-x-3">
              <div className="flex-shrink-0 w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <Phone size={18} />
              </div>
              <div>
                <a 
                  href="tel:0104568789" 
                  className="text-white hover:text-blue-400 transition-colors duration-200 font-medium"
                >
                  010 - 456 8789
                </a>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <div className="flex-shrink-0 w-10 h-10 bg-purple-600 rounded-lg flex items-center justify-center">
                <Mail size={18} />
              </div>
              <div>
                <a 
                  href="mailto:info@knuswonen.nl" 
                  className="text-white hover:text-purple-400 transition-colors duration-200 font-medium"
                >
                  info@knuswonen.nl
                </a>
              </div>
            </div>
          </div>

          {/* Opening Hours */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold mb-4">Openingstijden</h4>
            
            <div className="flex items-start space-x-3">
              <div className="flex-shrink-0 w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center mt-1">
                <Clock size={18} />
              </div>
              <div className="space-y-2">
                <p className="text-gray-300">
                  <span className="font-medium text-white">Maandag t/m donderdag</span>
                  <br />
                  van 9:00 - 17:00
                </p>
                <p className="text-gray-300">
                  <span className="font-medium text-white">Vrijdag</span>
                  <br />
                  van 9:00 tot 15:00 uur
                </p>
              </div>
            </div>
          </div>

          {/* Visit Us */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold mb-4">Kom langs op afspraak</h4>
            
            <div className="flex items-start space-x-3">
              <div className="flex-shrink-0 w-10 h-10 bg-orange-600 rounded-lg flex items-center justify-center mt-1">
                <MapPin size={18} />
              </div>
              <div>
                <address className="not-italic text-gray-300 leading-relaxed">
                  <span className="font-medium text-white">Energieweg 123</span>
                  <br />
                  1234 AB Duurzaam
                  <br />
                  Nederland
                </address>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold mb-4">Volg ons op onze sociale kanalen</h4>
            
            <div className="flex flex-wrap gap-3">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="w-12 h-12 bg-gray-800 hover:bg-gradient-to-br hover:from-blue-600 hover:to-purple-600 rounded-lg flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:shadow-lg"
                  >
                    <IconComponent size={20} />
                  </a>
                );
              })}
            </div>

            {/* Additional Social Info */}
            <p className="text-gray-400 text-sm leading-relaxed mt-4">
              Blijf op de hoogte van de nieuwste ontwikkelingen en projecten via onze sociale media kanalen.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
