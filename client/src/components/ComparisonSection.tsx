export default function ComparisonSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          他社サービスとの比較
        </h2>
        <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
          当サービスの優位性を他社と比較してご確認ください
        </p>

        <div className="max-w-5xl mx-auto mb-12">
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-green-600 text-white">
                    <th className="py-5 px-4 text-center font-bold">サービス</th>
                    <th className="py-5 px-4 text-center font-bold">月額料金</th>
                    <th className="py-5 px-4 text-center font-bold">書類提出方法</th>
                    <th className="py-5 px-4 text-center font-bold">対応会計ソフト</th>
                    <th className="py-5 px-4 text-center font-bold">処理速度</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-green-50 font-bold text-green-700">
                    <td className="py-4 px-4 text-center border-b border-gray-200">
                      <strong>当サービス</strong>
                    </td>
                    <td className="py-4 px-4 text-center border-b border-gray-200">
                      <strong>1万円〜</strong>
                    </td>
                    <td className="py-4 px-4 text-center border-b border-gray-200">
                      <strong>専用システム送信</strong>
                    </td>
                    <td className="py-4 px-4 text-center border-b border-gray-200">
                      <strong>MFクラウド専門</strong>
                    </td>
                    <td className="py-4 px-4 text-center border-b border-gray-200">
                      <strong>最速処理</strong>
                    </td>
                  </tr>
                  <tr className="bg-white">
                    <td className="py-4 px-4 text-center border-b border-gray-200">
                      一般的な記帳代行
                    </td>
                    <td className="py-4 px-4 text-center border-b border-gray-200">
                      1.5万円〜
                    </td>
                    <td className="py-4 px-4 text-center border-b border-gray-200 text-red-600 font-bold">
                      郵送・持参
                    </td>
                    <td className="py-4 px-4 text-center border-b border-gray-200">
                      複数対応
                    </td>
                    <td className="py-4 px-4 text-center border-b border-gray-200">
                      1〜2週間
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="py-4 px-4 text-center border-b border-gray-200">
                      税理士事務所
                    </td>
                    <td className="py-4 px-4 text-center border-b border-gray-200">
                      2万円〜
                    </td>
                    <td className="py-4 px-4 text-center border-b border-gray-200 text-red-600 font-bold">
                      面談・郵送
                    </td>
                    <td className="py-4 px-4 text-center border-b border-gray-200">
                      複数対応
                    </td>
                    <td className="py-4 px-4 text-center border-b border-gray-200">
                      1〜2週間
                    </td>
                  </tr>
                  <tr className="bg-white">
                    <td className="py-4 px-4 text-center border-b border-gray-200">
                      フリーランス
                    </td>
                    <td className="py-4 px-4 text-center border-b border-gray-200">
                      0.8万円〜
                    </td>
                    <td className="py-4 px-4 text-center border-b border-gray-200">
                      メール・郵送
                    </td>
                    <td className="py-4 px-4 text-center border-b border-gray-200">
                      複数対応
                    </td>
                    <td className="py-4 px-4 text-center border-b border-gray-200 text-red-600 font-bold">
                      品質にバラつき
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto bg-green-50 border-l-4 border-green-600 rounded-lg p-6">
          <h4 className="text-green-700 font-bold text-xl mb-3 text-center">
            ✅ 当サービスの優位性
          </h4>
          <p className="text-green-700 text-lg font-bold text-center">
            デジタル化 × 専門特化 × 効率化 = 高品質・低価格・迅速処理
          </p>
        </div>
      </div>
    </section>
  );
}
