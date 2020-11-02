import { SecurityService } from './services/security.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private security: SecurityService,
    private Router: Router
  ){}
  canActivate(): boolean {
    if(this.security.logedIn()){
      return true;
    }
    this.Router.navigate(['login']);
    return false;

  }

}
