import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from "@angular/forms";
import { CreateBlogPostUsecase } from "../../../domain/blogpost/usecases/create-blog-post.usecase";

@Component({
  selector: 'app-create-blog',
  templateUrl: './create-blog.component.html',
  styleUrls: ['./create-blog.component.css']
})
export class CreateBlogComponent implements OnInit {
  createForm: FormGroup;

  constructor(private fb: FormBuilder,
              private createBlogpostUsecase: CreateBlogPostUsecase) {
    this.createForm = this.fb.group({
      title: [''],
      description: [''],
      content: [''],
    });
  }

  ngOnInit() {
  }

  onSubmit() {
    this.createBlogpostUsecase.execute(this.createForm.value);
  }
}
