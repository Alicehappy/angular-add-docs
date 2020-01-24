import { Component, Input } from '@angular/core';
import { NgbModal, ModalDismissReasons, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-check-pwd',
  templateUrl: './check-pwd.component.html',
  styleUrls: ['./check-pwd.component.css']
})
export class CheckPwdComponent  {
  title = 'ng-bootstrap-modal-demo';
  closeResult: string;
  //@Input() title = `Input Value`;  // This is the working experimented code
  modalOptions: NgbModalOptions;


  constructor(
    private modalService: NgbModal
  ){
    this.modalOptions = {
      backdrop: 'static',
      ariaLabelledBy: 'modal-basic-title',
    }
  }

  open(content) {   
    this.modalService.open(content, this.modalOptions).result
    .then( (result) => {
      this.closeResult = `Close with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
 
}

