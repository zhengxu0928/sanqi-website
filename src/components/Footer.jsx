import logo from "../assets/logo-white.png";
import partner1 from "../assets/partner1.png";
import partner2 from "../assets/partner2.png";
import partner3 from "../assets/partner3.png";
import partner4 from "../assets/partner4.png";

const partners = [partner1, partner2, partner3, partner4];

export default function Footer({ t }) {
  return (
    <footer id="contact" className="bg-[#3b3c40] px-4 py-20 text-white">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <p className="text-[22px] leading-[2] tracking-[0.08em] md:text-[30px]">
            {t.footer.slogan}
          </p>

          <a
            href="#contact"
            className="mt-10 inline-block rounded-xl bg-[#1f1f20] px-8 py-4 text-[18px] transition hover:bg-black"
          >
            {t.footer.contactButton}
          </a>
        </div>

        <div className="mt-28 flex flex-col items-start justify-between gap-14 md:flex-row md:items-end">
          <div className="flex items-end gap-8">
            <img
              src={logo}
              alt="三旗户外"
              className="h-[90px] w-[90px] object-contain"
            />

            <div>
              <div className="flex items-center gap-3 text-[11px] md:text-[13px]">
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

                <span>|</span>
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

            <div className="flex flex-wrap items-center justify-center gap-4 md:flex-nowrap">
              {partners.map((partner, index) => (
                <div
                  key={index}
                  className="flex h-[54px] w-full max-w-[220px] items-center justify-center bg-white px-3 md:w-[120px]"
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
    </footer>
  );
}