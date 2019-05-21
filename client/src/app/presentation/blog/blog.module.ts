import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from "@angular/router";

import { BlogPostListComponent } from "./blog-post-list/blog-post-list.component";
import { SharedModule } from "../../shared/shared.module";
import { CreateBlogComponent } from "./create-blog/create-blog.component";

const routes: Routes = [
  {
    path: '',
    component: BlogPostListComponent
  },
  {
    path: 'create',
    component: CreateBlogComponent
  }
];

@NgModule({
  declarations: [BlogPostListComponent, CreateBlogComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ]
})
export class BlogModule { }
