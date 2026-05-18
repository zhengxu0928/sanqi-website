import { useEffect, useState } from "react";

export default function Header({ lang, setLang, t }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const nav = [
    {
      label: t.nav.service,
      href: "#service",
    },
    {
      label: t.nav.about,
      href: "#about",
    },
    {
      label: t.nav.news,
      href: "#news",
    },
    {
      label: t.nav.contact,
      href: "#contact",
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`z-50 w-full transition-all duration-300 ${
        scrolled
          ? "fixed left-0 top-0 bg-white/40 shadow-sm backdrop-blur-sm"
          : "relative bg-white/70 backdrop-blur-sm"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:h-20 md:px-8">
        {/* Logo */}
        <div className="border border-black px-2 py-1 text-xs leading-tight">
          三旗
          <br />
          户外
        </div>

        {/* PC导航 */}
        <div className="hidden items-center gap-6 md:flex">
          <nav className="flex items-center text-sm text-gray-800">
            {nav.map((item, index) => (
              <div key={item.label} className="flex items-center">
                <a
                  href={item.href}
                  className="px-3 transition hover:text-black"
                >
                  {item.label}
                </a>

                {index !== nav.length - 1 && (
                  <span className="text-gray-400">|</span>
                )}
              </div>
            ))}
          </nav>

          {/* PC语言切换 */}
          <select
            value={lang}
            onChange={(e) => setLang(e.target.value)}
            className="block rounded border border-gray-300 bg-white px-2 py-1 text-sm text-gray-800 outline-none"
          >
            <option value="zh">中文</option>
            <option value="ja">日本語</option>
          </select>
        </div>

        {/* 手机按钮 */}
        <button
          className="text-xl md:hidden"
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
              key={item.label}
              href={item.href}
              className="block border-t px-4 py-3 text-sm"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </a>
          ))}

          {/* 手机语言切换 */}
          <div className="border-t px-4 py-3">
            <select
              value={lang}
              onChange={(e) => setLang(e.target.value)}
              className="w-full rounded border border-gray-300 bg-white px-2 py-2 text-sm text-gray-800 outline-none"
            >
              <option value="zh">中文</option>
              <option value="ja">日本語</option>
            </select>
          </div>
        </div>
      )}
    </header>
  );
}