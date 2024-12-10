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


  @Input()
  electric: number = 0;

  @Input()
  electronic: number = 0;

  @Input()
  grocery: number = 0;

  @Output()
  radioBtnValue:EventEmitter<string> = new EventEmitter<string>();

  onRadioButtonChange(value: string) {
    //alert(value);
    this.radioBtnValue.emit(value); // Emit the selected value to the parent 
  }

}
