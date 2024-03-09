import { styles } from "../styles";
import { services } from "../constants";

const ServiceCard = ({ index, title, icon }) => (
    <div className='flex-1 sm:w-[350px] sm:min-w-[350px] w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'>
      <div className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'>
        <img
          src={icon}
          alt='web-development'
          className='w-50 h-50 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </div>
);

const About = () => {
  return (
    <div className="sm:px-16 px-6 m-auto sm:w-[65%] w-[90%] mt-10">
      <div>
        <h3 className={styles.sectionHeadText}>Услуги</h3>
      </div>

      <p className='mt-4 text-secondary text-[17px] max-w-5xl leading-[30px]'>
        
        Мы предоставляем высококачественные и надежные услуги грузоперевозок для удовлетворения всех ваших потребностей 
        в транспортировке. 
        Грузоперевозки осуществляются профессиональными водителями, 
        а наши грузчики отличаются аккуратностью и ответственным отношением к работе. 
        <br/>
        <ul class="list-inside">
        <span className='text-[#915EFF] text-2xl'>Наши услуги включают:</span>
          <li>
          <span className='text-[#915EFF]'>Грузоперевозки по всей стране:</span> Обеспечиваем эффективные и своевременные грузоперевозки от одного города к другому. Независимо от объема и типа груза, мы гарантируем безопасность и точность доставки.
          </li>
          <li>
          <span className='text-[#915EFF]'>Городские грузоперевозки в Бишкеке:</span> Наши службы транспортировки внутри города обеспечивают быструю и надежную доставку в пределах Бишкека. Современный транспортный парк и опытные водители гарантируют эффективное выполнение заказов.
          </li>
          <li>
          <span className='text-[#915EFF]'>Полный спектр грузовых автомобилей:</span> Мы предлагаем разнообразные транспортные решения, включая грузовики различной грузоподъемности, фургоны и специализированные транспортные средства.
          </li>
          <li>
          <span className='text-[#915EFF]'>Гибкие тарифы и скидки:</span> Мы предоставляем конкурентоспособные цены и гибкую систему скидок для постоянных клиентов.
          </li>
        </ul>
        <br/>
        Независимо от масштаба вашего бизнеса или объема груза, мы готовы обеспечить эффективную и безопасную доставку в любую точку страны или по городу Бишкек.
        <br/>
        Свяжитесь с нами уже сегодня и доверьте свои грузы профессионалам грузоперевозок!
      </p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </div>
  );
};

export default About
