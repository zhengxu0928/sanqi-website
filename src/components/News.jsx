import { useEffect, useRef, useState } from "react";

import news1 from "../assets/news1.jpg";
import news2 from "../assets/news2.jpg";

const images = [news1, news2];

function NewsItem({ item, image, showLine, index }) {
  const itemRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(entry.isIntersecting);
      },
      {
        threshold: 0.2,
      }
    );

    if (itemRef.current) {
      observer.observe(itemRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={itemRef}
      className={`transition-all duration-1000 ease-out ${
        visible
          ? "translate-y-0 opacity-100"
          : "translate-y-12 opacity-0"
      }`}
      style={{
        transitionDelay: visible ? `${index * 120}ms` : "0ms",
      }}
    >
      <div className="grid grid-cols-[120px_1fr] items-center gap-5 md:grid-cols-[220px_1fr_80px] md:gap-12">
        <img
          src={image}
          alt={item.title}
          className="h-[90px] w-[120px] object-cover md:h-[110px] md:w-[220px]"
        />

        <div className="text-left">
          <p className="text-[18px] leading-none text-black md:text-[20px]">
            {item.date}
          </p>

          <p className="mt-4 text-[16px] text-black md:text-[18px]">
            {item.title}
          </p>
        </div>

        <div className="hidden text-[28px] tracking-[2px] text-black md:block">
          &gt;&gt;&gt;
        </div>
      </div>

      {showLine && <div className="my-8 h-px w-full bg-gray-300" />}
    </div>
  );
}

export default function News({ t }) {
  const news = t.news.items;

  const sectionRef = useRef(null);
  const [titleVisible, setTitleVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setTitleVisible(entry.isIntersecting);
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
      id="news"
      ref={sectionRef}
      className="bg-white px-4 py-20 md:py-28"
    >
      <div className="mx-auto max-w-4xl">
        {/* 标题 fade up */}
        <h2
          className={`text-center text-[24px] font-normal text-black transition-all duration-1000 ease-out md:text-[30px] ${
            titleVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-12 opacity-0"
          }`}
        >
          {t.news.title}
        </h2>

        {/* 新闻列表 */}
        <div className="mt-16">
          {news.map((item, index) => (
            <NewsItem
              key={item.date}
              item={item}
              image={images[index]}
              showLine={index !== news.length - 1}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}