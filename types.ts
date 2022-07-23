//pages
export interface IHome {
  posts: any[];
}


//components

export interface ILayout {
  children: React.ReactNode;
};

export interface IPost {
  post: {
    author: {
      bio: string;
      id: string;
      name: string;
      photo: {
        url: string;
      }
    };
    categories: {
      name: string;
      slug: string;
    }[];
    createdAt: string;
    excerpt: string;
    featuredImage: {
      url: string;
    };
    slug: string;
    title: string;
  }
};