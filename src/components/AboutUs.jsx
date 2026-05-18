import aboutImage from "../assets/about.jpg";

export default function AboutUs({ t }) {
  return (
    <section
      id="about"
      className="bg-[#eeeeee] px-4 py-16 md:px-8 md:py-24"
    >
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 md:grid-cols-2 md:gap-20">
        {/* 图片 */}
        <div>
          <img
            src={aboutImage}
            alt={t.about.title}
            className="w-full object-cover"
          />
        </div>

        {/* 文字 */}
        <div className="text-gray-900">
          <h2 className="text-[26px] font-normal md:text-[34px]">
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