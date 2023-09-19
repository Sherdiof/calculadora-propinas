import { Component, OnInit } from '@angular/core';
import { dishesRequest } from 'src/app/core/models/dishes.model';
import { ordersService } from 'src/app/core/services/orders.service';
import { messageService } from 'src/app/core/services/message.service';
import { userSessionService } from 'src/app/core/services/userSession.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})


export class NavbarComponent implements OnInit {

  administrador: boolean = false;
  mesero: boolean = false;
  dishes: dishesRequest[] = [];

  constructor(
    private orders: ordersService,
    private mensaje: messageService,
    private sesion: userSessionService
  ) { }



  ngOnInit(): void {
    this.getDishes()
  }


  getDishes() {
    this.orders.getDishes().subscribe({
      next: result => {
        this.dishes = result
      },
      error: err => {
        this.mensaje.openSnackBar('No se pudo obtener el menú de platillos')
        console.log('Error no se pudieron obtener los platillos', err)
      }
    })
  }

}
