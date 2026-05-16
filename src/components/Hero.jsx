import { useEffect, useState } from "react";
import hero1 from "../assets/hero1.png";
import hero2 from "../assets/hero2.png";
import hero3 from "../assets/hero3.png";

const slides = [hero1, hero2, hero3];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative">
      <div className="relative h-[520px] md:h-[680px] lg:h-[760px] overflow-hidden">
        
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
              alt=""
              className="h-full w-full object-cover"
            />
          </div>
        ))}

      </div>

      {/* 分页点 */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3">
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