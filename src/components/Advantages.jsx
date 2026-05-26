import { useEffect, useRef, useState } from "react";

import advantage1 from "../assets/advantage1.jpg";
import advantage2 from "../assets/advantage2.jpg";
import advantage3 from "../assets/advantage3.jpg";
import advantage4 from "../assets/advantage4.jpg";

const images = [advantage1, advantage2, advantage3, advantage4];

function AdvantageCard({ item, image }) {
  return (
    <div className="group">
      <div className="relative overflow-visible">
        <img
          src={image}
          alt={item.title}
          className="block h-[260px] w-full object-cover md:h-[340px] lg:h-[420px]"
        />

        <div className="absolute bottom-0 left-0 z-10 h-[40px] w-full bg-[#6d8197]/95 md:h-[62px]" />

        <div
          className="absolute bottom-[15px] left-[-12px] z-20 w-full bg-[#768aa2]/55 px-3 pb-3 pt-3 text-white md:left-[-28px] md:px-3"
          style={{ top: "60%" }}
        >
          <p className="mb-1 pl-[34px] text-left text-[10px] leading-[1.8] text-white md:mb-2 md:pl-[65px] md:text-[11px] md:leading-[2] lg:text-[14px]">
            {item.desc}
          </p>

          <div className="relative flex items-center justify-start pl-[78px] md:pl-[85px]">
            <div className="flex items-end gap-3 md:-ml-8 md:gap-5">
              <span className="text-[36px] font-light italic leading-none text-[#d7eb1e] md:text-[52px] lg:text-[58px]">
                {item.id}
              </span>

              <span className="pb-1 text-[14px] tracking-[0.01em] md:text-[18px] lg:text-[20px]">
                {item.title}
              </span>
            </div>

            <span className="absolute right-0 text-[34px] font-light leading-none text-white/95 transition group-hover:translate-x-1 md:text-[44px] lg:text-[50px]">
              ›
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Advantages({ t }) {
  const items = t.advantages.items;
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(entry.isIntersecting);
      },
      {
        threshold: 0.18,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="bg-[#f3f3f1] px-4 py-14 md:px-6 md:py-20"
    >
      <div className="mx-auto max-w-7xl">
        {/* 标题 */}
        <div
          className={`text-center transition-all duration-700 ease-out ${
            visible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <h2 className="text-[28px] text-gray-800 md:text-[40px]">
            {t.advantages.title}
          </h2>

          <p className="mx-auto mt-8 max-w-5xl text-[18px] leading-8 text-gray-700 md:text-[24px] md:leading-10">
            {t.advantages.subtitle}
          </p>
        </div>

        {/* 卡片：12栅格布局 */}
        <div className="mt-12 grid grid-cols-1 gap-y-14 md:mt-16 md:grid-cols-12 md:gap-x-15 md:gap-y-24">
          {items.map((item, index) => {
            const isLeftCard = index % 2 === 0;

            return (
              <div
                key={item.id}
                className={`mx-auto w-[82vw] max-w-[340px] transition-all duration-700 ease-out md:w-full md:max-w-none ${
                  isLeftCard
                    ? "md:col-span-5 md:col-start-2"
                    : "md:col-span-5 md:col-start-7"
                } ${
                  visible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-12 opacity-0"
                }`}
                style={{
                  transitionDelay: visible ? `${index * 160 + 200}ms` : "0ms",
                }}
              >
                <AdvantageCard item={item} image={images[index]} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}