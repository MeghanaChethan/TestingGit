import { Injectable } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';

import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate{

  constructor(
    private router: Router,
    private authService: LoginService,
    private route: ActivatedRoute,
  ) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (this.authService.isLoggedIn()) {
      sessionStorage.setItem('__lock', '1');
      return true;
    }
    else {
      this.router.navigate(['/', 'login']).then(nav => {
        console.log(nav); // true if navigation is successful
      }, err => {
        console.log(err) // when there's an error
      });
      // this.router.navigate(['/login'], { relativeTo: this.route });
      sessionStorage.clear();
      return false;
    }
  }
}
