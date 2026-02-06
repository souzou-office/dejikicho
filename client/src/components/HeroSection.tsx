import { Button } from "@/components/ui/button";
import { assetUrl } from "@/lib/assetUrl";

export default function HeroSection() {
  const scrollToCalculator = () => {
    const element = document.getElementById("calculator");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToFeatures = () => {
    const element = document.getElementById("features");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative bg-gradient-to-br from-green-50/50 via-white to-white min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Shapes */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-green-50/30 to-transparent skew-x-12 transform origin-top-right"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-green-100/20 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 py-20 md:py-32 flex flex-col md:flex-row items-center relative z-10">
        <div className="md:w-1/2 mb-16 md:mb-0 pr-0 md:pr-12">
          <div className="inline-block border border-green-200 bg-white/80 backdrop-blur-sm text-green-800 px-6 py-2 rounded-full text-sm font-medium mb-5 tracking-wide shadow-sm">
            〜月額1万円から。司法書士運営の完全デジタル記帳代行〜
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-gray-900 leading-tight mb-5 tracking-tight">
            <span className="text-green-600">デジ</span>記帳
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed max-w-lg">
            レシートや領収書の写真を送るだけ。<br />
            面倒な記帳業務から解放され、本業に集中できる環境を。<br />
            MFクラウド専門・効率重視の新しい記帳代行です。
          </p>
          <div className="flex flex-col sm:flex-row gap-5">
            <Button 
              size="lg" 
              className="bg-gray-900 hover:bg-gray-800 text-white font-medium text-lg px-10 py-7 rounded-lg shadow-sm transition-all"
              onClick={scrollToCalculator}
            >
              料金を確認して申し込む
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="bg-transparent border border-gray-300 text-gray-700 hover:bg-gray-50 font-medium text-lg px-10 py-7 rounded-lg"
              onClick={scrollToFeatures}
            >
              詳しく見る
            </Button>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center md:justify-end">
          <div className="relative w-full max-w-2xl">
            {/* Enhanced Organic Shapes */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-green-200/30 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
            <div className="absolute bottom-0 left-10 w-96 h-96 bg-blue-100/30 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-1000"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] border border-green-100/50 rounded-full"></div>
            
            <img 
              src={assetUrl("/images/hero-final-v2.png")} 
              alt="記帳代行で未来へ。ビジネスの成長をサポートします。" 
              className="relative z-10 w-full h-auto drop-shadow-xl transform hover:scale-[1.02] transition-transform duration-500 rounded-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
