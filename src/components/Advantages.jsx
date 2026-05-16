import advantage1 from "../assets/advantage1.jpg";
import advantage2 from "../assets/advantage2.jpg";
import advantage3 from "../assets/advantage3.jpg";
import advantage4 from "../assets/advantage4.jpg";

const items = [
  {
    id: "1",
    image: advantage1,
    desc: "从技术文件编制、工装检具配置，到生产全流程管控及成品检验，各环节严格遵循标准",
    title: "强大的品质管理能力",
  },
  {
    id: "2",
    image: advantage2,
    desc: "与客户明确精准交付期限，从接单、采购、检验、生产到入库，全流程设定精细化时间",
    title: "稳定可靠的交付能力",
  },
  {
    id: "3",
    image: advantage3,
    desc: "组建专业检测团队，配备精密检测设备，针对缝纫布料、金属、木制品等各类原材料",
    title: "快速研发与打样能力",
  },
  {
    id: "4",
    image: advantage4,
    desc: "公司组织架构完善，各岗位配备专业人才，能快速响应并妥善处理车间各环节事务",
    title: "灵活生产 + 完整供应链整合",
  },
];

function AdvantageCard({ item }) {
  return (
    <div className="group">
      <div className="relative overflow-visible">
        <img
          src={item.image}
          alt={item.title}
          className="block h-[220px] w-full object-cover md:h-[240px] lg:h-[290px]"
        />

        {/* 深色底板：和图片对齐 */}
        <div className="absolute bottom-0 left-0 z-10 h-[72px] w-full bg-[#6d8197]/95 md:h-[82px]" />

        {/* 透明内容层：左侧探出，形成错落感 */}
        <div
          className="absolute left-[-28px] bottom-0 z-20 w-full bg-[#768aa2]/55 px-3 pb-3 pt-3 text-white md:px-3"
          style={{
            top: "45%",
            bottom: "15px",
          }}
        >
          <p className="mb-4 pl-[42px] text-left text-[10px] leading-[1.9] text-white md:pl-[65px] md:text-[11px] md:leading-[2] lg:text-[14px]">
            {item.desc}
          </p>

          <div className="relative flex items-center justify-start pl-[110px] md:pl-[85px]">
            <div className="-ml-3 flex items-end gap-4 md:-ml-8 md:gap-5">
              <span className="text-[42px] font-light italic leading-none text-[#d7eb1e] md:text-[52px] lg:text-[58px]">
                {item.id}
              </span>

              <span className="pb-1 text-[16px] tracking-[0.01em] md:text-[18px] lg:text-[20px]">
                {item.title}
              </span>
            </div>

            <span className="absolute right-0 text-[38px] font-light leading-none text-white/95 transition group-hover:translate-x-1 md:text-[44px] lg:text-[50px]">
              ›
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Advantages() {
  return (
    <section className="bg-[#f3f3f1] px-4 py-14 md:px-6 md:py-20">
      <div className="mx-auto max-w-5xl">
        <div className="text-center">
          <h2 className="text-[28px] text-gray-800 md:text-[40px]">
            我们的优势 / Why Choose Us
          </h2>

          <p className="mx-auto mt-8 max-w-5xl text-[18px] leading-8 text-gray-700 md:text-[24px] md:leading-10">
            快速开发、严格品质、准时交付、灵活生产和完整供应链整合能力
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-y-14 md:mt-16 md:grid-cols-2 md:gap-x-20 md:gap-y-24">
          {items.map((item) => (
            <div key={item.id} className="mx-auto w-full max-w-[400px]">
              <AdvantageCard item={item} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}