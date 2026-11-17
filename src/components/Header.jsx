import { useEffect, useState } from "react";
import { useLang, LANGS } from "../i18n";
import { SITE, telHref } from "../config/site";
import { PhoneIcon, MenuIcon, CloseIcon } from "./Icons";

const LangSwitch = () => {
  const { lang, setLang, t } = useLang();
  return (
    <div role="group" aria-label={t.header.lang} className="flex rounded-lg border border-line bg-white p-0.5">
      {LANGS.map((l) => (
        <button
          key={l.code}
          type="button"
          onClick={() => setLang(l.code)}
          aria-pressed={lang === l.code}
          className={`min-h-[36px] min-w-[44px] rounded-md px-2 text-[13px] font-bold transition ${
            lang === l.code ? "bg-ink text-white" : "text-muted hover:text-ink"
          }`}
        >
          {l.label}
        </button>
      ))}
    </div>
  );
};

const Header = () => {
  const { t } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const phone = SITE.phones[0];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition ${
        scrolled || open ? "border-b border-line bg-paper/95 backdrop-blur" : "bg-transparent"
      }`}
    >
      <div className="container-site flex h-16 items-center justify-between gap-3">
        <a href="#top" className="flex items-center gap-2.5" aria-label={SITE.name}>
          <img src="/logo.png" alt="" width="36" height="36" className="h-9 w-9 rounded-lg border border-line bg-white object-contain p-0.5" />
          <span className="hidden text-[15px] font-extrabold leading-none xs:block">
            Портер<span className="text-brand-dark"> такси</span>
            <span className="mt-0.5 block text-[11px] font-semibold uppercase tracking-widest text-muted">Бишкек</span>
          </span>
        </a>

        <nav aria-label="Основное меню" className="hidden items-center gap-7 lg:flex">
          {t.nav.map((n) => (
            <a key={n.id} href={`#${n.id}`} className="text-[15px] font-semibold text-muted transition hover:text-ink">
              {n.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <LangSwitch />
          <a href={telHref(phone)} className="btn-primary hidden !min-h-[44px] !px-4 sm:inline-flex">
            <PhoneIcon size={18} />
            {phone.display}
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? t.header.close : t.header.menu}
            className="flex h-11 w-11 items-center justify-center rounded-lg border border-line bg-white lg:hidden"
          >
            {open ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      {open && (
        <nav id="mobile-menu" aria-label="Мобильное меню" className="border-t border-line bg-paper lg:hidden">
          <div className="container-site flex flex-col py-2">
            {t.nav.map((n) => (
              <a
                key={n.id}
                href={`#${n.id}`}
                onClick={() => setOpen(false)}
                className="border-b border-line py-4 text-[17px] font-bold last:border-0"
              >
                {n.label}
              </a>
            ))}
            <a href={telHref(phone)} className="btn-primary my-4 sm:hidden">
              <PhoneIcon size={18} />
              {phone.display}
            </a>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
