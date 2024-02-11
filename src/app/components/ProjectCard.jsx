"use client";
import Image from "next/image";
import React from "react";
import { FaCode } from "react-icons/fa";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import Link from "next/link";

const ProjectCard = ({ imgUrl, title, description }) => {
  return (
    <div className="   cursor-pointer rounded-lg hover:text-black hover:shadow-lg hover:shadow-purple-600">
      <div className=" text-white relative group">
        <Image src={imgUrl} alt="" className="h-52 md:h-68 rounded-xl p-1" />
        <div className="overlay absolute top-0 left-0 w-full h-full bg-gray-800 bg-opacity-0  group-hover:flex group-hover:bg-opacity-70 transition-all duration-700 cursor-pointer rounded-lg p-1 hidden hover:flex hover:items-center hover:justify-center">
          <Link
            href={"/"}
            className="mr-4 h-14 w-14 relative flex justify-center items-center border-2 rounded-full border-gray-400 hover:border-purple-600 hover:transform hover:-translate-y-1 trans-eff active:scale-75"
          >
            <FaCode className="h-6 w-6 m-2 cursor-pointer text-gray-400 hover:text-purple-600 trans-eff " />
          </Link>
          <Link
            href={"/"}
            className="h-14 w-14 relative border-2 flex justify-center items-center rounded-full border-gray-400 hover:border-purple-600 hover:transform hover:-translate-y-1 trans-eff active:scale-75"
          >
            <MdOutlineRemoveRedEye className="h-6 w-6 m-2 cursor-pointer text-gray-400 hover:text-purple-600 trans-eff " />
          </Link>
        </div>
      </div>
      <div>
        <h5 className="text-2xl font-semibold text-gray-200 pt-2 px-2">
          {title}
        </h5>
        <p className=" text-gray-400  py-4 px-2 ">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
