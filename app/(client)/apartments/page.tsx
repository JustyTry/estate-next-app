'use client';
import Sortbar from '@/components/Sortbar';
import ApartmentFilterbar from '@/components/apartments/ApartmentFilterbar';
import ApartmentRecord from '@/components/apartments/ApartmentRecord';
import { useStore } from '@/store/store';
import Database from 'better-sqlite3';
import React, { useEffect, useState } from 'react';

interface EstateCard {
  [x: string]: any;
  title: string;
  cost: number;
  rooms_amount: number;
  square: number;
  floor: number;
  adress: string;
}

export default function Apartments() {
  const [data, setData] = useState<EstateCard>();
  const storeData = useStore((state) => state.data);
  const setStoreData = useStore((state) => state.setData);
  const sortData = useStore((state) => state.sortData);
  useEffect(() => {
    fetch('/api/create')
      .then((res) => res.json())
      .then((resdata) => {
        setData(resdata);
        setStoreData(resdata['stmt']);
        sortData('cost');
        console.log(useStore.getState().data);
      });
  }, [setStoreData, sortData]);

  if (!data) return <></>;

  return (
    <div className="w-full flex justify-center bg-slate-50">
      <div className="w-8/12 max-xl:w-full">
        <ApartmentFilterbar />
        <Sortbar />
        <div className="w-full grid grid-cols-3 gap-4 max-md:grid-cols-2 max-sm:grid-cols-1">
          {data['stmt'].map((el: any, index: number) => {
            const { key, ...otherProps } = el;
            return <ApartmentRecord key={key} {...otherProps} />;
          })}
        </div>
      </div>
    </div>
  );
}
