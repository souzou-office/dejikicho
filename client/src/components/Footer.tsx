export default function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-white border-t border-gray-100 py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <a href="#" className="text-xl font-bold text-gray-900 tracking-tight flex items-center gap-2 mb-6">
              <div className="w-3 h-3 bg-green-600 rounded-full"></div>
              記帳代行サービス
            </a>
            <p className="text-gray-500 mb-6 max-w-sm leading-relaxed">
              完全デジタル・低価格・高品質な記帳代行サービス。<br />
              司法書士法人が運営する安心のバックオフィス支援。
            </p>
          </div>
          
          <div>
            <h4 className="font-bold mb-6 text-gray-900">Service</h4>
            <ul className="space-y-4 text-gray-500">
              <li><button onClick={() => scrollToSection("features")} className="hover:text-green-600 transition-colors">Features</button></li>
              <li><button onClick={() => scrollToSection("calculator")} className="hover:text-green-600 transition-colors">Pricing</button></li>
              <li><button onClick={() => scrollToSection("flow")} className="hover:text-green-600 transition-colors">Workflow</button></li>
              <li><button onClick={() => scrollToSection("faq")} className="hover:text-green-600 transition-colors">FAQ</button></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-6 text-gray-900">Company</h4>
            <ul className="space-y-4 text-gray-500">
              <li>司法書士法人〇〇</li>
              <li><a href="#" className="hover:text-green-600 transition-colors">プライバシーポリシー</a></li>
              <li><a href="#" className="hover:text-green-600 transition-colors">特定商取引法に基づく表記</a></li>
              <li><a href="#" className="hover:text-green-600 transition-colors">お問い合わせ</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Kicho Daiko Service. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
