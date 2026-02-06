import { assetUrl } from "@/lib/assetUrl";
import { Smartphone, DollarSign, Cloud, Zap, Building2, Target } from "lucide-react";

export default function FeaturesSection() {
  const features = [
    {
      icon: Smartphone,
      image: assetUrl("/min-feat-digital.png"),
      title: "完全デジタル対応",
      description: "レシート・請求書は写真撮影して専用システムで送信。郵送や持参は一切不要です。",
    },
    {
      icon: DollarSign,
      image: assetUrl("/min-feat-cost.png"),
      title: "効率化による低価格",
      description: "1年目月額1万円～の業界最安水準。効率化により高品質・低価格を実現。",
    },
    {
      icon: Cloud,
      image: assetUrl("/min-feat-cloud.png"),
      title: "MFクラウド専門",
      description: "MFクラウド会計に特化した記帳代行。システムを熟知した効率的な処理。",
    },
    {
      icon: Zap,
      image: assetUrl("/min-feat-speed.png"),
      title: "迅速な処理",
      description: "デジタル化により、従来の記帳代行より圧倒的に速いデータ処理を実現。",
    },
    {
      icon: Building2,
      image: assetUrl("/min-feat-legal.png"),
      title: "司法書士法人運営",
      description: "司法書士法人そうぞうが運営・管理。信頼できる連携先との協力体制で品質確保。",
      isPartner: true, // パートナーロゴ表示用フラグ
    },
    {
      icon: Target,
      image: assetUrl("/min-feat-all.png"),
      title: "個人事業主・法人対応",
      description: "個人事業主から法人まで対応。事業規模に応じた柔軟な料金設定。",
    },
  ];

  return (
    <section id="features" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:20px_20px] opacity-30"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <span className="inline-block py-1 px-3 rounded-full bg-green-50 text-green-600 font-medium tracking-wider uppercase text-xs mb-4 border border-green-100">Features</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">当サービスの特徴</h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg">
            従来の記帳代行とは一線を画す、完全デジタル化された効率的なサービスを提供します。
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl border border-gray-100 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group relative overflow-hidden flex flex-col">
              <div className="absolute top-0 right-0 w-24 h-24 bg-green-50 rounded-bl-full -mr-4 -mt-4 opacity-50 group-hover:scale-110 transition-transform duration-500"></div>
              
              <div className="w-16 h-16 mb-6 bg-white border border-gray-100 rounded-2xl shadow-sm flex items-center justify-center group-hover:border-green-200 transition-colors relative z-10">
                <img 
                  src={feature.image} 
                  alt={feature.title} 
                  className="w-10 h-10 object-contain opacity-80 group-hover:opacity-100 transition-opacity"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 relative z-10">{feature.title}</h3>
              <p className="text-gray-500 leading-relaxed relative z-10 mb-4">
                {feature.description}
              </p>
              
              {/* パートナーロゴ表示エリア */}
              {feature.isPartner && (
                <div className="mt-auto pt-4 border-t border-gray-100 relative z-10">
                  <p className="text-sm text-gray-500 mb-3 font-medium">提携パートナー企業:</p>
                  <div className="flex items-center gap-2">
                    <img src={assetUrl("/images/logo-partner.png")} alt="株式会社Ｔ－ＳＴＯＲＹ" className="h-10 w-auto" />
                    <span className="text-base font-bold text-gray-800">株式会社Ｔ－ＳＴＯＲＹ</span>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
