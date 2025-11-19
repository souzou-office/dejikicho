import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

export default function PriceCalculator() {
  const [year, setYear] = useState<string>("1");
  const [transactions, setTransactions] = useState<string>("");
  const [showResult, setShowResult] = useState(false);
  const [monthlyPrice, setMonthlyPrice] = useState(0);
  const [basePrice, setBasePrice] = useState(0);
  const [additionalPrice, setAdditionalPrice] = useState(0);

  useEffect(() => {
    calculatePrice();
  }, [year, transactions]);

  const calculatePrice = () => {
    const transactionCount = parseInt(transactions) || 0;

    if (transactionCount === 0) {
      setShowResult(false);
      return;
    }

    const base = year === "1" ? 10000 : 15000;
    let additional = 0;

    // 仕訳数に応じた追加料金の計算
    if (transactionCount > 100) {
      additional = Math.floor((transactionCount - 100) / 50) * 2000;
    }

    const total = base + additional;

    setBasePrice(base);
    setAdditionalPrice(additional);
    setMonthlyPrice(total);
    setShowResult(true);
  };

  return (
    <section id="calculator" className="py-24 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-6">
          料金シミュレーター
        </h2>
        <p className="text-center text-xl text-muted-foreground mb-20 max-w-3xl mx-auto">
          予想される仕訳数を入力して、月額料金を確認しましょう
        </p>

        <div className="max-w-4xl mx-auto bg-white rounded-3xl p-12 shadow-2xl border-2 border-green-200">
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-10 text-gray-800">
            予想される仕訳数を入力してください
          </h3>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div>
              <label
                htmlFor="year"
                className="block mb-4 font-bold text-gray-700 text-lg"
              >
                事業年数
              </label>
              <select
                id="year"
                value={year}
                onChange={(e) => setYear(e.target.value)}
                className="w-full p-5 border-2 border-gray-300 rounded-xl text-xl focus:outline-none focus:border-green-600 transition-colors"
              >
                <option value="1">1年目</option>
                <option value="2">2年目以降</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="transactions"
                className="block mb-4 font-bold text-gray-700 text-lg"
              >
                月間予想仕訳数
              </label>
              <input
                type="number"
                id="transactions"
                value={transactions}
                onChange={(e) => setTransactions(e.target.value)}
                placeholder="例: 50"
                min="0"
                className="w-full p-5 border-2 border-gray-300 rounded-xl text-xl focus:outline-none focus:border-green-600 transition-colors"
              />
            </div>
          </div>

          {showResult && (
            <div className="bg-gradient-to-r from-green-600 to-green-700 text-white p-10 rounded-2xl mb-10 shadow-xl">
              <div className="text-center">
                <div className="text-5xl md:text-6xl font-bold mb-4">
                  ¥{monthlyPrice.toLocaleString()}
                </div>
                <div className="text-base md:text-lg opacity-90 leading-relaxed">
                  基本料金: ¥{basePrice.toLocaleString()}
                  <br />
                  {additionalPrice > 0 && (
                    <>
                      追加料金: ¥{additionalPrice.toLocaleString()}
                      <br />
                    </>
                  )}
                  月間仕訳数: {transactions}件
                </div>
              </div>
            </div>
          )}

          <div className="text-center">
            <Button
              size="lg"
              className="bg-red-600 hover:bg-red-700 text-white px-12 py-8 text-xl md:text-2xl rounded-full shadow-xl hover:shadow-2xl transition-all"
              onClick={() => {
                window.open("https://forms.google.com/記帳代行申込フォーム", "_blank");
              }}
            >
              この料金で申し込む
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
