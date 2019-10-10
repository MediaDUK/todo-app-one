import { Injectable, Output, EventEmitter } from '@angular/core'

@Injectable()
export class ModalCreateTodoService {

  @Output() change: EventEmitter<boolean> = new EventEmitter();

  toggle(openOrClose: boolean) {
    this.change.emit(openOrClose);
  }
}