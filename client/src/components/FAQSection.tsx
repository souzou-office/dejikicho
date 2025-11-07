import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQSection() {
  const faqs = [
    {
      question: "MFクラウド会計以外の会計ソフトには対応していますか？",
      answer: "申し訳ございませんが、現在はマネーフォワードクラウド会計専門のサービスとなっております。MFクラウドに特化することで、より高品質で効率的なサービスを提供しています。",
    },
    {
      question: "契約期間の縛りはありますか？",
      answer: "契約期間の縛りはございません。月単位でのご契約となり、いつでも解約が可能です。ただし、解約のお申し出は前月末までにお願いいたします。",
    },
    {
      question: "レシートや領収書の原本は保管する必要がありますか？",
      answer: "はい、税法上、原本の保管義務がございます。写真を送信いただいた後も、原本は7年間保管していただく必要があります。電子帳簿保存法に対応した保管方法についてもご相談いただけます。",
    },
    {
      question: "仕訳の内容を確認することはできますか？",
      answer: "はい、MFクラウド会計上でいつでも仕訳内容をご確認いただけます。また、月次レポート付きのプランでは、毎月の経営状況をわかりやすくまとめたレポートもお届けします。",
    },
    {
      question: "確定申告のサポートもしていただけますか？",
      answer: "プレミアムプランには年次決算サポートが含まれております。確定申告書の作成代行をご希望の場合は、提携税理士をご紹介することも可能です。別途お見積もりいたしますので、お気軽にご相談ください。",
    },
    {
      question: "途中でプランを変更することはできますか？",
      answer: "はい、可能です。事業の成長に合わせて、いつでもプランの変更が可能です。プラン変更は翌月から適用されます。",
    },
  ];

  return (
    <section id="faq" className="py-20">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          よくある質問
        </h2>
        <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
          お客様からよくいただくご質問をまとめました
        </p>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-white rounded-lg px-6 border shadow-sm"
              >
                <AccordionTrigger className="text-left font-semibold hover:no-underline py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
