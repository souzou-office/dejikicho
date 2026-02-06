import { Button } from "@/components/ui/button";
import { assetUrl } from "@/lib/assetUrl";
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
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <div className="flex items-center">
          <a href="#" className="flex items-center gap-2">
            <img src={assetUrl("/images/logo-sozou.png")} alt="司法書士法人そうぞう" className="h-14 w-auto" />
          </a>
        </div>

        <nav className="hidden md:flex items-center space-x-10">
          <button onClick={() => scrollToSection("features")} className="text-sm text-gray-500 hover:text-gray-900 font-medium transition-colors">Features</button>
          <button onClick={() => scrollToSection("calculator")} className="text-sm text-gray-500 hover:text-gray-900 font-medium transition-colors">Pricing</button>
          <button onClick={() => scrollToSection("flow")} className="text-sm text-gray-500 hover:text-gray-900 font-medium transition-colors">Workflow</button>
          <button onClick={() => scrollToSection("faq")} className="text-sm text-gray-500 hover:text-gray-900 font-medium transition-colors">FAQ</button>
          <Button
            className="bg-gray-900 hover:bg-gray-800 text-white font-medium text-sm rounded-lg px-6 py-2 shadow-none"
            asChild
          >
            <a href="https://lin.ee/IpBr6iu" target="_blank" rel="noopener noreferrer">
              お申し込み
            </a>
          </Button>
        </nav>

        {/* モバイルメニューボタン */}
        <button
          className="md:hidden p-2 text-gray-600"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="メニュー"
        >
          <Menu className="h-6 w-6" />
        </button>

        {/* モバイルメニュー */}
        {isMenuOpen && (
          <div className="absolute top-20 left-0 w-full bg-white border-b border-gray-100 p-4 md:hidden shadow-lg">
            <nav className="flex flex-col gap-4">
              <button onClick={() => scrollToSection("features")} className="text-sm font-medium text-gray-600 hover:text-gray-900 text-left py-2">Features</button>
              <button onClick={() => scrollToSection("calculator")} className="text-sm font-medium text-gray-600 hover:text-gray-900 text-left py-2">Pricing</button>
              <button onClick={() => scrollToSection("flow")} className="text-sm font-medium text-gray-600 hover:text-gray-900 text-left py-2">Workflow</button>
              <button onClick={() => scrollToSection("faq")} className="text-sm font-medium text-gray-600 hover:text-gray-900 text-left py-2">FAQ</button>
              <Button
                className="bg-gray-900 hover:bg-gray-800 text-white w-full mt-2"
                asChild
              >
                <a href="https://lin.ee/IpBr6iu" target="_blank" rel="noopener noreferrer">
                  お申し込み
                </a>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
