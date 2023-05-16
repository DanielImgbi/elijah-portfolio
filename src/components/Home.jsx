import { FaArrowDown } from "react-icons/fa";
import { motion } from "framer-motion";
import { useState, useLayoutEffect } from "react";

const Home = () => {
  const [skill, setSkill] = useState("");
  const skills = [
    "I'm a Freelancer. ",
    "I'm a Content Writer. ",
    "I'm a Graphics Designer. ",
  ];
  let i = 0;
  let e = 0;
  let isComplete = false;
  let canDelete = false;
  let holder = "";
  useLayoutEffect(() => writeEffect(), []);

  // Writting Effect Algorithm
  const writeEffect = () => {
    setInterval(() => {
      const test = (text) => setSkill(skill + text);
      if (i < skills.length) {
        let curSkill = skills[i];
        if (e < curSkill.length && isComplete === false) {
          holder += curSkill[e];
          test(holder);
          e++;
          if (e === curSkill.length) {
            isComplete = true;
            canDelete = true;
          }
        } else if (e !== 0 && canDelete === true) {
          holder = holder.slice(0, e - 2);
          test(holder);
          e--;
        } else {
          isComplete = false;
          canDelete = false;
          i++;
        }
      } else {
        i = 0;
      }
    }, 300);
  };

  return (
    <main
      id="home"
      className="w-full h-[90vh] bg-[rgba(0,0,0,0.75)] flex flex-col items-center justify-center text-white space-y-7"
    >
      <motion.h2
        initial={{ z: -4 }}
        animate={{ z: 5 }}
        className="text-xl md:text-4xl"
      >
        Welcome
      </motion.h2>
      <h1 className=" flex items-center font-semibold text-3xl space-x-1 md:space-x-3 md:text-7xl md:font-bold">
        <span>{skill}</span>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ repeat: Infinity, delay: 0.5 }}
          className="w-1 h-11 md:h-20 bg-white mt-2 md:w-2"
        ></motion.div>
      </h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0 }}
        className="text-gray-300 md:text-2xl"
      >
        based in PortHarcourt, Nigeria.
      </motion.p>
      <motion.a
        href="#see"
        animate={{ x: 0 }}
        initial={{ x: "100vw" }}
        transition={{ type: "spring", stiffness: 90 }}
        className="text-green-600 px-7 py-3 rounded-full border border-green-600 md:border-2 hover:bg-green-600 hover:text-white hover:font-semibold"
      >
        Hire Me
      </motion.a>
      <motion.a
        href="#about"
        initial={{ opacity: 0, y: 50 }}
        animate={{ y: 120, opacity: 1 }}
        transition={{ delay: 1, duration: 3, repeat: Infinity }}
      >
        <FaArrowDown className="text-xl" />
      </motion.a>
    </main>
  );
};

export default Home;
