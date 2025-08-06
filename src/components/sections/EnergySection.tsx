import Image from 'next/image';

export default function EnergySection() {
  return (
    <section className="bg-white" style={{ width: '1512px', height: '459px', margin: '0 auto' }}>
      <div className="h-full flex">
        {/* Left side - Image */}
        <div className="w-1/2 relative">
          <Image
            src="/images/hero.png"
            alt="Aerial view of sustainable city"
            fill
            className="object-cover"
            priority
          />
        </div>
        
        {/* Right side - Content */}
        <div className="w-1/2 flex flex-col justify-center px-12 py-12 bg-white">
          <div className="max-w-lg mx-auto">
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6 leading-tight">
              Ontdekken onze woningen
            </h2>
            
            <p className="text-gray-700 mb-4 leading-relaxed text-base">
              Bij KnusWonen zetten we ons in om energiezuinige woningen 
              te ontwikkelen die bijdragen aan een duurzame toekomst. We investeren de 
              aanbesteden en we denken dat het energielabel weer de 
              energieprestaties van alle CO2-uitstoot van woning, uit de 
              energieverbruik in kwh per jaar.
            </p>
            
            <p className="text-gray-700 mb-8 leading-relaxed text-base">
              Wij creëren beter ons nieuwe energieverbesparende 
              maatregelen.
            </p>
            
            <button className="bg-blue-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-600 transition-colors text-sm">
              Meer info
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
