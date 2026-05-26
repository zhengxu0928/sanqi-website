import supplierBg from "../assets/supplier-bg.jpg";
import supplierMap from "../assets/supplier-map.jpg";

export default function SupplierDistribution({ t }) {
  return (
    <section className="bg-black px-4 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <div
          className="relative aspect-[16/8] overflow-hidden bg-cover bg-center md:aspect-[16/7]"
          style={{ backgroundImage: `url(${supplierBg})` }}
        >
          {/* 标题 */}
          <h2 className="absolute left-1/2 top-2 z-10 w-full -translate-x-1/2 px-4 text-center text-[24px] font-normal tracking-widest text-white md:top-5 md:text-[34px]">
            {t.supplier.title}
          </h2>

          {/* 地图 */}
          <div className="absolute left-1/2 top-1/2 z-10 w-[62%] -translate-x-1/2 -translate-y-1/2">
            <img
              src={supplierMap}
              alt={t.supplier.title}
              className="h-full w-full object-contain"
            />

            {/* 透明覆盖层 */}
            <div className="absolute inset-0 bg-black/75" />
          </div>

          {/* 播放按钮 */}
          <button
            type="button"
            className="absolute left-1/2 top-1/2 z-50 flex h-[86px] w-[86px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/90 bg-transparent md:h-[110px] md:w-[110px]"
          >
            <span className="ml-1 block h-0 w-0 border-y-[10px] border-l-[16px] border-y-transparent border-l-white md:border-y-[13px] md:border-l-[20px]" />
          </button>
        </div>
      </div>
    </section>
  );
}