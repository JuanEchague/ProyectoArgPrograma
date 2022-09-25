import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemDetallesComponent } from './item-detalles.component';

describe('ItemDetallesComponent', () => {
  let component: ItemDetallesComponent;
  let fixture: ComponentFixture<ItemDetallesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemDetallesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemDetallesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
