export type StoriesListData = {
  short_id: string;
  title: string;
  url: string;
  score: number;
  created_at: string;
  comment_count: number;
  comments_url: string;
  tags: string[];
  submitter_user: StoryAuthor;
};

export type StoryAuthor = {
  username: string;
  avatar_url: string;
};
