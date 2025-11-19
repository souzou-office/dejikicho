import { CheckCircle, XCircle, ClipboardList } from "lucide-react";

export default function ServiceDetailsSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          サービス詳細
        </h2>
        <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
          当サービスで対応できること・できないことを明確にご説明します
        </p>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
          {/* 代行すること */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border-t-4 border-green-600">
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center">
                <CheckCircle className="w-12 h-12 text-green-600" />
              </div>
            </div>
            <h3 className="text-xl font-bold text-center mb-6 text-green-700">
              代行すること
            </h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>日々の仕訳入力（外注先にて処理）</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>銀行口座・クレジットカード連携</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>レシート・請求書のデータ化</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>月次損益レポート作成</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>MFクラウド初期設定サポート</span>
              </li>
            </ul>
          </div>

          {/* 対応しないこと */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border-t-4 border-red-600">
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center">
                <XCircle className="w-12 h-12 text-red-600" />
              </div>
            </div>
            <h3 className="text-xl font-bold text-center mb-6 text-red-700">
              対応しないこと
            </h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>税務申告（税理士紹介可）</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>給与計算</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>請求書作成</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>経営相談・アドバイス</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>MFクラウド以外の会計ソフト</span>
              </li>
            </ul>
          </div>

          {/* 必要なもの */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border-t-4 border-blue-600">
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center">
                <ClipboardList className="w-12 h-12 text-blue-600" />
              </div>
            </div>
            <h3 className="text-xl font-bold text-center mb-6 text-blue-700">
              必要なもの
            </h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>MFクラウド会計アカウント</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>銀行口座情報</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>クレジットカード情報</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>レシート・請求書等</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>専用システムでの書類送信環境</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="max-w-4xl mx-auto bg-yellow-50 border-l-4 border-yellow-500 rounded-lg p-6">
          <h4 className="text-yellow-800 font-bold text-xl mb-3 text-center">
            ⚠️ 重要ポイント
          </h4>
          <p className="text-yellow-800 text-center">
            <strong>MFクラウド専門</strong> • <strong>税務申告は税理士紹介</strong> •{" "}
            <strong>100%外注モデル</strong> • <strong>効率化により制約あり</strong>
          </p>
        </div>
      </div>
    </section>
  );
}
