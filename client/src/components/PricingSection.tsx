import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

export default function PricingSection() {
  const plans = [
    {
      name: "ライトプラン",
      price: "10,000",
      description: "小規模事業者向けの基本プラン",
      features: [
        "月間仕訳数50件まで",
        "レシート写真送信対応",
        "MFクラウド連携",
        "メールサポート",
      ],
      recommended: false,
    },
    {
      name: "スタンダードプラン",
      price: "20,000",
      description: "成長中の事業者に最適",
      features: [
        "月間仕訳数150件まで",
        "レシート写真送信対応",
        "MFクラウド連携",
        "優先メールサポート",
        "月次レポート作成",
        "経理相談（月1回）",
      ],
      recommended: true,
    },
    {
      name: "プレミアムプラン",
      price: "35,000",
      description: "本格的な事業運営をサポート",
      features: [
        "月間仕訳数300件まで",
        "レシート写真送信対応",
        "MFクラウド連携",
        "電話・メールサポート",
        "月次レポート作成",
        "経理相談（月2回）",
        "年次決算サポート",
      ],
      recommended: false,
    },
  ];

  const scrollToCTA = () => {
    const element = document.getElementById("cta");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="pricing" className="py-20">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          料金プラン
        </h2>
        <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
          事業規模に合わせて選べる3つのプラン。すべてのプランで司法書士法人による安心のサポートを提供します
        </p>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`rounded-2xl p-8 ${
                plan.recommended
                  ? "bg-green-600 text-white shadow-xl scale-105"
                  : "bg-white shadow-sm"
              } relative`}
            >
              {plan.recommended && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-red-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                  おすすめ
                </div>
              )}
              
              <h3 className={`text-2xl font-bold mb-2 ${plan.recommended ? "text-white" : "text-foreground"}`}>
                {plan.name}
              </h3>
              <p className={`text-sm mb-6 ${plan.recommended ? "text-green-100" : "text-muted-foreground"}`}>
                {plan.description}
              </p>
              
              <div className="mb-6">
                <span className="text-4xl font-bold">¥{plan.price}</span>
                <span className={`text-sm ml-2 ${plan.recommended ? "text-green-100" : "text-muted-foreground"}`}>
                  /月
                </span>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <Check className={`w-5 h-5 mt-0.5 flex-shrink-0 ${plan.recommended ? "text-green-200" : "text-green-600"}`} />
                    <span className={`text-sm ${plan.recommended ? "text-white" : "text-foreground"}`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <Button
                className={`w-full ${
                  plan.recommended
                    ? "bg-white text-green-600 hover:bg-green-50"
                    : "bg-green-600 text-white hover:bg-green-700"
                }`}
                onClick={scrollToCTA}
              >
                このプランを選ぶ
              </Button>
            </div>
          ))}
        </div>

        <p className="text-center text-sm text-muted-foreground mt-12">
          ※仕訳数が上限を超える場合は、別途お見積もりいたします
        </p>
      </div>
    </section>
  );
}
