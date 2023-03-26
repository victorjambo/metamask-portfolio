import React from "react";

const Badge: React.FC<{ txt: string | number }> = ({ txt }) => {
  return (
    <div className="text-xs px-1 rounded-md bg-white text-[#262833]">{txt}</div>
  );
};

export default Badge;
