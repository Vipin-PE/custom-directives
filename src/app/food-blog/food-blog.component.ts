import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-food-blog',
  templateUrl: './food-blog.component.html',
  styleUrls: ['./food-blog.component.scss']
})
export class FoodBlogComponent {
  constructor(private router: Router) {}
  foodItems = [
    { name: 'Pasta', description: 'Classic Italian pasta with rich tomato sauce and fresh herbs.' },
    { name: 'Burgers', description: 'Juicy beef burgers with melted cheese, lettuce, and tomato.' },
    { name: 'Pizza', description: 'Delicious cheesy pizza with assorted toppings.' },
    { name: 'Sushi', description: 'Fresh sushi rolls with a variety of fillings.' },
    { name: 'Tacos', description: 'Authentic Mexican tacos with seasoned meat and fresh salsa.' }
  ];
   

  viewAuthorDetails() {
    this.router.navigate(['/author-details']);
  }
}
