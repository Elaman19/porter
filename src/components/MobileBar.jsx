import { useLang } from "../i18n";
import { SITE, telHref, waHref } from "../config/site";
import { PhoneIcon, ChatIcon } from "./Icons";

// Закреплённая панель «Позвонить / WhatsApp» — только на телефонах
const MobileBar = () => {
  const { t } = useLang();
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-line bg-paper/95 p-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] backdrop-blur sm:hidden">
      <div className="grid grid-cols-2 gap-3">
        <a href={telHref(SITE.phones[0])} className="btn-primary">
          <PhoneIcon size={18} />
          {t.bar.call}
        </a>
        <a href={waHref(t.hero.waText)} target="_blank" rel="noopener noreferrer" className="btn-wa">
          <ChatIcon size={18} />
          {t.bar.whatsapp}
        </a>
      </div>
    </div>
  );
};

export default MobileBar;
