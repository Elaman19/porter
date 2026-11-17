import { useLang } from "../i18n";
import useReveal from "../hooks/useReveal";
import { ADVANTAGE_ICONS } from "./Icons";

const Advantages = () => {
  const { t } = useLang();
  const a = t.advantages;
  const ref = useReveal();

  return (
    <section id="advantages" className="container-site py-16 sm:py-24">
      <div ref={ref} className="reveal">
        <span className="eyebrow">{a.eyebrow}</span>
        <h2 className="section-title">{a.title}</h2>
      </div>
      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {a.items.map((item) => {
          const Icon = ADVANTAGE_ICONS[item.key];
          return (
            <div key={item.key} className="rounded-2xl border border-line bg-white p-6 shadow-card">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand text-ink">
                <Icon size={24} />
              </span>
              <h3 className="mt-5 text-[18px] font-extrabold">{item.title}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-muted">{item.text}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Advantages;
