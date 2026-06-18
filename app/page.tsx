"use client";

import { useEffect, useState } from "react";

export default function Home() {

  const images = [
    "/甘味エマ写真1.png",
    "/甘味エマ写真５.png",
    "/甘味エマ写真７.png",
    "/甘味エマ６.png",
  ];

  const [currentImage, setCurrentImage] = useState(0);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <>

{/* TOP */}
<main className="relative h-screen">

  <img
    src="/甘味エマ写真1.png"
    className="absolute inset-0 w-full h-full object-cover"
  />

  <div className="absolute inset-0 bg-black/30" />

  {/* NAV */}
  {/* TOP */}
<main className="relative h-screen">

  <img
    src="/甘味エマ写真1.png"
    alt="甘味ema"
    className="absolute inset-0 w-full h-full object-cover"
  />

  <div className="absolute inset-0 bg-black/30" />

  {/* NAV */}
  <nav className="fixed top-0 left-0 right-0 z-50 bg-white/20 backdrop-blur-md">

    <div className="h-16 flex items-center justify-between px-6">

      <p className="text-brown tracking-[0.2em]">
        甘味ema
      </p>

      {/* PC */}
      <div className="hidden md:flex gap-10 text-[11px] uppercase text-brown tracking-[0.3em]">
        <a href="#about">About</a>
        <a href="#menu">Menu</a>
        <a href="#gallery">Gallery</a>
        <a href="#access">Access</a>
        <a href="#instagram">Instagram</a>
      </div>

      {/* スマホ */}
      <button
        className="md:hidden flex flex-col gap-1"
        onClick={() => setMobileOpen(!mobileOpen)}
      >
       <span className="w-5 h-[2px] bg-black"></span>
<span className="w-5 h-[2px] bg-black"></span>
<span className="w-5 h-[2px] bg-black"></span>
      </button>

    </div>

  </nav>

  {/* Mobile Menu */}
  {mobileOpen && (
    <div className="fixed top-16 left-0 right-0 z-40 bg-white text-[#643c22]">

      <div className="flex flex-col items-center py-8 gap-6 uppercase tracking-[0.3em] text-sm">

        <a href="#about">About</a>
        <a href="#menu">Menu</a>
        <a href="#gallery">Gallery</a>
        <a href="#access">Access</a>
        <a href="#instagram">Instagram</a>

      </div>

    </div>
  )}

  {/* LOGO */}
  <div className="absolute inset-0 flex flex-col items-center justify-center">

    <img
      src="/kanmiema logo.svg"
      alt="甘味ema"
      className="w-[260px] md:w-[360px]"
    />

    <p className="mt-8 text-white tracking-[0.5em] text-xs md:text-sm">
     
    </p>

    <p className="mt-4 text-white/80 text-lg md:text-2xl">
     
    
    </p>

  </div>

</main>


</main>

  {/* ABOUT */}
  <section
  id="about"
  className="min-h-screen bg-[#f5f1eb] flex items-center justify-center px-8 md:px-20"
>
  <div className="max-w-7xl w-full grid md:grid-cols-2 gap-20 items-center">

    {/* LEFT */}
    <div className="text-[#4a3527]">

      <p className="tracking-[0.3em] text-sm uppercase mb-8">
        About
      </p>

      <h2 className="text-3xl md:text-6xl mb-10 ten-mincho leading-tight">
  和と洋の余韻。
      </h2>
<h3 className="text-xl md:text-2xl mb-12 text-[#8c735e] tracking-[0.15em]">
  Japanese Sweets & Tea
</h3>
      

      <p className="leading-8 text-lg">
        老若男女問わず、
        どんな年代の人も心穏やかに過ごせる甘味処。
        <br /><br />
        奥久慈茶や和紅茶、
        体と心に優しい甘味をご用意しています。
        <br /><br />
        一杯のお茶と一皿の甘味を通して、
        その日だけの特別な時間をお届けします。
      </p>

    </div>

    {/* RIGHT */}
    <div>

      <img
        src="/tea.JPG"
        alt="甘味ema"
        className="w-full object-cover　shadow-xl"
      />
      <p className="mt-4 text-xs tracking-[0.25em] uppercase text-[#8c735e]">
  OKUKUJI TEA · IBARAKI
</p>
      

    </div>

  </div>
</section>

 {/* MENU */}
<section
  id="menu"
  className="bg-[#f5f1eb] text-[#4a3527] py-32 md:py-40"
>
  <div className="max-w-7xl mx-auto px-8 md:px-20">

    <div className="grid md:grid-cols-12 gap-16">

      {/* LEFT */}
      <div className="md:col-span-3">

        <p className="tracking-[0.3em] text-xs uppercase mb-8 opacity-60">
          — Menu
        </p>

        <h2 className="text-5xl md:text-5xl ten-mincho leading-none">
          お品書き
        </h2>

        <p className="mt-8 text-sm leading-8 opacity-70">
          甘味emaの季節の甘味と、
          奥久慈の食材を使ったお食事をご用意しています。
        </p>

      </div>

      {/* RIGHT */}
      <div className="md:col-span-9 space-y-24">

        {/* 甘味 */}

<div className="mb-24">

  <p className="tracking-[0.25em] text-xs uppercase opacity-60 mb-8">
    甘味
  </p>

  <div className="space-y-6">

    <div className="grid md:grid-cols-2 gap-12 items-center border-b pb-10">

  <div>
    <img
      src="/甘味エマ写真４.png"
      alt="黒胡麻あんみつ"
      className="w-full h-[450px] object-cover"
    />

    <p className="mt-3 text-xs tracking-[0.25em] uppercase opacity-60">
      KUROGOMA ANMITSU · SIGNATURE SWEET
    </p>
  </div>

  <div>

    <div className="flex justify-between mb-4">
      <h3 className="text-4xl ten-mincho">
        黒胡麻あんみつ
      </h3>

      <span>¥920</span>
    </div>

    <p className="leading-8 opacity-70">
      蕎麦茶で仕立てた寒天の上に、
      粒あん、白花豆の餡、黒豆、
      赤えんどう豆、黒胡麻アイス、杏子を添えています。
      自家製黒蜜をかけてお召し上がりください。
    </p>

  </div>

</div>

    <div className="flex justify-between border-b pb-4">
      <span>あんみつ</span>
      <span>¥770</span>
    </div>

    <div className="flex justify-between border-b pb-4">
      <span>クリームあんみつ</span>
      <span>¥920</span>
    </div>

    <div className="flex justify-between border-b pb-4">
      <span>抹茶あんみつ</span>
      <span>¥920</span>
    </div>

    <div className="flex justify-between border-b pb-4">
      <span>ぜんざい</span>
      <span>¥580</span>
    </div>

    <div className="flex justify-between border-b pb-4">
      <span>蕎麦ぜんざい</span>
      <span>¥1100</span>
    </div>

    <div className="flex justify-between border-b pb-4">
      <span>白花豆のモンブラン</span>
      <span>¥990</span>
    </div>

    <div className="flex justify-between border-b pb-4">
      <span>黒糖ブランマンジェ</span>
      <span>¥550</span>
    </div>

    <div className="flex justify-between border-b pb-4">
      <span>蕎麦粉のロールケーキ</span>
      <span>¥550</span>
    </div>

    <div className="flex justify-between border-b pb-4">
      <span>奥久慈茶のロールケーキ</span>
      <span>¥550</span>
    </div>

   <div className="flex justify-between border-b pb-4">
  <span>ほうじ茶のロールケーキ</span>
  <span>¥550</span>
</div>

<div className="flex justify-between border-b pb-4">
  <span>本日の甘味</span>
  <span>ショーケースをご覧ください。</span>
</div>

  </div>

</div>


{/* お食事 */}
<div className="mb-24">

  <p className="tracking-[0.25em] text-xs uppercase opacity-60 mb-10">
    お食事
  </p>

  {/* 親子丼 */}
  <div className="grid md:grid-cols-2 gap-16 items-center pb-16 border-b border-[#4a3527]/20">

    <div>

      <div className="flex justify-between items-end mb-6">

        <h3 className="text-5xl ten-mincho leading-none">
          親子丼御膳
        </h3>

        <span className="text-lg">
          ¥2200
        </span>

      </div>

      <p className="leading-9 opacity-70">
        奥久慈卵と奥久慈しゃもを贅沢に使用。
        自家製ぬか漬け、小鉢二品、味噌汁付きの人気御膳です。
        食後にコーヒーがつきます。
      </p>

    </div>

    <div>

      <img
        src="/エマ写真２.png"
        alt="親子丼御膳"
        className="w-full h-[500px] object-cover"
      />

      <p className="mt-3 text-xs tracking-[0.25em] uppercase opacity-60">
        OKUKUJI SHAMO · OYAKODON
      </p>

    </div>

  </div>

  {/* 蕎麦がき */}
  <div className="pt-12 pb-8 border-b border-[#4a3527]/20">

    <div className="flex justify-between items-end mb-4">

      <h3 className="text-3xl ten-mincho">
        蕎麦がき
      </h3>

      <span>
        ¥1200
      </span>

    </div>

    <p className="leading-8 opacity-70">
      ご注文をいただいてから蕎麦の実を挽いてお作りします。
    </p>

  </div>

</div>
{/* お飲み物
 */}
<div className="mb-24">

  <p className="tracking-[0.25em] text-xs uppercase opacity-60 mb-10">
    お飲み物
  </p>
<div className="grid md:grid-cols-2 gap-x-16 gap-y-5">

  <div className="flex justify-between border-b border-[#4a3527]/10 pb-3">
    <span>深蒸し茶</span>
    <span>¥770</span>
  </div>

  <div className="flex justify-between border-b border-[#4a3527]/10 pb-3">
    <span>ほうじ茶</span>
    <span>¥770</span>
  </div>

  <div className="flex justify-between border-b border-[#4a3527]/10 pb-3">
    <span>桂花茶</span>
    <span>¥770</span>
  </div>

  <div className="flex justify-between border-b border-[#4a3527]/10 pb-3">
    <span>和紅茶</span>
    <span>¥770</span>
  </div>

  <div className="flex justify-between border-b border-[#4a3527]/10 pb-3">
    <span>チャイ</span>
    <span>¥770</span>
  </div>

  <div className="flex justify-between border-b border-[#4a3527]/10 pb-3">
    <span>珈琲</span>
    <span>¥550</span>
  </div>

  <div className="flex justify-between border-b border-[#4a3527]/10 pb-3">
    <span>水出しアイスコーヒー</span>
    <span>¥550</span>
  </div>

  <div className="flex justify-between border-b border-[#4a3527]/10 pb-3">
    <span>カフェオレ</span>
    <span>¥660</span>
  </div>

  <div className="flex justify-between border-b border-[#4a3527]/10 pb-3">
    <span>みかんジュース</span>
    <span>¥550</span>
  </div>

  <div className="flex justify-between border-b border-[#4a3527]/10 pb-3">
    <span>梅ソーダ</span>
    <span>¥660</span>
  </div>

  <div className="flex justify-between border-b border-[#4a3527]/10 pb-3">
    <span>梅ラッシー</span>
    <span>¥660</span>
  </div>

  <div className="flex justify-between border-b border-[#4a3527]/10 pb-3">
    <span>クラフトコーラ</span>
    <span>¥660</span>
  </div>

  <div className="flex justify-between border-b border-[#4a3527]/10 pb-3">
    <span>ペリエ</span>
    <span>¥550</span>
  </div>

  <div className="flex justify-between border-b border-[#4a3527]/10 pb-3">
    <span>ビール</span>
    <span>¥660</span>
  </div>

  <div className="flex justify-between border-b border-[#4a3527]/10 pb-3">
    <span>ノンアルコールビール</span>
    <span>¥550</span>
  </div>

  <div className="flex justify-between border-b border-[#4a3527]/10 pb-3">
    <span>日本酒</span>
    <span>¥880</span>
  </div>



</div> {/* 飲み物グリッド */}

</div> {/* お飲み物 */}

</div> {/* md:col-span-9 */}

</div> {/* grid */}

</div> {/* max-w-7xl */}

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
  className="bg-[#f5f1eb] text-[#4a3527] py-32 md:py-40"
>
  <div className="max-w-7xl mx-auto px-8 md:px-20">

    <div className="grid md:grid-cols-2 gap-20 items-center">

      {/* LEFT */}
      <div>

        <p className="tracking-[0.3em] text-xs uppercase opacity-60 mb-8">
          Access
        </p>

        <h2 className="text-5xl md:text-7xl ten-mincho mb-12">
          甘味ema
        </h2>

        <div className="space-y-8 leading-8">

          <div>
            <p className="text-xs tracking-[0.2em] uppercase opacity-50 mb-2">
              Address
            </p>

            <p>
              〒310-0053
              <br />
              茨城県水戸市末広町3-2-35
            </p>
          </div>

          <div>
            <p className="text-xs tracking-[0.2em] uppercase opacity-50 mb-2">
              Open
            </p>

            <p>
              11:00 - 17:00
            </p>
          </div>

          <div>
            <p className="text-xs tracking-[0.2em] uppercase opacity-50 mb-2">
              Closed
            </p>

            <p>
              水曜日（不定休あり）
            </p>
          </div>

          <div>
            <p className="text-xs tracking-[0.2em] uppercase opacity-50 mb-2">
              Tel
            </p>

            <p>
              029-246-5199
            </p>
          </div>

        </div>

      </div>

      {/* RIGHT */}
      <div>

        <img
          src="/甘味エマ外観.png"
          alt="甘味ema 外観"
          className="w-full h-[600px] object-cover"
        />

        <p className="mt-4 text-xs tracking-[0.25em] uppercase opacity-60">
          KANMI EMA · MITO IBARAKI
        </p>

      </div>

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