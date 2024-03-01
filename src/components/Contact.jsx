import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import { wa } from "../assets";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);


  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
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
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            >
                +996 702 115 669
            </a>
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Написать</span>
            <a 
              href="whatsapp://send?text=Добрый день! Хотел бы воспользоваться услугой портер такси.&phone=+996702115669"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'  
            >
              
              <div className="flex items-center justify-start">
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
          </label>
          
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
