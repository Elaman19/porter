import { styles } from "../styles";
import { phone, tg, wa } from "../assets";

const Contact = () => {

  return (
    <div className={`xl:mt-12 sm:px-16 px-6 m-auto sm:w-[40%] w-[90%]`}>
      <div className='flex-[0.75] bg-black-100 p-8 rounded-2xl'>
        <h3 className={styles.sectionHeadText}>Контакты</h3>

        <form className='mt-12 flex flex-col gap-8'>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Позвонить</span>
            <a 
              href="tel:+996702115669"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium hover:bg-violet-600'
            >
                <div className="flex items-center justify-star">
                  <div className="max-w-full max-h-full">
                    <img
                      src={phone}
                      alt='phone1'
                      className='w-[28px] h-[28px] object-contain'
                      onClick={() => {}}
                    /> 
                  </div>
                  <div className="pl-[2px]">+996 702 115 669</div> 
                </div>
            </a>
            <br/>
            <a 
              href="tel:+996702115669"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium hover:bg-violet-600'
            >
                <div className="flex items-center justify-star">
                  <div className="max-w-full max-h-full">
                    <img
                      src={phone}
                      alt='phone1'
                      className='w-[28px] h-[28px] object-contain'
                      onClick={() => {}}
                    /> 
                  </div>
                  <div className="pl-[2px]">+996 703 911 101</div> 
                </div>
            </a>
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Написать</span>
            <a 
              href="whatsapp://send?text=Добрый день! Хотел бы воспользоваться услугой портер такси.&phone=+996702115669"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium hover:bg-violet-600'  
            >
              <div className="flex items-center justify-star">
                <div className="max-w-full max-h-full">
                  <img
                    src={wa}
                    alt='wa'
                    className='w-[28px] h-[28px] object-contain'
                    onClick={() => {}}
                  /> 
                </div>
                <div className="pl-[5px]">WhatsApp</div> 
              </div>
            </a>

            <br/>

            <a 
              href="https://t.me/+996702115669"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium hover:bg-violet-600' 
              target="_blank" 
            >
              <div className="flex items-center justify-star">
                <div className="max-w-full max-h-full">
                  <img
                    src={tg}
                    alt='wa'
                    className='w-[28px] h-[28px] object-contain'
                    onClick={() => {}}
                  /> 
                </div>
                <div className="pl-[5px]">Telegram</div> 
              </div>
            </a>
          </label>
          
        </form>
      </div>
    </div>
  );
};

export default Contact
