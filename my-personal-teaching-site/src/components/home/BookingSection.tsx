// src/components/home/BookingSection.tsx
export default function BookingSection() {
  return (
    <section id="booking" className="py-20 md:py-28 bg-gradient-to-br from-cyan-50 to-teal-100">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold text-teal-600">準備好開始你的英文學習之旅了嗎？</h2>
          <p className="mt-4 text-gray-600 text-lg">選擇下方你方便的時間，預約一堂 30 分鐘的免費諮詢。讓我們聊聊你的目標，並規劃專屬於你的學習藍圖！</p>
        </div>

        {/* Calendly 嵌入工具放置區 */}
        <div className="w-full max-w-4xl mx-auto mt-12 bg-white rounded-lg shadow-2xl p-2 min-h-[700px]">
          {/*
            這裡是嵌入 Calendly 或其他預約工具的地方。
            例如 Calendly 會提供一段像這樣的程式碼讓你貼上：
            <div className="calendly-inline-widget" data-url="https://calendly.com/your-username" style={{minWidth:'320px', height:'630px'}}></div>
            <script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js" async></script>
            注意：在 Next.js 中處理外部 script 需要使用 <Script> 組件。
          */}
          <div className="w-full h-full flex items-center justify-center bg-gray-50 rounded-md">
            <p className="text-gray-500 text-center p-8">
              [ 這裡是 Calendly 預約日曆的嵌入位置 ]<br />
              <span className="text-sm">你可以到 Calendly.com 註冊免費帳號，<br />並將嵌入碼貼到此處。</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}