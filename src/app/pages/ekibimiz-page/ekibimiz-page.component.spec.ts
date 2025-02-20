import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EkibimizPageComponent } from './ekibimiz-page.component';

describe('EkibimizPageComponent', () => {
  let component: EkibimizPageComponent;
  let fixture: ComponentFixture<EkibimizPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EkibimizPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EkibimizPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
