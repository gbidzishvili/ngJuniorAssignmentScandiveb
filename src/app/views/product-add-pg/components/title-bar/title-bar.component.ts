import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-title-bar',
  templateUrl: './title-bar.component.html',
  styleUrl: './title-bar.component.css',
})
export class TitleBarComponent {
  @Output()
  saveBtnClickedEvent: EventEmitter<any> = new EventEmitter();
  onEmitBtnClick() {
    this.saveBtnClickedEvent.emit();
  }
}
