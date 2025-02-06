import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentTryPageComponent } from './content-try-page.component';

describe('ContentTryPageComponent', () => {
  let component: ContentTryPageComponent;
  let fixture: ComponentFixture<ContentTryPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContentTryPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContentTryPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
