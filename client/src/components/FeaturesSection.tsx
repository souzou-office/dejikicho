import { Smartphone, DollarSign, Cloud, Zap, Building2, Target } from "lucide-react";

export default function FeaturesSection() {
  const features = [
    {
      icon: Smartphone,
      image: "/min-feat-digital.png",
      title: "完全デジタル対応",
      description: "レシート・請求書は写真撮影して専用システムで送信。郵送や持参は一切不要です。",
    },
    {
      icon: DollarSign,
      image: "/min-feat-cost.png",
      title: "効率化による低価格",
      description: "1年目月額1万円～の業界最安水準。効率化により高品質・低価格を実現。",
    },
    {
      icon: Cloud,
      image: "/min-feat-cloud.png",
      title: "MFクラウド専門",
      description: "MFクラウド会計に特化した記帳代行。システムを熟知した効率的な処理。",
    },
    {
      icon: Zap,
      image: "/min-feat-speed.png",
      title: "迅速な処理",
      description: "デジタル化により、従来の記帳代行より圧倒的に速いデータ処理を実現。",
    },
    {
      icon: Building2,
      image: "/min-feat-legal.png",
      title: "司法書士法人運営",
      description: "司法書士法人そうぞうが運営・管理。信頼できる外注先への完全委託で品質確保。",
    },
    {
      icon: Target,
      image: "/min-feat-all.png",
      title: "個人事業主・法人対応",
      description: "個人事業主から法人まで対応。事業規模に応じた柔軟な料金設定。",
    },
  ];

  return (
    <section id="features" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <span className="text-green-600 font-medium tracking-wider uppercase text-sm">Features</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3 mb-6">当サービスの特徴</h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg">
            従来の記帳代行とは一線を画す、完全デジタル化された効率的なサービスを提供します。
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 group">
              <div className="w-16 h-16 mb-6 bg-gray-50 rounded-lg flex items-center justify-center group-hover:bg-green-50 transition-colors">
                <img 
                  src={feature.image} 
                  alt={feature.title} 
                  className="w-10 h-10 object-contain opacity-80 group-hover:opacity-100 transition-opacity"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-500 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
