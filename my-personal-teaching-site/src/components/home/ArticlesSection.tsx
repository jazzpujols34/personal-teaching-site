// src/components/home/ArticlesSection.tsx
import Link from 'next/link';

export default function ArticlesSection() {
  return (
    <section id="articles" className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-4xl font-bold text-teal-600">教學分享</h2>
          <p className="mt-4 text-gray-600">閱讀我的教學心得與實用英文技巧，讓學習更有方向。</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg overflow-hidden shadow-lg border border-gray-200 group">
            <img className="w-full h-48 object-cover" src="https://images.unsplash.com/photo-1554224155-8d04421cd6e2?q=80&w=2072" alt="Article thumbnail" />
            <div className="p-6">
              <span className="inline-block bg-teal-100 text-teal-800 text-xs font-semibold px-2.5 py-0.5 rounded-full mb-2">商務英文</span>
              <h3 className="font-bold text-xl mb-2 text-gray-800">5 個讓你的英文 Email 更專業的秘訣</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">寫商業 Email 總是卡關？這篇文章分享了五個簡單實用的技巧，讓你的溝通更到位...</p>
              <Link href="/posts/professional-emails" className="font-semibold text-orange-500 hover:text-orange-600 transition-colors group-hover:underline">閱讀更多 →</Link>
            </div>
          </div>
          <div className="bg-white rounded-lg overflow-hidden shadow-lg border border-gray-200 group">
            <img className="w-full h-48 object-cover" src="https://images.unsplash.com/photo-1516321497487-e288fb19713f?q=80&w=2070" alt="Article thumbnail" />
            <div className="p-6">
              <span className="inline-block bg-orange-100 text-orange-800 text-xs font-semibold px-2.5 py-0.5 rounded-full mb-2">學習技巧</span>
              <h3 className="font-bold text-xl mb-2 text-gray-800">如何利用零碎時間有效背單字？</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">通勤、排隊的時間也能學英文！介紹三款我最推薦的單字 App 和使用方法，讓學習無所不在...</p>
              <Link href="/posts/vocabulary-apps" className="font-semibold text-orange-500 hover:text-orange-600 transition-colors group-hover:underline">閱讀更多 →</Link>
            </div>
          </div>
          <div className="bg-white rounded-lg overflow-hidden shadow-lg border border-gray-200 group">
            <img className="w-full h-48 object-cover" src="https://images.unsplash.com/photo-1455849318743-b2233052fcff?q=80&w=2070" alt="Article thumbnail" />
            <div className="p-6">
              <span className="inline-block bg-cyan-100 text-cyan-800 text-xs font-semibold px-2.5 py-0.5 rounded-full mb-2">生活會話</span>
              <h3 className="font-bold text-xl mb-2 text-gray-800">看 Netflix 學英文的正確姿勢</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">你真的「看懂」美劇了嗎？從選擇影片、開啟字幕到做筆記，教你如何將娛樂轉化為有效的學習...</p>
              <Link href="/posts/learning-with-netflix" className="font-semibold text-orange-500 hover:text-orange-600 transition-colors group-hover:underline">閱讀更多 →</Link>
            </div>
          </div>
        </div>
        <div className="text-center mt-12">
          <Link href="/blog" className="bg-teal-600 text-white font-bold py-3 px-8 rounded-full hover:bg-teal-700 transition-colors">查看所有文章</Link>
        </div>
      </div>
    </section>
  );
}