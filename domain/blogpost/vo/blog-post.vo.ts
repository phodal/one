import { BlogPostModel } from "../model/blog-post.model";
import BaseVO from "../../../core/base/base.vo";
import { RelatedPost } from "../model/related-post.model";

export class BlogPostVO extends BaseVO<BlogPostModel> {
  private relatedPosts: RelatedPost[] = [];

  constructor(props: BlogPostModel) {
    super();
  }

  static create(params: BlogPostModel): Promise<any> {
    if (params.title === '') {
      // @ts-ignore
      return new Promise(((resolve, reject) => {
        reject({
          error: 'Empty PlaceHolder'
        });
      }));
    } else {
      // @ts-ignore
      return new Promise((resolve => {
        resolve(new BlogPostVO(params));
      }));
    }
  }

  addRelatedPost(relatedPost: RelatedPost): BlogPostVO {
    this.relatedPosts.push(relatedPost);
    return this;
  }
}
