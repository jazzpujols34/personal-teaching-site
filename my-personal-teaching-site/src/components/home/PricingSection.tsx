// src/components/home/PricingSection.tsx
import Link from 'next/link';

export default function PricingSection() {
  return (
    <section id="pricing" className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-4xl font-bold text-teal-600">選擇適合你的方案</h2>
          <p className="mt-4 text-gray-600">我們從一堂免費諮詢開始，完全沒有壓力。</p>
        </div>
        <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="border border-gray-200 rounded-lg p-8 text-center flex flex-col">
            <h3 className="font-bold text-2xl mb-4">單堂體驗課</h3>
            <p className="text-5xl font-bold text-teal-600 mb-4">$30</p>
            <ul className="space-y-3 text-gray-600 mb-8 flex-grow">
              <li>50 分鐘 一對一</li>
              <li>程度分析與目標設定</li>
              <li>體驗我的教學風格</li>
            </ul>
            <Link href="/#booking" className="bg-gray-200 text-gray-800 font-bold py-3 px-6 rounded-full hover:bg-gray-300 transition-colors">開始諮詢</Link>
          </div>
          <div className="border-2 border-orange-500 rounded-lg p-8 text-center flex flex-col shadow-xl relative">
            <span className="absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 bg-orange-500 text-white text-sm font-bold px-4 py-1 rounded-full">最受歡迎</span>
            <h3 className="font-bold text-2xl mb-4">常規課程包</h3>
            <p className="text-5xl font-bold text-teal-600 mb-4">$280</p>
            <ul className="space-y-3 text-gray-600 mb-8 flex-grow">
              <li><strong className="text-teal-700">10 堂</strong> 50 分鐘正規課</li>
              <li>客製化電子教材</li>
              <li>每堂課後重點筆記</li>
              <li>Email 問題支援</li>
            </ul>
            <Link href="/#booking" className="bg-orange-500 text-white font-bold py-3 px-6 rounded-full hover:bg-orange-600 transition-transform transform hover:scale-105">立即加入</Link>
          </div>
          <div className="border border-gray-200 rounded-lg p-8 text-center flex flex-col">
            <h3 className="font-bold text-2xl mb-4">密集衝刺課程</h3>
            <p className="text-5xl font-bold text-teal-600 mb-4">$520</p>
            <ul className="space-y-3 text-gray-600 mb-8 flex-grow">
              <li><strong className="text-teal-700">20 堂</strong> 50 分鐘正規課</li>
              <li>包含常規包所有內容</li>
              <li><strong className="text-teal-700">額外 5 次</strong> 寫作批改</li>
            </ul>
            <Link href="/#booking" className="bg-gray-200 text-gray-800 font-bold py-3 px-6 rounded-full hover:bg-gray-300 transition-colors">開始諮詢</Link>
          </div>
        </div>
      </div>
    </section>
  );
}