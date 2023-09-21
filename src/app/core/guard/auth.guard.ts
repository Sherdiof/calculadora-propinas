import {Injectable} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import {AuthService} from "../services/auth.service";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    if (this.authService.isLogged()) {
      const user = this.authService.getUser();

      if (route.url[0].path === 'home' && user.role !== 'admin') {
        this.router.navigate(['/orders']);
        return false;
      }

      else if (route.url[0].path === 'users' && user.role !== 'admin') {
        this.router.navigate(['/orders']);
        return false;
      }

      else if (route.url[0].path === 'tip-settings' && user.role !== 'admin') {
        this.router.navigate(['/orders']);
        return false;
      }

      else if (route.url[0].path === 'products' && user.role !== 'admin') {
        this.router.navigate(['/orders']);
        return false;
      }

      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
}
