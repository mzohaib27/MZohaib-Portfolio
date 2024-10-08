import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Animate from "../utils/motion";
import { TypeAnimation } from "react-type-animation";

const EmailSection = () => {
  return (
    <section className="flex relative flex-col items-center justify-center my-8 md:my-12 py-6 md:py-12 gap-4">
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-700 to-transparent rounded-full h-24 w-24 md:h-80 md:w-80 z-0 absolute transform translate-y-32 "></div>
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-fuchsia-700 to-transparent rounded-full h-24 w-24  z-0 absolute transform translate-x-12 md:translate-x-44 shadow-lg shadow-fuchsia-700"></div>
      <h1 className="text-3xl font-bold border-b-2 border-white text-white">
        Contact
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 p-1 md:p-6 ">
        <div className="flex flex-col space-y-4">
          <h1 className="text-2xl font-bold text-white my-2">
            Let&apos;s Connect
            {/* <p className="text-purple-600">
              <TypeAnimation
                sequence={[
                  "React",
                  3000,
                  "Node.js",
                  3000,
                  "Express.js",
                  3000,
                  "MongoDB",
                  3000,
                ]}
                repeat={Infinity}
                wrapper="span"
                speed={4}
                style={{ display: "inline-block" }}
              />
            </p> */}
          </h1>

          <p className="text-gray-400 mb-4 max-w-md">
            I am currently looking for new oppurtunities, my inbox is always
            open. Whether you have a question or jsut want to say hi, I&apos;ll
            try my best to get back to you !!!
          </p>
          <div className="social flex flex-row gap-4">
            <a href="https://www.github.com/mzohaib27">
              <FaGithub className="w-8 h-8 text-gray-300 hover:text-purple-600 trans-eff hover:shadow-lg hover:shadow-purple-600" />
            </a>
            <a href="https://www.linkedin.com/in/mzohaib27">
              <FaLinkedin className="w-8 h-8 text-gray-300 hover:text-purple-600 trans-eff hover:shadow-lg hover:shadow-purple-600" />
            </a>
          </div>
        </div>

        <form className="my-4 md:px-12 flex flex-col gap-4">
          <Animate xpos={-300} delay={2}>
            <input
              type="email"
              id="email"
              required
              placeholder="Enter Name"
              className="px-4 py-2 text-white rounded-lg bg-gray-800 w-full focus:outline-none shadow shadow-purple-600 focus:shadow-lg focus:shadow-purple-600 trans-eff my-2"
            />
            <input
              type="email"
              id="email"
              required
              placeholder="Enter Email"
              className="px-4 py-2 text-white rounded-lg bg-gray-800 w-full focus:outline-none shadow shadow-purple-600 focus:shadow-lg focus:shadow-purple-600 trans-eff my-2"
            />
            <textarea
              type="text"
              id="subject"
              required
              placeholder="Enter Message"
              className="px-4 py-2 text-white rounded-lg bg-gray-800 w-full focus:outline-none shadow shadow-purple-600 focus:shadow-lg focus:shadow-purple-600 trans-eff my-2"
            />
            <div className="flex flex-row-reverse">
              <button
                type="submit"
                className="px-4 py-2 border-2 border-gray-400 text-white shadow shadow-purple-600 hover:shadow-lg hover:shadow-purple-600 trans-eff hover:bg-purple-600 active:scale-75 rounded-lg"
              >
                Send
              </button>
            </div>
          </Animate>
        </form>
      </div>
    </section>
  );
};

export default EmailSection;
