import { useFilterProps, useOpenedFilter } from "@/store/apartmentsStore";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";

const ApartmentFilterbar = () => {
  const openedFilter = useOpenedFilter((state) => state.openedFilter);
  const setOpenedFilter = useOpenedFilter((state) => state.setOpenedFilter);

  const costFilter = useFilterProps((state) => state.costFilter);
  const squareFilter = useFilterProps((state) => state.squareFilter);
  const roomsAmountFilter = useFilterProps((state) => state.roomsAmountFilter);

  const setCostFilter = useFilterProps((state) => state.setCostFilter);
  const setSquareFilter = useFilterProps((state) => state.setSquareFilter);
  const setRoomsAmountFilter = useFilterProps(
    (state) => state.setRoomsAmountFilter,
  );

  const { register, handleSubmit } = useForm();

  return (
    <div className="mt-8 h-20 w-full">
      <ul className="flex h-2/3 w-full items-center">
        <div className="relative h-full w-2/12">
          <button
            onClick={() =>
              openedFilter === "cost"
                ? setOpenedFilter("")
                : setOpenedFilter("cost")
            }
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
        <div className="relative h-full w-2/12">
          <button
            onClick={() =>
              openedFilter === "rooms_amount"
                ? setOpenedFilter("")
                : setOpenedFilter("rooms_amount")
            }
            className="h-full w-full border-y-2 bg-white pl-5 text-left"
          >
            Комнатность
          </button>
          {openedFilter === "rooms_amount" && (
            <div className="absolute z-10 mt-2 flex h-20 w-fit items-center rounded-md border-2 bg-white">
              <ul className="p-x-3 flex w-60 justify-around">
                <li className="w-1/6 rounded-md border-2 p-2 text-center">1</li>
                <li className="w-1/6 rounded-md border-2 p-2 text-center">2</li>
                <li className="w-1/6 rounded-md border-2 p-2 text-center">3</li>
                <li className="w-1/6 rounded-md border-2 p-2 text-center">4</li>
                <li className="w-1/6 rounded-md border-2 p-2 text-center">
                  5+
                </li>
              </ul>
            </div>
          )}
        </div>
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
