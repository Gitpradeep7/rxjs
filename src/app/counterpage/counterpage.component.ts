import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { decrement, increment, reset } from '../action/action';

@Component({
  selector: 'app-counterpage',
  templateUrl: './counterpage.component.html',
  styleUrls: ['./counterpage.component.scss']
})
export class CounterpageComponent {
  counter$: Observable<number> | undefined;
  constructor(private store : Store<{counter: number}>){
    this.counter$ = store.select('counter');
  }
  ngOnInit(){

  }
  onIncrement(){
    this.store.dispatch(increment());
  }
  onDecrement(){
    this.store.dispatch(decrement())
  }
  onReset(){
    this.store.dispatch(reset())
  }
}
