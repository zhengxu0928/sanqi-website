import { useEffect, useMemo, useState } from "react";

import hero1 from "../assets/hero1.png";
import hero2 from "../assets/hero2.png";

const slideImages = [hero1, hero2];

export default function Hero({ t }) {
  const [current, setCurrent] = useState(0);

  const slides = useMemo(() => {
    return slideImages.map((image, index) => ({
      image,
      texts: t?.hero?.slides?.[index] || [],
    }));
  }, [t]);

  useEffect(() => {
    slideImages.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slideImages.length);
    }, 9000);

    return () => clearInterval(timer);
  }, []);

  const slide = slides[current];
  const isReverse = current % 2 === 1;
  const animationKey = `${current}-${slide.texts.join("")}`;

  return (
    <section className="relative overflow-hidden bg-white">
      <div className="relative h-[620px] overflow-hidden md:h-[680px] lg:h-[760px]">
        <div
          key={animationKey}
          className={`relative flex h-full flex-col ${
            isReverse ? "md:flex-row-reverse" : "md:flex-row"
          }`}
        >
          {/* 图片区域 */}
          <div className="relative h-[360px] w-full animate-heroImageFade md:h-full md:w-[83%]">
            <img
              src={slide.image}
              alt={t?.hero?.title || "hero"}
              className={`animate-mainImageFade h-full w-full object-cover ${
                isReverse ? "object-right" : "object-left"
              }`}
            />

            {/* PC 深色背景 */}
            <div
              className={`absolute bottom-[18%] hidden h-[15%] w-[15%] bg-[#5f738d]/65 md:block ${
                isReverse
                  ? "left-[-12%] animate-darkPanelInLeft"
                  : "right-[-12%] animate-darkPanelInRight"
              }`}
            />
          </div>

          {/* PC 竖排文字 */}
          <div className="relative hidden w-[17%] items-start pt-[12%] md:flex">
            {/* 白色透明背景 */}
            <div
              className={`absolute top-[12%] h-[60%] w-[85%] bg-white/75 ${
                isReverse
                  ? "right-[-20%] animate-whitePanelInLeft"
                  : "left-[-20%] animate-whitePanelInRight"
              }`}
            />

            {/* 第一组 / 第二组分别控制文字位置 */}
            <div
              className={`absolute z-10 flex flex-row-reverse gap-3 ${
                isReverse
                  ? "right-[-8%]"
                  : "left-[-12%]"
              }`}
            >
              {slide.texts.map((text, index) => (
                <div
                  key={`${text}-${index}`}
                  className={`text-[20px] leading-[1.3] tracking-[0.08em] text-black opacity-0 ${
                    isReverse ? "animate-textColumnInLeft" : "animate-textColumnInRight"
                  }`}
                  style={{
                    writingMode: "vertical-rl",
                    animationDelay: `${1.7 + index * 0.35}s`,
                  }}
                >
                  {text}
                </div>
              ))}
            </div>
          </div>

          {/* 手机横排文字 */}
          <div className="relative mx-5 mt-4 block animate-whitePanelInRight bg-white/80 px-5 py-5 md:hidden">
            <div className="absolute -left-3 top-3 h-16 w-16 animate-darkPanelInRight bg-[#5f738d]/65" />

            <div className="relative z-10 space-y-2">
              {slide.texts.map((text, index) => (
                <p
                  key={`${text}-${index}`}
                  className="animate-textColumnInRight text-[15px] leading-[1.9] tracking-[0.04em] text-black opacity-0"
                  style={{
                    animationDelay: `${1.2 + index * 0.25}s`,
                  }}
                >
                  {text}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 分页点 */}
      <div className="absolute bottom-6 left-1/2 z-20 flex -translate-x-1/2 gap-3">
        {slideImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`h-3 w-3 rounded-full transition ${
              current === index ? "bg-gray-700" : "bg-gray-300"
            }`}
          />
        ))}
      </div>

      <style>{`
        @keyframes heroImageFade {
          0% { opacity: 0; }
          15% { opacity: 1; }
          100% { opacity: 1; }
        }

        @keyframes mainImageFade {
          0% {
            opacity: 0;
            transform: scale(1.03);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes darkPanelInRight {
          0% {
            opacity: 0;
            transform: translateX(80px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes darkPanelInLeft {
          0% {
            opacity: 0;
            transform: translateX(-80px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes whitePanelInRight {
          0% {
            opacity: 0;
            transform: translateX(100px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes whitePanelInLeft {
          0% {
            opacity: 0;
            transform: translateX(-100px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes textColumnInRight {
          0% {
            opacity: 0;
            transform: translateX(24px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes textColumnInLeft {
          0% {
            opacity: 0;
            transform: translateX(-24px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .animate-heroImageFade {
          animation: heroImageFade 0.8s ease-out forwards;
        }

        .animate-mainImageFade {
          animation: mainImageFade 1.8s ease-out forwards;
        }

        .animate-darkPanelInRight {
          opacity: 0;
          animation: darkPanelInRight 0.8s ease-out 0.6s forwards;
        }

        .animate-darkPanelInLeft {
          opacity: 0;
          animation: darkPanelInLeft 0.8s ease-out 0.6s forwards;
        }

        .animate-whitePanelInRight {
          opacity: 0;
          animation: whitePanelInRight 0.8s ease-out 1.1s forwards;
        }

        .animate-whitePanelInLeft {
          opacity: 0;
          animation: whitePanelInLeft 0.8s ease-out 1.1s forwards;
        }

        .animate-textColumnInRight {
          animation: textColumnInRight 0.6s ease-out forwards;
        }

        .animate-textColumnInLeft {
          animation: textColumnInLeft 0.6s ease-out forwards;
        }
      `}</style>
    </section>
  );
}