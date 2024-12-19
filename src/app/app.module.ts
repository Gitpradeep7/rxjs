import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ObservableComponent } from './observable/observable.component';
import { FormEventComponent } from './form-event/form-event.component';
import { TimerObservableComponent } from './timer-observable/timer-observable.component';

@NgModule({
  declarations: [
    AppComponent,
    ObservableComponent,
    FormEventComponent,
    TimerObservableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
