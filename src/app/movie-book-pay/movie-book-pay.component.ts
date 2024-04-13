import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Imovie } from '../movieticket/movieticket.component';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-movie-book-pay',
  templateUrl: './movie-book-pay.component.html',
  styleUrls: ['./movie-book-pay.component.css']
})
export class MovieBookPayComponent implements OnInit{
  movieInfo!:Imovie;
  selectedSeat:any=[{row:'A',seat:5}];
  constructor( private ar:ActivatedRoute){}
  ngOnInit(): void {
    this.ar.queryParams.subscribe((res:any)=>{
      let data={...res,tickets:JSON.parse(res.tickets)}
      this.movieInfo=data;
    })
  }
  getSeats(num:number){
    let arry=[]
    for(let i=1;i<=num;i++){
      arry.push(i);
    }
    return arry
  }
  seats(row:string,seat:number){
    debugger
    let isExisting=this.selectedSeat.findIndex((item:any)=>{
      return item.row==row && item.seat==seat
    })
    if(isExisting==undefined){
      this.selectedSeat.push({row:row,seat:seat});
      console.log(this.selectedSeat)
    }
    else{
      this.selectedSeat.removeAt(isExisting);
    }
  }
  select(row:string,seat:number){
    const isExisting=this.selectedSeat.find((item:any)=>item.row==row && item.seat==seat)
    if(isExisting){
      return true;
    }
    return false
  }

  
  // movieInfo!:any;
  // booking:any=[];
  // selectedSeat:any;
  // ngOnInit(): void {
  //   this.ar.queryParams.subscribe((res:any)=>{
  //     //debugger
  //     let modifiedOne={...JSON.parse(res['movie'])};
  //     this.movieInfo=modifiedOne
  //   })
  // }
  // seatFun(number:number){
  //   let arr=[]
  //   for(let i=1;i<=number;i++){
  //     arr.push(i);
  //   }
  //   return arr
  // }
  // seatNo(seatNo:number,row:string){
  //   debugger
  //   let isExisting=this.booking.find((item:any)=>{
  //     return item.row==row && item.seatNo==seatNo;
  //   })
  //   if(isExisting){
  //     let a=this.booking.findIndex((item:any)=>{
  //       return item.row==isExisting.row && item.seatNo==isExisting.seatNo;
  //     })
  //     this.booking.splice(a,1);
  //   }
  //   else{
  //     this.booking.push({seatNo,row});
  //   }
  //  console.log(this.booking)
  // }
  // ngCheckClass(row:any,seat:any){
  //   //debugger
  //   let isExisting=this.booking.find((item:any)=>{
  //     return item.row==row && item.seatNo==seat;
  //   })
  //   if(!isExisting){
  //    return false;
  //   }
  //   else{
  //     return true
  //   }
  // }
}
