# Портер Такси Бишкек — сайт-визитка

Одностраничный сайт службы грузоперевозок: Портер и Спринтер такси, грузчики, переезды, вывоз мусора. Русский и кыргызский языки, адаптивный дизайн, быстрая заявка через WhatsApp.

Стек: Vite 4 · React 18 · Tailwind CSS 3.

## Запуск

```bash
npm install
npm run dev      # разработка на http://localhost:5173
npm run build    # production-сборка в dist/
npm run preview  # проверка сборки
```

## Где что менять

| Что | Где |
|---|---|
| Телефоны, WhatsApp, Telegram | `src/config/site.js` |
| Тексты на русском | `src/i18n/ru.js` |
| Тексты на кыргызском | `src/i18n/ky.js` |
| Цвета и шрифты | `tailwind.config.cjs`, `src/index.css` |
| Фото | `src/assets/` |
| Title, description, разметка для поисковиков | `index.html` |

Цены на сайте намеренно не указаны — вместо них кнопки «Узнать стоимость», которые открывают WhatsApp с готовым сообщением.

## Фото

Все фото — с бесплатных стоков (коммерческое использование разрешено, указывать автора не обязательно). Файлы обрезаны до 3:2 и сжаты в WebP.

| Файл | Источник | Автор |
|---|---|---|
| `porter.webp` | [Pexels](https://www.pexels.com/photo/pick-up-truck-driving-down-a-street-in-a-city-21576108/) | Elina Volkova |
| `sprinter.webp` | [Unsplash](https://unsplash.com/photos/gssQ3d6_zxk) | Negley Stockman |
| `movers.webp` | [Pexels](https://www.pexels.com/photo/two-men-carrying-a-sofa-7464266/) | RDNE Stock project |
| `flat.webp` | [Pexels](https://www.pexels.com/photo/empty-apartment-with-packed-carton-boxes-before-moving-4246119/) | Ketut Subiyanto |
| `office.webp` | [Pexels](https://www.pexels.com/photo/man-carrying-a-box-with-office-sign-7218678/) | Blue Bird |
| `intercity.webp` | [Pexels](https://www.pexels.com/photo/trucks-on-road-with-forest-on-hill-behind-20560700/) | Pepe Lepu |
| `furniture.webp` | [Pexels](https://www.pexels.com/photo/hammer-screwdrivers-and-furniture-assembly-instructions-5805494/) | Athena Sandrini |
| `waste.webp` | [Unsplash](https://unsplash.com/photos/large-pile-of-rubble-and-construction-debris-B6OIfOM1G2g) | Sergej (skstrannik) |
| `sewing.webp` | [Unsplash](https://unsplash.com/photos/people-sorting-textile-scraps-in-warehouse-pouTfHUG430) | Francois Le Nguyen |

Это не снимки ваших машин. Когда будут настоящие фото Портера и Спринтера, положите их в `src/assets/` под именами `porter.webp` и `sprinter.webp`.
