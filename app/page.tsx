"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const images = [
    "/甘味エマ写真1.png",
    "/甘味エマ写真５.png",
    "/甘味エマ写真７.png",
    "/甘味エマ６.png",
  ];

  const [heroImage, setHeroImage] = useState(0);
  const [currentImage, setCurrentImage] = useState(0);
  const [mobileOpen, setMobileOpen] = useState(false);
  

  useEffect(() => {
  const timer = setInterval(() => {
    setHeroImage((prev) => (prev + 1) % images.length);
  }, 6000);

  return () => clearInterval(timer);
}, []);



  return (
    <>
{/* TOP */}
<main className="relative h-screen overflow-hidden">

  {/* Background Image */}
<div className="absolute inset-0 overflow-hidden">

  {images.map((image, index) => (
    <img
      key={index}
      src={image}
      alt=""
      className={`
        absolute
        inset-0
        w-full
        h-full
        object-cover
        transition-all
        duration-[2500ms]
        ease-in-out
        ${
          heroImage === index
            ? "opacity-100 scale-100"
            : "opacity-0 scale-110"
        }
      `}
    />
  ))}

</div>


  {/* Overlay */}
  <div className="absolute inset-0 bg-[#4a3527]/30" />

  {/* NAV */}
  <nav className="fixed top-0 left-0 right-0 z-50 bg-white/20 backdrop-blur-md">

    <div className="h-16 flex items-center justify-between px-6">

      <p className="text-white tracking-[0.15em] text-sm md:text-base">
        甘味ema
      </p>

      {/* PC MENU */}
      <div className="hidden md:flex gap-10 text-[11px] uppercase text-white tracking-[0.3em]">
        <a href="#about">About</a>
        <a href="#menu">Menu</a>
        <a href="#gallery">Gallery</a>
        <a href="#access">Access</a>
        <a href="#instagram">Instagram</a>
      </div>

      {/* MOBILE BUTTON */}
      <button
        className="md:hidden flex flex-col gap-1"
        onClick={() => setMobileOpen(!mobileOpen)}
      >
        <span className="w-5 h-[2px] bg-white"></span>
        <span className="w-5 h-[2px] bg-white"></span>
        <span className="w-5 h-[2px] bg-white"></span>
      </button>

    </div>

  </nav>

  {/* MOBILE MENU */}
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
    className="w-[260px] md:w-[420px]"
  />

  <p className="mt-6 text-white/80 tracking-[0.35em] text-xs">
    JAPANESE SWEETS & TEA
  </p>

</div>

{/* SCROLL */}
<a
  href="#about"
  className="
    absolute
    bottom-10
    left-1/2
    -translate-x-1/2
    z-20
    flex
    flex-col
    items-center
    text-white
    hover:opacity-70
    transition
  "
>

  <span className="text-[10px] tracking-[0.4em] mb-2">
    SCROLL
  </span>

  <span className="animate-bounce text-2xl">
    ↓
  </span>

</a>
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

      <h2 className="shippori text-4xl md:text-5xl font-medium leading-[1.4] tracking-[0.03em] mb-8">
  和と洋の余韻。
</h2>
 
<h3 className="text-xl md:text-2xl mb-12 text-[#8c735e] tracking-[0.15em]">
  Japanese Sweets & Tea
</h3>
      

      <p className="shippori leading-8 text-lg">
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
        className="w-full object-cover shadow-xl"
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

       <h2 className="text-4xl md:text-5xl shippori leading-none">
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

    <div className="grid lg:grid-cols-2 gap-12 items-center border-b pb-10">

  <div>
    <img
      src="/甘味エマ写真４.png"
      alt="黒胡麻あんみつ"
      className="w-full aspect-[4/5] object-cover"
    />

    <p className="mt-3 text-xs tracking-[0.25em] uppercase opacity-60">
      KUROGOMA ANMITSU · SIGNATURE SWEET
    </p>
  </div>

  <div>

    <div className="flex justify-between mb-4">
      <h3 className="text-3xl ten-mincho">
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

    {/* 白花豆のモンブラン */}

<div className="grid lg:grid-cols-2 gap-12 items-center border-b pb-10 pt-12">

  <div>


<img
  src="/白花豆.JPG"
  alt="白花豆のモンブラン"
  className="w-full aspect-[4/5] object-cover"
/>

<p className="mt-3 text-xs tracking-[0.25em] uppercase opacity-60">
  SHIROHANAMAME MONT BLANC · SIGNATURE SWEET
</p>


  </div>

  <div>


<div className="flex justify-between mb-4">

  <h3 className="text-3xl shippori-mincho">
    白花豆のモンブラン
  </h3>

  <span>¥990</span>

</div>

<p className="leading-8 opacity-70">
 白花豆とメレンゲで冬のモンブランを表現しました。
 優しく上品な甘さの白花豆を施肥味わっていただきたいです。
</p>


  </div>

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
  <div className="grid lg:grid-cols-2 gap-16 items-center pb-16 border-b border-[#4a3527]/20">

    <div>

      <div className="flex justify-between items-end mb-6">

        <h3 className="text-3xl ten-mincho leading-none">
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
        className="w-full aspect-[4/5] object-cover"
      />

      <p className="mt-3 text-xs tracking-[0.25em] uppercase opacity-60">
        OKUKUJI SHAMO · OYAKODON
      </p>

    </div>

  </div>

  {/* 蕎麦がき */}

<div className="grid lg:grid-cols-2 gap-16 items-center pt-16">

  <div>


<img
  src="/そばがき.JPG"
  alt="蕎麦がき"
  className="w-full aspect-[4/5] object-cover"
/>

<p className="mt-3 text-xs tracking-[0.25em] uppercase opacity-60">
  SOBA GAKI · FRESHLY GROUND BUCKWHEAT
</p>


  </div>

  <div>


<div className="flex justify-between items-end mb-6">

  <h3 className="text-3xl shippori-mincho leading-none">
    蕎麦がき
  </h3>

  <span className="text-lg">
    ¥1200
  </span>

</div>

<p className="leading-9 opacity-70">
  ご注文をいただいてから蕎麦の実を挽いてお作りします。
  蕎麦本来の香りと風味をお楽しみください。
</p>
</div>

  </div>

</div>

{/* お飲み物
 */}
<div className="mb-24">

  <p className="tracking-[0.25em] text-xs uppercase opacity-60 mb-10">
    お飲み物
  </p>
<div className="grid lg:grid-cols-2 gap-x-16 gap-y-5">

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
  <div className="text-center px-6">


<p className="text-[12px] tracking-[0.3em] uppercase text-[#f5f1eb]/60 mb-8">
  Gallery
</p>

<div className="relative w-full max-w-[900px] mx-auto">

  <img
  src={images[currentImage]}
  alt="gallery"
  className="
    w-full
    max-w-[900px]
    aspect-[4/3]
    object-cover
    mx-auto
  "
/>

  {/* 左矢印 */}
  <button
    onClick={() =>
      setCurrentImage(
        (currentImage - 1 + images.length) %
        images.length
      )
    }
    className="
absolute
left-2
top-1/2
-translate-y-1/2
text-white
text-3xl
md:text-5xl
z-10
"
  >
    ‹
  </button>

  {/* 右矢印 */}
  <button
    onClick={() =>
      setCurrentImage(
        (currentImage + 1) %
        images.length
      )
    }
    className="
absolute
right-2
top-1/2
-translate-y-1/2
text-white
text-3xl
md:text-5xl
z-10
"  >
    ›
  </button>

</div>



  </div>
</section>


{/* ACCESS */}

<section
  id="access"
  className="bg-[#f5f1eb] text-[#4a3527] py-32 md:py-40"
>
  <div className="max-w-7xl mx-auto px-8 md:px-20">


<div className="grid md:grid-cols-2 gap-20 items-start">

  {/* LEFT */}
  <div>

    <p className="tracking-[0.3em] text-xs uppercase opacity-60 mb-8">
      Access
    </p>

    <h2 className="text-4xl md:text-5xl shippori-mincho mb-12">
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

    {/* 外観写真 */}
    <img
      src="/甘味エマ外観.png"
      alt="甘味ema 外観"
      className="w-full h-[450px] object-cover rounded-lg"
    />

    <p className="mt-4 text-xs tracking-[0.25em] uppercase opacity-60 mb-8">
      KANMI EMA · MITO IBARAKI
    </p>

    {/* Google Map */}
    <div className="overflow-hidden rounded-lg shadow-md">

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3211.7346417646704!2d140.4510553760912!3d36.391417390635524!2m3!1f0!2f0!3f0!2m3!1i1024!2i768!4f13.1!3m3!1m2!1s0x6022250067ec8ded%3A0x13867e93d7b78164!2z55SY5ZGzIGVtYQ!5e0!3m2!1sja!2sjp!4v1781871062044!5m2!1sja!2sjp"
        width="100%"
        height="350"
        style={{ border: 0 }}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />

    </div>

  </div>

</div>


  </div>
</section>

{/* INSTAGRAM */}

<section
  id="instagram"
  className="bg-[#f5f1eb] pt-32 pb-48"
>

  <div className="max-w-6xl mx-auto px-8">


<p className="text-xs tracking-[0.3em] uppercase opacity-60 mb-6 text-center">
  Instagram
</p>

<h2 className="shippori-mincho text-4xl md:text-5xl text-center mb-12">
  @kanmiema
</h2>

<p className="text-center leading-8 opacity-70 mb-16">
  季節の甘味や店内の風景、
  日々のお知らせを発信しています。
</p>

{/* Instagram Image Grid */}
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">

  <img
    src="/ブランマンジェ.jpg"
    alt="Instagram"
    className="w-full h-[350px] object-cover"
  />

  <img
    src="/甘味エマ写真７.png"
    alt="Instagram"
    className="w-full h-[350px] object-cover"
  />

  <img
    src="/チャイ.jpg"
    alt="Instagram"
    className="w-full h-[350px] object-cover"
  />

</div>

<div className="text-center">

  <a
    href="https://www.instagram.com/kanmiema/"
    target="_blank"
    rel="noopener noreferrer"
  className="inline-block mt-12 mb-16 border px-10 py-4"
>
  VIEW INSTAGRAM
</a>
</div>


  </div>



  {/* FOOTER */}

<footer className="bg-[#653d23] text-[#f5f1eb] py-24">

  <div className="max-w-5xl mx-auto px-8 text-center">

    <p className="text-xs tracking-[0.3em] uppercase opacity-60 mb-6">
      Reservation
    </p>

    <h2 className="shippori text-2xl md:text-2xl mb-8">
      ご来店をお待ちしております。
    </h2>

    <p className="leading-8 opacity-80 max-w-xl mx-auto mb-12">
      一杯のお茶と一皿の甘味を通して、
      心穏やかなひとときをお届けします。
      <br />
      ご予約・お問い合わせはお電話またはInstagramよりお願いいたします。
    </p>

    <a
      href="tel:0292465199"
      className="
        block
        text-2xl
        md:text-3xl
        tracking-[0.08em]
        mb-10
        hover:opacity-70
        transition
      "
    >
      029-246-5199
    </a>

    <a
      href="https://www.instagram.com/kanmiema/"
      target="_blank"
      rel="noopener noreferrer"
      className="
        inline-block
        border
        border-white/20
        px-8
        py-4
        tracking-[0.15em]
        hover:bg-white
        hover:text-[#4a3527]
        transition-all
        duration-500
      "
    >
      INSTAGRAM
    </a>

    <div className="mt-20 pt-10 border-t border-white/10">

      <p className="text-sm opacity-60">
        〒310-0053
      </p>

      <p className="text-sm opacity-60 mt-1">
        茨城県水戸市末広町3-2-35
      </p>

      <p className="text-sm opacity-60 mt-4">
        OPEN 11:00 - 17:00
      </p>

      <p className="text-sm opacity-60 mt-1">
        CLOSED 水曜日（不定休あり）
      </p>

      <p className="mt-10 text-xs tracking-[0.15em] opacity-40">
        © KANMI EMA
      </p>

    </div>

  </div>

</footer>
</section>




    </>
  );
}