'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Mail, ArrowRight, Check, Star, Users, Newspaper } from 'lucide-react';

export default function NewsletterSection() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      // Here you would typically send the email to your backend
      setTimeout(() => {
        setIsSubmitted(false);
        setEmail('');
      }, 3000);
    }
  };

  return (
    <section className="relative overflow-hidden" style={{
      width: '1512px',
      height: '507.22px',
      margin: '0 auto'
    }}>
      {/* Gradient Background */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(135deg, #ec4899 0%, #ef4444 100%)'
        }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-600/90 via-red-500/80 to-purple-600/90" />

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full blur-xl" />
        <div className="absolute top-32 right-20 w-24 h-24 bg-yellow-300 rounded-full blur-lg" />
        <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-white rounded-full blur-2xl" />
        <div className="absolute bottom-32 right-10 w-28 h-28 bg-orange-300 rounded-full blur-xl" />
      </div>

      <div className="relative z-10 w-full h-full px-4 sm:px-6 lg:px-8 flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center w-full">
          {/* Content Side */}
          <div className="text-white space-y-6">
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium border border-white/30">
              <Mail size={16} />
              <span>Nieuwsbrief</span>
            </div>

            {/* Headline */}
            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight">
              Schrijf je in voor onze{' '}
              <span className="text-yellow-300">nieuwsbrief</span>
            </h2>

            {/* Description */}
            <div className="space-y-4 text-lg leading-relaxed text-white/90">
              <p>
                Wil je op de hoogte blijven van het laatste nieuws over energiezuinige 
                woningen, tips voor duurzaam wonen en nieuwe projecten van KnusWonen? 
                Laat dan je e-mailadres achter en ontvang maandelijks onze nieuwsbrief 
                vol met interessante informatie.
              </p>
              
              <p>
                Exclusieve aanbiedingen en updates over onze projecten rechtstreeks 
                in je inbox. Schrijf je vandaag nog in en blijf verbonden met KnusWonen!
              </p>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="flex items-center space-x-3">
                <div className="flex-shrink-0 w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                  <Newspaper size={16} />
                </div>
                <span className="text-white/90 font-medium">Maandelijkse updates</span>
              </div>

              <div className="flex items-center space-x-3">
                <div className="flex-shrink-0 w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                  <Star size={16} />
                </div>
                <span className="text-white/90 font-medium">Exclusieve content</span>
              </div>

              <div className="flex items-center space-x-3">
                <div className="flex-shrink-0 w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                  <Users size={16} />
                </div>
                <span className="text-white/90 font-medium">Community tips</span>
              </div>

              <div className="flex items-center space-x-3">
                <div className="flex-shrink-0 w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                  <Check size={16} />
                </div>
                <span className="text-white/90 font-medium">Geen spam</span>
              </div>
            </div>

            {/* Newsletter Form */}
            <div className="pt-6">
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="flex flex-col sm:flex-row gap-4">
                    <div className="flex-1">
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Voer je e-mailadres in"
                        className="w-full px-6 py-4 rounded-xl bg-white/20 backdrop-blur-sm border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-white/50"
                        required
                      />
                    </div>
                    <button
                      type="submit"
                      className="bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-gray-900 font-semibold px-8 py-4 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl whitespace-nowrap"
                    >
                      <div className="flex items-center space-x-2">
                        <span>Schrijf in nu</span>
                        <ArrowRight size={20} />
                      </div>
                    </button>
                  </div>
                  
                  <p className="text-white/70 text-sm">
                    Door je aan te melden ga je akkoord met onze{' '}
                    <a href="#" className="underline hover:text-white transition-colors">
                      privacyvoorwaarden
                    </a>
                  </p>
                </form>
              ) : (
                <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6 border border-white/30">
                  <div className="flex items-center space-x-3">
                    <div className="flex-shrink-0 w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                      <Check size={20} className="text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">Bedankt voor je aanmelding!</h4>
                      <p className="text-white/80 text-sm">Je ontvangt binnenkort onze nieuwsbrief.</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Illustration Side */}
          <div className="flex items-center justify-center">
            <div className="relative">
              <div className="w-96 h-96 relative">
                <Image
                  src="/images/Schrijf.png"
                  alt="Newsletter illustration with colorful envelope and mail icons"
                  fill
                  className="object-contain"
                />
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-400 rounded-full animate-bounce" />
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-orange-400 rounded-full animate-pulse" />
              <div className="absolute top-1/2 -left-8 w-4 h-4 bg-pink-400 rounded-full animate-ping" />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" className="w-full h-12 lg:h-20 text-white fill-current">
          <path d="M0,64L48,69.3C96,75,192,85,288,85.3C384,85,480,75,576,64C672,53,768,43,864,48C960,53,1056,75,1152,80C1248,85,1344,75,1392,69.3L1440,64L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"></path>
        </svg>
      </div>
    </section>
  );
}
