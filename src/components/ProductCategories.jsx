import { useEffect, useRef, useState } from "react";

import sewingImg from "../assets/product-sewing.jpg";
import bambooImg from "../assets/product-bamboo.jpg";
import metalImg from "../assets/product-metal.jpg";
import plasticImg from "../assets/product-plastic.jpg";
import tentImg from "../assets/product-tent.jpg";

const images = [
  sewingImg,
  bambooImg,
  metalImg,
  plasticImg,
  tentImg,
];

export default function ProductCategories({ t }) {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  const products = t.products.categories.map((name, index) => ({
    name,
    image: images[index],
  }));

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(entry.isIntersecting);
      },
      {
        threshold: 0.15,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="products"
      ref={sectionRef}
      className="bg-white px-4 pt-28 pb-16 md:px-8 md:pt-48 md:pb-24"
    >
      <div className="mx-auto max-w-7xl">
        {/* 标题 */}
        <div
          className={`transition-all duration-1000 ease-out ${
            visible
              ? "translate-y-0 opacity-100"
              : "translate-y-12 opacity-0"
          }`}
        >
          <h2 className="text-center text-[24px] font-normal text-gray-900 md:text-[30px]">
            {t.products.title}
          </h2>
        </div>

        {/* 产品列表 */}
        <div className="mt-16 overflow-x-auto pb-4">
          <div className="flex w-fit min-w-full justify-center gap-6 md:gap-8">
            {products.map((item, index) => (
              <div
                key={item.name}
                className={`group relative h-[180px] w-[210px] shrink-0 overflow-hidden bg-gray-100 transition-all duration-1000 ease-out md:h-[220px] md:w-[260px] ${
                  visible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-16 opacity-0"
                }`}
                style={{
                  transitionDelay: visible
                    ? `${index * 180 + 200}ms`
                    : "0ms",
                }}
              >
                {/* 图片 */}
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />

                {/* hover遮罩 */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition duration-300 group-hover:bg-black/55">
                  <span className="translate-y-2 text-[28px] tracking-[0.2em] text-white opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100 md:text-[34px]">
                    {item.name}
                  </span>
                </div>

                {/* 默认标题 */}
                <div className="absolute bottom-4 left-5 text-[18px] tracking-[0.15em] text-slate-500 transition group-hover:opacity-0">
                  {item.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}