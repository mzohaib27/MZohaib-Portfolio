import React from "react";

const ProjectTab = ({ name, onClick, isSelected }) => {
  const buttonStyle = isSelected
    ? "text-white bg-purple-500"
    : "text-gray-600 border-slate-600 hover:border-white";
  return (
    <button
      onClick={() => onClick(name)}
      className={`px-4 py-2 rounded-full  ${buttonStyle} trans-eff text-white hover:text-white hover:border-white hover:border-2 border-2 bg-transparent`}
    >
      {name}
    </button>
  );
};

export default ProjectTab;
