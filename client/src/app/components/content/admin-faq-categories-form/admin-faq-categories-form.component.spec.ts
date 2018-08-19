import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminFaqCategoriesFormComponent } from './admin-faq-categories-form.component';

describe('AdminFaqCategoriesFormComponent', () => {
  let component: AdminFaqCategoriesFormComponent;
  let fixture: ComponentFixture<AdminFaqCategoriesFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminFaqCategoriesFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminFaqCategoriesFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
