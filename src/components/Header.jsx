import { useState } from "react";
import logo from "../assets/logo.png";

export default function Header({ lang, setLang, t }) {
  const [open, setOpen] = useState(false);

  const nav = [
    { label: t.nav.service, href: "#service" },
    { label: t.nav.about, href: "#about" },
    { label: t.nav.news, href: "#news" },
    { label: t.nav.contact, href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 z-50 w-full bg-white/60 transition-all duration-300">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:h-20 md:px-8">
        <a href="/" className="flex items-center">
          <img
            src={logo}
            alt="SANQI"
            className="h-10 w-auto object-contain md:h-12"
          />
        </a>

        <div className="hidden items-center gap-6 md:flex">
          <nav className="flex items-center text-sm text-gray-800">
            {nav.map((item, index) => (
              <div key={item.label} className="flex items-center">
                <a href={item.href} className="px-3 transition hover:text-black">
                  {item.label}
                </a>

                {index !== nav.length - 1 && (
                  <span className="text-gray-400">|</span>
                )}
              </div>
            ))}
          </nav>

          <select
            value={lang}
            onChange={(e) => setLang(e.target.value)}
            className="block rounded border border-gray-300 bg-white px-2 py-1 text-sm text-gray-800 outline-none"
          >
            <option value="zh">中文</option>
            <option value="ja">日本語</option>
          </select>
        </div>

        <button
          className="text-xl md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Open menu"
        >
          ☰
        </button>
      </div>

      {open && (
        <div className="bg-white/90 md:hidden">
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