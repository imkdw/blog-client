export interface IComment {
  id: number;
  content: string;
  user: {
    nickname: string;
    profile: string;
    isAuthor: boolean;
  };
  createdAt: string;
}
