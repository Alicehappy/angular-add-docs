import { Component, Input } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-check-pwd-content',
  template: `
  <div class="modal-header">
    <h4 class="modal-title">Change Password Component as Content!</h4>
    <button type="button" class="close" aria-label="Close" (click)
    ="activeModal.dismiss('Cross click')">
      <span aira-hidden="true">&times;</span>
    </button>
  </div>
  <div class="modal-body">
    <p>Hello, {{name}}!</p>
  </div>
  <div class="modal-footer">
    <button type="button" class="btn btn-outline-dark" (click)
    ="activeModal.close('Close click')">Close</button>
  </div>
  `
})
export class CheckPwdContentComponent {
  @Input() name;

  constructor(public activeModal: NgbActiveModal) { }

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
  }
}
