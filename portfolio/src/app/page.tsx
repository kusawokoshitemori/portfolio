import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <main className="max-w-4xl mx-auto">
      <section className="flex gap-8 p-8 mb-8 bg-white dark:bg-neutral-900 shadow-xl rounded-2xl border-2 border-gray-300 dark:border-gray-700">
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

        {/* 右側のbox */}
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
        <h2 className="text-2xl font-bold mb-4 text-center">開発経験</h2>

        {/* ことわざの輪の説明 */}
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-4">
            <Link
              href="https://proverbsns.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full no-underline text-inherit"
            >
              <div className="w-full border-2 border-gray-300 dark:border-gray-700 p-4 rounded-lg">
                <div className="flex items-center gap-4">
                  <div className="basis-1/3 shrink-0">
                    <Image
                      src="/proverb1.png"
                      alt="ことわざの輪の画像の様子"
                      width={500}
                      height={300}
                      className="rounded-md object-cover w-full h-auto"
                    />
                    <Image
                      src="/proverb2.png"
                      alt="ことわざの輪の画像の様子"
                      width={500}
                      height={300}
                      className="rounded-md object-cover w-full h-auto"
                    />
                  </div>

                  <div className="basis-2/3 text-center">
                    <h3 className="text-lg font-semibold mb-1">ことわざの輪</h3>
                    <p className="text-gray-600">
                      TypeScript + Next.js
                      で開発したSNSアプリ。ユーザー認証やデータベース連携にSupabaseを使用。
                    </p>
                  </div>
                </div>
              </div>
            </Link>

            {/* 特殊カードジャンケンの説明 */}
            <Link
              href="https://special-card-rps-jet.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full no-underline text-inherit"
            >
              <div className="w-full border-2 border-gray-300 dark:border-gray-700 p-4 rounded-lg transition hover:shadow-2xl">
                <div className="flex items-center gap-4">
                  <div className="basis-1/3 shrink-0">
                    <Image
                      src="/specialRPS1.png"
                      alt="特殊カードジャンケンの画像の様子"
                      width={500}
                      height={300}
                      className="rounded-md object-cover w-full h-auto"
                    />
                    <Image
                      src="/specialRPS2.png"
                      alt="特殊カードジャンケンの画像の様子"
                      width={500}
                      height={300}
                      className="rounded-md object-cover w-full h-auto"
                    />
                  </div>

                  <div className="basis-2/3 text-center">
                    <h3 className="text-lg font-semibold mb-1">
                      特殊カードジャンケン
                    </h3>
                    <p className="text-gray-600">
                      リアルタイム対戦のジャンケンカードゲームを React で開発。
                      Socket.io で通信、Next.js でフロント実装。
                    </p>
                  </div>
                </div>
              </div>
            </Link>

            {/* 量子五目並べの説明 */}
            <Link
              href="https://kusawokoshitemori.github.io/GroupWork_simple_Puzzle/"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full no-underline text-inherit"
            >
              <div className="w-full border-2 border-gray-300 dark:border-gray-700 p-4 rounded-lg transition hover:shadow-2xl">
                <div className="flex items-center gap-4">
                  <div className="basis-1/3 shrink-0">
                    <Image
                      src="/Gomoku1.png"
                      alt="量子五目並べの画像の様子"
                      width={500}
                      height={300}
                      className="rounded-md object-cover w-full h-auto"
                    />
                    <Image
                      src="/Gomoku2.png"
                      alt="量子五目並べの画像の様子"
                      width={500}
                      height={300}
                      className="rounded-md object-cover w-full h-auto"
                    />
                  </div>

                  <div className="basis-2/3 text-center">
                    <h3 className="text-lg font-semibold mb-1">量子五目並べ</h3>
                    <p className="text-gray-600">
                      オリジナル量子ルールを追加した五目並べを TypeScript
                      で実装。 盤面状態をビジュアル化し、学習用に最適化。
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
