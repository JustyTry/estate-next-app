import React, { useState } from 'react';

interface Item {
  id: number;
  name: string;
}

const Sortbar: React.FC = () => {
  const [items, setItems] = useState<Item[]>([
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' },
    // Add more items as needed
  ]);
  const sortItems = (property: keyof Item) => {
    const sortedItems = [...items].sort((a, b) => {
      if (a[property] < b[property]) return -1;
      if (a[property] > b[property]) return 1;
      return 0;
    });

    setItems(sortedItems);
  };

  return (
    <div className="w-32 flex relative flex-col items-center rounded-lg bg-slate-300 border-2">
      <div>Сортировать</div>
      <ul className="absolute">
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
      </ul>
    </div>
  );
};

export default Sortbar;
