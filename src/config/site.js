// Единое место для контактов. Меняйте номера и ссылки только здесь.

export const SITE = {
  name: "Портер Такси Бишкек",
  city: "Бишкек",
  hours: "24/7",
  phones: [
    { display: "+996 702 115 669", raw: "+996702115669" },
    { display: "+996 703 911 101", raw: "+996703911101" },
  ],
  // Номер для WhatsApp/Telegram (формат без «+» для wa.me)
  whatsappNumber: "996702115669",
  telegramUrl: "https://t.me/+996702115669",
};

export const telHref = (phone) => `tel:${phone.raw}`;

export const waHref = (text) =>
  `https://wa.me/${SITE.whatsappNumber}${text ? `?text=${encodeURIComponent(text)}` : ""}`;
