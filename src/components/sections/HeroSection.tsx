'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Home, Building, Handshake, Search } from 'lucide-react';

export default function HeroSection() {
  const [activeTab, setActiveTab] = useState(0);

  const searchTabs = [
    {
      id: 0,
      icon: Home,
      label: 'Koop/verkoop vrijstaand',
      description: 'Zoek naar vrijstaande woningen'
    },
    {
      id: 1,
      icon: Building,
      label: 'Huur kamers',
      description: 'Vind kamers om te huren'
    },
    {
      id: 2,
      icon: Handshake,
      label: 'Contact',
      description: 'Neem contact met ons op'
    }
  ];

  return (
    <section className="w-full" style={{ 
      width: '1512px', 
      height: '560px', 
      marginTop: '80px',
      margin: '80px auto 0 auto'
    }}>
      <div className="flex flex-col lg:flex-row w-full h-full">
      {/* Left Content */}
      <div className="flex-1 relative overflow-hidden">
        {/* Purple Gradient Background */}
        <div 
          className="absolute inset-0 bg-gradient-to-br from-purple-600 via-blue-600 to-indigo-700"
          style={{
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
          }}
        />
        
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/90 via-purple-600/80 to-indigo-700/90" />
        
        {/* Content */}
        <div className="relative z-10 flex items-center h-full px-6 lg:px-12 xl:px-16 py-12 lg:py-0">
          <div className="max-w-2xl">
            {/* Main Headline */}
            <h1 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-6 whitespace-nowrap">
              Woningen krimphalen is{' '}
              <span className="text-yellow-300">helpen!</span>
            </h1>

            {/* Search Container */}
            <div className="bg-white/90 backdrop-blur-lg rounded-2xl p-4 lg:p-6 border border-white/20 shadow-xl">
              {/* Horizontal Search Tabs */}
              <div className="flex flex-col lg:flex-row gap-2 mb-4">
                {searchTabs.map((tab) => {
                  const IconComponent = tab.icon;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`flex-1 flex items-center space-x-3 p-3 rounded-xl transition-all duration-300 text-left ${
                        activeTab === tab.id
                          ? 'bg-blue-500 text-white shadow-md'
                          : 'bg-white border border-gray-200 hover:bg-gray-50 text-gray-700'
                      }`}
                    >
                      <div className={`flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-lg ${
                        activeTab === tab.id
                          ? 'bg-white/20'
                          : 'bg-gray-100'
                      }`}>
                        <IconComponent size={16} className={activeTab === tab.id ? 'text-white' : 'text-gray-600'} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className={`font-semibold text-sm leading-tight ${
                          activeTab === tab.id ? 'text-white' : 'text-gray-900'
                        }`}>
                          {tab.label}
                        </div>
                        <div className={`text-xs leading-relaxed ${
                          activeTab === tab.id ? 'text-white/90' : 'text-gray-600'
                        }`}>
                          {tab.description}
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Search Button */}
              <button className="w-full mt-6 bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-gray-900 font-bold py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-[1.02] shadow-lg text-white">
                <div className="flex items-center justify-center space-x-3">
                  <Search size={20} className="text-gray-900" />
                  <span className="text-lg font-semibold text-gray-900">Zoeken</span>
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-10 right-10 w-32 h-32 bg-white/5 rounded-full blur-xl" />
        <div className="absolute bottom-20 left-10 w-24 h-24 bg-yellow-400/20 rounded-full blur-lg" />
      </div>

      {/* Right Image */}
      <div className="flex-1 relative" style={{ minHeight: '560px' }}>
        <div className="relative w-full h-full">
          <Image
            src="/images/heroo.png"
            alt="Happy family in their sustainable home"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Image Overlay for better integration */}
        <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-purple-600/10" />
      </div>
      </div>
    </section>
  );
}
