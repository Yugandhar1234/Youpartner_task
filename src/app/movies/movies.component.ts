import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { ShareService } from '../share/share.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit{
  navbar:any={
    'background-color':'#000',
    'color':'red'
  }
  public items:number[]=[];
  constructor(private share:ShareService){
    for(let i=1;i<100;i++){
      this.items.push(i)
    }
  }
  @ViewChild("nav") navelee!:ElementRef;
  bannerData:any=[];
  dayTrending:any[]=[];
  @HostListener('document:scroll',) scrollOver(){
    
    if(document.body.scrollTop > 0 || document.documentElement.scrollTop > 0){
      this.navbar={
        "background-color":'aliceblue'
      }
    }
    else{
      this.navbar={
        "background-color":"#000"
      }
    }
  }
  ngOnInit(): void {
    this.share.weekTrendingMovies().subscribe(res=>{
      console.log(res)
      this.bannerData=res.results;
      this.bannerData.map((item:any)=>{
        item.backdrop_path='https://image.tmdb.org/t/p/original'+ item.backdrop_path;
      })
      console.log(this.bannerData)
    });
    this.share.dayTrendingMovies().subscribe(res=>{
      console.log(res)
      this.dayTrending=res.results;
      this.dayTrending.map((item:any)=>{
         item.poster_path='https://image.tmdb.org/t/p/original'+ item.poster_path;
      })
      console.log(this.dayTrending)
    })
  }

}
