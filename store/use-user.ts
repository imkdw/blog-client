import { create } from 'zustand';

interface UserStore {
  isLoggedIn: boolean;
  email: string;
  nickname: string;
  profile: string;
  setIsLoggedIn: (isLoggedIn: boolean) => void;
  setEmail: (email: string) => void;
  setNickname: (nickname: string) => void;
  setProfile: (profile: string) => void;
}

const useUser = create<UserStore>((set) => ({
  isLoggedIn: false,
  email: '',
  nickname: '',
  profile: '',
  setIsLoggedIn: (isLoggedIn) => set({ isLoggedIn }),
  setEmail: (email) => set({ email }),
  setNickname: (nickname) => set({ nickname }),
  setProfile: (profile) => set({ profile }),
}));

export default useUser;
