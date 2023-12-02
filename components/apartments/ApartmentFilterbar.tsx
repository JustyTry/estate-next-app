import React from "react";

const ApartmentFilterbar = () => {
  return (
    <div className="mt-8 h-20 w-full">
      <ul className="flex h-2/3 w-full items-center border-2 ">
        <input
          type="text"
          placeholder="Цена"
          className="h-full w-2/12 rounded-l-md pl-5"
        />
        <input
          type="text"
          placeholder="Площадь"
          className="h-full w-2/12 border-l-2 pl-5"
        />
        <input
          type="text"
          placeholder="Комнатность"
          className="h-full w-2/12 border-l-2 pl-5"
        />
        <input
          type="text"
          placeholder="Район"
          className="h-full w-5/12 border-l-2 pl-5"
        />

        <button
          className="h-full w-1/12 rounded-r-md bg-sky-400 text-white"
          value=""
        >
          Найти
        </button>
      </ul>
    </div>
  );
};

export default ApartmentFilterbar;
