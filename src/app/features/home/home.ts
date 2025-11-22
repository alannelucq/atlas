import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  template: `
    <section class="home-page">
      <h1>Welcome to the Home Page</h1>
      <p>This is the home page of our application.</p>
      <button (click)="navigateToDetails()">Go to Details</button>
    </section>
  `,
  styles: [`
    .home-page {
      text-align: center;
      margin-top: 50px;
    }
    h1 {
      font-size: 2.5rem;
      color: #333;
    }
    p {
      font-size: 1.2rem;
      color: #666;
    }
    button {
      margin-top: 20px;
      padding: 10px 20px;
      font-size: 1rem;
      cursor: pointer;
    }
  `]
})
export class HomePageComponent {
  navigateToDetails() {
    console.log('Navigating to details...');
  }
}
