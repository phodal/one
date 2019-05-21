import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { pluck } from "rxjs/operators";

import { BlogPostRepository } from '../repository/blog-post.repository';
import { BlogPostModel } from "../../../../../../domain/blogpost/model/blog-post.model";

@Injectable({
  providedIn: 'root'
})
export class GetBlogPostsUsecase {

  constructor(private repository: BlogPostRepository) {
  }

  execute(): Observable<BlogPostModel[]> {
    return this.repository.getBlogpost().pipe(pluck('Items'));
  }
}
