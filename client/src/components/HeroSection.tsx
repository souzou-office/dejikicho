import { Button } from "@/components/ui/button";

export default function HeroSection() {
  const scrollToCalculator = () => {
    const element = document.getElementById("calculator");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative bg-gradient-to-br from-green-500 to-green-600 text-white py-20 md:py-32 overflow-hidden">
      {/* 背景装飾 */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-48 h-48 bg-white rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-white rounded-full blur-2xl"></div>
      </div>

      <div className="container relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div className="text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            完全デジタル記帳代行
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-green-50">
            レシート写真送信・MFクラウド専門・効率重視
          </p>
          
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 mb-12">
            <div className="bg-red-500 text-white px-6 py-3 rounded-full text-lg font-semibold shadow-lg">
              月額1万円〜・100%外注・司法書士法人運営
            </div>
          </div>

            <Button
              size="lg"
              className="bg-red-500 hover:bg-red-600 text-white text-lg px-8 py-6 h-auto rounded-full shadow-xl hover:shadow-2xl transition-all"
              onClick={scrollToCalculator}
            >
              料金を確認して申し込む
            </Button>
          </div>
          
          <div className="hidden md:block">
            <img
              src="/hero-simple.png"
              alt="記帳代行サービスのイラスト"
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
