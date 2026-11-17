import { useLang } from "../i18n";
import { SITE, telHref, waHref } from "../config/site";
import { cars } from "../assets";
import { PhoneIcon, ChatIcon, CheckIcon } from "./Icons";

const Hero = () => {
  const { t } = useLang();
  const h = t.hero;

  return (
    <section id="top" className="relative overflow-hidden pt-24 sm:pt-28">
      <div
        aria-hidden="true"
        className="absolute -right-32 -top-32 h-[520px] w-[520px] rounded-full bg-brand/25 blur-3xl"
      />
      <div className="container-site relative grid items-center gap-10 pb-14 lg:grid-cols-[1.1fr_1fr] lg:gap-14 lg:pb-20">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-line bg-white px-3.5 py-1.5 text-[13px] font-bold shadow-card">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-wa opacity-60" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-wa" />
            </span>
            {h.badge}
          </span>

          <h1 className="mt-5 text-[34px] font-extrabold leading-[1.08] tracking-tight xs:text-[40px] sm:text-[52px] lg:text-[56px]">
            {h.title}{" "}
            <span
              className="bg-[linear-gradient(transparent_62%,#FFC400_62%,#FFC400_92%,transparent_92%)] [box-decoration-break:clone] [-webkit-box-decoration-break:clone]"
            >
              {h.accent}
            </span>
          </h1>

          <p className="mt-5 max-w-xl text-[17px] leading-relaxed text-muted sm:text-[19px]">{h.lead}</p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={telHref(SITE.phones[0])}
              aria-label={`${h.call} ${SITE.phones[0].display}`}
              className="btn-primary !min-h-[56px] whitespace-nowrap text-[16px]"
            >
              <PhoneIcon size={20} />
              {SITE.phones[0].display}
            </a>
            <a
              href={waHref(h.waText)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-wa !min-h-[56px] whitespace-nowrap text-[16px]"
            >
              <ChatIcon size={20} />
              {h.whatsapp}
            </a>
          </div>

          <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2.5">
            {h.chips.map((c) => (
              <li key={c} className="flex items-center gap-2 text-[14px] font-semibold">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-brand">
                  <CheckIcon size={12} />
                </span>
                {c}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative mx-auto w-full max-w-[520px]">
          <div aria-hidden="true" className="absolute -inset-3 rotate-2 rounded-[28px] bg-brand" />
          <div className="relative overflow-hidden rounded-3xl border border-line bg-white p-5 shadow-lift sm:p-7">
            <img
              src={cars}
              alt={h.imgAlt}
              width="718"
              height="347"
              fetchpriority="high"
              className="h-auto w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
