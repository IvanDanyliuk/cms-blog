//pages
export interface IHome {
  posts: any[];
}


//components

export interface ILayout {
  children: React.ReactNode;
};

export interface ICategory {
  name: string;
  slug: string;
}

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
    categories: ICategory[];
    createdAt: string;
    excerpt: string;
    featuredImage: {
      url: string;
    };
    slug: string;
    title: string;
  }
};

export interface IPostWidgetData {
  categories?: ICategory[];
  slug?: string;
}

export interface IWidgetPostItem {
  createdAt: string;
  featuredImage: {
    url: string;
  };
  slug: string;
  title: string;
}