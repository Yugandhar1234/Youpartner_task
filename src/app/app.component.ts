
import {
  Component, OnInit
} from '@angular/core';
//import { Iall, ShareService } from './services/share.service';
import { ShareService } from './share/share.service';
import { NavigationEnd, Router } from '@angular/router';
import { map, tap } from 'rxjs';
import { BnNgIdleModule, BnNgIdleService } from 'bn-ng-idle';
export interface countries {
  "iso2": string,
  "iso3": string,
  "country": string,
  "cities": string[]
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'practice';
  isLoggedIn!:boolean;
  constructor(private share: ShareService,public router:Router,private idle:BnNgIdleService) { }
  profileOnfo:any;
  ngOnInit(): void {
    // this.router.events.subscribe(routes=>{
    //   debugger
    //   if(routes instanceof NavigationEnd){
    //     if(routes.url!='/login'){
    //       this.restrict=true;
    //     }
    //   }
    // })

    this.share.behaviour.subscribe(data=>{
      debugger
      this.profileOnfo=data
      if(this.profileOnfo!=null){
        this.isLoggedIn=true;
      }
    })
    this.idle.startWatching(1000).subscribe(time=>{
      if(time){
        console.log('timout')
        this.idle.stopTimer()
      }
    })
  }
  logout(){
    localStorage.removeItem('user');
    this.share.behaviour.next({"flag":false});
    this.router.navigate(['/login'])
  }
}
