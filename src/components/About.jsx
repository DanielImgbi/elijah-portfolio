import { motion } from "framer-motion";

const About = () => {
  return (
    <section
      id="about"
      className="w-full flex flex-col bg-black py-5 space-y-10 md:p-10 md:px-16 md:space-y-16"
    >
      <h1 className="text-gray-200 opacity-30 text-[40px] px-1 font-extrabold text-center tracking-[0.4em] md:p-5 md:text-7xl">
        ABOUT ME
      </h1>
      <div className="flex flex-col space-y-5 px-5 md:flex-row md:space-y-0 md:space-x-10">
        <div className="text-white text-center space-y-5 md:text-start md:w-3/5 md:space-y-7">
          <h2 className="text-white text-3xl font-bold leading-[45px] md:text-4xl">
            I&apos;m <span className="text-green-600">Elijah Chukwudi</span>, a
            Content Writer
          </h2>
          <p className="text-xl text-gray-400  leading-[30px]">
            I help you build brand for your business at an affordable price.
            Thousands of clients have procured exceptional results while working
            with our dedicated team. when an unknown printer took a galley of
            type and scrambled it to make a type specimen book.
          </p>
          <p className="text-xl text-gray-400  leading-[30px]">
            Delivering work within time and budget which meets client’s
            requirements is our moto. Lorem Ipsum has been the industry&apos;s
            standard dummy text ever when an unknown printer took a galley.
          </p>
        </div>
        <div className="flex flex-col space-y-2 md:w-1/3">
          <ul className="flex flex-col py-5">
            <li className="py-[10px] border-b-[1px] border-[rgba(200,200,200,0.19)] text-lg text-gray-300">
              <span className="font-semibold">Name:</span> Elijah Chukwudi
            </li>
            <li className="py-[10px] text-green-600  border-b-[1px] border-[rgba(200,200,200,0.19)] text-lg ">
              <span className="font-semibold text-gray-300">Email:</span>{" "}
              example@mail.com
            </li>
            <li className="py-[10px] border-b-[1px] border-[rgba(200,200,200,0.19)] text-lg text-gray-300">
              <span className="font-semibold">Age:</span> 27 years
            </li>
            <li className="py-[10px] text-green-600  border-b-[1px] border-[rgba(200,200,200,0.19)] text-lg ">
              <span className="font-semibold text-gray-300">From:</span>{" "}
              PortHarcourt, Nigeria
            </li>
          </ul>
          <motion.a
            download
            whileHover={{ scale: 1.1 }}
            href="/elijah_CV.pdf"
            className="w-[150px] flex justify-center items-center py-3   bg-green-500 rounded-full shadow-md text-lg text-white font-bold hover:bg-green-600"
          >
            Download CV
          </motion.a>
        </div>
      </div>
      <div className="grid grid-cols-2 grid-rows-2 px-5 md:flex md:px-20">
        <div className="flex flex-col pt-2 justify-center items-center border-r border-b border-[rgba(154,152,152,0.58)] border-dotted md:border-b-0 md:pt-0 md:p-5 md:border-r-0 md:w-72 md:py-5">
          <h1 className="text-[42px] p-2 text-gray-400 font-bold text-6xl">5+</h1>
          <p className="text-xl text-gray-200 pb-2 px-1">Years Experience</p>
        </div>
        <div className="flex flex-col pt-2 justify-center items-center border-b border-[rgba(154,152,152,0.58)] border-dotted md:border-b-0 md:pt-0 md:p-5 md:border-r md:border-l md:w-72 md:py-5">
          <h1 className="text-[42px] p-2 text-gray-400 font-bold text-6xl">17+</h1>
          <p className="text-xl text-gray-200 pb-2 px-1">Happy Clients</p>
        </div>
        <div className="flex flex-col pt-2 justify-center items-center border-r border-[rgba(154,152,152,0.58)] border-dotted md:border-b-0 md:pt-0 md:p-5 md:border-r md:border-l md:w-72 md:py-5">
          <h1 className="text-[42px] p-2 text-gray-400 font-bold text-6xl">50+</h1>
          <p className="text-xl text-gray-200 pb-2 px-1">Projects Done</p>
        </div>
        <div className="flex flex-col pt-2 justify-center items-center border-[rgba(154,152,152,0.58)] border-dotted md:border-b-0 md:pt-0 md:p-5 md:border-r-0 md:w-72 md:py-5">
          <h1 className="text-[42px] p-2 text-gray-400 font-bold text-6xl">8+</h1>
          <p className="text-xl text-gray-200 pb-2 px-1">Get Awards</p>
        </div>
      </div>
    </section>
  );
};

export default About;
