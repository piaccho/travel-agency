import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasketPreviewComponent } from './basket-preview.component';

describe('BasketPreviewComponent', () => {
  let component: BasketPreviewComponent;
  let fixture: ComponentFixture<BasketPreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasketPreviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BasketPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
