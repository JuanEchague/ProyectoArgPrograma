import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarItemComponent } from './registrar-item.component';

describe('RegistrarItemComponent', () => {
  let component: RegistrarItemComponent;
  let fixture: ComponentFixture<RegistrarItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrarItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistrarItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
