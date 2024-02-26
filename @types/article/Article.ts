export interface IArticle {
  id: string;
  thumbnail: string;
  title: string;
  content: string;
  commentCount: number;
  likeCount: number;
  summary: string;
  tags: string[];
  createdAt: string;
  comments: IArticleComments[];
}

export interface IArticleComments {
  id: number;
  createdAt: string;
  content: string;
  user: {
    profile: string;
    nickname: string;
    isOwner: boolean;
  };
  replies: IArticleCommentReplies[];
}

export interface IArticleCommentReplies extends Omit<IArticleComments, 'replies'> {}
