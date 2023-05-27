import { motion } from "framer-motion";
import { FaTwitter, FaTelegram, FaInstagram } from "react-icons/fa";

const DropDown = ({ handleNavToggle }) => {
  return (
    <motion.div
      initial={{ x: "-100vw" }}
      animate={{ x: 0 }}
      transition={{ duration: 0.3, delay: 0.2 }}
      className="w-full h-[92vh] fixed top-[8.6vh] bg-black bg-opacity-95 backdrop-filter backdrop-blur-md z-30"
    >
      <div className="w-full h-4/5 flex flex-col space-y-10 justify-center items-center">
        <a
          href="#home"
          onClick={handleNavToggle}
          className="text-4xl text-gray-400 px-3  hover:border-b-2 hover:border-green-500 hover:text-green-500"
        >
          Home
        </a>
        <a
          href="#about"
          onClick={handleNavToggle}
          className="text-4xl text-gray-400 px-3  hover:border-b-2 hover:border-green-500 hover:text-green-500"
        >
          About
        </a>
        <a
          href="#service"
          onClick={handleNavToggle}
          className="text-4xl text-gray-400 px-3  hover:border-b-2 hover:border-green-500 hover:text-green-500"
        >
          Service
        </a>
        <a
          href="#resume"
          onClick={handleNavToggle}
          className="text-4xl text-gray-400 px-3  hover:border-b-2 hover:border-green-500 hover:text-green-500"
        >
          Resume
        </a>
        <a
          href="#portfolio"
          onClick={handleNavToggle}
          className="text-4xl text-gray-400 px-3  hover:border-b-2 hover:border-green-500 hover:text-green-500"
        >
          Portfolio
        </a>
        <a
          href="#contact"
          onClick={handleNavToggle}
          className="text-4xl text-gray-400 px-3  hover:border-b-2 hover:border-green-500 hover:text-green-500"
        >
          Contact
        </a>
      </div>
      <div className="flex justify-center items-center space-x-10 h-20%">
        <a href="#twitter" target="_blank" onClick={handleNavToggle}>
          <FaTwitter className="text-4xl text-gray-400 hover:text-blue-400" />
        </a>
        <a href="#telegram" target="_blank" onClick={handleNavToggle}>
          <FaTelegram className="text-4xl text-gray-400 hover:text-blue-600" />
        </a>
        <a href="#instagram" target="_blank" onClick={handleNavToggle}>
          <FaInstagram className="text-4xl text-gray-400 hover:text-red-500" />
        </a>
      </div>
    </motion.div>
  );
};

export default DropDown;
