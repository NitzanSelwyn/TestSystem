import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganizationMainComponent } from './organization-main.component';

describe('OrganizationMainComponent', () => {
  let component: OrganizationMainComponent;
  let fixture: ComponentFixture<OrganizationMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrganizationMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrganizationMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
