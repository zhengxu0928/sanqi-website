import news1 from "../assets/news1.jpg";
import news2 from "../assets/news2.jpg";

const news = [
  {
    date: "2022/07/03",
    title: "公司交流会",
    image: news1,
  },
  {
    date: "2023/08/26",
    title: "夏季BBQ大会",
    image: news2,
  },
];

function NewsItem({ item, showLine }) {
  return (
    <div>
      <div className="grid grid-cols-[220px_1fr_80px] items-center gap-12">
        <img
          src={item.image}
          alt={item.title}
          className="h-[110px] w-[220px] object-cover"
        />

        <div className="text-left">
          <p className="text-[20px] leading-none text-black">{item.date}</p>
          <p className="mt-4 text-[18px] text-black">{item.title}</p>
        </div>

        <div className="text-[28px] tracking-[2px] text-black">
          &gt;&gt;&gt;
        </div>
      </div>

      {showLine && <div className="my-8 h-px w-full bg-gray-300" />}
    </div>
  );
}

export default function News() {
  return (
    <section id="news" className="bg-white px-4 py-20 md:py-28">
      <div className="mx-auto max-w-4xl">
        <h2 className="text-center text-[28px] font-normal text-black md:text-[36px]">
          最新动态 / News
        </h2>

        <div className="mt-16">
          {news.map((item, index) => (
            <NewsItem
              key={item.date}
              item={item}
              showLine={index !== news.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}