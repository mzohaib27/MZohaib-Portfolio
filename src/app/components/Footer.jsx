import React from "react";
import Animate from "../utils/motion";

const Footer = () => {
  return (
    <Animate xpos={-300}>
      <div className="border-t-2 border-gray-400 text-center">
        <h1 className="text-base text-gray-400 mt-2">
          All Rights reserved &copy; mzohaib27.dev (2024)
        </h1>
      </div>
    </Animate>
  );
};

export default Footer;
