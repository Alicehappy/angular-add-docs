import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-add-docs',
  templateUrl: './add-docs.component.html',
  styleUrls: ['./add-docs.component.css']
})
export class AddDocsComponent {

  constructor(private modalService: NgbModal) { }

  openLg(content) {
    this.modalService.open(content, { size: 'lg' });
  }

  openScrollableContent(longContent) {
    this.modalService.open(longContent, { scrollable: true });
  } 
}
