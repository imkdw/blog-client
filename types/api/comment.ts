import { IComment } from '../comment';

export interface PostCreateCommentBody {
  content: string;
}

export interface PostCreateCommentResponse {
  commentId: number;
}

export interface GetCommentsResponse {
  comments: IComment[];
}
