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
    {
      question: "契約主体やお問い合わせ先はどこですか？",
      answer: "ご契約は司法書士法人そうぞうとの間で締結されます。記帳業務は提携パートナーである株式会社Ｔ－ＳＴＯＲＹが担当いたします。お問い合わせ・ご相談はLINEまたは株式会社Ｔ－ＳＴＯＲＹの窓口にて承ります。",
    },
  ];

  return (
    <section id="faq" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <span className="text-green-600 font-medium tracking-wider uppercase text-sm">FAQ</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3 mb-6">よくある質問</h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg">
            お客様から寄せられる質問をまとめました
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="bg-white border border-gray-200 rounded-lg px-6 shadow-sm">
                <AccordionTrigger className="text-left text-lg font-bold text-gray-900 py-6 hover:no-underline hover:text-green-600 transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 leading-relaxed pb-6 text-base">
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
