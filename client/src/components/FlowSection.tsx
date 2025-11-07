export default function FlowSection() {
  const steps = [
    {
      number: "1",
      title: "お申し込み",
      description: "下記のフォームから必要事項を入力してお申し込みください。24時間以内に担当者からご連絡いたします。",
    },
    {
      number: "2",
      title: "初期設定",
      description: "MFクラウド会計のアカウント連携と、記帳ルールの設定を行います。オンラインで完結するので、来店は不要です。",
    },
    {
      number: "3",
      title: "レシート送信",
      description: "レシートや領収書を写真に撮って、専用アプリまたはLINEで送信するだけ。紙の書類を保管・郵送する手間はありません。",
    },
    {
      number: "4",
      title: "記帳完了",
      description: "受領後、3営業日以内に記帳を完了。MFクラウド会計に反映されますので、いつでも経営状況を確認できます。",
    },
  ];

  return (
    <section id="flow" className="py-20 bg-gray-50">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          利用の流れ
        </h2>
        <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
          シンプルな4ステップで、すぐに記帳代行サービスをご利用いただけます
        </p>

        <div className="max-w-6xl mx-auto">
          <div className="flex justify-center mb-12">
            <img
              src="/workflow-illustration.png"
              alt="利用の流れ"
              className="w-full max-w-3xl h-auto"
            />
          </div>
          
          <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow h-full">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center text-xl font-bold">
                      {step.number}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* 矢印（デスクトップのみ、最後の要素以外） */}
                {index < steps.length - 1 && index % 2 === 0 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
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
      </div>
    </section>
  );
}
