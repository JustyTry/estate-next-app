import React from 'react';

const Header = () => {
  return (
    <header className="w-full h-24 bg-white flex justify-center items-center">
      <div className="w-8/12 flex justify-between">
        <div className="w-2/12">logo</div>
        <ul className="w-4/12 flex justify-between">
          <li>Квартиры</li>
          <li>Дома</li>
          <li>Новострой</li>
          <li>Аренда</li>
        </ul>
        <div className="w-2/12 text-right">+89236416432</div>
      </div>
    </header>
  );
};

export default Header;
