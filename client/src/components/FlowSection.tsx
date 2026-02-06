import { assetUrl } from "@/lib/assetUrl";
import { FileText, Settings, Send, FileCheck, BarChart3 } from "lucide-react";

export default function FlowSection() {
  const steps = [
    {
      number: 1,
      icon: FileText,
      image: assetUrl("/min-flow-apply.png"),
      title: "申し込み",
      description:
        "料金確認後、専用フォームから申し込み",
    },
    {
      number: 2,
      icon: Settings,
      image: assetUrl("/min-flow-setup.png"),
      title: "MFクラウド設定",
      description:
        "MFクラウド会計の初期設定をサポート",
    },
    {
      number: 3,
      icon: Send,
      image: assetUrl("/min-flow-send.png"),
      title: "書類送信",
      description:
        "レシート・請求書を写真撮影して専用システムで送信",
    },
    {
      number: 4,
      icon: FileCheck,
      image: assetUrl("/min-flow-work.png"),
      title: "記帳代行",
      description:
        "信頼できる外注パートナーが迅速に記帳処理を実施",
    },
    {
      number: 5,
      icon: BarChart3,
      image: assetUrl("/min-flow-report.png"),
      title: "月次レポート",
      description:
        "月次の記帳結果をMFクラウドで確認可能",
    },
  ];

  return (
    <section id="flow" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <span className="text-green-600 font-medium tracking-wider uppercase text-sm">Workflow</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3 mb-6">利用の流れ</h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg">
            シンプルな5ステップで、すぐに記帳代行サービスをご利用いただけます
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-8 relative">
          {/* Connecting Line */}
          <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-gray-100 -z-10"></div>
          
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center text-center group">
              <div className="w-24 h-24 bg-white border border-gray-200 rounded-full flex items-center justify-center mb-6 group-hover:border-green-500 group-hover:shadow-md transition-all duration-300 relative z-10">
                <img 
                  src={step.image} 
                  alt={step.title} 
                  className="w-12 h-12 object-contain opacity-80 group-hover:opacity-100 transition-opacity"
                />
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center font-bold text-sm border-4 border-white group-hover:bg-green-600 transition-colors">
                  {index + 1}
                </div>
              </div>
              
              <h3 className="font-bold text-lg text-gray-900 mb-3">{step.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed px-2">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
