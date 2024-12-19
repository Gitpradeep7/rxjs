import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-timer-observable',
  templateUrl: './timer-observable.component.html',
  styleUrls: ['./timer-observable.component.scss']
})
export class TimerObservableComponent {
  count:any;
  constructor(){}
  ngOnInit(){
    let boardCast = interval(1000);
    boardCast.subscribe((res:any)=>{
      this.count = res;
    })

  }
}
