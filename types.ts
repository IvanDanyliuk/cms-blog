//pages
export interface IHome {
  posts: any[];
}


//components

export interface ILayout {
  children: React.ReactNode;
};

export interface IPostCard {
  post: {
    title: string;
    excerpt: string;
  }
};