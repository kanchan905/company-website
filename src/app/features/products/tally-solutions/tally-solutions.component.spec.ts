import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TallySolutionsComponent } from './tally-solutions.component';

describe('TallySolutionsComponent', () => {
  let component: TallySolutionsComponent;
  let fixture: ComponentFixture<TallySolutionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TallySolutionsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TallySolutionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
