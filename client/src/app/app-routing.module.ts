import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: '/home'},
  {
    path: 'home',
    loadChildren: './presentation/home/home.module#HomeModule'
  },
  {
    path: 'blog',
    loadChildren: './presentation/blog/blog.module#BlogModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
