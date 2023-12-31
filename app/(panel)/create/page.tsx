"use client";

import Sidebar from "@/components/Sidebar";
import { useRef } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

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
const EstateCardForm = () => {
  const { register, handleSubmit } = useForm<EstateCard>();
  const fileInputRef = useRef<HTMLInputElement & { files: FileList }>(null);
  const onSubmit: SubmitHandler<EstateCard> = (data) => {
    const blobArr = new Array();
    try {
      for (let i = 0; i < fileInputRef.current!.files.length; i++) {
        blobArr.push(
          URL.createObjectURL(new Blob([fileInputRef.current!.files[0]])),
        );
      }
      data.images = blobArr;
      fetch("/api/create", {
        method: "POST",
        body: JSON.stringify(data),
      });
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex w-full">
      <div className="w-2/12">
        <Sidebar />
      </div>
      <div className="flex w-10/12 flex-col justify-center">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col items-center justify-center bg-red-400"
        >
          <label>Название</label>
          <input {...register("title")} />
          <label>Адрес</label>
          <input {...register("adress")} />
          <label>Цена</label>
          <input {...register("cost")} />
          <label>Количество комнат</label>
          <input {...register("rooms_amount")} />
          <label>Площадь</label>
          <input {...register("square")} />
          <label>Жилая площадь</label>
          <input {...register("living_space")} />
          <label>Этаж</label>
          <input {...register("floor")} />
          <label>Описание</label>
          <input {...register("description")} />
          <label>Тип жилья</label>
          <input {...register("estate_type")} />
          <label>Высота потолков</label>
          <input {...register("ceiling_height")} />
          <label>Количество балконов/лоджий</label>
          <input {...register("balcony_or_loggia_amount")} />
          <label>Количество санузлов</label>
          <input {...register("bathroom_amount")} />

          <label>Год постройки</label>
          <input {...register("year_of_construction")} />
          <label>Мусоропровод</label>
          <input {...register("chute")} />
          <label>Количество лифтов</label>
          <input {...register("number_of_elevators")} />
          <label>Тип жилья</label>
          <input {...register("building_type")} />
          <label>Количество подъездов</label>
          <input {...register("entrances")} />
          <input
            type="file"
            {...register("images")}
            multiple
            ref={fileInputRef}
            required
          />

          <input type="submit" />
        </form>
      </div>
    </div>
  );
};

export default EstateCardForm;
