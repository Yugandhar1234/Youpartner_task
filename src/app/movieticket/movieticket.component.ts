import { Component, OnInit } from '@angular/core';
import { ShareService } from '../share/share.service';
import { FormControl } from '@angular/forms';
import { count } from 'rxjs';
import { Router } from '@angular/router';

export interface Imovie {
  movieName: string,
  rating: string,
  price: number,
  description: string,
  shows: string[],
  tickets:ImovieBook[],
  banner:string,
}
export interface ImovieBook{
  row:string,
  seats:number,
  selected:boolean
}

@Component({
  selector: 'app-movieticket',
  templateUrl: './movieticket.component.html',
  styleUrls: ['./movieticket.component.css']
})
export class MovieticketComponent implements OnInit {
  
  public moviesList!: Imovie[];
  public selectedMovieInfo:  any;
  public selectedShowInfo=''
  public control:any=new FormControl('')
  tickets:any
  constructor(private share: ShareService,private router:Router) { }
  ngOnInit(): void {
    this.share.getMovieTicket().subscribe((res: any) => {
      this.moviesList = res.data;
    })
  }
  selectedMovie(movie:Imovie){
    //debugger
    this.selectedMovieInfo=movie;
    if(this.selectedMovieInfo.shows.length==1){
      this.selectedShowInfo=this.selectedMovieInfo.shows[0];
    }
  }
  selectedShow(show:string){
    //debugger
    this.selectedShowInfo=show
  }
  Book(){
    this.tickets=this.control.value;
    //console.log(this.control)
  }

  slots(){
    debugger
   this.selectedMovieInfo.tickets=JSON.stringify(this.selectedMovieInfo?.tickets);
    this.router.navigate(['movie-book'],{queryParams:this.selectedMovieInfo});
    //console.log(this.selectedMovieInfo)
  }

}
