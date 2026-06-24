import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "甘味ema｜茨城県水戸市の甘味処",
  description:
    "茨城県水戸市の甘味処 甘味ema。奥久慈茶、和紅茶、あんみつ、白花豆のモンブラン、蕎麦がきを楽しめる落ち着いた空間です。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className="min-h-full flex flex-col">
        {children}
      </body>
    </html>
  );
}