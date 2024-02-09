import { create } from 'zustand';

interface ArticleStore {
  currentArticleId: string | null;
  isWriting: boolean;
  setCurrentArticleId: (id: string | null) => void;
  setIsWriting: (isWriting: boolean) => void;
}

export const useArticle = create<ArticleStore>((set) => ({
  currentArticleId: null,
  isWriting: false,
  setCurrentArticleId: (id) => set({ currentArticleId: id }),
  setIsWriting: (isWriting) => set({ isWriting }),
}));

export const temp = null;
