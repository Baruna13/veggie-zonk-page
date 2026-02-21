import { useState } from "react";
import zonkSayur from "@/assets/zonk-sayur.png";
import FallingLeaf from "./FallingLeaf";

const ZonkPage = () => {
  const [shaking, setShaking] = useState(false);
  const leaves = Array.from({ length: 8 }, (_, i) => i * 400);

  const handleRetry = () => {
    setShaking(true);
    setTimeout(() => {
      setShaking(false);
      // Arahkan ke halaman utama atau halaman undian
      // Ganti URL sesuai kebutuhan: window.location.href = '/undian.html';
      window.location.reload();
    }, 700);
  };

  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-background px-4 py-12">
      {/* Falling leaves background */}
      {leaves.map((delay, i) => (
        <FallingLeaf key={i} delay={delay} />
      ))}

      {/* Decorative circles */}
      <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-primary/20 blur-3xl" />
      <div className="absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-accent/40 blur-3xl" />

      {/* Main card */}
      <div className="relative z-10 flex max-w-md flex-col items-center rounded-2xl border border-border bg-card p-8 shadow-xl sm:p-12">
        {/* Vegetable illustration */}
        <div className={`mb-6 animate-pop-in ${shaking ? "animate-shake" : "animate-bounce-slow"}`}>
          <img
            src={zonkSayur}
            alt="Sayuran sedih kawaii"
            className="h-40 w-40 object-contain drop-shadow-lg sm:h-48 sm:w-48"
          />
        </div>

        {/* ZONK title */}
        <h1
          className="animate-pop-in font-heading text-6xl font-black tracking-tight text-zonk-green-dark sm:text-7xl"
          style={{ animationDelay: "200ms" }}
        >
          ZONK!
        </h1>

        {/* Subtitle */}
        <p
          className="mt-4 animate-pop-in text-center font-body text-base leading-relaxed text-muted-foreground sm:text-lg"
          style={{ animationDelay: "400ms" }}
        >
          Yah, kali ini belum beruntung ya! Tetap semangat, coba lagi lain
          waktu untuk dapatkan kesempatan menarik dari produk sayuran segar
          kami!
        </p>

        {/* Decorative veggie emojis */}
        <div
          className="mt-4 flex animate-pop-in gap-2 text-2xl"
          style={{ animationDelay: "500ms" }}
        >
          <span className="animate-wiggle" style={{ animationDelay: "0s" }}>🥬</span>
          <span className="animate-wiggle" style={{ animationDelay: "0.3s" }}>🥕</span>
          <span className="animate-wiggle" style={{ animationDelay: "0.6s" }}>🥦</span>
          <span className="animate-wiggle" style={{ animationDelay: "0.9s" }}>🍅</span>
          <span className="animate-wiggle" style={{ animationDelay: "1.2s" }}>🌽</span>
        </div>

        {/* Retry button */}
        <button
          onClick={handleRetry}
          className="mt-8 animate-pop-in rounded-xl bg-primary px-8 py-3 font-heading text-lg font-bold text-primary-foreground shadow-lg transition-all duration-200 hover:scale-105 hover:shadow-xl active:scale-95"
          style={{ animationDelay: "600ms" }}
        >
          🔄 Coba Lagi
        </button>

        {/* Accent banner */}
        <div
          className="mt-6 animate-pop-in rounded-lg bg-accent px-4 py-2 text-center text-sm text-accent-foreground"
          style={{ animationDelay: "700ms" }}
        >
          💡 Tip: Tetap pantau promo sayuran segar kami!
        </div>
      </div>

      {/* Footer */}
      <p className="mt-8 text-sm text-muted-foreground">
        © 2026 Sayuran Segar — Selalu segar, selalu sehat 🥗
      </p>
    </div>
  );
};

export default ZonkPage;
