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
                    <h3 className="text-4xl font-semibold mb-1">
                      ことわざの輪
                    </h3>
                    {/* ことわざの輪説明欄 */}
                    <div className="flex justify-center">
                      <p className="text-gray-600 text-sm leading-relaxed">
                        <span className="flex">
                          <span className="w-24 font-semibold shrink-0 text-left">
                            使用技術
                          </span>
                          <span>
                            : TypeScript / Next.js / Supabase / React / axios /
                            JWT / zod / bcrypt / TailwindCSS
                          </span>
                        </span>
                        <span className="flex">
                          <span className="w-24 font-semibold shrink-0 text-left">
                            作成経緯
                          </span>
                          <span className="text-left">
                            : React,Next.jsの勉強のために制作。
                            <br />
                            また気軽に短いことわざを発信できれば面白そうだと感じた
                          </span>
                        </span>
                        <span className="flex">
                          <span className="w-24 font-semibold shrink-0 text-left">
                            工夫した点
                          </span>
                          <span className="text-left">
                            : TailwindCSSを使うことによるレスポンシブ対応の実現
                            <br />
                            イイねボタンを押したりコメントをした際に値を一時的に増やしてすぐ画面に反映するようにした点
                          </span>
                        </span>
                        <span className="flex">
                          <span className="w-24 font-semibold shrink-0 text-left">
                            自慢ポイント
                          </span>
                          <span className="text-left">
                            : フロントエンドでのよく使われる機能を取り入れた点
                            <br />
                            UXを意識し使いやすいアプリを制作した。
                          </span>
                        </span>
                      </p>
                    </div>
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
                      特殊カードジャンケン(無料版renderでデプロイしているため動かない可能性があります)
                    </h3>
                    <div className="flex justify-center">
                      <p className="text-gray-600 text-sm leading-relaxed">
                        <span className="flex">
                          <span className="w-24 font-semibold shrink-0 text-left">
                            使用技術
                          </span>
                          <span>
                            : TypeScript / Next.js / socket.io / Node.js /
                            Express / React / TailwindCSS
                          </span>
                        </span>
                        <span className="flex">
                          <span className="w-24 font-semibold shrink-0 text-left">
                            作成経緯
                          </span>
                          <span className="text-left">
                            :
                            リアルタイム通信ができるアプリを制作したかったため作成
                            <br /> 　中学時代の遊びをwebで再現できて楽しかった
                          </span>
                        </span>
                        <span className="flex">
                          <span className="w-24 font-semibold shrink-0 text-left">
                            工夫した点
                          </span>
                          <span className="text-left">
                            :
                            socketIdをContextで管理することによりページ移動しても使用しやすい形にした点
                            <br />
                            　友達に確認してもらいゲームバランスやUI/UXの改善を求めた点
                          </span>
                        </span>
                        <span className="flex">
                          <span className="w-24 font-semibold shrink-0 text-left">
                            自慢ポイント
                          </span>
                          <span className="text-left">
                            :
                            画面の情報を少なくすることで一目で分かりやすいUIになるように意識した
                            <br />
                            UIをコンポーネント化したり手札画像のURLを辞書でまとめたりすることで汎用性のあるコードの製作
                          </span>
                        </span>
                      </p>
                    </div>
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
                    <div className="flex justify-center">
                      <p className="text-gray-600 text-sm leading-relaxed">
                        <span className="flex">
                          <span className="w-24 font-semibold shrink-0 text-left">
                            使用技術
                          </span>
                          <span>: JavaScript </span>
                        </span>
                        <span className="flex">
                          <span className="w-24 font-semibold shrink-0 text-left">
                            作成経緯
                          </span>
                          <span className="text-left">
                            : 4人グループでパズルゲームを制作する授業での開発
                            <br />
                            “せっかくなら本気で作ろう”
                            と決め、4人で役割分担し協力して完成
                          </span>
                        </span>
                        <span className="flex">
                          <span className="w-24 font-semibold shrink-0 text-left">
                            工夫した点
                          </span>
                          <span className="text-left">
                            :
                            他の人が読んでも分かりやすいコードを意識して、関数や一機能ごとにコメントアウトをつけた
                            <br />
                            他のメンバーの開発が終わった時点でコードと動作を確認し不具合を指摘し減らした点
                          </span>
                        </span>
                        <span className="flex">
                          <span className="w-24 font-semibold shrink-0 text-left">
                            自慢ポイント
                          </span>
                          <span className="text-left">
                            :
                            チームのリーダーとしてグループ間でのやり取りを行った
                            <br />
                            報告を行ったり追加する機能の役割分担を決めたりするのが大変だった
                          </span>
                        </span>
                      </p>
                    </div>
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
                <th className="px-4 py-2 text-left">主な用途・実績</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-4 py-2">フロントエンド</td>
                <td className="px-4 py-2">
                  TypeScript, React, Next.js, Tailwind CSS
                </td>
                <td className="px-4 py-2">Web開発において積極的に使用</td>
              </tr>
              <tr>
                <td className="px-4 py-2">バックエンド</td>
                <td className="px-4 py-2">
                  Node.js, Express, Supabase, TypeScript
                </td>
                <td className="px-4 py-2">データベースやAPIのやり取りに使用</td>
              </tr>
              <tr>
                <td className="px-4 py-2">リアルタイム通信</td>
                <td className="px-4 py-2">Socket.io</td>
                <td className="px-4 py-2">
                  特殊カードジャンケンでリアルタイム通信に使用
                </td>
              </tr>
              <tr>
                <td className="px-4 py-2">機械学習</td>
                <td className="px-4 py-2">TensorFlow</td>
                <td className="px-4 py-2">
                  CIFAR-10、MNISTなどでモデル作成するのに使用。またMNISTは精度99.40%を取得
                </td>
              </tr>
              <tr>
                <td className="px-4 py-2">言語</td>
                <td className="px-4 py-2">
                  Python, JavaScript, Unity(C#), C++
                </td>
                <td className="px-4 py-2">
                  ゲーム制作や学校での授業,競技プログラミングに使用。JavaScriptはインターンでも使用
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
