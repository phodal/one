import { Mapper } from '../../../../../../core/base/mapper';
import { BlogPostModel } from "../../../../../../domain/blogpost/model/blog-post.model";

export class BlogPostRepositoryMapper extends Mapper <BlogPostModel, BlogPostModel> {
  mapFrom(param: BlogPostModel): BlogPostModel {
    return param;
  }

  mapTo(param: BlogPostModel): BlogPostModel {
    return param;
  }
}
