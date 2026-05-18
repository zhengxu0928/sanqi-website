import { useEffect, useState } from "react";

import hero1 from "../assets/hero1.png";
import hero2 from "../assets/hero2.png";
import hero3 from "../assets/hero3.png";

const slides = [hero1, hero2, hero3];

export default function Hero({ t }) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative">
      <div className="relative h-[520px] overflow-hidden md:h-[680px] lg:h-[760px]">
        {/* 轮播图片 */}
        {slides.map((img, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-700 ${
              index === current ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={img}
              alt={t.hero.title || "hero"}
              className="h-full w-full object-cover"
            />

            {/* 可选遮罩 */}
            <div className="absolute inset-0 bg-black/10" />
          </div>
        ))}

        {/* 如后续需要标题可打开 */}
        {t.hero.title && (
          <div className="absolute left-1/2 top-1/2 z-10 w-full max-w-5xl -translate-x-1/2 -translate-y-1/2 px-6 text-center text-white">
            <h1 className="text-[32px] font-light tracking-[0.08em] md:text-[52px]">
              {t.hero.title}
            </h1>

            {t.hero.subtitle && (
              <p className="mt-6 text-[15px] leading-8 md:text-[20px]">
                {t.hero.subtitle}
              </p>
            )}
          </div>
        )}
      </div>

      {/* 分页点 */}
      <div className="absolute bottom-6 left-1/2 flex -translate-x-1/2 gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`h-3 w-3 rounded-full transition ${
              current === index ? "bg-gray-600" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </section>
  );
}