import { create } from 'zustand';

interface CategoryStore {
  parent: string;
  child: string;
  setParent(parent: string): void;
  setChild(child: string): void;
}

const useCategory = create<CategoryStore>((set) => ({
  parent: '',
  child: '',
  setParent: (parent) => set({ parent }),
  setChild: (child) => set({ child }),
}));

export default useCategory;
