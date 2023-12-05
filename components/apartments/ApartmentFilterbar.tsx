"use client";
import React, { useState } from "react";

const ApartmentFilterbar = () => {
  const [openedFilter, setOpenedFilter] = useState<string>("");

  return (
    <div className="mt-8 h-20 w-full">
      <ul className="flex h-2/3 w-full items-center">
        <div className="relative h-full w-2/12">
          <button
            onClick={() => setOpenedFilter("cost")}
            className="h-full w-full rounded-l-md border-2 bg-white pl-5 text-left"
          >
            Цена
          </button>
          {openedFilter === "cost" && (
            <div className="absolute z-10 mt-2 flex h-20 w-fit items-center rounded-md border-2 bg-white">
              <input
                className="mx-4 h-8 w-28 rounded-md border-2 text-center"
                type="number"
                inputMode="numeric"
                placeholder="От"
              />
              -
              <input
                className="mx-4 h-8 w-28 rounded-md border-2 text-center"
                type="text"
                placeholder="До"
              />
            </div>
          )}
        </div>
        <div className="relative h-full w-2/12">
          <button
            onClick={() =>
              openedFilter === "square"
                ? setOpenedFilter("")
                : setOpenedFilter("square")
            }
            className="h-full w-full border-y-2 bg-white pl-5 text-left"
          >
            Площадь
          </button>
          {openedFilter === "square" && (
            <div className="absolute z-10 mt-2 flex h-20 w-fit items-center rounded-md border-2 bg-white">
              <input
                className="mx-4 h-8 w-28 rounded-md border-2 text-center"
                type="text"
                placeholder="Мин."
              />
              -
              <input
                className="mx-4 h-8 w-28 rounded-md border-2 text-center"
                type="text"
                placeholder="Макс."
              />
            </div>
          )}
        </div>
        <input
          type="text"
          placeholder="Комнатность"
          className="h-full w-2/12 border-2 pl-5"
        />
        <input
          type="text"
          placeholder="Район"
          className="h-full w-5/12 border-y-2 pl-5"
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
