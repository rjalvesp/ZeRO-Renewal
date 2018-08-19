import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminFaqCategoriesIndexComponent } from './admin-faq-categories-index.component';

describe('AdminFaqCategoriesIndexComponent', () => {
  let component: AdminFaqCategoriesIndexComponent;
  let fixture: ComponentFixture<AdminFaqCategoriesIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminFaqCategoriesIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminFaqCategoriesIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
