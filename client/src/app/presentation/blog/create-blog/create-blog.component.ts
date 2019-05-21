import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from "@angular/forms";

@Component({
  selector: 'app-create-blog',
  templateUrl: './create-blog.component.html',
  styleUrls: ['./create-blog.component.css']
})
export class CreateBlogComponent implements OnInit {
  createForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.createForm = this.fb.group({
      title: [''],
      description: [''],
      content: [''],
    });
  }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.createForm.value);
  }
}
