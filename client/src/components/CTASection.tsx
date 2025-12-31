import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function CTASection() {
  const scrollToCalculator = () => {
    const element = document.getElementById("calculator");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="cta" className="py-32 bg-gray-900 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 tracking-tight">
          記帳業務から解放され、<br className="hidden md:block" />
          本業に集中できる環境を。
        </h2>
        <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
          まずは無料の料金シミュレーションから始めましょう。<br />
          最短3営業日で開始可能です。
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button 
            size="lg" 
            className="bg-green-600 hover:bg-green-500 text-white text-lg px-10 py-8 rounded-xl font-bold shadow-lg transition-all transform hover:scale-105"
            onClick={scrollToCalculator}
          >
            料金を確認して申し込む
            <ArrowRight className="ml-2 h-6 w-6" />
          </Button>
        </div>
      </div>
    </section>
  );
}
