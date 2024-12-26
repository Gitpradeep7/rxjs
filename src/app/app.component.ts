import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'rxjs';
  topics = ['observable','formEvent','timer','cart']
  count$ : Observable<number> | undefined;
  constructor(private store : Store<{counter: number}>){
    this.count$ = this.store.select('counter');
  }
}
