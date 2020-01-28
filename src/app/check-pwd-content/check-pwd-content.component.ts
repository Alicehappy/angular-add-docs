import { Component, Input, OnInit} from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AuthStrings } from '../auth.strings';
import { AuthConstants } from '../auth.constants';

@Component({
  selector: 'app-check-pwd-content',
  template: `
  <div class="modal-header" style="display: block">
    <h4 class="modal-title" style="text-align: center; font-size: 24px;">
      {{title}}
    </h4>
    <p style="text-align: center; margin-bottom: 0px;">
      {{config.userFullname}}@{{config.server}}
    </p>
  </div>
  <form name="pwdform">
    <div class="modal-body">
      <span>
        {{dialogMsg}}
      </span>
      <ul>
        <li *ngIf="!meetCharDigitRequired">at least one character and one digit</li>
        <li *ngIf="!meetUpperLowerRequired">at least one lowercase and one uppercase</li>
        <li *ngIf="!meetSpecialCharRequired">at least one special character ( @!#$ )</li>
        <li>at least {{config.minLength}} characters</li>
      </ul>
      <div class="form-group">
          <label for="newpass">New Password</label>
          <input name="newPass" class="form-control" type="password"
          [(ngModel)]="newPassword" (ngModelChange)="checkPwdChange()">
      </div>
      <div class="form-group">
          <label for="confirmpass">Confirm Password</label>
          <input name="confirmPass" class="form-control" type="password"
          [(ngModel)]="confirmPassword" (ngModelChange)="checkPwdChange()">
          <div>
            <p *ngIf="!pwdMatch">
              Password mismatch
            </p>
          </div>
      </div>
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-outline-dark" (click)
      ="activeModal.close('Close click')">Close</button>
    </div>
  </form>
  `
})
export class CheckPwdContentComponent implements OnInit {
  @Input() name; // Test string
  @Input() config;

  
  dialogMsg: string;
  meetCharDigitRequired: boolean;
  meetSpecialCharRequired: boolean;
  meetUpperLowerRequired: boolean;
  newPassword: string;
  confirmPassword: string;





  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit() {
    // Make sure config is ready
    this.dialogMsg = this.config.pwdExpired ? AuthStrings.CHANGE_PWD_MSG_NEW_PWD :
                                              AuthStrings.CHANGE_PWD_MSG_CHANGE_PWD;
    this.meetCharDigitRequired = !(this.config.charDigitRequired == true);
    this.meetSpecialCharRequired = !(this.config.specialCharRequired == true);
    this.meetUpperLowerRequired = !(this.config.upperLowerRequired == true);
  }
  meetMinLength = false;
  errorMessage = null;
  hasErrorMsg = false;
  pwdMatch = false;
  dismissable = false;
  title = AuthStrings.CHANGE_PWD_TITLE;
  buttons = [{label: AuthStrings.CHANGE_PWD_BTN_CHANGE, code: AuthConstants.BTN_CODE_PWD_CHANGE, primary: true},
            {label: AuthStrings.CHANGE_PWD_BTN_CANCEL, code: AuthConstants.BTN_CODE_PWD_CANCEL}];
  

  checkPwdChange() {
    if(!this.pwdMatch) {
      if(this.newPassword == this.confirmPassword) {
        this.pwdMatch = true;
      }
    } else {
      if(this.newPassword != this.confirmPassword) {
        this.pwdMatch = false;
        console.log(this.pwdMatch);
      }
    }
    if(this.hasErrorMsg) {
      this.hasErrorMsg = false;
    }
    console.log(this.pwdMatch);
  }



  //modal-body
  //modal.newPassword
  //modal.checkPwdChange()
  //modal.confirmPassword
  //modal.checkPwdChange()// repeated
  //modal.hasError
  //modal.errorMessage
  //modal.pwdMatch

  //initPwdForm.$error.InitPwdDL :
  //!initPwdForm.$error.InitPwdOutRange:
  //!initPwdForm.$error.InitPwdNoSAE:
  //initPwdForm.$error.InitPwdUL:
  //initPwdForm.$error.InitPwdLen:
  //!initPwdForm.$error.InitPwdSC:
  //initPwdForm.newPassword.$dirty:




  // modal footer
  // $first
  // initPwdForm.newPassword.$invalid
  //initPwdForm.$pristine



/**
 * This directive checks the user password.
 * Make sure the character entered by user following password rules.
 * Dynamically update the message to user.
 * Dynamically update the highlight color to the input field for the user.
 * @exports checkPwd
 */

/* export default angular.module('dfWebApp.checkPwd', [])
.directive('checkPwd', function() {
  return {
    require: 'ngModel',
    restrict: 'A',
    link: function(scope, element, attrs, ctrl) {

      let meetCharDigit = (attrs.chardigitMeet == 'true');
      let meetUpperLower = (attrs.upperlowerMeet == 'true');
      let meetSpecialChar = (attrs.specialcharMeet == 'true');
      let meetMinLength = (attrs.minlengthMeet == 'true');
      let minLength = attrs.minLength;

      ctrl.$parsers.push(function(val){
        // Initialization
        ctrl.$setValidity('InitPwdOutRange', true);
        ctrl.$setValidity('InitPwdNoSAE', true);
        ctrl.$setValidity('InitPwdDL', true);
        ctrl.$setValidity('InitPwdUL', true);
        ctrl.$setValidity('InitPwdSC', true);
        ctrl.$setValidity('InitPwdLen', true);


        // Check each character after each changing in the input.
          for (let i = 0; i < val.length; ++i) {
            let str = val;
            let n = str.charCodeAt(i);
            // ONLY CHARACTERS WITH ASCII VALUE 32 to 126 ARE ALLOWED, we are currently not blocking '|', pipe character like dfexplore.
            // We should not show the error message that character used in password is out of ascii table range.
            if (n<32 || n>126) {
              ctrl.$setValidity('InitPwdOutRange', false);
            }

            // SPACE, AMPERSAND AND EQUAL SIGN CHARACTERS ARE NOT ALLOWED
             if (n==32 || n==38 || n==61) {
               ctrl.$setValidity('InitPwdNoSAE', false);
             }
        }

        // Check the password to make sure follow the four password rules.
        // Include a number
        let hasNum = /\d/.test(val);
        let hasLowerLett = /[a-z]/.test(val);
        let hasUpperLett = /[A-Z]/.test(val);
        let hasLett = hasLowerLett || hasUpperLett;
        let hasSpecLett = /[^a-zA-Z0-9]/.test(val);
        // Satisfy the min length
        let hasMinLength = false;
        if (val.length >= minLength) { hasMinLength = true; }


        let meetCharDigitA = hasNum && hasLett;
        let meetUpperLowerA = hasUpperLett && hasLowerLett;
        let meetSpecialCharA = hasSpecLett;
        let meetMinLengthA = hasMinLength;


        if (!meetCharDigit ) {
          if (!meetCharDigitA) {
            ctrl.$setValidity('InitPwdDL', false);
       }}

       if (!meetUpperLower && !meetUpperLowerA) {
         ctrl.$setValidity('InitPwdUL', false);
       }

       if (!meetSpecialChar && !meetSpecialCharA) {
         ctrl.$setValidity('InitPwdSC', false);
       }

       if (!meetMinLength && !meetMinLengthA) {
         ctrl.$setValidity('InitPwdLen', false);
       }


        ctrl.$setViewValue(val);
        ctrl.$render();

        return val;

      });
    }
  };
}) */

















}

@Component({
  selector: 'app-check-pwd-content-component',
  templateUrl: './check-pwd-content.component.html'
})

export class CheckPwdContentCompComponent {
  constructor(private modalService: NgbModal) {}
  open() {
    const modalRef = this.modalService.open(CheckPwdContentComponent);
    modalRef.componentInstance.name = 'World';


    // All the config properties - come from services
    // TODO: use fake data for now, later will come from auth service
    let config = {
      pwdExpired: true,
      userFullname: 'kitty',
      server: 't52suse.datafa.com',
      // 4 rules
      charDigitRequired: false,
      minLength: 6,
      specialCharRequired: true,
      upperLowerRequired: true,

      
    }

    modalRef.componentInstance.config = config;

    


       

   
  }
}
