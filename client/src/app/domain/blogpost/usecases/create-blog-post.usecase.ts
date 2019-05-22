import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { pluck } from "rxjs/operators";

import { BlogPostRepository } from '../repository/blog-post.repository';
import { BlogPostModel } from "../../../../../../domain/blogpost/model/blog-post.model";

@Injectable({
  providedIn: 'root'
})
export class CreateBlogPostUsecase {

  constructor(private repository: BlogPostRepository) {
  }

  execute(params: any): Observable<any> {
    return this.repository.createBlogpost(params);
  }
}
