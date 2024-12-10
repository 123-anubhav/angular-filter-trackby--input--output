import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductCountComponent } from './product-count/product-count.component';
import { ProductListComponent } from './product-list/product-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ProductCountComponent, ProductListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'AssignmentVijaySirFilterEcommerce';
}
