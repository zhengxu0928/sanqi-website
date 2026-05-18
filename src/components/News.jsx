import news1 from "../assets/news1.jpg";
import news2 from "../assets/news2.jpg";

const images = [news1, news2];

function NewsItem({ item, image, showLine }) {
  return (
    <div>
      <div className="grid grid-cols-1 items-center gap-5 md:grid-cols-[220px_1fr_80px] md:gap-12">
        <img
          src={image}
          alt={item.title}
          className="h-[110px] w-full object-cover md:w-[220px]"
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

  return (
    <section id="news" className="bg-white px-4 py-20 md:py-28">
      <div className="mx-auto max-w-4xl">
        <h2 className="text-center text-[28px] font-normal text-black md:text-[36px]">
          {t.news.title}
        </h2>

        <div className="mt-16">
          {news.map((item, index) => (
            <NewsItem
              key={item.date}
              item={item}
              image={images[index]}
              showLine={index !== news.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}