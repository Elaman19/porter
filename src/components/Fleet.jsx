import { useLang } from "../i18n";
import { waHref } from "../config/site";
import { porterFront, sprinter } from "../assets";
import useReveal from "../hooks/useReveal";
import { ChatIcon } from "./Icons";

const PHOTOS = { porter: porterFront, sprinter };

const Fleet = () => {
  const { t } = useLang();
  const f = t.fleet;
  const ref = useReveal();

  return (
    <section id="fleet" className="bg-ink py-16 text-white sm:py-24">
      <div className="container-site">
        <div ref={ref} className="reveal">
          <span className="eyebrow">{f.eyebrow}</span>
          <h2 className="section-title">{f.title}</h2>
          <p className="section-lead !text-white/70">{f.lead}</p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {f.items.map((car) => (
            <article key={car.key} className="overflow-hidden rounded-3xl bg-white text-ink">
              <div className="aspect-[4/3] max-h-[340px] w-full overflow-hidden bg-line">
                <img src={PHOTOS[car.key]} alt={car.alt} loading="lazy" className="h-full w-full object-cover" />
              </div>
              <div className="p-6 sm:p-7">
                <h3 className="text-[22px] font-extrabold">{car.name}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-muted">{car.text}</p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {car.tags.map((tag) => (
                    <li key={tag} className="rounded-full bg-brand-soft px-3 py-1 text-[13px] font-bold">
                      {tag}
                    </li>
                  ))}
                </ul>
                <a
                  href={waHref(f.priceText(car.name))}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary mt-6 w-full sm:w-auto"
                >
                  <ChatIcon size={18} />
                  {f.price}
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Fleet;
