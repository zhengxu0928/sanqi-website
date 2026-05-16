import aboutImage from "../assets/about.jpg";

export default function AboutUs() {
  return (
    <section id="about" className="bg-[#eeeeee] px-4 py-16 md:px-8 md:py-24">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 md:grid-cols-2 md:gap-20">
        <div>
          <img
            src={aboutImage}
            alt="关于我们"
            className="w-full object-cover"
          />
        </div>

        <div className="text-gray-900">
          <h2 className="text-[26px] font-normal md:text-[34px]">
            关于我们 / About Us
          </h2>

          <p className="mt-8 text-[15px] leading-[2.2] md:text-[18px] md:leading-[2.3]">
            我们是一家专注于户外用品领域的解决方案服务商，致力于为客户提供从需求分析、产品整合、品质把控到交付执行的一站式服务。依托深厚的行业资源与专业团队，我们协助客户高效完成各类定制化采购任务，助力其专注于业务本身，实现更大价值。
          </p>
        </div>
      </div>
    </section>
  );
}