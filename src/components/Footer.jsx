import { useLang } from "../i18n";
import { SITE, telHref } from "../config/site";

const Footer = () => {
  const { t } = useLang();
  return (
    <footer className="border-t border-line pb-28 pt-8 sm:pb-10">
      <div className="container-site flex flex-col gap-4 text-[14px] text-muted sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-extrabold text-ink">{SITE.name}</p>
          <p>{t.footer.tagline}</p>
        </div>
        <div className="flex flex-wrap gap-x-5 gap-y-1">
          {SITE.phones.map((p) => (
            <a key={p.raw} href={telHref(p)} className="font-semibold text-ink hover:underline">
              {p.display}
            </a>
          ))}
        </div>
        <p>
          © {new Date().getFullYear()} {SITE.name}. {t.footer.rights}.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
