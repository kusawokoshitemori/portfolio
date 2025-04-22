import Image from "next/image";

export default function Home() {
  return (
    <main className="max-w-4xl mx-auto">
      {/* 1. 先頭の2つ並べたブロック */}
      <section className="flex gap-8 p-8 mb-8 bg-white dark:bg-neutral-900 shadow-xl rounded-2xl border-2 border-gray-300 dark:border-gray-700">
        {/* 左: アイコン + 強み */}
        <div className="flex flex-col items-center w-1/2 border-r-2 border-gray-300 dark:border-gray-700 pr-4">
          <Image
            src="/myicon.jpg"
            alt="アイコン"
            className="w-20 h-20 rounded-full mb-4"
            width={80} // 幅を指定（w-20が20の単位なので、80pxに設定）
            height={80}
          />
          <p className="text-xl font-bold">Webエンジニアを目指す大学生</p>
          <p className="text-gray-600 text-center mt-2">
            強み : 楽しんで取り組めること
          </p>
        </div>
        {/* 右: 使用技術 */}
        <div className="flex flex-col justify-center items-center w-1/2 pl-4">
          <h3 className="text-xl font-semibold mb-2">使用技術</h3>
          <ul className="list-none text-gray-600">
            <li>TypeScript</li>
            <li>Next.js</li>
            <li>Supabase</li>
            <li>React</li>
          </ul>
        </div>
      </section>

      {/* 2. 開発経験 */}
      <section className="p-8 mb-8 bg-white dark:bg-neutral-900 shadow-xl rounded-2xl border-2 border-gray-300 dark:border-gray-700">
        <h2 className="text-2xl font-bold mb-4">開発経験</h2>

        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-4">
            <div className="w-full border-2 border-gray-300 dark:border-gray-700 p-4 rounded-lg">
              <h3 className="text-lg font-semibold">SNSアプリ</h3>
              <p className="text-gray-600">
                TypeScript + Next.js
                で開発したSNSアプリ。ユーザー認証やデータベース連携にSupabaseを使用。
              </p>
            </div>
            <div className="w-full border-2 border-gray-300 dark:border-gray-700 p-4 rounded-lg">
              <h3 className="text-lg font-semibold">ジャンケンカードゲーム</h3>
              <p className="text-gray-600">
                リアルタイムで対戦できるジャンケンカードゲームをReactで開発。
              </p>
            </div>
            <div className="w-full border-2 border-gray-300 dark:border-gray-700 p-4 rounded-lg">
              <h3 className="text-lg font-semibold">五目並べ</h3>
              <p className="text-gray-600">
                オリジナルルールを加えた五目並べゲームをTypeScriptで開発。
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
