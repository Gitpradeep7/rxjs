import { Component } from '@angular/core';
import { from, Observable, of } from 'rxjs';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.scss']
})
export class ObservableComponent {
  agents: Observable<string>;
  agentName: string='';
//convert a array into observable
  names:any =['Mark','Jin','Kazama'];
  names$:Observable<string> = of(this.names)
  //convert a string into  observable
  college:string='bharat vidhya bhawan college';
  college$:Observable<string> = of(this.college)
  //convert a object into observable
  student:any ={name:'rahul',age:23,rollNum:14};
  student$:any = of(this.student);
  //convert a array into observable by using from[];
  colors:any = ['black','green','blue','purple','red'];
  colors$:Observable<any> = from(this.colors);
  constructor(){
    this.agents = new Observable(
      function(observer){
        try{
          observer.next('Ram');
          setInterval(()=>{
            observer.next('Mark');
          },3000);
          setInterval(()=>{
            observer.next('sita');
          },6000);
        }
        catch(e){
          observer.error(e);
        }
      }
    );
    this.agents.subscribe(data =>{
      this.agentName =data;
    })

    this.names$.subscribe((res)=>{
      console.log('of() for array',res)
    })
    this.college$.subscribe((res)=>{
      console.log('of() for string',res)
    })
    this.student$.subscribe((res:any)=>{
      console.log('of() for object',res)
    })
    this.colors$.subscribe((res:any)=>{
      console.log('from() for array',res)
    })
  }
}
