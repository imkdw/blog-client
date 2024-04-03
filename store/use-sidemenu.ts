import { create } from 'zustand';

interface SidemenuStore {
  isOpen: boolean;
  setIsOpen(data: boolean): void;
}

const useSidemenu = create<SidemenuStore>((set) => ({
  isOpen: false,
  setIsOpen: (isOpen) => set({ isOpen }),
}));

export default useSidemenu;
