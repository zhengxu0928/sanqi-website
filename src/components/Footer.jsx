import { useEffect, useRef, useState } from "react";

import logo from "../assets/logo.png";
import partner1 from "../assets/partner1.png";
import partner2 from "../assets/partner2.png";
import partner3 from "../assets/partner3.png";
import partner4 from "../assets/partner4.png";

const partners = [partner1, partner2, partner3, partner4];

export default function Footer({ t }) {
  const footerRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const [open, setOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const formText = t.footer.contactForm;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(entry.isIntersecting);
      },
      { threshold: 0.15 }
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSubmitted(false);
  };

  return (
    <>
      <footer
        id="contact"
        ref={footerRef}
        className="bg-[#3b3c40] px-4 py-20 text-white"
      >
        <div className="mx-auto max-w-6xl">
          <div
            className={`text-center transition-all duration-1000 ease-out ${
              visible
                ? "translate-y-0 opacity-100"
                : "translate-y-12 opacity-0"
            }`}
          >
            <p className="text-[24px] leading-[2] tracking-[0.08em] md:text-[30px]">
              {t.footer.slogan}
            </p>

            <button
              type="button"
              onClick={() => setOpen(true)}
              className="mt-10 inline-block rounded-xl bg-[#1f1f20] px-8 py-4 text-[18px] transition hover:bg-black"
            >
              {t.footer.contactButton}
            </button>
          </div>

          <div
            className={`mt-28 transition-all duration-[1200ms] delay-200 ease-out ${
              visible
                ? "translate-y-0 opacity-100"
                : "translate-y-16 opacity-0"
            }`}
          >
            {/* 手机版 */}
            <div className="block md:hidden">
              <div>
                <p className="mb-5 text-center text-[22px] tracking-[0.08em]">
                  {t.footer.partners}
                </p>

                <div className="flex flex-wrap items-center justify-center gap-4">
                  {partners.map((partner, index) => (
                    <div
                      key={index}
                      className={`flex h-[54px] w-full max-w-[220px] items-center justify-center bg-white px-3 transition-all duration-1000 ease-out ${
                        visible
                          ? "translate-y-0 opacity-100"
                          : "translate-y-10 opacity-0"
                      }`}
                      style={{
                        transitionDelay: visible
                          ? `${index * 120 + 400}ms`
                          : "0ms",
                      }}
                    >
                      <img
                        src={partner}
                        alt="partner"
                        className="max-h-[34px] object-contain"
                      />
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-14 flex justify-center">
                <img
                  src={logo}
                  alt="SANQI"
                  className="h-[90px] w-[90px] object-contain"
                />
              </div>

              <div className="mt-8 flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-[13px]">
                <a href="#service" className="transition hover:text-white/70">
                  {t.nav.service}
                </a>

                <span className="text-white/60">|</span>

                <a href="#about" className="transition hover:text-white/70">
                  {t.nav.about}
                </a>

                <span className="text-white/60">|</span>

                <a href="#news" className="transition hover:text-white/70">
                  {t.nav.news}
                </a>

                <span className="text-white/60">|</span>

                <a href="#contact" className="transition hover:text-white/70">
                  {t.nav.contact}
                </a>
              </div>

              <p className="mt-6 text-center text-[14px] text-white/90">
                {t.footer.copyright}
              </p>
            </div>

            {/* PC版 */}
            <div className="hidden items-end justify-between gap-14 md:flex">
              <div className="flex items-end gap-8">
                <img
                  src={logo}
                  alt="SANQI"
                  className="h-[90px] w-[90px] object-contain"
                />

                <div>
                  <div className="flex items-center gap-3 text-[13px]">
                    <a href="#service" className="transition hover:text-white/70">
                      {t.nav.service}
                    </a>
                    <span>|</span>
                    <a href="#about" className="transition hover:text-white/70">
                      {t.nav.about}
                    </a>
                    <span>|</span>
                    <a href="#news" className="transition hover:text-white/70">
                      {t.nav.news}
                    </a>
                    <span>|</span>
                    <a href="#contact" className="transition hover:text-white/70">
                      {t.nav.contact}
                    </a>
                  </div>

                  <p className="mt-3 text-[14px] text-white/90">
                    {t.footer.copyright}
                  </p>
                </div>
              </div>

              <div>
                <p className="mb-5 text-center text-[22px] tracking-[0.08em]">
                  {t.footer.partners}
                </p>

                <div className="flex flex-nowrap items-center justify-center gap-4">
                  {partners.map((partner, index) => (
                    <div
                      key={index}
                      className={`flex h-[54px] w-[120px] items-center justify-center bg-white px-3 transition-all duration-1000 ease-out ${
                        visible
                          ? "translate-y-0 opacity-100"
                          : "translate-y-10 opacity-0"
                      }`}
                      style={{
                        transitionDelay: visible
                          ? `${index * 120 + 400}ms`
                          : "0ms",
                      }}
                    >
                      <img
                        src={partner}
                        alt="partner"
                        className="max-h-[34px] object-contain"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {open && (
        <div className="fixed inset-0 z-[999] bg-black/40">
          <div className="fixed bottom-6 right-6 w-[92vw] max-w-[520px] bg-white p-6 text-black shadow-2xl">
            <div className="mb-5 flex items-center justify-between border-b pb-3">
              <h3 className="text-[24px] font-normal">{formText.title}</h3>

              <button
                type="button"
                onClick={handleClose}
                className="text-2xl leading-none"
              >
                ×
              </button>
            </div>

            {submitted ? (
              <div className="py-10 text-center">
                <p className="text-[20px]">{formText.successTitle}</p>
                <p className="mt-4 text-[14px] leading-7 text-gray-600">
                  {formText.successMessage}
                </p>

                <button
                  type="button"
                  onClick={handleClose}
                  className="mt-8 bg-[#1f1f20] px-8 py-3 text-white"
                >
                  {formText.close}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="mb-1 block text-sm">
                    {formText.name} <span className="text-red-500">※</span>
                  </label>
                  <input
                    required
                    className="w-full border border-gray-400 px-3 py-2 outline-none"
                  />
                </div>

                <div>
                  <label className="mb-1 block text-sm">
                    {formText.email} <span className="text-red-500">※</span>
                  </label>
                  <input
                    type="email"
                    required
                    className="w-full border border-gray-400 px-3 py-2 outline-none"
                  />
                </div>

                <div>
                  <label className="mb-1 block text-sm">{formText.tel}</label>
                  <input className="w-full border border-gray-400 px-3 py-2 outline-none" />
                </div>

                <div>
                  <label className="mb-1 block text-sm">
                    {formText.company}
                  </label>
                  <input className="w-full border border-gray-400 px-3 py-2 outline-none" />
                </div>

                <div>
                  <label className="mb-1 block text-sm">
                    {formText.message} <span className="text-red-500">※</span>
                  </label>
                  <textarea
                    required
                    rows="5"
                    className="w-full border border-gray-400 px-3 py-2 outline-none"
                  />
                </div>

                <div className="flex justify-center gap-6 pt-4">
                  <button
                    type="button"
                    onClick={handleClose}
                    className="bg-gray-400 px-8 py-2 text-white"
                  >
                    {formText.cancel}
                  </button>

                  <button
                    type="submit"
                    className="bg-[#4E6377] px-8 py-2 text-white"
                  >
                    {formText.submit}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </>
  );
}