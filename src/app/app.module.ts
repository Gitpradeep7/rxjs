import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ObservableComponent } from './observable/observable.component';
import { FormEventComponent } from './form-event/form-event.component';
import { TimerObservableComponent } from './timer-observable/timer-observable.component';
import { ChildFormEventComponent } from './child-form-event/child-form-event.component';
import { StoreModule } from '@ngrx/store';
import { CounterpageComponent } from './counterpage/counterpage.component';
import { counterReducer } from './action/reduce';

@NgModule({
  declarations: [
    AppComponent,
    ObservableComponent,
    FormEventComponent,
    TimerObservableComponent,
    ChildFormEventComponent,
    CounterpageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({counter: counterReducer}, {})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
