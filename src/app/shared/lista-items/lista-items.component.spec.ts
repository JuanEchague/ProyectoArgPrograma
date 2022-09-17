import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaItemsComponent } from './lista-items.component';

describe('ListaItemsComponent', () => {
  let component: ListaItemsComponent;
  let fixture: ComponentFixture<ListaItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaItemsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
