import { create } from 'zustand';
import { IUserRole, UserRole } from '../api/@types/auth/enums/oauth-provider.enum';

interface UserStore {
  isLoggedIn: boolean;
  email: string;
  nickname: string;
  profile: string;
  role: IUserRole;
  setIsLoggedIn: (isLoggedIn: boolean) => void;
  setEmail: (email: string) => void;
  setNickname: (nickname: string) => void;
  setProfile: (profile: string) => void;
  setRole: (role: IUserRole) => void;
}

const useUser = create<UserStore>((set) => ({
  isLoggedIn: false,
  email: '',
  nickname: '',
  profile: '',
  role: UserRole.COMMON,
  setIsLoggedIn: (isLoggedIn) => set({ isLoggedIn }),
  setEmail: (email) => set({ email }),
  setNickname: (nickname) => set({ nickname }),
  setProfile: (profile) => set({ profile }),
  setRole: (role) => set({ role }),
}));

export default useUser;
