import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { NavBarModule } from './components/navbar/navbar.module';
import { ThemePickerModule } from './utils/theme-picker';
import { MatButtonModule, MatInputModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ThemePickerModule,
    NavBarModule,
    HttpClientModule,
    ReactiveFormsModule,

    MatButtonModule,
    MatInputModule,
  ],
  providers: [
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ThemePickerModule,
    NavBarModule,

    MatButtonModule,
    MatInputModule,
  ],
  entryComponents: [
  ]
})
export class SharedModule {
}
