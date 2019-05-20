import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { BlogPostRepository } from '../repository/blog-post.repository';
import { BlogPostModel } from "../../../../../../domain/blogpost/model/blog-post.model";
import { UseCase } from "../../../../../../core/base/use-case";

@Injectable({
  providedIn: 'root'
})
export class GetBlogPostsUsecase implements UseCase<void, BlogPostModel> {

  constructor(private repository: BlogPostRepository) {
  }

  execute(): any {
    return this.repository.getBlogpost();
  }
}
