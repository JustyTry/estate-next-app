import { useSortStore } from '@/store/store';
import React, { useState } from 'react';

const Sortbar: React.FC = () => {
  const selectedOption = useSortStore((state) => state.selectedOption);
  const setSelectedOption = useSortStore((state) => state.setSelectedOption);
  const handleOptionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(event.target.value);
    console.log(useSortStore.getState().selectedOption);
  };
  return (
    <div className="w-32 flex relative flex-col items-center rounded-lg bg-slate-300 border-2">
      <div>Сортировать</div>
      <select value={selectedOption} onChange={handleOptionChange}>
        <option value="">Select an option</option>
        <option value="ASC">А-Я</option>
        <option value="DESC">Я-А</option>
        <option value="option3">Дата</option>
        <option value="option4">Цена</option>
      </select>
      <p>Selected option: {selectedOption}</p>
    </div>
  );
};

export default Sortbar;
