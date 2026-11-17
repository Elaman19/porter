import { useLang } from "../i18n";
import { waHref } from "../config/site";
import { porter, sprinter, movers, flat, office, intercity, furniture, waste, sewing } from "../assets";
import useReveal from "../hooks/useReveal";
import { ArrowIcon } from "./Icons";

const PHOTOS = { porter, sprinter, movers, flat, office, intercity, furniture, waste, sewing };

const Card = ({ item, price, priceText }) => (
  <article className="group flex flex-col overflow-hidden rounded-2xl border border-line bg-white shadow-card transition duration-200 hover:-translate-y-1 hover:shadow-lift">
    <div className="aspect-[3/2] overflow-hidden bg-brand-soft">
      <img
        src={PHOTOS[item.key]}
        alt={item.title}
        width="1200"
        height="800"
        loading="lazy"
        className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
      />
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
