import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { BlogPostModel } from "../../../../../../domain/blogpost/model/blog-post.model";

@Injectable({
  providedIn: 'root'
})
export class BlogPostRepository {
  constructor(
    private http: HttpClient
  ) {

  }

  getBlogpost(): Observable<BlogPostModel> {
    return this.http.get<BlogPostModel>('/api/hello');
  }
}
