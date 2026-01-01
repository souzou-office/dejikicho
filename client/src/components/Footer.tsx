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
            <a href="#" className="flex items-center gap-2 mb-6">
              <img src="/images/logo-sozou.png" alt="司法書士法人そうぞう" className="h-12 w-auto" />
            </a>
            <p className="text-gray-500 mb-6 max-w-sm leading-relaxed">
              完全デジタル・低価格・高品質な記帳代行サービス。<br />
              司法書士法人が運営する安心のバックオフィス支援。
            </p>
            <div className="mt-8">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-xs text-gray-400 font-medium uppercase tracking-wider">Partner:</span>
                <img src="/images/logo-partner.png" alt="株式会社Ｔ－ＳＴＯＲＹ" className="h-8 w-auto opacity-70 grayscale hover:grayscale-0 transition-all" />
              </div>
              <p className="text-xs text-gray-500">
                パートナー企業の株式会社Ｔ－ＳＴＯＲＹが記帳業務を行います。
              </p>
            </div>
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
              <li>司法書士法人そうぞう</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} 司法書士法人そうぞう. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
