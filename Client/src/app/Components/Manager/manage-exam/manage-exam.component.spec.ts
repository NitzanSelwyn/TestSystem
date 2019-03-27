import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageExamComponent } from './manage-exam.component';

describe('ManageExamComponent', () => {
  let component: ManageExamComponent;
  let fixture: ComponentFixture<ManageExamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageExamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageExamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
