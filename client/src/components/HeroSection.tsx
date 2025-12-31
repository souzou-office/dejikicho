import { Button } from "@/components/ui/button";

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
    <section className="relative bg-white min-h-[90vh] flex items-center overflow-hidden">
      <div className="container mx-auto px-4 py-20 md:py-32 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-16 md:mb-0 pr-0 md:pr-12">
          <div className="inline-block border border-green-200 bg-green-50 text-green-800 px-4 py-1 rounded-full text-sm font-medium mb-8 tracking-wide">
            月額1万円〜・100%外注・司法書士法人運営
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight mb-8 tracking-tight">
            完全デジタル<br />
            <span className="text-green-600">記帳代行</span>サービス
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-10 leading-relaxed max-w-lg">
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
          <div className="relative w-full max-w-lg">
            <div className="absolute top-10 right-10 w-64 h-64 bg-green-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50"></div>
            <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-gray-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50"></div>
            <img 
              src="/min-hero-v3.png"             alt="記帳代行サービスのイメージ" 
              className="relative z-10 w-full h-auto drop-shadow-sm"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
