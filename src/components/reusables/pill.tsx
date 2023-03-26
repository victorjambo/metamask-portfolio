import React from "react";

const Pill: React.FC<{ children: JSX.Element; padding?: string }> = ({
  children,
  padding = "px-3.5 py-2",
}) => {
  return (
    <div
      className={`flex space-x-1 justify-between items-center rounded-full border ${padding} text-sm border-[#3e3f4b] cursor-pointer`}
    >
      {children}
    </div>
  );
};

export default Pill;
