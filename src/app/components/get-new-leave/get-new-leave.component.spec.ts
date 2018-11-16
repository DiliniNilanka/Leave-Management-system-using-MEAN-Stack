import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetNewLeaveComponent } from './get-new-leave.component';

describe('GetNewLeaveComponent', () => {
  let component: GetNewLeaveComponent;
  let fixture: ComponentFixture<GetNewLeaveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetNewLeaveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetNewLeaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
