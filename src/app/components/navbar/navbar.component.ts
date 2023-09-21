import { Component, OnInit } from '@angular/core';
import { messageService } from 'src/app/core/services/message.service';
import { userSessionService } from 'src/app/core/services/userSession.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})


export class NavbarComponent implements OnInit {

  administrador: boolean = false;
  mesero: boolean = true;


  constructor(
    private mensaje: messageService,
    private sesion: userSessionService
  ) {
/* 
    this.sesion.getAdminStatus().subscribe({
      next: res => {
        if (res) {
          this.administrador = true;
        }
      }
    })

    this.sesion.getWaiterStatus().subscribe({
      next: res => {
        if (res) {
          this.mesero = true;
        }
      }
    }) */

  }


  ngOnInit(): void {



  }




}
