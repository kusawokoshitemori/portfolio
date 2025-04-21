import type { Metadata } from "next";
import { Inter, Roboto } from "next/font/google"; // フォントを変更
import "./globals.css";

// フォントを変更
const interFont = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const robotoMono = Roboto({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ポートフォリオ",
  description: "TypeScript & React が好きなエンジニアのポートフォリオです。",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`${interFont.variable} ${robotoMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
