import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ObservableComponent } from './observable/observable.component';
import { FormEventComponent } from './form-event/form-event.component';
import { TimerObservableComponent } from './timer-observable/timer-observable.component';

const routes: Routes = [{path:'observable',component:ObservableComponent},
  {path:'', redirectTo:'/observable',pathMatch:'full'},
  {path:'formEvent',component:FormEventComponent},
  {path:'timer',component:TimerObservableComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
