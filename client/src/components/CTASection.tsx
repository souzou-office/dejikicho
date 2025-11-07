import { Button } from "@/components/ui/button";
import { toast } from "sonner";

export default function CTASection() {
  const handleApply = () => {
    // プレースホルダー：実際にはLINE公式アカウントへのリンクやフォームへの遷移を実装
    toast.info("申し込みフォームは準備中です。お問い合わせは info@example.com までお願いします。");
  };

  return (
    <section id="cta" className="py-20 bg-gradient-to-br from-green-600 to-green-700 text-white relative overflow-hidden">
      {/* 背景装飾 */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 right-10 w-32 h-32 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-48 h-48 bg-white rounded-full blur-3xl"></div>
      </div>

      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            今すぐ記帳業務を効率化しませんか?
          </h2>
          <p className="text-xl mb-4 text-green-50">
            完全デジタル・低価格・司法書士法人運営の安心サービス
          </p>
          <p className="text-lg mb-12 text-green-100">
            月額1万円から始められる記帳代行で、あなたのビジネスに集中できる時間を取り戻しましょう
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button
              size="lg"
              className="bg-red-500 hover:bg-red-600 text-white text-lg px-8 py-6 h-auto rounded-full shadow-xl hover:shadow-2xl transition-all"
              onClick={handleApply}
            >
              料金を確認して申し込む
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-white/10 hover:bg-white/20 text-white border-white/30 text-lg px-8 py-6 h-auto rounded-full backdrop-blur-sm"
              onClick={() => {
                const element = document.getElementById("features");
                if (element) {
                  element.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              サービス詳細を見る
            </Button>
          </div>

          <p className="text-sm text-green-100">
            ※お申し込み後、24時間以内に担当者からご連絡いたします
          </p>
        </div>
      </div>
    </section>
  );
}
