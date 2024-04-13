import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ShareService } from '../share/share.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit{
  search:FormControl=new FormControl('');
  moviesBysearch:any;
  constructor(private share:ShareService){}
  ngOnInit(): void {
    console.log(this.search)
  }
  searchMovie(){
    //debugger
    this.share.getMoviesBySearch(this.search.value).subscribe(res=>{
      console.log(res);
      this.moviesBysearch=res.results;
      this.moviesBysearch.map((item:any)=>{
        item.poster_path='https://image.tmdb.org/t/p/original'+ item.poster_path;
      })
    })
  }
}
