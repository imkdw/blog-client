import { create } from 'zustand';
import { ICategory } from '../features/category/types/category';

interface CategoryStore {
  allParent: ICategory[];
  allChild: ICategory[];
  currentParent: ICategory | null;
  currentChild: ICategory | null;
  setAllParent: (parents: ICategory[]) => void;
  setAllChild: (children: ICategory[]) => void;
  setCurrentParent: (parent: ICategory) => void;
  setCurrentChild: (child: ICategory) => void;
}

const useCategory = create<CategoryStore>((set) => ({
  allParent: [],
  allChild: [],
  currentParent: null,
  currentChild: null,
  setAllParent: (parents: ICategory[]) => set({ allParent: parents }),
  setAllChild: (children: ICategory[]) => set({ allChild: children }),
  setCurrentParent: (parent: ICategory) => set({ currentParent: parent }),
  setCurrentChild: (child: ICategory) => set({ currentChild: child }),
}));

export default useCategory;
