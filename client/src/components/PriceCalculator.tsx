import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function PriceCalculator() {
  const [entries, setEntries] = useState<number>(50);
  const [price, setPrice] = useState<number>(10000);

  useEffect(() => {
    calculatePrice();
  }, [entries]);

  const calculatePrice = () => {
    // 基本料金（100仕訳まで）
    let calculatedPrice = 10000;
    
    // 100仕訳を超える場合、50仕訳ごとに+5000円
    if (entries > 100) {
      const additionalBlocks = Math.ceil((entries - 100) / 50);
      calculatedPrice += additionalBlocks * 5000;
    }
    
    setPrice(calculatedPrice);
  };

  return (
    <section id="calculator" className="py-32 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <span className="text-green-600 font-medium tracking-wider uppercase text-sm">Pricing</span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-3 mb-6">料金シミュレーター</h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-xl">
            仕訳数に応じて最適なプランを自動計算します
          </p>
        </div>

        <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
          <div className="p-8 md:p-16">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <label className="block text-xl font-bold text-gray-900 mb-6">
                  月間の仕訳数（目安）
                </label>
                <div className="relative mb-4">
                  <input
                    type="number"
                    value={entries}
                    onChange={(e) => setEntries(Number(e.target.value))}
                    className="w-full text-4xl font-bold p-6 border-2 border-gray-200 rounded-2xl focus:border-green-600 focus:ring-0 transition-all outline-none text-gray-900"
                    min="0"
                    step="10"
                  />
                  <span className="absolute right-8 top-1/2 -translate-y-1/2 text-gray-400 text-xl font-bold">
                    件 / 月
                  </span>
                </div>
                <p className="text-gray-500 mb-10">
                  ※ 領収書1枚 ≒ 1仕訳、通帳1行 ≒ 1仕訳が目安です
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-4 text-gray-700">
                    <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center">
                      <CheckCircle2 className="w-4 h-4 text-green-600" />
                    </div>
                    <span className="text-lg font-medium">初期費用 0円</span>
                  </div>
                  <div className="flex items-center gap-4 text-gray-700">
                    <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center">
                      <CheckCircle2 className="w-4 h-4 text-green-600" />
                    </div>
                    <span className="text-lg font-medium">解約金 0円</span>
                  </div>
                  <div className="flex items-center gap-4 text-gray-700">
                    <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center">
                      <CheckCircle2 className="w-4 h-4 text-green-600" />
                    </div>
                    <span className="text-lg font-medium">月次レポート付き</span>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-3xl p-10 text-center border border-gray-100">
                <p className="text-gray-500 font-medium mb-4 uppercase tracking-wider text-sm">Estimated Price</p>
                <div className="text-7xl font-bold text-gray-900 mb-2 tracking-tight">
                  {price.toLocaleString()}
                  <span className="text-2xl text-gray-400 font-medium ml-2">円</span>
                </div>
                <p className="text-sm text-gray-400 mb-10">
                  （税込 {Math.floor(price * 1.1).toLocaleString()}円 / 月）
                </p>
                
                <Button 
                  className="w-full bg-gray-900 hover:bg-gray-800 text-white text-xl font-bold py-8 rounded-xl shadow-lg transition-all transform hover:-translate-y-1"
                >
                  この料金で申し込む
                  <ArrowRight className="ml-2 w-6 h-6" />
                </Button>
              </div>
            </div>
          </div>
          
          <div className="bg-green-50 p-6 text-center border-t border-green-100">
            <p className="text-green-800 font-bold">
              🎉 キャンペーン中：今なら初月無料でお試しいただけます！
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
