import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import{map} from 'rxjs/operators';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  time ;
  timer;
  mydata;
  constructor() { }

  ngOnInit(): void {
     setInterval(()=> {
      this.time = new Date();
      this.timer=this.time.toLocaleTimeString()
    }, 1000);
   
  }
 
  myobservable=new Observable((data)=>{

    data.next("iam observable");
 
  })
  myfun(){
 
   this.myobservable.pipe(map(x=>x.toString().toUpperCase())).subscribe({
     next(data){
       this.mydata=data;
       alert(this.mydata);
       console.log(this.mydata);
     }
     
      })
  }
  
}
