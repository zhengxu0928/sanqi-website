import sewingImg from "../assets/product-sewing.jpg";
import bambooImg from "../assets/product-bamboo.jpg";
import metalImg from "../assets/product-metal.jpg";
import plasticImg from "../assets/product-plastic.jpg";
import tentImg from "../assets/product-tent.jpg";


const products = [
  { name: "缝纫", image: sewingImg },
  { name: "竹木", image: bambooImg },
  { name: "金属", image: metalImg },
  { name: "塑料", image: plasticImg },
  { name: "帐篷", image: tentImg },
    
];

export default function ProductCategories() {
  return (
    <section id="products" className="bg-white px-4 py-16 md:px-8 md:py-24">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-center text-[26px] font-normal text-gray-900 md:text-[34px]">
          产品分类/Product Categories
        </h2>

        <div className="mt-16 overflow-x-auto pb-4">
          <div className="flex w-fit min-w-full justify-center gap-6 md:gap-8">
            {products.map((item) => (
              <div
                key={item.name}
                className="group relative h-[180px] w-[210px] shrink-0 overflow-hidden bg-gray-100 md:h-[220px] md:w-[260px]"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />

                <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition duration-300 group-hover:bg-black/55">
                  <span className="translate-y-2 text-[28px] tracking-[0.2em] text-white opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100 md:text-[34px]">
                    {item.name}
                  </span>
                </div>

                <div className="absolute bottom-4 left-5 text-[18px] tracking-[0.15em] text-slate-500 transition group-hover:opacity-0">
                  {item.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}