import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminFaqsIndexComponent } from './admin-faqs-index.component';

describe('AdminFaqsIndexComponent', () => {
  let component: AdminFaqsIndexComponent;
  let fixture: ComponentFixture<AdminFaqsIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminFaqsIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminFaqsIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
