import { useLang } from "../i18n";
import useReveal from "../hooks/useReveal";

const Steps = () => {
  const { t } = useLang();
  const s = t.steps;
  const ref = useReveal();

  return (
    <section id="steps" className="bg-brand-soft/60 py-16 sm:py-24">
      <div className="container-site">
        <div ref={ref} className="reveal">
          <span className="eyebrow !bg-white">{s.eyebrow}</span>
          <h2 className="section-title">{s.title}</h2>
        </div>
        <ol className="mt-10 grid gap-5 md:grid-cols-3">
          {s.items.map((step, i) => (
            <li key={step.title} className="relative rounded-2xl bg-white p-6 shadow-card">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-brand text-[20px] font-extrabold">
                {i + 1}
              </span>
              <h3 className="mt-5 text-[19px] font-extrabold">{step.title}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-muted">{step.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default Steps;
