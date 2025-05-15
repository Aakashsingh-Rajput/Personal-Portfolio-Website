import { FaLinkedin, FaGithub, FaStackOverflow } from 'react-icons/fa6';
import { SiGmail, SiX } from 'react-icons/si';

const Footer = () => {
  return (
    <footer className="w-full px-6 py-10 mt-20 relative z-10 bg-transparent">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 border-t border-gray-700 pt-6">

        {/* Left: Name + Contact */}
        <div className="text-center md:text-left">
          <h2 className="text-white text-lg font-semibold tracking-wide">
            Aakashsingh Rajput
          </h2>
          <p className="text-gray-400 text-sm">
            Full Stack Developer • Open Source Enthusiast
          </p>
        </div>

        {/* Center: Social Links */}
        <div className="flex gap-5 text-white text-[22px]">
          <a href="mailto:aakashrajput.amcec@gmail.com" target="_blank" rel="noopener noreferrer" aria-label="Gmail">
            <SiGmail className="hover:text-[#EA4335] transition duration-300" />
          </a>
          <a href="https://www.linkedin.com/in/aakashsingh-rajput-5459bb25a" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FaLinkedin className="hover:text-[#0077B5] transition duration-300" />
          </a>
          <a href="https://github.com/Aakashsingh-Rajput" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <FaGithub className="hover:text-gray-400 transition duration-300" />
          </a>
          <a href="https://x.com/Aakash27Rajput" target="_blank" rel="noopener noreferrer" aria-label="X">
            <SiX className="hover:text-white transition duration-300" />
          </a>
          <a href="https://stackoverflow.com/users/30375527/aakashsingh-rajput" target="_blank" rel="noopener noreferrer" aria-label="Stack Overflow">
            <FaStackOverflow className="hover:text-[#F48024] transition duration-300" />
          </a>
        </div>

        {/* Right: Tech Credits */}
        <div className="text-center md:text-right text-sm text-gray-400 leading-relaxed">
          <p>© {new Date().getFullYear()} Aakashsingh Rajput</p>
          <p>
            Built with&nbsp;
            <span className="text-white">React</span>,&nbsp;
            <span className="text-white">Tailwind CSS</span>,&nbsp;
            <span className="text-white">Three.js</span>,&nbsp;
            <span className="text-white">Framer Motion</span>,&nbsp;and&nbsp;
            <span className="text-white">Vite</span>.
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
