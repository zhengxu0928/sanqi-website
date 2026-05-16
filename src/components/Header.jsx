import { useEffect, useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const nav = ["定制服务", "关于我们", "最新动态", "联系我们"];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`w-full z-50 transition-all duration-300 ${
        scrolled
          ? "fixed top-0 left-0 bg-white/40 backdrop-blur-sm shadow-sm"
          : "relative bg-white/70 backdrop-blur-sm"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:h-20 md:px-8">
        
        {/* Logo */}
        <div className="border border-black px-2 py-1 text-xs leading-tight">
          三旗<br />户外
        </div>

        {/* PC导航 */}
        <nav className="hidden md:flex items-center text-sm text-gray-800">
          {nav.map((item, index) => (
            <div key={item} className="flex items-center">
              <a href="#" className="px-3 hover:text-black">
                {item}
              </a>
              {index !== nav.length - 1 && (
                <span className="text-gray-400">|</span>
              )}
            </div>
          ))}
        </nav>

        {/* 手机按钮 */}
        <button
          className="md:hidden text-xl"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {/* 手机菜单 */}
      {open && (
        <div className="bg-white/90 backdrop-blur-md md:hidden">
          {nav.map((item) => (
            <a
              key={item}
              href="#"
              className="block border-t px-4 py-3 text-sm"
              onClick={() => setOpen(false)}
            >
              {item}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}