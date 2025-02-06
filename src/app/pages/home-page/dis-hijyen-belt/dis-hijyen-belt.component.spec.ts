import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisHijyenBeltComponent } from './dis-hijyen-belt.component';

describe('DisHijyenBeltComponent', () => {
  let component: DisHijyenBeltComponent;
  let fixture: ComponentFixture<DisHijyenBeltComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DisHijyenBeltComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisHijyenBeltComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
