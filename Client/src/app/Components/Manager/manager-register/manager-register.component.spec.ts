import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerRegisterComponent } from './manager-register.component';

describe('ManagerRegisterComponent', () => {
  let component: ManagerRegisterComponent;
  let fixture: ComponentFixture<ManagerRegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagerRegisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagerRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
