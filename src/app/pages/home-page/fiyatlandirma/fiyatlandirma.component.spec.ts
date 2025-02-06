import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiyatlandirmaComponent } from './fiyatlandirma.component';

describe('FiyatlandirmaComponent', () => {
  let component: FiyatlandirmaComponent;
  let fixture: ComponentFixture<FiyatlandirmaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FiyatlandirmaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FiyatlandirmaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
