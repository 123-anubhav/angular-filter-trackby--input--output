# angular-filter-trackby--input--output-custom_pipes-custom_directive
filter is like in real time use case filter mobile by brand, price like that implemented

# Angular Filter, TrackBy, @Input and @Output,Custom-Pipes,Custom-Directive Implementation

## Project Overview

This Angular project is a mini ecommerce demo, implementing real-time filters to filter products by category, count, and display various properties such as expiry date, product price, and more. The application utilizes the Angular features like `@Input`, `@Output`, `TrackBy`, custom pipes, and directives to manage dynamic updates and optimize rendering.

### Key Concepts Implemented:
1. **Filter Products**: Filter products by categories such as Electric, Electronic, and Grocery.
2. **TrackBy**: Optimizes performance by tracking items in `ngFor` loops.
3. **Custom Pipes**: Custom pipe for calculating the number of days left before product expiry.
4. **Custom Directive**: A directive to apply dynamic background color change on mouse events.

## Project Structure

```plaintext
src/
  ├── app/
  │   ├── product-list/
  │   ├── product-count/
  │   ├── expiry-days-count.pipe.ts
  │   ├── directive-test/
  │   ├── app.component.ts
  │   ├── app.module.ts
  │   ├── app.component.html
  │   ├── app.component.css
  │   └── ...
  ├── assets/
  │   ├── images/
  │   └── ...
  ├── public/
  └── index.html
```

## Installation and Setup

1. Clone the repository to your local machine.
2. Run the following command to install the necessary dependencies:

   ```bash
   npm install
   ```

3. Once the dependencies are installed, run the application using:

   ```bash
   ng serve
   ```

4. Navigate to `http://localhost:4200/` to view the application in action.

## Features

### 1. **Product List**
The `ProductListComponent` is the core component that handles the product data and manages filtering functionality.

**Component Code (`product-list.component.ts`):**
```typescript
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
  filteredProducts: IProduct[] = [];
  selectedCategory: string = '';

  constructor() {
    this.product = [
      // Example product data
    ];
    this.countProductsByCategory();
  }

  onCategorySelected(value: string) {
    this.selectedCategory = value;
    this.filterProductsByCategory();
  }

  filterProductsByCategory() {
    if (this.selectedCategory == '') {
      this.filteredProducts = [...this.product];
    } else {
      this.filteredProducts = this.product.filter(
        prod => prod.category.toLowerCase() === this.selectedCategory.toLowerCase());
    }
  }

  countProductsByCategory() {
    this.electronicItemTotal = this.product.filter(prod => prod.category == 'Electronic').length;
    this.groceryCount = this.product.filter(prod => prod.category == 'grocery').length;
    this.electricCount = this.product.filter(prod => prod.category == 'Electric').length;
  }

  trackByProductId(index: number, product: IProduct): number {
    return index;
  }
}
```

### 2. **Product Count Component**
This child component is responsible for emitting selected category changes to the parent component for filtering.

**Component Code (`product-count.component.ts`):**
```typescript
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-product-count',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './product-count.component.html',
  styleUrl: './product-count.component.css'
})
export class ProductCountComponent {
  @Input() electric: number = 0;
  @Input() electronic: number = 0;
  @Input() grocery: number = 0;

  @Output() radioBtnValue: EventEmitter<string> = new EventEmitter<string>();

  onRadioButtonChange(value: string) {
    this.radioBtnValue.emit(value);
  }
}
```

### 3. **Custom Pipe for Expiry Days Count**
The `ExpiryDaysCountPipe` calculates the number of days remaining for a product to expire. 

**Pipe Code (`expiry-days-count.pipe.ts`):**
```typescript
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'expiryDaysCount',
  standalone: true
})
export class ExpiryDaysCountPipe implements PipeTransform {

  transform(expiryDate: Date): number {
    const today = new Date();
    const expiryDateProduct = new Date(expiryDate).getTime();
    const currentDate = today.getTime();
    const differenceInTime = expiryDateProduct - currentDate;

    // Convert time difference from milliseconds to days
    return Math.ceil(differenceInTime / (1000 * 3600 * 24));
  }
}
```

### 4. **Custom Directive**
A simple custom directive (`appCustomdirective`) to change the background color of an element on mouse enter and leave events.

**Directive Code (`customdirective.directive.ts`):**
```typescript
import { Directive, ElementRef, HostBinding, HostListener, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appCustomdirective]',
  standalone: true
})
export class CustomdirectiveDirective implements OnInit {
  @HostBinding('style.backgroundColor') private bgColor = '';

  @HostListener('mouseenter') mouseover(eventData: Event) {
    this.bgColor = 'cyan';
  }

  @HostListener('mouseleave') mouseLeave(eventData: Event) {
    this.bgColor = 'transparent';
  }

  ngOnInit() {
    // Initialization logic (if needed)
  }
}
```

### 5. **Main App Component**
The main component (`app.component.ts`) integrates the `ProductListComponent` and displays the category filter, product count, and list of products.

```typescript
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DirectiveTestComponent } from './directive-test/directive-test.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DirectiveTestComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'CustomDirective';
}
```

## Notes:

### **Commands Used to Generate Components, Pipes, and Directives:**

1. **Generate a New Component (Product List)**:
   ```bash
   ng g c product-list
   ```

2. **Generate a New Component (Product Count)**:
   ```bash
   ng g c product-count
   ```

3. **Generate a New Pipe (Expiry Days Count)**:
   ```bash
   ng g p expiry-days-count
   ```

4. **Generate a New Directive (Custom Directive)**:
   ```bash
   ng g d customdirective
   ```

5. **To Create and Run the Project**:
   - First, create a new Angular project:
     ```bash
     ng new angular-filter-trackby --style=css
     ```
   - Install dependencies and serve:
     ```bash
     npm install
     ng serve
     ```

### **Dependencies Used**:

- Angular 18
- Bootstrap (for styling)
- TypeScript

### **File Configuration (`angular.json`)**:
Ensure that the assets, styles, and scripts are properly configured in your `angular.json`:

```json
"styles": [
  "./node_modules/bootstrap/dist/css/bootstrap.min.css",
  "src/styles.css"
],
"scripts": [
  "./node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"
]
```

### **Additional Notes**:
- Custom pipe `expiryDaysCountPipe` transforms a product's expiry date into the number of days left for the product to expire.
- The custom directive changes the background color of an element on mouse hover.
- `@Input()` and `@Output()` are used to create communication between parent and child components.
- `trackBy` helps to optimize rendering by uniquely identifying elements in an `ngFor` loop.

## Conclusion

This project demonstrates several Angular concepts such as real-time filtering, custom pipes, `@Input`/`@Output` communication, and directives for dynamic behavior. It’s a practical example of how Angular can be used to build a dynamic, filterable product list for an ecommerce site.
