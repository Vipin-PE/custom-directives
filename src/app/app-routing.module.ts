import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FoodBlogComponent } from './food-blog/food-blog.component';
import { AuthorDetailsComponent } from './author-details/author-details.component';


const routes: Routes = [
  { path: '', component: FoodBlogComponent },
  { path: 'author-details', component: AuthorDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
