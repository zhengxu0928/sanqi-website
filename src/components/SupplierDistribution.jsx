import supplierMap from "../assets/supplier-map.jpg";

export default function SupplierDistribution({ t }) {
  return (
    <section className="relative overflow-hidden bg-black px-4 py-20 md:py-28">
      {/* 背景地图 */}
      <div
        className="absolute inset-x-0 top-0 h-[360px] bg-contain bg-top bg-no-repeat opacity-25"
        style={{ backgroundImage: `url(${supplierMap})` }}
      />

      <div className="relative z-10 mx-auto max-w-6xl text-center">
        {/* 标题 */}
        <h2 className="text-[24px] font-normal tracking-widest text-white md:text-[34px]">
          {t.supplier.title}
        </h2>

        {/* 视频区域（暂时图片） */}
        <div className="mx-auto mt-10 w-full max-w-[760px] md:mt-12">
          <div className="relative aspect-video overflow-hidden bg-[#333]">
            <img
              src={supplierMap}
              alt={t.supplier.title}
              className="h-full w-full object-cover opacity-45"
            />

            {/* 遮罩 */}
            <div className="absolute inset-0 bg-black/35" />

            {/* 播放按钮 */}
            <button
              type="button"
              className="absolute left-1/2 top-1/2 flex h-[86px] w-[86px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/90 bg-transparent md:h-[110px] md:w-[110px]"
            >
              <span className="ml-1 block h-0 w-0 border-y-[10px] border-l-[16px] border-y-transparent border-l-white md:border-y-[13px] md:border-l-[20px]" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}