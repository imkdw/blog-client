import { create } from 'zustand';

interface ArticleStore {
  currentArticleId: string | null;
  setCurrentArticleId: (id: string | null) => void;
}

export const useArticle = create<ArticleStore>((set) => ({
  currentArticleId: null,
  setCurrentArticleId: (id) => set({ currentArticleId: id }),
}));

export const temp = null;
