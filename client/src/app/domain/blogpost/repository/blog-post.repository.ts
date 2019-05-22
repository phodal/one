import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { BlogPostModel } from "../../../../../../domain/blogpost/model/blog-post.model";
import { AwsResponseModel } from "../../../../../../core/base/aws-response.model";

@Injectable({
  providedIn: 'root'
})
export class BlogPostRepository {
  constructor(
    private http: HttpClient
  ) {

  }

  getBlogposts(): Observable<AwsResponseModel<BlogPostModel[]>> {
    return this.http.get<AwsResponseModel<BlogPostModel[]>>('/api/hello');
  }

  createBlogpost(params: any) {
    return this.http.post('/api/blog', {
      params: params
    });
  }
}
