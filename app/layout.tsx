import type { Metadata } from "next";
import {
  Geist,
  Geist_Mono,
  Noto_Serif_JP,
} from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const notoSerif = Noto_Serif_JP({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-noto-serif",
});

export const metadata = {
  title: "甘味ema｜茨城県水戸市の甘味処",
  description: "奥久慈茶と和の甘味を楽しめる甘味処。",
};
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ja"
      className={`${geistSans.variable} ${geistMono.variable} ${notoSerif.variable} h-full antialiased`}
    >
      <head>
       
        <link
  rel="stylesheet"
  href="https://use.typekit.net/ffe7njj.css"
/>
      </head>

      <body className="min-h-full flex flex-col">
        {children}
      </body>
    </html>
  );
}