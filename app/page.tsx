"use client";

import { useEffect, useState, useRef } from "react";
export default function Home() {const images = [
  "/甘味エマ写真1.png",
  "/甘味エマ写真５.png",
  "/甘味エマ写真７.png",
  "/甘味エマ６.png",
];

const [currentImage, setCurrentImage] = useState(0);



useEffect(() => {
  const timer = setInterval(() => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  }, 5000);

  return () => clearInterval(timer);
}, []);
return (
  <>
{/* TOP */}
<main
className="min-h-screen bg-cover bg-center flex items-center justify-center"
style={{
backgroundImage: "url('/ema back.svg')",
}}
> <nav className="absolute top-5 right-5 flex gap-4 md:gap-10 text-[10px] md:text-[11px] text-[#f5f1eb]/80 tracking-[0.3em] uppercase"> <a href="#about">About</a> <a href="#menu">Menu</a> <a href="#gallery">Gallery</a> <a href="#access">Access</a> <a href="#instagram">Instagram</a> </nav>

```
    <div className="flex flex-col items-center text-center"> 
      <img
        src="/kanmiema logo.svg"
        alt="甘味ema"
        className="w-[250px] md:w-[360px]"
      />

      <img
        src="/甘味エマコンセプト２.svg"
        alt="コンセプト"
        className="w-[85vw] md:w-[600px] mt-10"
      />
    </div>
  </main>

  {/* ABOUT */}
  <section
    id="about"
    className="min-h-screen bg-cover bg-center flex items-center justify-center px-10"
    style={{
      backgroundImage: "url('/emaback2.svg')",
    }}
  >
  
  <div
 className="max-w-2xl text-center text-[#643c22]">
      <p className="text-[12px] tracking-[0.3em] mb-8 uppercase">
        About
      </p>

      <h2 className="text-4xl mb-12">
        和と洋の余韻。
      </h2>

      <p className="leading-8">
        老若男女問わず、
        どんな年代の人も心穏やかに過ごせる甘味処。
        <br /><br />
        奥久慈茶や和紅茶、
        体と心に優しい甘味をご用意しています。
      </p>

      <img
        src="/tea.JPG"
        alt="甘味ema"
        className="w-full md:w-[500px] mx-auto mt-12"
      />
    </div>
  </section>

  {/* MENU 親子丼 */}
  <section
    id="menu"
    className="min-h-screen bg-[#643c22] flex items-center justify-center px-10"
  >
    <div className="max-w-5xl w-full grid md:grid-cols-2 gap-20 items-center text-[#f5f1eb] fade-up">

      <img
        src="/エマ写真２.png"
        alt="親子丼御膳"
        className="w-full"
      />

      <div>
        <p className="text-[12px] tracking-[0.3em] uppercase mb-6">
          Menu
        </p>

        <h2 className="text-4xl mb-8">
          親子丼御膳
        </h2>

        <p className="leading-8">
          奥久慈卵と奥久慈しゃもを
          贅沢に使った親子丼御膳。
          <br /><br />
          甘味emaの人気商品です。
        </p>

        <p className="mt-8">
          ¥2,200
        </p>
      </div>

    </div>
  </section>

  {/* あんみつ */}
  <section
    id="anmitsu"
    className="min-h-screen bg-[#f5f1eb] flex items-center justify-center px-10"
  >
    <div className="max-w-5xl w-full grid md:grid-cols-2 gap-20 items-center fade-up">

      <img
        src="/甘味エマ写真４.png"
        alt="あんみつ"
        className="w-full"
      />

      <div className="text-[#643c22]">

        <p className="text-[12px] tracking-[0.3em] uppercase mb-6">
          Anmitsu
        </p>

        <h2 className="text-4xl mb-8">
          あんみつ
        </h2>

        <p className="leading-8">
          蕎麦茶で仕立てた寒天の上に、
          粒あん、白花豆の餡、黒豆、
          赤えんどう豆、杏子を添えています。
          <br /><br />
          お召し上がりの際は
          自家製黒蜜をかけてお楽しみください。
          <br /><br />
          すべて自家製で仕上げた
          甘味ema定番の一品です。
        </p>

        <div className="mt-8 space-y-2">
          <p>あんみつ ¥770</p>
          <p>クリームあんみつ ¥920</p>
          <p>抹茶あんみつ ¥920</p>
          <p>黒胡麻あんみつ ¥920</p>
        </div>

      </div>

    </div>
  </section>

  {/* GALLERY */}
<section
  id="gallery"
  className="min-h-screen bg-[#643c22] flex items-center justify-center"
>
  <div className="text-center">

    <p className="text-[12px] tracking-[0.3em] uppercase text-[#f5f1eb]/60 mb-8 fade-up">
      Gallery
    </p>

    <img
      src={images[currentImage]}
      alt="gallery"
      className="className=w-[90vw] md:w-[900px] mx-auto transition-opacity duration-1000"
    />

  </div>
</section>

{/* ACCESS */}

<section
  id="access"
  className="min-h-screen bg-[#f5f1eb] flex items-center justify-center px-10"
>

  <div className="max-w-3xl text-center text-[#643c22]">


<p className="text-[12px] tracking-[0.3em] uppercase opacity-60 mb-8">
  Access
</p>

<h2 className="text-4xl mb-16">
  甘味ema
</h2>

<div className="space-y-6 leading-8">

  <p>
    〒310-0053
    <br />
    茨城県水戸市末広町3-3-35
  </p>

  <p>
    営業時間
    <br />
    11:00 - 17:00
  </p>

  <p>
    定休日
    <br />
    水曜日
  </p>

  <p>
    駐車場あり
  </p>

 <p>
    TEL: 029-246-5199
  </p>
</div>


  </div>
</section>

{/* INSTAGRAM */}
<section
  id="instagram"
  className="min-h-screen bg-[#643c22] flex items-center justify-center px-10"
>

  <div className="text-center text-[#f5f1eb]">

    <p className="text-[12px] tracking-[0.3em] uppercase opacity-60 mb-8">
      Instagram
    </p>

    <h2 className="text-4xl mb-8">
      @kanmiema
    </h2>

    <p className="leading-8 opacity-80 mb-12">
      季節の甘味や店内の風景、
      日々のお知らせを発信しています。
    </p>

    <a
     href="https://www.instagram.com/kanmiema/"
      target="_blank"
      rel="noopener noreferrer"
      className="border border-[#f5f1eb]/40 px-10 py-4 tracking-[0.2em] hover:bg-[#f5f1eb] hover:text-[#643c22] transition duration-700"
    >
      VIEW INSTAGRAM
    </a>

  </div>

</section>

    </>
  );
}