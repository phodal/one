import { Component, OnInit } from '@angular/core';
import { GetBlogPostsUsecase } from "../../domain/blogpost/usecases/get-blog-posts.usecase";
import { BlogPostModel } from "../../../../../domain/blogpost/model/blog-post.model";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  private blogposts: BlogPostModel;

  constructor(private getBlogPostsUsecase: GetBlogPostsUsecase) { }

  ngOnInit() {
    this.getBlogPostsUsecase.execute().subscribe((blogposts: BlogPostModel) => {
      this.blogposts = blogposts;
    })
  }

}
