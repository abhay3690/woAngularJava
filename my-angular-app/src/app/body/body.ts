import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-body',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './body.html',
  styleUrl: './body.css',
})
export class Body {
  companyName = 'eWorks';
  tagline = 'Your one-stop shop for everything!';
  
  products: Product[] = [
    {
      id: 1,
      name: 'Work from ofiice',
      price: 1999,
      image: 'assets/images/headphones.jpg',
      description: 'Work comfortably from your office with all amenities.'
    },
    {
      id: 2,
      name: 'Work from home ',
      price: 2999,
      image: 'assets/images/watch.jpg',
      description: 'Work comfortably from your home with all amenities.'
    },
    {
      id: 3,
      name: 'Remote work',
      price: 1499,
      image: 'assets/images/speaker.jpg',
      description: 'PWork fromoutside office and home with full flexibility.'
    },
    {
      id: 4,
      name: 'Hybrid work',
      price: 899,
      image: 'assets/images/stand.jpg',
      description: 'Work  2 days from home and other days in office per week.'
    }
  ];

  cart: Product[] = [];

  addToCart(product: Product) {
    this.cart.push(product);
    alert(`${product.name} added inyour library!`);
  }
}
export interface Product {
  id: number;
  name: string;
  price: number;
  image?: string;
  description?: string;
}
