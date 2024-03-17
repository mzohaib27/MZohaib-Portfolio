"use client";
import React from "react";
import { HeroImage } from "../utils/constants";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section>
      <div className="grid grid-cols-1 lg:grid-cols-2 py-12 lg:py-24 items-center">
        <motion.div
          initial={{ x: -300, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="flex flex-col px-4 py-8"
        >
          <h1 className="flex flex-col text-3xl md:text-4xl lg:text-6xl xl:text-7xl font-bold text-white">
            <span className="text-purple-600 text-shadow-xl"> Hello, I am</span>
            {/* <span>Muhammad Zohaib Hasan</span> */}
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "Muhammad Zohaib Hasan",
                3000, // wait 1s before replacing "Mice" with "Hamsters"
                "Front-End Developer",
                3000,
                "React Developer",
                3000,
                "MERN Stack Developer",
                3000,
              ]}
              wrapper="span"
              speed={5}
              style={{ display: "inline-block" }}
              repeat={Infinity}
            />
          </h1>
          <p className="text-gray-400 text-justify text-base md:text-lg lg:text-xl font-light py-4">
            A Web Developer having 3 years of Experience in Web development. I
            can build beautifull websites having awesome UI"s.
          </p>
          <div className="md:flex gap-4">
            <button className="px-4 py-2 m-2 w-full sm:w-fit rounded-full text-white bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600  hover:bg-gradient-to-b hover:from-black hover:to-black border-2 hover:border-white hover:text-white border-black trans-eff active:scale-75">
              Hire Me
            </button>
            <button className="px-4 py-2 m-2 w-full sm:w-fit rounded-full text-white bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600  hover:bg-gradient-to-b hover:from-black hover:to-black border-2 hover:border-white hover:text-white border-black trans-eff active:scale-75">
              Download CV
            </button>
          </div>
        </motion.div>
        <motion.div className="relative lg:px-12 items-center justify-center">
          <motion.div
            initial={{ y: 300, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="absolute flex z-10 items-center justify-center  sm:-translate-x-12 -translate-y-2"
          >
            <Image
              src={HeroImage}
              className=" rounded-full items-center shadow-lg shadow-black"
              alt="hero-image"
              height={250}
              width={250}
            />
          </motion.div>
          <motion.div
            initial={{ y: 300, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-gradient-to-b from-fuchsia-600 via-blue-600 to-black shadow-2xl shadow-white rounded-full  flex"
          ></motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
