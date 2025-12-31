import { CheckCircle2, XCircle, FileText, Check, X, AlertCircle } from "lucide-react";

export default function ServiceDetailsSection() {
  const services = {
    included: [
      "日々の仕訳入力（外注先にて処理）",
      "銀行口座・クレジットカード連携",
      "レシート・請求書のデータ化",
      "月次損益レポート作成",
      "MFクラウド初期設定サポート"
    ],
    excluded: [
      "税務申告（税理士紹介可）",
      "給与計算",
      "請求書作成",
      "経営相談・アドバイス",
      "MFクラウド以外の会計ソフト"
    ],
    required: [
      "MFクラウド会計アカウント",
      "銀行口座情報",
      "クレジットカード情報",
      "レシート・請求書等",
      "専用システムでの書類送信環境"
    ]
  };

  return (
    <section className="py-24 bg-gray-50/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <span className="inline-block py-1 px-3 rounded-full bg-green-50 text-green-600 font-medium tracking-wider uppercase text-xs mb-4 border border-green-100">Details</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">サービス詳細</h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg">
            サービスに含まれる内容と範囲をご確認ください
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* 代行すること */}
          <div className="bg-white rounded-2xl p-8 border border-green-100 shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-20 h-20 bg-green-50 rounded-bl-full -mr-4 -mt-4 opacity-50"></div>
            <div className="flex items-center gap-4 mb-8 border-b border-gray-100 pb-6 relative z-10">
              <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center shadow-sm">
                <CheckCircle2 className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">代行すること</h3>
            </div>
            <ul className="space-y-4">
              {services.included.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center mt-0.5 flex-shrink-0">
                    <Check className="w-3 h-3 text-green-600" />
                  </div>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* 対応しないこと */}
          <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-20 h-20 bg-gray-50 rounded-bl-full -mr-4 -mt-4 opacity-50"></div>
            <div className="flex items-center gap-4 mb-8 border-b border-gray-100 pb-6 relative z-10">
              <div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center shadow-sm">
                <XCircle className="w-6 h-6 text-gray-500" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">対応しないこと</h3>
            </div>
            <ul className="space-y-4">
              {services.excluded.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-gray-100 flex items-center justify-center mt-0.5 flex-shrink-0">
                    <X className="w-3 h-3 text-gray-500" />
                  </div>
                  <span className="text-gray-500">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* 必要なもの */}
          <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-20 h-20 bg-blue-50 rounded-bl-full -mr-4 -mt-4 opacity-50"></div>
            <div className="flex items-center gap-4 mb-8 border-b border-gray-100 pb-6 relative z-10">
              <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center shadow-sm">
                <FileText className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">必要なもの</h3>
            </div>
            <ul className="space-y-4">
              {services.required.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center mt-0.5 flex-shrink-0">
                    <AlertCircle className="w-3 h-3 text-blue-600" />
                  </div>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
