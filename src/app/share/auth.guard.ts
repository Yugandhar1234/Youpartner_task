import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { ShareService } from './share.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanLoad, CanActivate {

  constructor(private share: ShareService, private router: Router) { }
  canLoad(route: Route, segments: UrlSegment[]): boolean {
    //debugger
    const isActive = this.share.isActive()
    if (isActive.isActive) {
      return true
    }
    this.router.navigate(['/login'])
    return false
  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const isActive = this.share.isActive()
    if (isActive.isActive) {
      return true
    }
    this.router.navigate(['/login'])
    return false
  }

}
