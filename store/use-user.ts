import { create } from 'zustand';
import { persist } from 'zustand/middleware';
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

const useUser = create(
  persist<UserStore>(
    (set) => ({
      isLoggedIn: false,
      loggedInUser: {
        email: '',
        nickname: '',
        profile: '',
        role: UserRoles.NORMAL,
      },
      setIsLoggedIn: (isLoggedIn) => set({ isLoggedIn }),
      setLoggedInUser: (loggedInUser) => set({ loggedInUser }),
    }),
    {
      name: 'userStorage',
    },
  ),
);

export default useUser;
