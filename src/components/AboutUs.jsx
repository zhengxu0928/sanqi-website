import { useEffect, useRef, useState } from "react";
import aboutImage from "../assets/about.jpg";

export default function AboutUs({ t }) {
  const sectionRef = useRef(null);
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

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="overflow-visible bg-[#eeeeee] px-4 pt-10 pb-10 md:px-8 md:pt-14 md:pb-0"
    >
      <div
        className={`mx-auto grid max-w-6xl grid-cols-1 items-start gap-10 transition-all duration-1000 ease-out md:grid-cols-2 md:gap-20 ${
          visible
            ? "translate-y-0 opacity-100"
            : "translate-y-12 opacity-0"
        }`}
      >
        {/* 图片 */}
        <div
          className={`relative md:mt-16 md:-mb-20 transition-all duration-[1200ms] ease-out ${
            visible
              ? "translate-y-0 opacity-100"
              : "translate-y-16 opacity-0"
          }`}
        >
          <img
            src={aboutImage}
            alt={t.about.title}
            className="h-[280px] w-full object-cover md:h-[400px]"
          />
        </div>

        {/* 文字 */}
        <div
          className={`pt-2 text-gray-900 transition-all duration-[1200ms] delay-200 ease-out ${
            visible
              ? "translate-y-0 opacity-100"
              : "translate-y-16 opacity-0"
          }`}
        >
          <h2 className="text-center text-[24px] font-normal md:text-left md:text-[30px]">
            {t.about.title}
          </h2>

          <p className="mt-8 text-[15px] leading-[2.2] md:text-[18px] md:leading-[2.3]">
            {t.about.desc}
          </p>
        </div>
      </div>
    </section>
  );
}