import { create } from 'zustand';

type SortStore = {
  selectedOption: string;
  setSelectedOption: (option: string) => void;
};

interface StoreState {
  data: Array<{
    title: string;
    cost: number;
    rooms_amount: number;
    square: number;
    floor: number;
    adress: string;
  }>;
  setData: (
    data: Array<{
      title: string;
      cost: number;
      rooms_amount: number;
      square: number;
      floor: number;
      adress: string;
    }>,
  ) => void;
  sortData: (sortBy?: 'cost' | 'adress') => void;
}

export const useSortStore = create<SortStore>((set) => ({
  selectedOption: '',
  setSelectedOption: (option: string) => set(() => ({ selectedOption: option })),
}));

export const useStore = create<StoreState>((set, get) => ({
  data: [],
  setData: (inf) => set(() => ({ data: inf })),
  sortData: (sortBy = 'cost') => {
    const { data } = get();

    const sortedData = [...data].sort((a: any, b: any) => a[sortBy] - b[sortBy]);
    console.log(sortedData);
    set({ data: sortedData });
  },
}));
