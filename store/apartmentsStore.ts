import { create } from "zustand";

interface OpenedFilter {
  openedFilter: string;
  setOpenedFilter: (option: string) => void;
}

interface FilterProps {
  costFilter: number[];
  squareFilter: number[];
  roomsAmountFilter: number[];

  setCostFilter: (costMin: number, costMax: number) => void;
  setSquareFilter: (squareMin: number, squareMax: number) => void;
  setRoomsAmountFilter: (rooms_amount: number[]) => void;
}

export const useOpenedFilter = create<OpenedFilter>((set) => ({
  openedFilter: "",
  setOpenedFilter: (option) =>
    set(() => ({
      openedFilter: option,
    })),
}));

export const useFilterProps = create<FilterProps>((set) => ({
  costFilter: [],
  squareFilter: [],
  roomsAmountFilter: [],

  setCostFilter: (costMin, costMax) =>
    set(() => ({ costFilter: [costMin, costMax] })),

  setSquareFilter: (squareMin, squareMax) =>
    set(() => ({ squareFilter: [squareMin, squareMax] })),

  setRoomsAmountFilter: (rooms_amount) =>
    set(() => ({ squareFilter: rooms_amount })),
}));
