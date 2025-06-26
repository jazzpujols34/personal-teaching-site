// src/components/home/TestimonialsSection.tsx
export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20 md:py-28 bg-teal-50">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-4xl font-bold text-teal-600">聽聽學員怎麼說</h2>
          <p className="mt-4 text-gray-600">真實的改變，看得見的成果。</p>
        </div>
        <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-xl shadow-lg transform transition-transform hover:-translate-y-2">
            <p className="text-gray-600 italic text-lg">"Anna 的課程讓我對英文面試不再恐懼。她非常有耐心地陪我模擬，修正我的用詞，最終我成功拿到了夢想外商的 Offer！"</p>
            <div className="mt-6 flex items-center">
              <img className="w-14 h-14 rounded-full mr-4" src="https://randomuser.me/api/portraits/men/32.jpg" alt="Alex C." />
              <div>
                <p className="font-bold text-teal-700">Alex C.</p>
                <p className="text-sm text-gray-500">軟體工程師，成功錄取外商</p>
              </div>
            </div>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-lg transform transition-transform hover:-translate-y-2">
            <p className="text-gray-600 italic text-lg">"上課氣氛很輕鬆，Anna 總能找到有趣的話題讓我練習口說。三個月後，我的多益成績從 650 進步到 880，口說也流利很多！"</p>
            <div className="mt-6 flex items-center">
              <img className="w-14 h-14 rounded-full mr-4" src="https://randomuser.me/api/portraits/women/44.jpg" alt="Emily L." />
              <div>
                <p className="font-bold text-teal-700">Emily L.</p>
                <p className="text-sm text-gray-500">行銷企劃，多益進步 230 分</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}