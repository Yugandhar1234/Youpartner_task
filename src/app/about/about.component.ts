import { Component } from '@angular/core';
export interface Iboards{
  id:string;
  name:string;
  status:string
}
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  selectedItem!:Iboards
  public boards:Iboards[]=[
    {"id":"1-111","name":"Angular dropdown requirement","status":"new"},
    {"id":"2-22","name":"React","status":"inprogress"},
    {"id":"321-2","name":'Backend with Api',"status":"inprogress"},
    {"id":"1-121","name":"TesTing Module in app","status":"new"},
    {"id":"2122","name":"application restart","status":"done"},
    {"id":"32189-2","name":'nodejs ajax call',"status":"new"},
    {"id":"12311","name":" php.xml file is missing","status":"done"},
    {"id":"298762","name":"vue akignments problem","status":"inprogress"},
    {"id":"309890","name":'Testing fo time api',"status":"done"},
    
  ];
  constructor(){}
  filter(e:string){
   return this.boards.filter(ele=>{
      return ele.status==e;
    })
  }
  drag(item:Iboards){
    this.selectedItem=item;
  }
  onDrop(event:any,status:string){
    const current=this.boards.find(ele=>{
     return ele.id==this.selectedItem.id
    })
    if(current!=undefined){
      current.status=status;
    }
  }
  ondragOver(event:any){
    event.preventDefault()
    // console.log('over', event)
  }

}
