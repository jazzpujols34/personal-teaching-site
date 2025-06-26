// src/components/home/FaqSection.tsx
export default function FaqSection() {
  return (
    <section id="faq" className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-6 max-w-3xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-teal-600">常見問題</h2>
          <p className="mt-4 text-gray-600">還有疑問嗎？也許答案就在這裡。</p>
        </div>
        <div className="space-y-4">
          <details className="group bg-gray-50 p-6 rounded-lg">
            <summary className="flex justify-between items-center font-semibold text-lg cursor-pointer text-gray-800">
              上課需要準備什麼？
              <svg className="w-5 h-5 text-gray-500 transition-transform transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
            </summary>
            <p className="mt-4 text-gray-600 leading-relaxed">
              你只需要一台能上網的電腦或平板、穩定的網路，以及一顆開放學習的心！我會使用 Google Meet 或 Zoom，並在課前將會議連結寄給你。
            </p>
          </details>
          <details className="group bg-gray-50 p-6 rounded-lg">
            <summary className="flex justify-between items-center font-semibold text-lg cursor-pointer text-gray-800">
              如果臨時有事，可以請假或調課嗎？
              <svg className="w-5 h-5 text-gray-500 transition-transform transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
            </summary>
            <p className="mt-4 text-gray-600 leading-relaxed">
              當然可以。請盡量在課程開始前 24 小時透過 Email 通知我，我們就可以免費為你重新安排一次課程時間。
            </p>
          </details>
          <details className="group bg-gray-50 p-6 rounded-lg">
            <summary className="flex justify-between items-center font-semibold text-lg cursor-pointer text-gray-800">
              我需要自己買教材嗎？
              <svg className="w-5 h-5 text-gray-500 transition-transform transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
            </summary>
            <p className="mt-4 text-gray-600 leading-relaxed">
              完全不用！所有教材都由我根據你的程度和學習目標量身打造，並以 PDF 電子檔形式在課後提供給你，方便你複習。
            </p>
          </details>
          <details className="group bg-gray-50 p-6 rounded-lg">
            <summary className="flex justify-between items-center font-semibold text-lg cursor-pointer text-gray-800">
              我的英文基礎很差，適合上課嗎？
              <svg className="w-5 h-5 text-gray-500 transition-transform transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
            </summary>
            <p className="mt-4 text-gray-600 leading-relaxed">
              絕對適合！我的課程完全是客製化的，無論你是初學者還是希望精進的高階學習者，我都能設計出最適合你的課程。別擔心，我們會從最適合你的地方開始！
            </p>
          </details>
        </div>
      </div>
    </section>
  );
}