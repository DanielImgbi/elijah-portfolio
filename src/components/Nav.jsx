import { motion } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";

const Nav = ({ handleNavToggle, toggled }) => {
  return (
    <nav className="w-full bg-gray-400 bg-opacity-60 backdrop-filter backdrop-blur-md fixed p-2 flex items-center justify-between text-black z-30">
      <span className="h-16 text-3xl font-extrabold flex items-center md:text-5xl">
        EliJah
      </span>
      <div id="desktop" className="hidden space-x-10 pr-10 md:flex">
        <a href="#home" className="text-xl hover:text-green-500">
          Home
        </a>
        <a href="#about" className="text-xl hover:text-green-500">
          About
        </a>
        <a href="#service" className="text-xl hover:text-green-500">
          Service
        </a>
        <a href="#resume" className="text-xl hover:text-green-500">
          Resume
        </a>
        <a href="#portfolio" className="text-xl hover:text-green-500">
          Portfolio
        </a>
        <a href="#contact" className="text-xl hover:text-green-500">
          Contact
        </a>
      </div>
      <>
        {toggled === false ? (
          <motion.div
            className="md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            onClick={handleNavToggle}
            transition={{ duration: 3, delay: 1 }}
          >
            <FaBars className="text-xl hover:text-green-400 cursor-pointer" />
          </motion.div>
        ) : (
          <motion.div
            className="md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            onClick={handleNavToggle}
            transition={{ duration: 3, delay: 1 }}
          >
            <FaTimes className="text-xl hover:text-green-400 cursor-pointer" />
          </motion.div>
        )}
      </>
    </nav>
  );
};

export default Nav;
