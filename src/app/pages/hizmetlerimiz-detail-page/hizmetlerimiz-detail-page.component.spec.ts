import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HizmetlerimizDetailPageComponent } from './hizmetlerimiz-detail-page.component';

describe('HizmetlerimizDetailPageComponent', () => {
  let component: HizmetlerimizDetailPageComponent;
  let fixture: ComponentFixture<HizmetlerimizDetailPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HizmetlerimizDetailPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HizmetlerimizDetailPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
