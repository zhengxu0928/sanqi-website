import logo from "../assets/logo-white.png";
import partner1 from "../assets/partner1.png";
import partner2 from "../assets/partner2.png";
import partner3 from "../assets/partner3.png";
import partner4 from "../assets/partner4.png";

const partners = [partner1, partner2, partner3, partner4];

export default function Footer() {
  return (
    <footer className="bg-[#3b3c40] px-4 py-20 text-white">
      <div className="mx-auto max-w-6xl">
        {/* 上半部分 */}
        <div className="text-center">
          <p className="text-[22px] leading-[2] tracking-[0.08em] md:text-[30px]">
            整合资源，制定方案，严控品质
            <span className="mx-3">—</span>
            专业的户外用品采购服务商
          </p>

          <button className="mt-10 rounded-xl bg-[#1f1f20] px-8 py-4 text-[18px] transition hover:bg-black">
            联系我们/Contact Us
          </button>
        </div>

        {/* 下半部分 */}
        <div className="mt-28 flex flex-col items-start justify-between gap-14 md:flex-row md:items-end">
          {/* 左侧 */}
          <div className="flex items-end gap-8">
            <img
              src={logo}
              alt="三旗户外"
              className="h-[90px] w-[90px] object-contain"
            />

            <div>
                <div className="flex items-center gap-3 text-[11px] md:text-[13px]">
                <a href="#service" className="transition hover:text-white/70">
                    定制服务
                </a>

                <span>|</span>

                <a href="#about" className="transition hover:text-white/70">
                    关于我们
                </a>

                <span>|</span>

                <a href="#news" className="transition hover:text-white/70">
                    最新动态
                </a>

                <span>|</span>

                <a href="#contact" className="transition hover:text-white/70">
                    联系我们
                </a>

                <span>|</span>
                </div>

              <p className="mt-3 text-[14px] text-white/90">
                Copyright © sanqi CO., LTD. All Rights Reserved.
              </p>
            </div>
          </div>

          {/* 右侧 */}
          <div>
            <p className="mb-5 text-center text-[22px] tracking-[0.08em]">
              合作伙伴
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 md:flex-nowrap">
              {partners.map((partner, index) => (
                <div
                  key={index}
                  className="flex h-[54px] w-full max-w-[220px] items-center justify-center bg-white px-3 md:w-[120px]"
                >
                  <img
                    src={partner}
                    alt="partner"
                    className="max-h-[34px] object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}