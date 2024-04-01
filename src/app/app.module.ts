import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FoodBlogComponent } from './food-blog/food-blog.component';
import { CustomStyleDirective } from './custom-style.directive';
import { AuthorDetailsComponent } from './author-details/author-details.component';

@NgModule({
  declarations: [
    AppComponent,
    FoodBlogComponent,
    CustomStyleDirective,
    AuthorDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
