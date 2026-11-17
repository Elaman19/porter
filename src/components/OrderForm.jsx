import { useState } from "react";
import { useLang } from "../i18n";
import { waHref } from "../config/site";
import useReveal from "../hooks/useReveal";
import { ChatIcon } from "./Icons";

const fieldClass =
  "mt-1.5 min-h-[48px] w-full rounded-xl border border-line bg-white px-4 text-[16px] placeholder:text-muted/60 focus:border-ink focus:outline-none";

const OrderForm = () => {
  const { t } = useLang();
  const f = t.form;
  const ref = useReveal();
  const [data, setData] = useState({ from: "", to: "", when: "", cargo: "", car: 0, movers: false });

  const set = (key) => (e) =>
    setData((d) => ({ ...d, [key]: e.target.type === "checkbox" ? e.target.checked : e.target.value }));

  const onSubmit = (e) => {
    e.preventDefault();
    const lines = [
      f.msgHead,
      data.from && `${f.from}: ${data.from}`,
      data.to && `${f.to}: ${data.to}`,
      data.when && `${f.when}: ${data.when}`,
      data.cargo && `${f.cargo}: ${data.cargo}`,
      `${f.car}: ${f.cars[data.car]}`,
      data.movers ? f.msgMovers : f.msgNoMovers,
    ].filter(Boolean);
    window.open(waHref(lines.join("\n")), "_blank", "noopener,noreferrer");
  };

  return (
    <section id="order" className="container-site relative z-10 pb-6 lg:-mt-2">
      <div ref={ref} className="reveal rounded-3xl border border-line bg-white p-5 shadow-lift sm:p-8">
        <div className="flex flex-col gap-1 sm:flex-row sm:items-end sm:justify-between">
          <h2 className="text-[22px] font-extrabold sm:text-[26px]">{f.title}</h2>
          <p className="text-[14px] text-muted sm:max-w-md sm:text-right">{f.lead}</p>
        </div>

        <form onSubmit={onSubmit} className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <label className="block text-[14px] font-bold">
            {f.from}
            <input className={fieldClass} value={data.from} onChange={set("from")} placeholder={f.fromPh} autoComplete="off" />
          </label>
          <label className="block text-[14px] font-bold">
            {f.to}
            <input className={fieldClass} value={data.to} onChange={set("to")} placeholder={f.toPh} autoComplete="off" />
          </label>
          <label className="block text-[14px] font-bold">
            {f.when}
            <input className={fieldClass} value={data.when} onChange={set("when")} placeholder={f.whenPh} autoComplete="off" />
          </label>
          <label className="block text-[14px] font-bold sm:col-span-2">
            {f.cargo}
            <input className={fieldClass} value={data.cargo} onChange={set("cargo")} placeholder={f.cargoPh} autoComplete="off" />
          </label>

          <label className="flex min-h-[48px] cursor-pointer items-center gap-3 self-end rounded-xl border border-line bg-white px-4 text-[15px] font-bold">
            <input type="checkbox" checked={data.movers} onChange={set("movers")} className="h-5 w-5 accent-[#FFC400]" />
            {f.movers}
          </label>

          <fieldset className="sm:col-span-2 lg:col-span-3">
            <legend className="text-[14px] font-bold">{f.car}</legend>
            <div className="mt-1.5 grid gap-2 sm:grid-cols-3">
              {f.cars.map((c, i) => (
                <label key={c} className="cursor-pointer">
                  <input
                    type="radio"
                    name="car"
                    value={i}
                    checked={data.car === i}
                    onChange={() => setData((d) => ({ ...d, car: i }))}
                    className="peer sr-only"
                  />
                  <span className="flex min-h-[48px] items-center justify-center rounded-xl border border-line bg-white px-4 text-center text-[15px] font-bold transition hover:border-ink peer-checked:border-brand peer-checked:bg-brand peer-focus-visible:outline peer-focus-visible:outline-[3px] peer-focus-visible:outline-offset-2 peer-focus-visible:outline-ink">
                    {c}
                  </span>
                </label>
              ))}
            </div>
          </fieldset>

          <div className="flex flex-col items-start gap-3 sm:col-span-2 sm:flex-row sm:items-center lg:col-span-3">
            <button type="submit" className="btn-wa w-full sm:w-auto">
              <ChatIcon size={20} />
              {f.submit}
            </button>
            <p className="text-[13px] text-muted">{f.note}</p>
          </div>
        </form>
      </div>
    </section>
  );
};

export default OrderForm;
