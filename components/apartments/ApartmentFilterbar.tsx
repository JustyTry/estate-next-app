import React from "react";

const ApartmentFilterbar = () => {
  return (
    <div className="h-24 w-full bg-teal-800">
      <ul className="flex h-full w-full items-center gap-x-8 px-16">
        <input type="text" className="h-1/3 w-1/4 rounded-lg" />
        <input type="text" className="h-1/3 w-1/4 rounded-lg" />
        <input type="text" className="h-1/3 w-1/4 rounded-lg" />

        <input type="radio" />
        <button className="w-1/6 bg-slate-100 text-red-400" value="">
          Найти
        </button>
      </ul>
    </div>
  );
};

export default ApartmentFilterbar;
