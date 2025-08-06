'use client';

import Image from 'next/image';
import { ArrowRight, Calendar, FileText, Zap, Building } from 'lucide-react';

export default function NewsSection() {
  const newsItems = [
    {
      id: 1,
      date: '15 aug',
      title: 'Infopresentatie',
      description: 'Bekijk hier wanneer de volgende infopresentatie plaatsvindt.',
      image: '/images/latestNews1.png',
      icon: FileText,
      category: 'Event'
    },
    {
      id: 2,
      date: '12 aug',
      title: 'Energielabel bepaling - Wat doet KnusWonen?',
      description: 'Ontdek hoe wij zorgen voor energiezuinige woningen met de beste labels.',
      image: '/images/latestNews2.png',
      icon: Zap,
      category: 'Sustainability'
    },
    {
      id: 3,
      date: '10 aug',
      title: 'Duurzaam bouwen heeft v.v een eens zijn!',
      description: 'Lees hier waarom duurzaam bouwen belangrijk is voor de toekomst.',
      image: '/images/latestNews3.png',
      icon: Building,
      category: 'Innovation'
    }
  ];

  return (
    <section className="bg-white" style={{ 
      width: '1512px', 
      height: '572px',
      margin: '0 auto',
      padding: '40px 0'
    }}>
      <div className="w-full px-4 sm:px-6 lg:px-8 h-full">
        {/* Section Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
            Laatste{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              nieuws
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Blijf op de hoogte van de nieuwste ontwikkelingen in duurzaam wonen 
            en energiezuinige woningen
          </p>
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {newsItems.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <article 
                key={item.id}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden border border-gray-100 h-full"
                style={{
                  animationDelay: `${index * 150}ms`
                }}
              >
                {/* Image Container */}
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />

                  {/* Date Badge */}
                  <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-lg text-sm font-semibold shadow-lg">
                    <div className="flex items-center space-x-1">
                      <Calendar size={14} />
                      <span>{item.date}</span>
                    </div>
                  </div>

                  {/* Category Badge */}
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-gray-700 px-3 py-1 rounded-lg text-xs font-medium shadow-lg">
                    {item.category}
                  </div>

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Title */}
                  <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors duration-300">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 text-base leading-relaxed mb-4 line-clamp-3">
                    {item.description}
                  </p>

                  {/* Read More Link */}
                  <button className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-semibold text-sm group-hover:translate-x-1 transition-all duration-300">
                    <span>LEES MEER</span>
                    <ArrowRight size={16} />
                  </button>
                </div>

                {/* Bottom Border Accent */}
                <div className="h-1 bg-gradient-to-r from-blue-600 to-purple-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              </article>
            );
          })}
        </div>

        {/* View All News Button */}
        <div className="text-center mt-6">
          <button className="inline-flex items-center space-x-2 bg-gray-100 hover:bg-gray-200 text-gray-900 font-semibold px-6 py-3 rounded-xl transition-all duration-300 transform hover:scale-105">
            <span>Bekijk al het nieuws</span>
            <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
}
