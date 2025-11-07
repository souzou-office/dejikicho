import { Smartphone, DollarSign, Cloud } from "lucide-react";

export default function FeaturesSection() {
  const features = [
    {
      icon: Smartphone,
      image: "/digital-simple.png",
      title: "完全デジタル対応",
      description: "レシートや領収書は写真を撮って送信するだけ。紙の書類を郵送する必要はありません。スマホ一つで完結する効率的な記帳代行サービスです。",
    },
    {
      icon: DollarSign,
      image: "/cost-simple.png",
      title: "効率化による低価格",
      description: "デジタル化とAI技術を活用した効率的な業務フローにより、月額１万円からという低価格を実現。高品質なサービスを手頃な価格でご提供します。",
    },
    {
      icon: Cloud,
      image: "/cloud-simple.png",
      title: "MFクラウド専門",
      description: "マネーフォワードクラウド会計に特化した専門サービス。MFクラウドの機能を最大限に活用し、スムーズな記帳業務をサポートします。",
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
              <div className="flex justify-center mb-6">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-32 h-32 object-contain"
                />
              </div>
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
