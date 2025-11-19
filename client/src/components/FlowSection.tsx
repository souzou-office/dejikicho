import { FileText, Settings, Send, FileCheck, BarChart3 } from "lucide-react";

export default function FlowSection() {
  const steps = [
    {
      number: 1,
      icon: FileText,
      title: "申し込み",
      description:
        "料金確認後、専用フォームから申し込み",
    },
    {
      number: 2,
      icon: Settings,
      title: "MFクラウド設定",
      description:
        "MFクラウド会計の初期設定をサポート",
    },
    {
      number: 3,
      icon: Send,
      title: "書類送信",
      description:
        "レシート・請求書を写真撮影して専用システムで送信",
    },
    {
      number: 4,
      icon: FileCheck,
      title: "記帳代行",
      description:
        "信頼できる外注パートナーが迅速に記帳処理を実施",
    },
    {
      number: 5,
      icon: BarChart3,
      title: "月次レポート",
      description:
        "月次の記帳結果をMFクラウドで確認可能",
    },
  ];

  return (
    <section id="flow" className="py-20 bg-gray-50">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          利用の流れ
        </h2>
        <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
          シンプルて5ステップで、すぐに記帳代行サービスをご利用いただけます
        </p>

        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-5 gap-6">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow h-full">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-4">
                      <step.icon className="w-10 h-10 text-green-600" />
                    </div>
                    <div className="w-10 h-10 bg-green-600 text-white rounded-full flex items-center justify-center text-lg font-bold mb-4">
                      {step.number}
                    </div>
                    <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
                
                {/* 矢印（デスクトップのみ、最後の要素以外） */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/3 -right-4 transform -translate-y-1/2 z-10">
                    <svg
                      className="w-8 h-8 text-green-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
