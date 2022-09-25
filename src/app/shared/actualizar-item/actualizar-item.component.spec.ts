import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarItemComponent } from './actualizar-item.component';

describe('ActualizarItemComponent', () => {
  let component: ActualizarItemComponent;
  let fixture: ComponentFixture<ActualizarItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActualizarItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActualizarItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
