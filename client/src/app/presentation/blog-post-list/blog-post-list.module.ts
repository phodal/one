import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from "@angular/router";

import { BlogPostListComponent } from "./blog-post-list.component";
import { SharedModule } from "../../shared/shared.module";

const routes: Routes = [
  {
    path: '',
    component: BlogPostListComponent
  }
];

@NgModule({
  declarations: [BlogPostListComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ]
})
export class BlogPostListModule { }
