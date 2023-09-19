import { Component, OnInit, Input, Output } from '@angular/core';
import { dishesRequest } from 'src/app/core/models/dishes.model';
import { messageService } from 'src/app/core/services/message.service';
import { ordersService } from 'src/app/core/services/orders.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  dishes: dishesRequest[] = [];
  dishesOrdered: any = [];


  constructor(
    public mensaje: messageService,
    private orders: ordersService,
  ){ }

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

agregarPlatillo(item: dishesRequest){
  this.dishesOrdered.push(item)
  this.mensaje.openSnackBar('Agregado a lista');
}

}
