// src/components/home/MethodSection.tsx
export default function MethodSection() {
  return (
    <section id="method" className="py-20 md:py-28 bg-teal-50">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-4xl font-bold text-teal-600">我的教學方法</h2>
          <p className="mt-4 text-gray-600">不只學英文，更要「會用」英文。我的課堂圍繞著三個核心。</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow">
            <div className="inline-block bg-cyan-100 text-cyan-600 p-4 rounded-full mb-4">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
            </div>
            <h3 className="font-bold text-xl text-teal-800 mb-2">情境式學習</h3>
            <p className="text-gray-600">模擬真實生活和工作場景，從點餐、會議到面試，讓你學到真正用得上的英文。</p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow">
            <div className="inline-block bg-orange-100 text-orange-500 p-4 rounded-full mb-4">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
            </div>
            <h3 className="font-bold text-xl text-teal-800 mb-2">興趣導向</h3>
            <p className="text-gray-600">課程內容會圍繞你喜歡的話題，聊影集、談科技、分享旅行，讓學習不再枯燥。</p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow">
            <div className="inline-block bg-teal-100 text-teal-600 p-4 rounded-full mb-4">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path></svg>
            </div>
            <h3 className="font-bold text-xl text-teal-800 mb-2">即時反饋</h3>
            <p className="text-gray-600">我會溫和地即時糾正你的發音和文法，並提供課後筆記，讓你清楚知道如何進步。</p>
          </div>
        </div>
      </div>
    </section>
  );
}