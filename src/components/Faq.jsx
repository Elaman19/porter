import { useLang } from "../i18n";
import useReveal from "../hooks/useReveal";
import { ChevronIcon } from "./Icons";

const Faq = () => {
  const { t } = useLang();
  const f = t.faq;
  const ref = useReveal();

  return (
    <section id="faq" className="container-site py-16 sm:py-24">
      <div className="mx-auto max-w-3xl">
        <div ref={ref} className="reveal">
          <span className="eyebrow">{f.eyebrow}</span>
          <h2 className="section-title">{f.title}</h2>
        </div>
        <div className="mt-8 space-y-3">
          {f.items.map((item) => (
            <details key={item.q} className="group rounded-2xl border border-line bg-white shadow-card open:border-ink">
              <summary className="flex min-h-[56px] cursor-pointer list-none items-center justify-between gap-4 px-5 py-3 text-[16px] font-bold sm:text-[17px]">
                {item.q}
                <ChevronIcon className="shrink-0 transition group-open:rotate-180" />
              </summary>
              <p className="px-5 pb-5 text-[15px] leading-relaxed text-muted sm:text-[16px]">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
