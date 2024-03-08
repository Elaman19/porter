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
    <div className="sm:px-16 px-6 m-auto sm:w-[65%] w-[90%]">
      <div>
        <h2 className={styles.sectionHeadText}>Услуги</h2>
      </div>

      <p className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'>
        Наша компания занимается грузовыми перевозками по всей стране. 
        Услуги компании доступны юридическим и физическим лицам. 
        Грузоперевозки по городу осуществляются профессиональными водителями, 
        а наши грузчики отличаются аккуратностью и ответственным отношением к работе. 
        Организуем переезд квартиры, дома, офиса или имущества под ключ.
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
