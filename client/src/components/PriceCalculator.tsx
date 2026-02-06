import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, Info } from "lucide-react";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

export default function PriceCalculator() {
  const [entries, setEntries] = useState<number | "">(100);
  const [price, setPrice] = useState<number>(11000);
  const [isStartupPlan, setIsStartupPlan] = useState<boolean>(true);

  useEffect(() => {
    calculatePrice();
  }, [entries, isStartupPlan]);

  const calculatePrice = () => {
    let calculatedPrice = 0;
    const numEntries = entries === "" ? 0 : entries;

    if (isStartupPlan) {
      // 創業応援プラン: 150仕訳以内なら一律11,000円
      // ※150仕訳を超える場合は法人通常プランへの切り替えを促すUIにするか、
      // ここではシミュレーションとして通常プランの計算を適用するなどの処理が必要ですが、
      // 今回は「創業応援プランは150仕訳まで」という前提で、それを超えたら通常プランのロジックで計算しつつ警告を出す形にします。
      if (numEntries <= 150) {
        calculatedPrice = 11000;
      } else {
        // 150超えたら自動的に通常プラン計算（UIで注釈出す）
        calculatedPrice = calculateNormalPlan(numEntries);
      }
    } else {
      // 法人通常プラン
      calculatedPrice = calculateNormalPlan(numEntries);
    }
    
    setPrice(calculatedPrice);
  };

  const calculateNormalPlan = (numEntries: number) => {
    if (numEntries <= 150) return 16500;
    if (numEntries <= 200) return 22000;
    if (numEntries <= 300) return 27500;
    
    // 300超える場合: 50仕訳ごとに5,500円加算
    // ベース27,500円 (300仕訳) + 追加分
    const additionalEntries = numEntries - 300;
    const additionalBlocks = Math.ceil(additionalEntries / 50);
    return 27500 + (additionalBlocks * 5500);
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
            
            {/* プラン選択スイッチ */}
            <div className="flex flex-col items-center mb-12">
              <div className="flex items-center space-x-4 bg-gray-100 p-2 rounded-full">
                <button
                  onClick={() => setIsStartupPlan(true)}
                  className={`px-6 py-3 rounded-full text-sm font-bold transition-all ${
                    isStartupPlan 
                      ? "bg-white text-green-700 shadow-sm" 
                      : "text-gray-500 hover:text-gray-900"
                  }`}
                >
                  創業応援プラン
                </button>
                <button
                  onClick={() => setIsStartupPlan(false)}
                  className={`px-6 py-3 rounded-full text-sm font-bold transition-all ${
                    !isStartupPlan 
                      ? "bg-white text-green-700 shadow-sm" 
                      : "text-gray-500 hover:text-gray-900"
                  }`}
                >
                  法人通常プラン
                </button>
              </div>
              <p className="mt-4 text-sm text-gray-500">
                {isStartupPlan 
                  ? "※ 売上2,000万円以内 / 2期目までの法人様限定" 
                  : "※ 全ての法人様にご利用いただけます"}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-16 items-start">
              <div>
                <label className="block text-xl font-bold text-gray-900 mb-6">
                  月間の仕訳数（目安）
                </label>
                <div className="relative mb-4">
                  <input
                    type="number"
                    value={entries}
                    onChange={(e) => {
                      const val = e.target.value;
                      if (val === "") {
                        setEntries("");
                      } else {
                        const num = parseInt(val, 10);
                        if (!isNaN(num) && num >= 0) {
                          setEntries(num);
                        }
                      }
                    }}
                    className="w-full text-4xl font-bold p-6 border-2 border-gray-200 rounded-2xl focus:border-green-600 focus:ring-0 transition-all outline-none text-gray-900"
                    min="0"
                    step="10"
                  />
                  <span className="absolute right-8 top-1/2 -translate-y-1/2 text-gray-400 text-xl font-bold">
                    件 / 月
                  </span>
                </div>
                <p className="text-gray-500 mb-8 text-sm">
                  ※ 領収書1枚 ≒ 1仕訳、通帳1行 ≒ 1仕訳が目安です
                </p>
                
                {isStartupPlan && entries !== "" && entries > 150 && (
                  <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4 mb-8 flex gap-3 items-start">
                    <Info className="w-5 h-5 text-yellow-600 shrink-0 mt-0.5" />
                    <p className="text-sm text-yellow-800">
                      創業応援プランの上限（150仕訳）を超えています。法人通常プランの料金が適用されます。
                    </p>
                  </div>
                )}
                
                <div className="space-y-4 border-t border-gray-100 pt-8">
                  <h4 className="font-bold text-gray-900 mb-4">その他の費用</h4>
                  <div className="flex justify-between items-center text-gray-700">
                    <span className="text-base">初期登録設定費用（初年度のみ）</span>
                    <span className="font-bold">11,000円</span>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-3xl p-10 text-center border border-gray-100 sticky top-8">
                <p className="text-gray-500 font-medium mb-4 uppercase tracking-wider text-sm">Estimated Monthly Price</p>
                <div className="text-6xl font-bold text-gray-900 mb-2 tracking-tight">
                  {price.toLocaleString()}
                  <span className="text-2xl text-gray-400 font-medium ml-2">円</span>
                </div>
                <p className="text-sm text-gray-400 mb-10">
                  （税込 {Math.floor(price * 1.1).toLocaleString()}円 / 月）
                </p>
                
                <div className="space-y-3 mb-10 text-left bg-white p-6 rounded-xl border border-gray-100">
                  <div className="flex items-center gap-3 text-sm text-gray-600">
                    <CheckCircle2 className="w-4 h-4 text-green-600 shrink-0" />
                    <span>記帳代行手数料</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-gray-600">
                    <CheckCircle2 className="w-4 h-4 text-green-600 shrink-0" />
                    <span>月次試算表作成</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-gray-600">
                    <CheckCircle2 className="w-4 h-4 text-green-600 shrink-0" />
                    <span>税理士連携サポート</span>
                  </div>
                </div>
                
                <Button
                  className="w-full bg-gray-900 hover:bg-gray-800 text-white text-lg font-bold py-6 rounded-xl shadow-lg transition-all transform hover:-translate-y-1"
                  asChild
                >
                  <a href="https://lin.ee/IpBr6iu" target="_blank" rel="noopener noreferrer">
                    このプランで申し込む
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
          
          <div className="bg-green-50 p-6 text-center border-t border-green-100">
            <p className="text-green-800 font-bold text-sm md:text-base">
              💡 創業応援プランなら、設立2期目まで月額11,000円でお得にスタート！
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
