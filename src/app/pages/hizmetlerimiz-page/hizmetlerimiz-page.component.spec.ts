import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HizmetlerimizPageComponent } from './hizmetlerimiz-page.component';

describe('HizmetlerimizPageComponent', () => {
  let component: HizmetlerimizPageComponent;
  let fixture: ComponentFixture<HizmetlerimizPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HizmetlerimizPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HizmetlerimizPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
