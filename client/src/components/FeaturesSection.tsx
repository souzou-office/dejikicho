import { Smartphone, DollarSign, Cloud, Zap, Building2, Target } from "lucide-react";

export default function FeaturesSection() {
  const features = [
    {
      icon: Smartphone,
      image: "/digital-simple.png",
      title: "完全デジタル対応",
      description: "レシート・請求書は写真撮影して専用システムで送信。郵送や持参は一切不要です。",
    },
    {
      icon: DollarSign,
      image: "/cost-simple.png",
      title: "効率化による低価格",
      description: "1年目月額1万円～の業界最安水準。効率化により高品質・低価格を実現。",
    },
    {
      icon: Cloud,
      image: "/cloud-simple.png",
      title: "MFクラウド専門",
      description: "MFクラウド会計に特化した記帳代行。システムを熟知した効率的な処理。",
    },
    {
      icon: Zap,
      title: "迅速な処理",
      description: "デジタル化により、従来の記帳代行より圧倒的に速いデータ処理を実現。",
    },
    {
      icon: Building2,
      title: "司法書士法人運営",
      description: "司法書士法人そうぞうが運営・管理。信頼できる外注先への完全委託で品質確保。",
    },
    {
      icon: Target,
      title: "個人事業主・法人対応",
      description: "個人事業主から法人まで対応。事業規模に応じた柔軟な料金設定。",
    },
  ];

  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          当サービスの特徴
        </h2>
        <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
          デジタル技術を活用した効率的な記帳代行で、あなたのビジネスをサポートします
        </p>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow"
            >
              {feature.image && (
                <div className="flex justify-center mb-6">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-32 h-32 object-contain"
                  />
                </div>
              )}
              {!feature.image && (
                <div className="flex justify-center mb-6">
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center">
                    <feature.icon className="w-10 h-10 text-green-600" />
                  </div>
                </div>
              )}
              <h3 className="text-xl font-bold text-center mb-4">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-center leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
