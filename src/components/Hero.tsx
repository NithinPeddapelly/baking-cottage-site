'use client';

import Link from 'next/link';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-50 via-purple-50 to-amber-50 px-4 py-12 md:py-0 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse" />
      <div className="absolute bottom-0 right-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse" />
      <div className="absolute top-40 right-20 w-96 h-96 bg-amber-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Badge */}
        <div className="mb-6 md:mb-8 animate-fadeIn">
          <span className="inline-block px-4 py-2 bg-white/60 backdrop-blur-md rounded-full text-sm md:text-base font-medium text-purple-700 border border-purple-200/50 shadow-lg">
            ✨ Halal Certified • Homemade with Love
          </span>
        </div>

        {/* Headline */}
        <h1 className="mb-6 md:mb-8 text-4xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fadeIn">
          <span className="bg-gradient-to-r from-pink-600 via-purple-600 to-amber-600 bg-clip-text text-transparent">
            The Baking Cottage
          </span>
        </h1>

        {/* Tagline */}
        <p className="mb-8 md:mb-10 text-lg md:text-2xl text-gray-700 font-light max-w-2xl mx-auto animate-fadeIn">
          Luxurious Homemade Cakes & Treats from Edinburgh
        </p>

        {/* Description */}
        <p className="mb-10 md:mb-12 text-base md:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed animate-fadeIn">
          Crafted with premium ingredients, every cake is a masterpiece designed for your special moments. 
          <span className="block mt-3 font-semibold text-purple-700">Halal certified, made fresh to order.</span>
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center items-center animate-fadeIn">
          {/* WhatsApp Button */}
          <a
            href="https://wa.me/?text=Hi%20The%20Baking%20Cottage%2C%20I%20would%20like%20to%20order%20a%20cake"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative px-8 md:px-10 py-4 md:py-5 bg-gradient-to-r from-green-400 to-emerald-500 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 active:scale-95 flex items-center gap-2 w-full sm:w-auto justify-center"
          >
            <svg className="w-5 h-5 md:w-6 md:h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-4.946 1.266 9.857 9.857 0 00-3.254 2.693 9.864 9.864 0 001.526 15.913 9.868 9.868 0 005.97 1.948h.005a9.87 9.87 0 009.861-9.861 9.883 9.883 0 00-2.868-6.957 9.873 9.873 0 00-6.99-2.999z" />
            </svg>
            Order on WhatsApp
          </a>

          {/* Gallery Button */}
          <Link
            href="#gallery"
            className="group relative px-8 md:px-10 py-4 md:py-5 bg-white border-2 border-purple-600 text-purple-600 font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 active:scale-95 hover:bg-purple-50 w-full sm:w-auto flex items-center gap-2 justify-center"
          >
            <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            View Gallery
          </Link>
        </div>

        {/* Stats */}
        <div className="mt-16 md:mt-20 pt-12 border-t border-purple-200/30 grid grid-cols-2 md:grid-cols-3 gap-8">
          <div className="animate-fadeIn">
            <p className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">100%</p>
            <p className="text-sm md:text-base text-gray-600 mt-1">Halal Certified</p>
          </div>
          <div className="animate-fadeIn">
            <p className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-purple-600 to-amber-600 bg-clip-text text-transparent">Fresh</p>
            <p className="text-sm md:text-base text-gray-600 mt-1">Made to Order</p>
          </div>
          <div className="col-span-2 md:col-span-1 animate-fadeIn">
            <p className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-amber-600 to-pink-600 bg-clip-text text-transparent">Edinburgh</p>
            <p className="text-sm md:text-base text-gray-600 mt-1">Local & Proud</p>
          </div>
        </div>
      </div>

      {/* Tailwind CSS Animation */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.8s ease-out forwards;
        }
        .animate-fadeIn:nth-child(2) {
          animation-delay: 0.1s;
        }
        .animate-fadeIn:nth-child(3) {
          animation-delay: 0.2s;
        }
        .animate-fadeIn:nth-child(4) {
          animation-delay: 0.3s;
        }
        .animate-fadeIn:nth-child(5) {
          animation-delay: 0.4s;
        }
        .animate-fadeIn:nth-child(6) {
          animation-delay: 0.5s;
        }
      `}</style>
    </section>
  );
}
