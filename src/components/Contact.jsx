import React, { useRef } from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { slideIn } from "../utils/motion";
import { tg, wa } from "../assets";
import { SectionWrapper } from "../hoc";

const Contact = () => {
  const formRef = useRef()

  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse `}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
      >
        <h3 className={styles.sectionHeadText}>Контакты</h3>

        <form
          ref={formRef}
          className='mt-12 flex flex-col gap-8'
        >
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Позвонить</span>
            <a 
              href="tel:+996702115669"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium hover:bg-violet-600'
            >
                +996 702 115 669
            </a>
            <br/>
            <a 
              href="tel:+996702115669"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium hover:bg-violet-600'
            >
                +996 703 911 101
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
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
