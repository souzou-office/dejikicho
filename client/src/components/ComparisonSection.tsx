export default function ComparisonSection() {
  const comparisons = [
    {
      feature: "月額料金",
      us: "1万円〜",
      others1: "1.5万円〜",
      others2: "0.8万円〜",
    },
    {
      feature: "書類提出",
      us: "専用システム送信",
      others1: "郵送・持参",
      others2: "メール・郵送",
    },
    {
      feature: "会計ソフト",
      us: "MFクラウド専門",
      others1: "複数対応",
      others2: "複数対応",
    },
    {
      feature: "処理速度",
      us: "最速処理",
      others1: "1〜2週間",
      others2: "品質にバラつき",
    },
    {
      feature: "運営主体",
      us: "司法書士法人",
      others1: "一般企業",
      others2: "個人",
    },
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <span className="text-green-600 font-medium tracking-wider uppercase text-sm">Comparison</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3 mb-6">他社サービスとの比較</h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg">
            圧倒的なコストパフォーマンスと品質の両立を実現しました
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="p-6 text-left text-gray-500 font-medium min-w-[150px]">比較項目</th>
                    <th className="p-6 text-center bg-green-600 text-white font-bold text-lg min-w-[200px]">
                      当サービス
                    </th>
                    <th className="p-6 text-center text-gray-700 font-bold min-w-[200px]">
                      一般的な記帳代行
                    </th>
                    <th className="p-6 text-center text-gray-700 font-bold min-w-[200px]">
                      格安記帳代行
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {comparisons.map((row, index) => (
                    <tr key={index} className="border-t border-gray-100 hover:bg-gray-50 transition-colors">
                      <td className="p-6 font-bold text-gray-900">{row.feature}</td>
                      <td className="p-6 text-center bg-green-50 font-bold text-green-700 text-lg">
                        {row.us}
                      </td>
                      <td className="p-6 text-center text-gray-600">{row.others1}</td>
                      <td className="p-6 text-center text-gray-600">{row.others2}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <div className="inline-block bg-white border border-green-200 rounded-lg p-6 shadow-sm">
              <p className="text-green-700 font-bold text-lg">
                デジタル化 × 専門特化 × 効率化 = 高品質・低価格・迅速処理
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
