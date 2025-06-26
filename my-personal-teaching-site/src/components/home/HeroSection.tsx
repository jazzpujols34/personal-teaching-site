// src/components/home/HeroSection.tsx
import Link from 'next/link';

export default function HeroSection() {
  return (
    <section id="hero" className="h-screen min-h-[600px] flex items-center bg-gradient-to-br from-cyan-50 to-teal-100">
      <div className="container mx-auto px-6 text-center">
        <h1 className="text-5xl md:text-7xl font-extrabold text-teal-800 leading-tight">
          自信開口說英文<br />從這裡開始
        </h1>
        <p className="mt-4 text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
          客製化一對一線上教學，專注於商務溝通與生活會話，為你打造流利英語力。
        </p>
        <Link href="/#booking" className="mt-8 inline-block bg-orange-500 text-white font-bold py-4 px-10 rounded-full text-lg hover:bg-orange-600 transition-transform transform hover:scale-105 shadow-lg">
          立即預約免費諮詢
        </Link>
      </div>
    </section>
  );
}