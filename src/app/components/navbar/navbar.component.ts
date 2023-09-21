import {Component, OnInit} from '@angular/core';
import {messageService} from 'src/app/core/services/message.service';
import {userSessionService} from 'src/app/core/services/userSession.service';
import {AuthService} from "../../core/services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})


export class NavbarComponent implements OnInit {
  isAdmin = false;

  constructor(
    public authService: AuthService,
    private router: Router,
  ) {
    this.isAdmin = authService.getUser().role === 'admin';
  }

  ngOnInit(): void {

  }

  logout() {
    this.authService.logout().then(value => {
      this.router.navigateByUrl('/login');
    });
  }
}
