import { Component, OnInit } from '@angular/core';
import { Itodo } from './todo.model';
import { filter } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  constructor(){
   
  }
  ngOnInit(): void {
    this.getTodos();
  }
  public todo:Itodo={
    meetings:'',
    time:'',
    taskTags:'',
    isCheck : false
  }
  showSpecif:any = "";
  specifTag=''
  public todosList:any[]=[];
  filterList:any;
  tags=['default','health','education','travel','finance','work','fun','holyday','culture','events'];
  addTodos(){
    debugger
    // const todos={...this.todo};
    this.todosList.push({...this.todo});
    // const todos=this.todosList
    localStorage.setItem("todosList",JSON.stringify(this.todosList));
  } 
  getTodos(){
    debugger
    // let todos=localStorage.getItem("todosList");
    // if(todos!=null){
    //   this.todosList=JSON.parse(todos);
    //   this.filterList=this.todosList
    // }
    // this.filterList=this.todosList;
    // return this.todosList

    this.todosList=JSON.parse(localStorage.getItem('todosList')!);
    this.filterList=this.todosList
  }
  remove(index:number){
    this.todosList.splice(index,1);
    localStorage.setItem("todosList", JSON.stringify(this.todosList));
    //this.getTodos();
  }
  track(index:Number,todo:Itodo){
    return index;
    //console.log(index);
  }
  show(s:string){
    //debugger
    if(s == "filter"){
      this.showSpecif=s;

    }
    else if(s=="show_all"){
      this.showSpecif=s;
    }
    else{
      this.showSpecif=s;
    }
  }
  particularTag(tags:string){
    //alert(tags);
    this.tags.find((tag:any)=>{
      if(tag==tags) {
        this.specifTag=tag;
      }
    });
    this.filterList=this.todosList.filter((item)=>{
      return item.taskTags.toLocaleLowerCase().includes(tags);
    })
  }
}
