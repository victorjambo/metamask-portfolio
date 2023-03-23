import React from "react";

const Loader: React.FC = () => {
  return (
    <div className="border border-slate-700 rounded-lg w-full">
      <div className="grid grid-flow-col grid-cols-5 w-full p-2 animate-pulse">
        <div className="col-span-2 flex items-center">
          <div className="bg-slate-200 w-10 h-10 rounded-full mr-4" />
          <div className="flex flex-col">
            <div className="bg-slate-200 w-10 h-3 rounded-full mb-2" />
            <div className="bg-slate-200 w-16 h-3 rounded-full" />
          </div>
        </div>

        <div className="bg-slate-200 w-16 h-3 rounded-full" />

        <div className="flex flex-col">
          <div className="bg-slate-200 w-16 h-3 rounded-full mb-2" />
          <div className="bg-slate-200 w-10 h-3 rounded-full" />
        </div>

        <div className="flex flex-col">
          <div className="bg-slate-200 w-16 h-3 rounded-full mb-2" />
          <div className="bg-slate-200 w-10 h-3 rounded-full" />
        </div>

        <div className="w-4" />
      </div>
    </div>
  );
};

export default Loader;
