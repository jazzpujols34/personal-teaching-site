// src/components/Header.tsx
import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-white/80 backdrop-blur-sm sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-teal-600">Anna's English Lab</Link>
        <nav className="hidden md:flex space-x-8 items-center">
          <Link href="/#about" className="text-gray-600 hover:text-teal-600 transition-colors">自我介紹</Link>
          <Link href="/#articles" className="text-gray-600 hover:text-teal-600 transition-colors">教學分享</Link>
          <Link href="/#testimonials" className="text-gray-600 hover:text-teal-600 transition-colors">案例分享</Link>
          <Link href="/#pricing" className="text-gray-600 hover:text-teal-600 transition-colors">課程方案</Link>
        </nav>
        <div className="flex items-center space-x-4">
          <Link href="/login" className="text-gray-600 font-semibold hover:text-teal-600 transition-colors">登入</Link>
          <Link href="/signup" className="bg-orange-500 text-white font-bold py-2 px-6 rounded-full hover:bg-orange-600 transition-transform transform hover:scale-105">
            免費註冊
          </Link>
        </div>
      </div>
    </header>
  );
}