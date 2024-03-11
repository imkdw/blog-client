import { create } from 'zustand';
import { IUserRoles, UserRoles } from '../types/enum/user';

interface LoggedInUser {
  email: string;
  nickname: string;
  profile: string;
  role: IUserRoles;
}
interface UserStore {
  isLoggedIn: boolean;
  loggedInUser: LoggedInUser;
  setIsLoggedIn: (isLoggedIn: boolean) => void;
  setLoggedInUser: (loggedInUser: LoggedInUser) => void;
}

const useUser = create<UserStore>((set) => ({
  isLoggedIn: false,
  loggedInUser: {
    email: '',
    nickname: '',
    profile: '',
    role: UserRoles.NORMAL,
  },
  setIsLoggedIn: (isLoggedIn) => set({ isLoggedIn }),
  setLoggedInUser: (loggedInUser) => set({ loggedInUser }),
}));

export default useUser;
