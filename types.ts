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
  author: {
    bio: string;
    id?: string;
    name: string;
    photo: {
      url: string;
    }
  }
};

export interface ICommentsForm {
  slug: string;
};

export interface IComments {
  slug: string;
};

export interface IPost {
  post: {
    author: {
      bio: string;
      id?: string;
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


export type CommentData = {
  name: string;
  createdAt: string;
  comment: string;
};

