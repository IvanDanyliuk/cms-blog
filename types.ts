import { GraphQLAbstractType, GraphQLInterfaceType } from "graphql";

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
};

export interface IAuthor {
  bio: string;
  id?: string;
  name: string;
  photo: {
    url: string;
  }
};

export interface IPost {
  post: {
    author: IAuthor;
    categories: ICategory[];
    createdAt: string;
    excerpt: string;
    featuredImage: {
      url: string;
    };
    slug: string;
    title: string;
    content?: {
      raw: any;
    }
  }
};

export interface IPostWidgetData {
  categories?: ICategory[] | string[];
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