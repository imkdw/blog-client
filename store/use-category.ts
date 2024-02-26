import { create } from 'zustand';

interface ArticleStore {
  parent: string;
  child: string;
  setParent(parent: string): void;
  setChild(child: string): void;
}

const useCategory = create<ArticleStore>((set) => ({
  parent: '',
  child: '',
  setParent: (parent) => set({ parent }),
  setChild: (child) => set({ child }),
}));

export default useCategory;
