import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child-form-event',
  templateUrl: './child-form-event.component.html',
  styleUrls: ['./child-form-event.component.scss']
})
export class ChildFormEventComponent {
  @Input() ChildName: string="";
  @Output() dataToParent = new EventEmitter<string>;

  datasend(){
   this.dataToParent.emit("herooooo")
  }
}
