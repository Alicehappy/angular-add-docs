import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangePwdDirectiveComponent } from './change-pwd-directive.component';

describe('ChangePwdDirectiveComponent', () => {
  let component: ChangePwdDirectiveComponent;
  let fixture: ComponentFixture<ChangePwdDirectiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChangePwdDirectiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangePwdDirectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
