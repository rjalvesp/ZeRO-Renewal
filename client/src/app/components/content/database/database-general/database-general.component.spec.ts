import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatabaseGeneralComponent } from './database-general.component';

describe('DatabaseGeneralComponent', () => {
  let component: DatabaseGeneralComponent;
  let fixture: ComponentFixture<DatabaseGeneralComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatabaseGeneralComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatabaseGeneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
