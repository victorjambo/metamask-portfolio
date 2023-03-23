import React from "react";

interface ISkeletonLoader {
  rounded?: string;
  height?: string;
  width?: string;
  extraClasses?: string;
  bg?: string;
}
const SkeletonLoader: React.FC<ISkeletonLoader> = ({
  rounded = "rounded-full",
  height = "5",
  width = "6",
  bg = "bg-slate-200",
  extraClasses
}) => {
  return (
    <div
      className={`animate-pulse ${bg} ${rounded} h-${height} w-${width} ${extraClasses}`}
    />
  );
};

export default SkeletonLoader;
