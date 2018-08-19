import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminFaqsFormComponent } from './admin-faqs-form.component';

describe('AdminFaqsFormComponent', () => {
  let component: AdminFaqsFormComponent;
  let fixture: ComponentFixture<AdminFaqsFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminFaqsFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminFaqsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
