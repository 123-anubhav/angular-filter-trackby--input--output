import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductCountComponent } from './product-count.component';

describe('ProductCountComponent', () => {
  let component: ProductCountComponent;
  let fixture: ComponentFixture<ProductCountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductCountComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
