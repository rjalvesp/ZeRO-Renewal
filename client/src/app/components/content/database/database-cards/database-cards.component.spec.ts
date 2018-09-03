import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatabaseCardsComponent } from './database-cards.component';

describe('DatabaseCardsComponent', () => {
  let component: DatabaseCardsComponent;
  let fixture: ComponentFixture<DatabaseCardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatabaseCardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatabaseCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
