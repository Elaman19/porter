import React, { useEffect, useState } from "react"
import { styles } from "../styles"
import { wa, phone } from "../assets"

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`${
        styles.paddingX
      } w-full flex items-center py-5 fixed top-0 z-20 ${
        scrolled ? "bg-primary" : "bg-transparent"
      }`}
    >
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        
        <p className='text-white text-[18px] font-bold cursor-pointer flex hover:bg-violet-900'>
          <a href="tel:+996702115669">
            <div className="flex items-center justify-center">
              <div className="max-w-full max-h-full">
                <img
                  src={phone}
                  alt='phone'
                  className='w-[28px] h-[28px] object-contain'
                  onClick={() => {}}
                /> 
              </div>
              <div>+996 702 115 669</div> 
            </div>
          </a>
        </p>

        <div className='flex flex-1 justify-end items-center '>
          <a href="whatsapp://send?text=Добрый день! Хотел бы воспользоваться услугой портер такси.&phone=+996702115669">
            <div className="flex items-center justify-start hover:bg-violet-900">
                <div className="max-w-full max-h-full">
                  <img
                    src={wa}
                    alt='wa'
                    className='w-[28px] h-[28px] object-contain'
                  />
                </div>
                <div className="pl-[5px]">WhatsApp</div> 
              </div>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
