import { useLang } from "../i18n";
import { waHref } from "../config/site";
import { porterFront, sprinter, gruzchiki, pereezd } from "../assets";
import useReveal from "../hooks/useReveal";
import { SERVICE_ICONS, ArrowIcon } from "./Icons";

// Фото есть только у части услуг; у остальных — иконка на жёлтой подложке
const PHOTOS = { porter: porterFront, sprinter, movers: gruzchiki, flat: pereezd };

const Card = ({ item, price, priceText }) => {
  const Icon = SERVICE_ICONS[item.key];
  const photo = PHOTOS[item.key];

  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-line bg-white shadow-card transition duration-200 hover:-translate-y-1 hover:shadow-lift">
      <div className="relative h-40 overflow-hidden bg-brand-soft">
        {photo ? (
          <img
            src={photo}
            alt={item.title}
            loading="lazy"
            className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full items-center justify-center">
            <span className="flex h-20 w-20 items-center justify-center rounded-2xl bg-brand text-ink shadow-cta">
              <Icon size={38} />
            </span>
          </div>
        )}
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-[18px] font-extrabold leading-snug">{item.title}</h3>
        <p className="mt-2 flex-1 text-[15px] leading-relaxed text-muted">{item.text}</p>
        <a
          href={waHref(priceText(item.title))}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex min-h-[44px] items-center gap-2 text-[15px] font-bold text-ink underline decoration-brand decoration-[3px] underline-offset-4 hover:decoration-ink"
        >
          {price}
          <ArrowIcon size={16} />
        </a>
      </div>
    </article>
  );
};

const Services = () => {
  const { t } = useLang();
  const s = t.services;
  const ref = useReveal();

  return (
    <section id="services" className="container-site py-16 sm:py-24">
      <div ref={ref} className="reveal">
        <span className="eyebrow">{s.eyebrow}</span>
        <h2 className="section-title">{s.title}</h2>
        <p className="section-lead">{s.lead}</p>
      </div>
      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {s.items.map((item) => (
          <Card key={item.key} item={item} price={s.price} priceText={s.priceText} />
        ))}
      </div>
    </section>
  );
};

export default Services;
