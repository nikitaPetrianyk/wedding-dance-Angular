import {
  Component,
  ViewEncapsulation,
  ElementRef,
  Input,
  OnInit,
  OnDestroy
} from '@angular/core';
import { ModalService } from '../../services/modal.service';

@Component({
  selector: 'jw-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ModalComponent implements OnInit, OnDestroy {
  @Input() private id: string;

  private element: any;

  constructor(private modalService: ModalService, private el: ElementRef) {
    this.element = el.nativeElement;
  }

  ngOnInit(): void {
    if (!this.id) {
      console.error('modal must have an id');
      return;
    }
    console.log(this.element);
    // add self (this modal instance) to the modal service so it's accessible from controllers
    this.modalService.add(this);
  }

  closeModal(e: Event): void {
    const targetElement = <Element>e.target;
    if (targetElement.matches('.jw-modal')) {
      this.close();
    }
  }

  ngOnDestroy(): void {
    this.modalService.remove(this.id);
    this.element.remove();
  }

  open(): void {
    this.element.style.display = 'block';
  }

  close(): void {
    this.element.style.display = 'none';
  }
}
