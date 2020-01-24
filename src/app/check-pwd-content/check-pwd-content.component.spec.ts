import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckPwdContentComponent } from './check-pwd-content.component';

describe('CheckPwdContentComponent', () => {
  let component: CheckPwdContentComponent;
  let fixture: ComponentFixture<CheckPwdContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckPwdContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckPwdContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
