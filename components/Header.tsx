import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="flex h-24 w-full items-center justify-center bg-white text-xl">
      <div className="flex w-8/12 justify-between">
        <div className="w-2/12">
          <Link href={"/"}>Logo</Link>
        </div>
        <ul className="flex w-4/12 justify-between">
          <Link href={"/apartments"}>Квартиры</Link>
          <Link href={"/houses"}>Дома</Link>
          <Link href={"/newbuilding"}>Новострой</Link>
          <Link href={"/rent"}>Аренда</Link>
        </ul>
        <div className="w-2/12 text-right">+89236416432</div>
      </div>
    </header>
  );
};

export default Header;
