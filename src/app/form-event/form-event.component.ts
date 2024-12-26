import { Component, ElementRef, ViewChild } from '@angular/core';
import { fromEvent, interval, take, toArray } from 'rxjs';

@Component({
  selector: 'app-form-event',
  templateUrl: './form-event.component.html',
  styleUrls: ['./form-event.component.scss']
})
export class FormEventComponent {
  name:string = "pradeep";
  dataFromChild : string="";
  constructor(){}
  @ViewChild('addBtn')
  addBtn!: ElementRef; 
ngOnInit(){}
ngAfterViewInit(){
  let count =1;
  fromEvent(this.addBtn.nativeElement,"click").subscribe((res)=>{
    let countVal = "Video"+ count++;
    console.log(countVal);
    this.addVideo(countVal)
  })
}
addVideo(val:string){
  let el = document.createElement('li');
  el.innerText = val;
  document.getElementById("listContainer")?.appendChild(el)
}
toArrayMeth(){
  let source = interval(1000);
  let sourceToArray = source.pipe(take(10),toArray()).subscribe((res:any)=>{
    console.log("res",res);
  })
}
getData(mess:any){
  this.dataFromChild = mess;
}
}
