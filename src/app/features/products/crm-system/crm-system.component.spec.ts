import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrmSystemComponent } from './crm-system.component';

describe('CrmSystemComponent', () => {
  let component: CrmSystemComponent;
  let fixture: ComponentFixture<CrmSystemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CrmSystemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrmSystemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
