declare module namespace {
  export interface Category {
    id: number;
    title: string;
    make?: any;
    slug: string;
  }

  export interface RelatedPost {
    id: number;
    title: string;
    description: string;
    featured_image: string;
    user: string;
  }

  export interface BlogpostModel {
    id: number;
    user: string;
    user_bio: string;
    title: string;
    slug: string;
    description: string;
    updated: Date;
    content: string;
    featured_image: string;
    categories: Category[];
    related_posts: RelatedPost[];
  }
}

