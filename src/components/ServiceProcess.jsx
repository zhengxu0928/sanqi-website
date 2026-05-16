import process1 from "../assets/process1.jpg";
import process2 from "../assets/process2.jpg";
import process3 from "../assets/process3.jpg";
import process4 from "../assets/process4.jpg";
import process5 from "../assets/process5.jpg";
import process6 from "../assets/process6.jpg";
import process7 from "../assets/process7.jpg";
import process8 from "../assets/process8.jpg";
import process9 from "../assets/process9.jpg";

const steps = [
  { no: "01", title: "精准接单", desc: "深度对接，锚定核心需求", image: process1 },
  { no: "02", title: "定制方案", desc: "专属规划，兼顾可行与高效", image: process2 },
  { no: "03", title: "样品确认", desc: "具象呈现，校准合作方向", image: process3 },
  { no: "04", title: "正式下单生产", desc: "规范签约，明确权责约定", image: process4 },
  { no: "05", title: "原材料品质把控", desc: "源头严选，筑牢品质根基", image: process5 },
  { no: "06", title: "整合组装+包装", desc: "产线作业，确保标准统一", image: process6 },
  { no: "07", title: "成品检测", desc: "逐件核验，杜绝不合格品", image: process7 },
  { no: "08", title: "物流交付", desc: "高效适配，保障准时送达", image: process8 },
  { no: "09", title: "售后跟进", desc: "持续护航，解决后顾之忧", image: process9 },
];

function ArrowDown() {
  return (
    <div className="mt-6 flex w-fit flex-col items-center gap-0.5 text-[#5d758c]">
      <span className="block h-5 w-5 rotate-45 border-b border-r border-[#5d758c]" />
      <span className="-mt-3 block h-5 w-5 rotate-45 border-b border-r border-[#5d758c]" />
    </div>
  );
}

function ProcessStep({ step, index }) {
  const isOddRow = index % 2 === 1;

  return (
    <div
      className={`relative mx-auto grid max-w-5xl grid-cols-1 items-center gap-8 md:grid-cols-2 md:gap-0 ${
        isOddRow ? "md:[&_.text-block]:order-2 md:[&_.image-block]:order-1" : ""
      }`}
    >
      {/* 文字 */}
      <div
        className={`text-block relative z-20 px-4 md:px-0 ${
          !isOddRow ? "md:translate-x-[80px]" : ""
        }`}
      >
        <div className="mx-auto w-[230px] text-left md:w-[260px]">
          <p className="text-[36px] font-light italic leading-none text-[#4f6a83] md:text-[46px]">
            {step.no}
          </p>

          <h3 className="mt-4 text-[18px] font-normal text-black md:text-[22px]">
            {step.title}
          </h3>

          <p className="mt-3 text-[13px] leading-6 text-black md:text-[15px]">
            {step.desc}
          </p>

          {step.no !== "09" && <ArrowDown />}
        </div>
      </div>

      {/* 图片 */}
      <div
        className={`image-block relative z-10 px-4 md:px-0 ${
          isOddRow
            ? "md:translate-x-[70px]"
            : "md:-translate-x-[70px]"
        }`}
      >
        <div className="relative mx-auto w-full max-w-[430px] md:w-[430px]">
          <div
            className={`absolute -z-10 h-[130px] w-[220px] rounded-lg bg-[#eef5f8] md:h-[160px] md:w-[260px] ${
              isOddRow
                ? "-left-4 -top-10 md:-left-12 md:-top-14"
                : "-right-4 -top-10 md:-right-12 md:-top-14"
            }`}
          />

          <img
            src={step.image}
            alt={step.title}
            className="h-[170px] w-full rounded-lg object-cover md:h-[210px]"
          />
        </div>
      </div>
    </div>
  );
}

export default function ServiceProcess() {
  return (
    <section id="service" className="bg-[#e9e9e8] px-4 py-16 md:px-4 md:py-24">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-center text-[26px] font-normal text-gray-900 md:text-[34px]">
          服务流程 / Service Process
        </h2>

        <div className="mt-16 space-y-20 md:mt-24 md:space-y-24">
          {steps.map((step, index) => (
            <ProcessStep key={step.no} step={step} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}