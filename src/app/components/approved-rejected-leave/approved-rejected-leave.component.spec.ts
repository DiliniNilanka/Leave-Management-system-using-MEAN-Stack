import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApprovedRejectedLeaveComponent } from './approved-rejected-leave.component';

describe('ApprovedRejectedLeaveComponent', () => {
  let component: ApprovedRejectedLeaveComponent;
  let fixture: ComponentFixture<ApprovedRejectedLeaveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApprovedRejectedLeaveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApprovedRejectedLeaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
