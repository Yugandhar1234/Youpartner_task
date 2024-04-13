import { Component } from '@angular/core';

@Component({
  selector: 'app-machine',
  templateUrl: './machine.component.html',
  styleUrls: ['./machine.component.css']
})
export class MachineComponent {
  constructor() { }
  public All: any[] = [
    { type: 'ux', text: 'ux issue' },
    { type: 'back', text: 'cordinate to dev' },
    { type: 'test', text: 'move to production' },
    { type: 'ux', text: 'ux2' },
    { type: 'test', text: 'vue problem' },
    { type: 'back', text: 'ux1' },
    { type:'front',text:'k' }

  ];
  public types: string[] = ['ux', 'front', 'back', 'test']
  public input: any = ''
  click(type:string){
    let a=prompt(type);
   let obj={type:type,text:a}
    this.All.push(obj);
  }
  individual(type:string){
    return this.All.filter(value=>value.type===type );
  }
  tracking(index:number,value:string){
    return value
  }
}
