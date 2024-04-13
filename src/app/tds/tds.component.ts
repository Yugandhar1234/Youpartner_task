import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ShareService } from '../share/share.service';

@Component({
  selector: 'app-tds',
  templateUrl: './tds.component.html',
  styleUrls: ['./tds.component.css']
})
export class TdsComponent implements OnInit{
  
  input:FormControl=new FormControl('');
  updateInput:FormControl=new FormControl('')
  
  getAllTodos:any;
  constructor(private share:ShareService){}
  ngOnInit(): void {
   this.todosList();
  }
  todosList(){
    this.share.getAllTodos().subscribe(res=>{
      this.getAllTodos=res;
    })
  }
  add(){
    debugger
    let isExe=this.getAllTodos.find((item:any)=>{
      return item.title==this.input.value;
      })
      if(isExe!=undefined){
        alert("Already Exists!");
      }
      else{
        this.share.addTodos({title:this.input.value}).subscribe(res=>{
          this.todosList();
        });
       
      }
  }
  isEdit(todo:any){
   alert(todo.title);
   
    this.getAllTodos.forEach((item:any)=>{
      item.isInput=false;
    });
    todo.isInput=true;
   
  }
  update(todo:any){
    this.share.updateTodos({id:todo.id,title:todo.title}).subscribe((res=>{
      this.todosList();
    }));

  }
  delete(id:number){
    debugger
    this.share.deleteTodos(id).subscribe((res=>{
      this.todosList()
    }));
    
  }
}
