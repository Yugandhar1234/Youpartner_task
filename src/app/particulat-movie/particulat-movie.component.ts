import { Component, OnInit } from '@angular/core';
import { ShareService } from '../share/share.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-particulat-movie',
  templateUrl: './particulat-movie.component.html',
  styleUrls: ['./particulat-movie.component.css']
})
export class ParticulatMovieComponent implements OnInit{
  movie:any;
  constructor(private share:ShareService,private route:ActivatedRoute,private router:Router){}
  ngOnInit(): void {
    this.route.params.subscribe((res:any)=>{
      const id = res['id'];
      this.getMovieById(id)
      console.log(res)
    })
    console.log(this.router.url)
  }
  getMovieById(id:any){
    this.share.getMovieById(id).subscribe((res)=>{
      this.movie=res.results
      console.log(res)
    })
  }
}
