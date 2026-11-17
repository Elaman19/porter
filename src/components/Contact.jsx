import { useLang } from "../i18n";
import { SITE, telHref, waHref } from "../config/site";
import { wa, tg } from "../assets";
import useReveal from "../hooks/useReveal";
import { PhoneIcon } from "./Icons";

const rowClass =
  "flex min-h-[64px] items-center gap-4 rounded-2xl bg-white/[0.07] px-5 py-3 text-white ring-1 ring-white/10 transition hover:bg-white/[0.14]";

const Contact = () => {
  const { t } = useLang();
  const c = t.contacts;
  const ref = useReveal();

  return (
    <section id="contacts" className="container-site pb-16 sm:pb-24">
      <div ref={ref} className="reveal overflow-hidden rounded-[32px] bg-ink px-6 py-12 text-white sm:px-12 sm:py-16">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-center">
          <div>
            <span className="eyebrow">{c.eyebrow}</span>
            <h2 className="section-title">{c.title}</h2>
            <p className="mt-3 max-w-md text-[17px] leading-relaxed text-white/70">{c.lead}</p>
            <p className="mt-6 inline-flex items-center gap-2 rounded-full bg-brand px-4 py-2 text-[14px] font-extrabold text-ink">
              {SITE.city} · {SITE.hours}
            </p>
          </div>

          <div className="grid gap-3">
            {SITE.phones.map((p) => (
              <a key={p.raw} href={telHref(p)} className={rowClass}>
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand text-ink">
                  <PhoneIcon size={22} />
                </span>
                <span>
                  <span className="block text-[12px] font-semibold uppercase tracking-widest text-white/60">{c.call}</span>
                  <span className="text-[20px] font-extrabold">{p.display}</span>
                </span>
              </a>
            ))}
            <a href={waHref(t.hero.waText)} target="_blank" rel="noopener noreferrer" className={rowClass}>
              <img src={wa} alt="" width="44" height="44" className="h-11 w-11" />
              <span>
                <span className="block text-[12px] font-semibold uppercase tracking-widest text-white/60">{c.write}</span>
                <span className="text-[20px] font-extrabold">{c.waLabel}</span>
              </span>
            </a>
            <a href={SITE.telegramUrl} target="_blank" rel="noopener noreferrer" className={rowClass}>
              <img src={tg} alt="" width="44" height="44" className="h-11 w-11" />
              <span>
                <span className="block text-[12px] font-semibold uppercase tracking-widest text-white/60">{c.write}</span>
                <span className="text-[20px] font-extrabold">{c.tgLabel}</span>
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
