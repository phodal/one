import { Category } from "../../category/model/category.model";
import { RelatedPost } from "./related-post.model";

export interface BlogPostModel {
  id: number;
  user: string;
  user_bio: string;
  title: string;
  slug: string;
  description: string;
  updated: Date;
  content: string;
  featured_image?: string;
  categories?: Category[];
  related_posts?: RelatedPost[];
}

