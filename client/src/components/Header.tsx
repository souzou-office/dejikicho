import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-sm border-b border-border">
      <div className="container">
        <div className="flex items-center justify-between h-16">
          {/* ロゴ */}
          <div className="flex items-center">
            <div className="text-2xl font-bold text-green-600">
              記帳代行サービス
            </div>
          </div>

          {/* デスクトップナビゲーション */}
          <nav className="hidden md:flex items-center gap-6">
            <button
              onClick={() => scrollToSection("features")}
              className="text-sm font-medium text-foreground hover:text-green-600 transition-colors"
            >
              サービスについて
            </button>
            <button
              onClick={() => scrollToSection("pricing")}
              className="text-sm font-medium text-foreground hover:text-green-600 transition-colors"
            >
              料金プラン
            </button>
            <button
              onClick={() => scrollToSection("flow")}
              className="text-sm font-medium text-foreground hover:text-green-600 transition-colors"
            >
              利用の流れ
            </button>
            <button
              onClick={() => scrollToSection("faq")}
              className="text-sm font-medium text-foreground hover:text-green-600 transition-colors"
            >
              よくある質問
            </button>
            <Button
              className="bg-red-500 hover:bg-red-600 text-white"
              onClick={() => scrollToSection("cta")}
            >
              料金を確認して申し込む
            </Button>
          </nav>

          {/* モバイルメニューボタン */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="メニュー"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>

        {/* モバイルメニュー */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <nav className="flex flex-col gap-4">
              <button
                onClick={() => scrollToSection("features")}
                className="text-sm font-medium text-foreground hover:text-green-600 transition-colors text-left"
              >
                サービスについて
              </button>
              <button
                onClick={() => scrollToSection("pricing")}
                className="text-sm font-medium text-foreground hover:text-green-600 transition-colors text-left"
              >
                料金プラン
              </button>
              <button
                onClick={() => scrollToSection("flow")}
                className="text-sm font-medium text-foreground hover:text-green-600 transition-colors text-left"
              >
                利用の流れ
              </button>
              <button
                onClick={() => scrollToSection("faq")}
                className="text-sm font-medium text-foreground hover:text-green-600 transition-colors text-left"
              >
                よくある質問
              </button>
              <Button
                className="bg-red-500 hover:bg-red-600 text-white w-full"
                onClick={() => scrollToSection("cta")}
              >
                料金を確認して申し込む
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
