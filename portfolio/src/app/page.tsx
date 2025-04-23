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
          <a
            href="https://github.com/kusawokoshitemori"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-1 mt-4 mb-2 text-gray-800 dark:text-gray-200 hover:text-black dark:hover:text-white"
          >
            GitHubのページはこちら
          </a>
        </div>

        {/* 右側のbox */}
        <div className="flex flex-col justify-center items-center w-1/2 pl-4">
          <h3 className="text-xl font-semibold mb-2">好きな技術</h3>
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

      {/* 使用技術セクション */}
      <section className="bg-white dark:bg-neutral-900 shadow-xl rounded-2xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4">使用技術</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full table-auto">
            <thead>
              <tr>
                <th className="px-4 py-2 text-left">分類</th>
                <th className="px-4 py-2 text-left">技術</th>
                <th className="px-4 py-2 text-left">期間</th>
                <th className="px-4 py-2 text-left">主な用途・実績</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-4 py-2">フロントエンド</td>
                <td className="px-4 py-2">
                  TypeScript, React, Next.js, Tailwind CSS
                </td>
                <td className="px-4 py-2">2024/07〜現在</td>
                <td className="px-4 py-2">
                  Web開発において、フロントエンドの基盤として使用
                </td>
              </tr>
              <tr>
                <td className="px-4 py-2">バックエンド</td>
                <td className="px-4 py-2">Node.js, Express, Supabase</td>
                <td className="px-4 py-2">2024/07〜現在</td>
                <td className="px-4 py-2">
                  API / ツール開発、認証・データベースに使用
                </td>
              </tr>
              <tr>
                <td className="px-4 py-2">リアルタイム通信</td>
                <td className="px-4 py-2">Socket.io</td>
                <td className="px-4 py-2">2025/01〜現在</td>
                <td className="px-4 py-2">
                  特殊カードジャンケンでリアルタイム通信に使用
                </td>
              </tr>
              <tr>
                <td className="px-4 py-2">機械学習</td>
                <td className="px-4 py-2">TensorFlow</td>
                <td className="px-4 py-2">2024/05〜現在</td>
                <td className="px-4 py-2">
                  CIFAR-10、MNISTなどでモデル作成に使用
                </td>
              </tr>
              <tr>
                <td className="px-4 py-2">言語</td>
                <td className="px-4 py-2">
                  Python, JavaScript, C# / Unity, C++
                </td>
                <td className="px-4 py-2">2023/04〜現在</td>
                <td className="px-4 py-2">
                  プログラミング言語全般を使用し、個人開発やインターンで活用
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* インターン経験 */}
      <section className="bg-white dark:bg-neutral-900 shadow-xl rounded-2xl p-6">
        <h2 className="text-2xl font-bold mb-4">インターン経験</h2>
        <ol className="border-l-2 border-gray-300 dark:border-gray-700 pl-4 space-y-6">
          <li>
            <span className="text-sm text-gray-500">2025年2月</span>
            <h3 className="font-semibold">合資会社パンダ工房（1か月/有給）</h3>
            <p className="text-gray-600">
              Backlogを使用してテキスト上でのやり取りを行い、HTMLの要素にクラスを割り当てたり要素を削除する社内ツールの制作(JavaScript,React使用)
            </p>
          </li>
        </ol>
      </section>
    </main>
  );
}
