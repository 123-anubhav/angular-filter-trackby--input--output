import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { IProduct } from '../model/IProduct';
import { ProductCountComponent } from '../product-count/product-count.component';
import { ExpiryDaysCountPipe } from './expiry-days-count.pipe';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductCountComponent, ExpiryDaysCountPipe],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {

  electronicItemTotal!: number;
  electricCount!: number;
  groceryCount!: number;

  product: IProduct[] = [];

  // Filtered products to be displayed
  filteredProducts: IProduct[] = [];

  selectedCategory: string = ''; // Variable to store the selected category from the child

  // Method to receive the emitted value from the child component
  onCategorySelected(value: string) {
    this.selectedCategory = value;
    this.filterProductsByCategory(); // Filter the products based on the selected category
  }  

  // Filter the products based on the selected category
  filterProductsByCategory() {
    if (this.selectedCategory == '') {
      this.filteredProducts = [...this.product]; // If no category is selected, display all products
    } else {
     // alert(this.selectedCategory);
      this.filteredProducts = this.product.filter(
        prod => prod.category.toLowerCase() === this.selectedCategory.toLowerCase());
    }
  }

  countProductsByCategory() {
    this.electronicItemTotal = this.product.filter(prod => prod.category == 'Electronic').length;
    this.groceryCount = this.product.filter(prod => prod.category == 'grocery').length;
    this.electricCount = this.product.filter(prod => prod.category == 'Electric').length;

    /*  console.log("electronicItemTotal :: " + this.electronicItemTotal + "\n groceryCount :: " + this.groceryCount
       + "\n electricCount :: " + this.electricCount
     );
  */
  }


   // Track by function to optimize rendering
   trackByProductId(index: number, product: IProduct): number {
    return index;
  }


  constructor() {
    this.product = [
      {
        productName: 'Ceiling Fan',
        category: 'Electric',
        qty: 10,
        actualPrice: 100.0,
        discount: 10,
        rating: 4.5,
        price: 90.0,
        expiryDate: new Date('2024-12-31')
      },
      {
        productName: 'Potatoes',
        category: 'grocery',
        qty: 5,
        actualPrice: 50.0,
        discount: 5,
        rating: 4.0,
        price: 47.5,
        expiryDate: new Date('2024-11-30')
      },
      {
        productName: 'Water Pump',
        category: 'Electric',
        qty: 20,
        actualPrice: 200.0,
        discount: 20,
        rating: 5.0,
        price: 160.0,
        expiryDate: new Date('2025-01-31')
      },
      {
        productName: 'cheese',
        category: 'grocery',
        qty: 15,
        actualPrice: 150.0,
        discount: 15,
        rating: 4.7,
        price: 127.5,
        expiryDate: new Date('2025-03-15')
      },
      {
        productName: 'Electric Kettle',
        category: 'Electric',
        qty: 30,
        actualPrice: 300.0,
        discount: 25,
        rating: 4.8,
        price: 225.0,
        expiryDate: new Date('2025-05-20')

      },
      {
        productName: 'milk',
        category: 'grocery',
        qty: 8,
        actualPrice: 70.0,
        discount: 10,
        rating: 3.9,
        price: 60.0,
        expiryDate: new Date('2024-10-15')
      },
      {
        productName: 'Electric Heater',
        category: 'Electric',
        qty: 50,
        actualPrice: 500.0,
        discount: 30,
        rating: 4.9,
        price: 350.0,
        expiryDate: new Date('2025-07-10')
      },
      {
        productName: 'Smartphone',
        category: 'Electronic',
        qty: 12,
        actualPrice: 120.0,
        discount: 12,
        rating: 4.2,
        price: 105.6,
        expiryDate: new Date('2025-02-28')
      },
      {
        productName: 'Organic Rice',
        category: 'grocery',
        qty: 7,
        actualPrice: 65.0,
        discount: 6,
        rating: 4.0,
        price: 61.1,
        expiryDate: new Date('2024-12-15')
      },
      {
        productName: 'Laptop',
        category: 'Electronic',
        qty: 18,
        actualPrice: 180.0,
        discount: 18,
        rating: 4.3,
        price: 147.6,
        expiryDate: new Date('2025-04-01')
      }
    ];
    this.countProductsByCategory();
  }

  loadData() {
    this.product = [

      {
        productName: 'Ceiling Fan',
        category: 'Electric',
        qty: 10,
        actualPrice: 100.0,
        discount: 10,
        rating: 4.5,
        price: 90.0,
        expiryDate: new Date('2024-12-31')
      },
      {
        productName: 'Potatoes',
        category: 'grocery',
        qty: 5,
        actualPrice: 50.0,
        discount: 5,
        rating: 4.0,
        price: 47.5,
        expiryDate: new Date('2024-11-30')
      },
      {
        productName: 'Water Pump',
        category: 'Electric',
        qty: 20,
        actualPrice: 200.0,
        discount: 20,
        rating: 5.0,
        price: 160.0,
        expiryDate: new Date('2025-01-31')
      },
      {
        productName: 'cheese',
        category: 'grocery',
        qty: 15,
        actualPrice: 150.0,
        discount: 15,
        rating: 4.7,
        price: 127.5,
        expiryDate: new Date('2025-03-15')
      },
      {
        productName: 'Electric Kettle',
        category: 'Electric',
        qty: 30,
        actualPrice: 300.0,
        discount: 25,
        rating: 4.8,
        price: 225.0,
        expiryDate: new Date('2025-05-20')

      },
      {
        productName: 'milk',
        category: 'grocery',
        qty: 8,
        actualPrice: 70.0,
        discount: 10,
        rating: 3.9,
        price: 60.0,
        expiryDate: new Date('2024-10-15')
      },
      {
        productName: 'Electric Heater',
        category: 'Electric',
        qty: 50,
        actualPrice: 500.0,
        discount: 30,
        rating: 4.9,
        price: 350.0,
        expiryDate: new Date('2025-07-10')
      },
      {
        productName: 'Smartphone',
        category: 'Electronic',
        qty: 12,
        actualPrice: 120.0,
        discount: 12,
        rating: 4.2,
        price: 105.6,
        expiryDate: new Date('2025-02-28')
      },
      {
        productName: 'Organic Rice',
        category: 'grocery',
        qty: 7,
        actualPrice: 65.0,
        discount: 6,
        rating: 4.0,
        price: 61.1,
        expiryDate: new Date('2024-12-15')
      },
      {
        productName: 'Laptop',
        category: 'Electronic',
        qty: 18,
        actualPrice: 180.0,
        discount: 18,
        rating: 4.3,
        price: 147.6,
        expiryDate: new Date('2025-04-01')
      },
      //added 3 data again

      {
        productName: 'Brown Sugar',
        category: 'grocery',
        qty: 42,
        actualPrice: 150.0,
        discount: 50,
        rating: 4.1,
        price: 100,
        expiryDate: new Date('2025-04-01')
      },
      {
        productName: 'Power Generator',
        category: 'Electric',
        qty: 18,
        actualPrice: 180.0,
        discount: 18,
        rating: 4.3,
        price: 147.6,
        expiryDate: new Date('2025-04-01')
      },
      {
        productName: 'Almonds',
        category: 'grocery',
        qty: 12,
        actualPrice: 120.0,
        discount: 20,
        rating: 4.0,
        price: 100.0,
        expiryDate: new Date('2025-04-01')
      }
    ];
    this.countProductsByCategory();
  }

}
