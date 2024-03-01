import {
  mobile,
  backend,
  creator,
  web,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Наши водители отлично ориентируются на местности",
    icon: web,
  },
  {
    title: "Экономьте время и деньги с нашей грузовой доставкой в Бишкек!",
    icon: mobile,
  },
  {
    title: "Мгновенно рассчитаем стоимость доставки",
    icon: backend,
  },
  {
    title: "Мы надёжно упакуем и бережно доставим ваши вещи",
    icon: creator,
  },
];


export { services };
