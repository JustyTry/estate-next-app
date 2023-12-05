"use client";
import dynamic from "next/dynamic";
import Image from "next/image";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const MapComponent = dynamic(() => import("@/components/Map"), {
  ssr: false,
});

interface EstateCard {
  title: string;
  adress: string;
  cost: number;
  rooms_amount: number;
  square: number;
  living_space: number;
  floor: number;

  description: string;
  estate_type: string;
  ceiling_height: number;
  balcony_or_loggia_amount: number;
  bathroom_amount: number;

  year_of_construction: number;
  chute: boolean;
  number_of_elevators: number;
  building_type: string;
  entrances: number;

  images: string[];
}

const Page = () => {
  const [data, setData] = useState<EstateCard>();
  const id = useParams();
  useEffect(() => {
    fetch(`/api/getrecord?id=${id.id}`)
      .then((res) => res.json())
      .then((resdata) => {
        setData(resdata["stmt"]);
        console.log(data);
      });
  }, []);

  if (!data) return <></>;

  return (
    <div className="mt-20 flex w-full justify-center">
      <div className="flex w-8/12 justify-between max-xl:w-full">
        <div className="w-7/12">
          <h1 className=" text-4xl">{data.title}</h1>
          <h2 className="text-md my-6 text-gray-600">{data.adress}</h2>
          <div className="box-border w-full ">
            {data.images
              .toString()
              ?.split(", ")
              .map((image: string, index: number) => (
                <Image
                  key={index}
                  className="w-full"
                  src={image}
                  width={700}
                  height={400}
                  sizes=""
                  alt=""
                  unoptimized
                />
              ))}
          </div>
          <ul className="my-8 grid w-full grid-cols-3 gap-6">
            <li className="flex flex-col">
              <span>Общая площадь</span>
              <span>{data.square}</span>
            </li>
            <li className="flex flex-col">
              <span>Жилая площадь</span>
              <span>{data.living_space}</span>
            </li>
            <li className="flex flex-col">
              <span>Общая площадь</span>
              <span>53,3 м²</span>
            </li>
            <li className="flex flex-col">
              <span>Общая площадь</span>
              <span>53,3 м²</span>
            </li>
            <li className="flex flex-col">
              <span>Общая площадь</span>
              <span>53,3 м²</span>
            </li>
          </ul>
          <p>{data.description}</p>
          <div className="mt-8 flex w-full justify-between gap-x-24">
            <div className="w-1/2">
              <h2 className="mb-8 text-2xl font-semibold">О квартире</h2>
              <ul className="flex w-full flex-col gap-y-6 text-xl text-gray-500">
                <li className="flex w-full justify-between whitespace-nowrap">
                  <span>Тип жилья</span>
                  <span className="mx-3 mb-2 w-full border-b-2 border-dotted"></span>
                  <span>{data.estate_type}</span>
                </li>
                <li className="flex w-full justify-between whitespace-nowrap">
                  <span>Общая площадь</span>
                  <span className="mx-3 mb-2 w-full border-b-2 border-dotted"></span>
                  <span>{data.square}</span>
                </li>

                <li className="flex w-full justify-between whitespace-nowrap">
                  <span>Высота потолков</span>
                  <span className="mx-3 mb-2 w-full border-b-2 border-dotted"></span>
                  <span>{data.ceiling_height}</span>
                </li>
                <li className="flex w-full justify-between whitespace-nowrap">
                  <span>Санузел</span>
                  <span className="mx-3 mb-2 w-full border-b-2 border-dotted"></span>
                  <span>{data.bathroom_amount}</span>
                </li>
                <li className="flex w-full justify-between whitespace-nowrap">
                  <span>Балкон/лоджия</span>
                  <span className="mx-3 mb-2 w-full border-b-2 border-dotted"></span>
                  <span>{data.balcony_or_loggia_amount}</span>
                </li>
              </ul>
            </div>
            <div className="w-1/2">
              <h2 className="mb-8 text-2xl font-semibold">О доме</h2>
              <ul className="flex w-full flex-col gap-y-4 text-lg text-gray-500">
                <li className=" flex w-full  justify-between whitespace-nowrap">
                  <span>Год постройки</span>
                  <span className="mx-3 mb-2 w-full border-b-2 border-dotted"></span>
                  <span>{data.year_of_construction}</span>
                </li>
                <li className="flex w-full justify-between whitespace-nowrap">
                  <span>Мусоропровод</span>
                  <span className="mx-3 mb-2 w-full border-b-2 border-dotted"></span>
                  <span>{data.chute}</span>
                </li>
                <li className="flex w-full justify-between whitespace-nowrap">
                  <span>Количество лифтов</span>
                  <span className="mx-3 mb-2 w-full border-b-2 border-dotted"></span>
                  <span>{data.number_of_elevators}</span>
                </li>
                <li className="flex w-full justify-between whitespace-nowrap">
                  <span>Тип дома</span>
                  <span className="mx-3 mb-2 w-full border-b-2 border-dotted"></span>
                  <span>{data.building_type}</span>
                </li>
                <li className="flex w-full justify-between whitespace-nowrap">
                  <span>Подъезды</span>
                  <span className="mx-3 mb-2 w-full border-b-2 border-dotted"></span>
                  <span>{data.entrances}</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="my-32 h-96 w-full overflow-hidden bg-red-200">
            <MapComponent />
          </div>
        </div>
        <div className="sticky top-20 h-fit w-4/12 border-2 px-8 pt-5">
          <h1 className="mb-8 text-3xl font-semibold">{data.cost} ₽</h1>
          <ul className="flex w-full flex-col gap-y-4 text-lg text-gray-500">
            <li className="flex w-full justify-between whitespace-nowrap">
              <span>Цена за метр</span>
              <span className="mx-3 mb-2 w-full border-b-2 border-dotted"></span>
              <span>
                {Math.round(
                  parseInt(data.cost.toString().replace(/\s/g, "")) /
                    parseFloat(data.square.toString()),
                )}{" "}
                ₽/м²
              </span>
            </li>
            <li className="flex w-full justify-between whitespace-nowrap">
              <span>Условия сделки</span>
              <span className="mx-3 mb-2 w-full border-b-2 border-dotted"></span>
              <span>свободная продажа</span>
            </li>
            <li className="flex w-full justify-between whitespace-nowrap">
              <span>Ипотека</span>
              <span className="mx-3 mb-2 w-full border-b-2 border-dotted"></span>
              <span>возможна</span>
            </li>
            <button className="m-12 h-12 rounded-lg bg-sky-400 text-white">
              Оставить заявку
            </button>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Page;
