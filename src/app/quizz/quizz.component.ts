import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable, Subscription, interval, timeInterval } from 'rxjs';
export interface Iquestion{
  questionId:number;
  question:string;
  options:IoptionData[],
}
export interface IoptionData{
  option:string,
  isCorrect?:boolean,
  isSelected?:boolean
  isdisable?:boolean
}
@Component({
  selector: 'app-quizz',
  templateUrl: './quizz.component.html',
  styleUrls: ['./quizz.component.css']
})
export class QuizzComponent implements OnInit{
  public isStart:boolean=true;
  public showInsrtuctions!:boolean;
  public showQuizz!:boolean;
  public showResult!:boolean;
  public currentQuestion:number=0;
  currentTime:number=20;
  questionData: Iquestion[]=[];
  public score:number=0;
  public timer:Observable<number>=interval(1000);
  public subscription:Subscription[]=[]
 
  constructor( private http:HttpClient){}
  ngOnInit(): void {
    this.http.get('http://localhost:3000/quizz').subscribe((res:any)=>{
      this.questionData=res;
console.log(res)
    })
  }
  start(){
    this.showInsrtuctions=true;
    this.isStart=false;
  }
  startQuizz(){
    //debugger
    this.showQuizz=true;
    this.showInsrtuctions=false;
    this.subscription.push(
      this.timer.subscribe((time)=>{
        if(this.currentTime==0){
          this.nextQuestion()
        }else{
          this.currentTime--
        }
      })
    )
  }
  cancleQuizz(){
    this.isStart=true;
    this.showInsrtuctions=false;
  }
  nextQuestion(){
    //debugger
    if(this.questionData.length-1>this.currentQuestion){
      this.currentQuestion++;
      this.currentTime=20;
    }
    else{
      this.subscription.forEach(e=>e.unsubscribe())
    }
  }
  finish(){
    this.score++
  }
  selectedOption(option:any){
    this.questionData[this.currentQuestion].options.map((e:IoptionData)=>{
      e.isSelected = false;
      //e.isdisable=true;
    })
    option.isSelected=true;
    //option.isSelected=false;
  }
}
