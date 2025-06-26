// src/components/home/AboutSection.tsx

// 註：為了最佳化，Next.js 推薦使用 <Image> 組件來處理圖片。
// 但這需要你將圖片存放在 public 資料夾下，並提供寬高。
// 為了直接轉換，這裡暫時保留 <img> 標籤。
// import Image from 'next/image';

export default function AboutSection() {
  return (
    <section id="about" className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <div className="relative">
          <div className="bg-teal-200 rounded-full w-48 h-48 absolute -top-8 -left-8 z-0"></div>
          <img src="https://images.unsplash.com/photo-1544717297-fa95b6ee9643?q=80&w=1887" alt="Anna - 你的英語老師" className="relative rounded-lg shadow-xl z-10 w-full max-w-sm mx-auto" />
        </div>
        <div>
          <h2 className="text-4xl font-bold text-teal-600 mb-6">Hi, 我是 Anna</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            我相信學英文不該只是死背單字文法，而是要學會「用」英文。我的教學核心是幫助你建立信心，在真實情境中流暢表達。無論你是為了工作、旅行還是個人興趣，我都會為你量身打造最適合的學習路徑。
          </p>
          <ul className="space-y-4">
            <li className="flex items-start">
              <svg className="w-6 h-6 text-teal-500 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              <span><strong className="font-semibold text-gray-800">8 年以上</strong> 線上英語教學經驗</span>
            </li>
            <li className="flex items-start">
              <svg className="w-6 h-6 text-teal-500 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              <span><strong className="font-semibold text-gray-800">TESOL 國際英語教師</strong> 專業認證</span>
            </li>
            <li className="flex items-start">
              <svg className="w-6 h-6 text-teal-500 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              <span>專長：<strong className="font-semibold text-gray-800">商務英語、面試準備、生活會話</strong></span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}