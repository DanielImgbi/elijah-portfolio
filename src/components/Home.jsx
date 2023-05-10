import { FaArrowDown } from "react-icons/fa";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <main
      id="#home"
      className="w-full h-[90vh] bg-[rgba(0,0,0,0.75)] flex flex-col items-center justify-center text-white space-y-7"
    >
      <h2 className="text-xl md:text-4xl">Welcome</h2>
      <h1 className=" flex items-center font-semibold text-3xl space-x-1 md:space-x-3 md:text-7xl md:font-bold">
        <span>I&apos;m a Graphics Designer</span>
        <div className="w-1 h-11 md:h-20 bg-white mt-2"></div>
      </h1>
      <p className=" text-gray-300 md:text-2xl">
        based in PortHarcourt, Nigeria.
      </p>
      <button className="text-green-600 px-7 py-3 rounded-full border border-green-600 hover:bg-green-600 hover:text-white hover:font-semibold">
        Hire Me
      </button>
      <motion.a
        href=""
        initial={{ y: 5 }}
        animate={{ y: 120 }}
        transition={{ delay: 2.5, duration: 4, repeat: Infinity }}
      >
        <FaArrowDown className="text-xl" />
      </motion.a>
    </main>
  );
};

export default Home;
