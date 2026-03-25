import { create } from "zustand";

interface GridStore {
  selected: string | undefined;
  setSelected: (id?: string) => void;
}

export const useGridStore = create<GridStore>((set) => ({
  selected: undefined,
  setSelected: (id) => set({ selected: id }),
}));
