import {
  FaFacebook,
  FaTwitter,
  FaWhatsapp,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { useState } from "react";
const Header = () => {
  const [toggled, setToggle] = useState(false);

  const handleNavToggle = () => {
    if (!toggled) {
      setToggle(true);
    } else {
      setToggle(false);
    }
  };

  return (
    <header className="max-w-full h-[10vh] px-6 xl:px-4 py-4 flex justify-between items-center overflow-x-hidden overflow-y-hidden">
      <span className="h-16 text-3xl xl:text-4xl font-extrabold flex items-center">
        EliJah
      </span>

      <nav className="h-100% w-70% px-3 flex justify-end xl:justify-between items-center">
        <ul className="w-100% xl:w-70% h-100% px-4 my-2 xl:my-0 text-1xl font-semibold absolute xl:relative top-14 xl:top-0 left-0 hidden xl:flex xl:justify-between bg-black xl:bg-transparent bg-opacity-60 ">
          <li className="cursor-pointer text-white xl:text-black p-4 xl:px-1 my-2 xl:my-0 font-semibold border-b xl:border-y-0 border-slate-500 hover:text-white hover:bg-gray-600 hover:bg-opacity-30">
            Home
          </li>
          <li className="cursor-pointer text-white xl:text-black p-4 xl:px-1 my-2 xl:my-0 font-semibold border-b xl:border-y-0 border-slate-500 hover:text-white hover:bg-gray-600 hover:bg-opacity-30">
            About
          </li>
          <li className="cursor-pointer text-white xl:text-black p-4 xl:px-1 my-2 xl:my-0 font-semibold border-b xl:border-y-0 border-slate-500 hover:text-white hover:bg-gray-600 hover:bg-opacity-30">
            What I Do
          </li>
          <li className="cursor-pointer text-white xl:text-black p-4 xl:px-1 my-2 xl:my-0 font-semibold border-b xl:border-y-0 border-slate-500 hover:text-white hover:bg-gray-600 hover:bg-opacity-30">
            Resume
          </li>
          <li className="cursor-pointer text-white xl:text-black p-4 xl:px-1 my-2 xl:my-0 font-semibold border-b xl:border-y-0 border-slate-500 hover:text-white hover:bg-gray-600 hover:bg-opacity-30">
            Protfolio
          </li>
          <li className="cursor-pointer text-white xl:text-black p-4 xl:px-1 my-2 xl:my-0 font-semibold border-b xl:border-y-0 border-slate-500 hover:text-white hover:bg-gray-600 hover:bg-opacity-30">
            Client
          </li>
          <li className="cursor-pointer text-white xl:text-black p-4 xl:px-1 my-2 xl:my-0 font-semibold border-b xl:border-y-0 border-slate-500 hover:text-white hover:bg-gray-600 hover:bg-opacity-30">
            Contacts
          </li>
        </ul>

        {/* // i couldn't manage the toggle UX so i duplicatedd the nav. */}
        {/* // please do you have any alternative approach to that? */}

        {toggled && (
          <ul className="w-100% xl:w-70% h-100% px-4 my-2 xl:my-0 text-1xl font-semibold absolute xl:relative top-14 xl:top-0 left-0 block xl:flex xl:justify-between bg-black xl:bg-transparent bg-opacity-60 ">
            <li className="cursor-pointer text-white xl:text-black p-4 xl:px-1 my-2 xl:my-0 font-semibold border-b xl:border-y-0 border-slate-500 hover:text-white hover:bg-gray-600 hover:bg-opacity-30">
              Home
            </li>
            <li className="cursor-pointer text-white xl:text-black p-4 xl:px-1 my-2 xl:my-0 font-semibold border-b xl:border-y-0 border-slate-500 hover:text-white hover:bg-gray-600 hover:bg-opacity-30">
              About
            </li>
            <li className="cursor-pointer text-white xl:text-black p-4 xl:px-1 my-2 xl:my-0 font-semibold border-b xl:border-y-0 border-slate-500 hover:text-white hover:bg-gray-600 hover:bg-opacity-30">
              What I Do
            </li>
            <li className="cursor-pointer text-white xl:text-black p-4 xl:px-1 my-2 xl:my-0 font-semibold border-b xl:border-y-0 border-slate-500 hover:text-white hover:bg-gray-600 hover:bg-opacity-30">
              Resume
            </li>
            <li className="cursor-pointer text-white xl:text-black p-4 xl:px-1 my-2 xl:my-0 font-semibold border-b xl:border-y-0 border-slate-500 hover:text-white hover:bg-gray-600 hover:bg-opacity-30">
              Protfolio
            </li>
            <li className="cursor-pointer text-white xl:text-black p-4 xl:px-1 my-2 xl:my-0 font-semibold border-b xl:border-y-0 border-slate-500 hover:text-white hover:bg-gray-600 hover:bg-opacity-30">
              Client
            </li>
            <li className="cursor-pointer text-white xl:text-black p-4 xl:px-1 my-2 xl:my-0 font-semibold border-b xl:border-y-0 border-slate-500 hover:text-white hover:bg-gray-600 hover:bg-opacity-30">
              Contacts
            </li>
          </ul>
        )}

        <ul className="w-50% xl:w-15% h-80% flex justify-between items-center text-xl xl:text-2xl">
          <li className="cursor-pointer ">
            <FaTwitter />
          </li>
          <li className="cursor-pointer">
            <FaFacebook />
          </li>
          <li className="cursor-pointer">
            <FaWhatsapp />
          </li>
        </ul>
      </nav>
      <span className="block xl:hidden text-xl ml-2" onClick={handleNavToggle}>
        {/* // also i couldn't think of anyway to animate the nav,
        // just had to do  this. please if you have an alternative alert so i can improve on it */}

        {toggled ? <FaTimes /> : <FaBars />}
      </span>
    </header>
  );
};

export default Header;
