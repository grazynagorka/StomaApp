import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../service/auth.service';

@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanActivate {

  constructor( private router: Router, private authService:AuthService) {
    
 }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const currentUser = this.authService.currentUserValue;
        if (currentUser) {
            if(!route.data.adminRequired) {
                return true;
            } else {
                if(currentUser.isAdmin == 'true') {
                    return true;
                } else {
                    this.router.navigate(['home']);
                    console.log('Nie masz dostępu');
                    return false;
                }
            }
        }
        this.router.navigate(['auth/login']);
        return false;
    }
  
}
