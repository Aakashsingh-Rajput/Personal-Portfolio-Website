import { useState, useEffect } from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

import { FaLinkedin, FaGithub, FaStackOverflow } from 'react-icons/fa6';
import { SiGmail, SiX } from 'react-icons/si';

const Hero = () => {
  const fullText = "Hi, I'm Aakashsingh Rajput ";
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + fullText.charAt(index));
        setIndex((prev) => prev + 1);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [index, fullText]);

  return (
    <section className='relative w-full h-[110vh] mx-auto'>

      {/* Fullscreen & interactive canvas */}
      <div className='absolute inset-0 z-0'>
        <div className='w-[100%] h-[600px] sm:h-[600px] md:h-[800px] lg:h-[650px]'>
        <ComputersCanvas />
        </div>
      </div>

      {/* ✅ Foreground content, clickable */}
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5 z-10 pointer-events-none`}
      >
        <div className='flex flex-col justify-center items-center mt-5 pointer-events-auto'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <div className="pointer-events-auto">
          <h1 className={`${styles.heroHeadText} text-white`}>
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              className='text-[#915EFF]'
            >
              {displayedText}
              <span className='text-white animate-pulse'>|</span>
            </motion.span>
          </h1>

          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            Full Stack Developer | MERN Stack <br className='sm:block hidden' />
            Aspiring Software Developer
          </p>

          {/* ✅ Icons fully clickable */}
          <div className='flex mt-5 gap-5 text-white text-[24px]'>
            <a href='mailto:aakashrajput.amcec@gmail.com' target='_blank' rel='noopener noreferrer'>
              <SiGmail className='hover:text-[#EA4335] transition-colors duration-300' />
            </a>
            <a href='https://www.linkedin.com/in/aakashsingh-rajput-5459bb25a' target='_blank' rel='noopener noreferrer'>
              <FaLinkedin className='hover:text-[#0077B5] transition-colors duration-300' />
            </a>
            <a href='https://github.com/Aakashsingh-Rajput' target='_blank' rel='noopener noreferrer'>
              <FaGithub className='hover:text-gray-400 transition-colors duration-300' />
            </a>
            <a href='https://x.com/Aakash27Rajput' target='_blank' rel='noopener noreferrer'>
              <SiX className='hover:text-white transition-colors duration-300' />
            </a>
            <a href='https://stackoverflow.com/users/30375527/aakashsingh-rajput' target='_blank' rel='noopener noreferrer'>
              <FaStackOverflow className='hover:text-[#F48024] transition-colors duration-300' />
            </a>
          </div>
        </div>
      </div>

      {/* ✅ Scroll-down icon */}
      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center z-10 pointer-events-auto'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>

    </section>
  );
};

export default Hero;
