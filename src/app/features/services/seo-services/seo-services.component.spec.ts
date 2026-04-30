import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeoServicesComponent } from './seo-services.component';

describe('SeoServicesComponent', () => {
  let component: SeoServicesComponent;
  let fixture: ComponentFixture<SeoServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SeoServicesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeoServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
