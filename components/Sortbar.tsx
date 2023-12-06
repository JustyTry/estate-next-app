import { useSortStore } from "@/store/store";
import React from "react";

const Sortbar: React.FC = () => {
  const selectedOption = useSortStore((state) => state.selectedOption);
  const setSelectedOption = useSortStore((state) => state.setSelectedOption);
  const handleOptionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(event.target.value);
  };
  return (
    <div className="mb-8 flex  justify-end">
      <select
        className="h-8 w-40 border-2"
        value={selectedOption}
        onChange={handleOptionChange}
      >
        <option value="">Сортировать</option>
        <option value="ASC">А-Я</option>
        <option value="DESC">Я-А</option>
        <option value="option3">Дата</option>
        <option value="option4">Цена</option>
      </select>
    </div>
  );
};

export default Sortbar;
