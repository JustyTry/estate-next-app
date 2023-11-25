'use client';

import Sidebar from '@/components/Sidebar';
import { useState, useEffect } from 'react';

interface EstateCard {
  title: string;
  cost: number;
  rooms_amount: number;
  square: number;
  floor: number;
  adress: string;
}
const EstateCardForm = () => {
  const [estateCard, setEstateCard] = useState<EstateCard>({
    title: '',
    cost: 0,
    rooms_amount: 0,
    square: 0,
    floor: 0,
    adress: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setEstateCard((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    fetch('/api/create', {
      method: 'POST',
      body: JSON.stringify(estateCard),
    });
  };

  return (
    <div className="w-full flex">
      <div className="w-2/12">
        <Sidebar />
      </div>
      <form
        onSubmit={handleSubmit}
        className="bg-red-200 w-10/12 flex flex-col justify-center items-center">
        <h2>Create Estate Card</h2>
        <div className="flex flex-col">
          <label>Title</label>
          <input
            type="text"
            name="title"
            value={estateCard.title}
            onChange={handleChange}
            required
          />
        </div>
        <div className="flex flex-col">
          <label>Стоимость</label>
          <input
            type="number"
            name="cost"
            value={estateCard.cost}
            onChange={handleChange}
            required
          />
        </div>
        <div className="flex flex-col">
          <label>Комнаты</label>
          <input
            type="number"
            name="rooms_amount"
            value={estateCard.rooms_amount}
            onChange={handleChange}
            required
          />
        </div>
        <div className="flex flex-col">
          <label>Площадь</label>
          <input
            type="number"
            name="square"
            value={estateCard.square}
            onChange={handleChange}
            required
          />
        </div>
        <div className="flex flex-col">
          <label>этаж</label>
          <input
            type="number"
            name="floor"
            value={estateCard.floor}
            onChange={handleChange}
            required
          />
        </div>
        <div className="flex flex-col">
          <label>Адрес</label>
          <input
            type="text"
            name="adress"
            value={estateCard.adress}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Create</button>
      </form>
    </div>
  );
};

export default EstateCardForm;
