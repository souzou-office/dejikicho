export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="container">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* 会社情報 */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4">
              記帳代行サービス
            </h3>
            <p className="text-sm leading-relaxed">
              司法書士法人運営による、完全デジタル対応の記帳代行サービス。MFクラウド専門で効率的な記帳業務をサポートします。
            </p>
          </div>

          {/* サービス */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4">サービス</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  onClick={() => {
                    const element = document.getElementById("features");
                    if (element) {
                      element.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                  className="hover:text-green-400 transition-colors"
                >
                  サービスについて
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    const element = document.getElementById("pricing");
                    if (element) {
                      element.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                  className="hover:text-green-400 transition-colors"
                >
                  料金プラン
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    const element = document.getElementById("flow");
                    if (element) {
                      element.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                  className="hover:text-green-400 transition-colors"
                >
                  利用の流れ
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    const element = document.getElementById("faq");
                    if (element) {
                      element.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                  className="hover:text-green-400 transition-colors"
                >
                  よくある質問
                </button>
              </li>
            </ul>
          </div>

          {/* お問い合わせ */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4">お問い合わせ</h3>
            <ul className="space-y-2 text-sm">
              <li>メール: info@example.com</li>
              <li>電話: 03-XXXX-XXXX</li>
              <li>受付時間: 平日 9:00-18:00</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-sm">
          <p>&copy; {currentYear} 記帳代行サービス. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
