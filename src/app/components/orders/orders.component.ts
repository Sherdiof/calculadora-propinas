import { Component, OnInit, Input, Output } from '@angular/core';
import { dishesRequest } from 'src/app/core/models/dishes.model';
import { dishesCategoryRequest } from 'src/app/core/models/dishesCategory.model';
import { messageService } from 'src/app/core/services/message.service';
import { ordersService } from 'src/app/core/services/orders.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  dishes: dishesRequest[] = [];
  dishesCategory: dishesCategoryRequest[] = []
  dishesOrdered: any = [];
  cantidad: number = 0;
  totalGeneral: number = 0;
  categoria?: number;
  principal: boolean = true;

  constructor(
    public mensaje: messageService,
    private orders: ordersService,
  ) { }

  ngOnInit(): void {
    this.getDishesCategories()
  }

  setPrincipal() {
    this.principal = true;
    this.categoria = 0;
  }

  changeCategory(category: number) {
    this.categoria = category
    this.principal = false;

    switch (category) {
      case 2:
        this.getDishes()
        break;
      case 4:
        this.getBebidas()
        break;
      default:
        this.getDishesCategories()
        break;
    }

  }

  getDishesCategories() {
    this.orders.getDishesCategory().subscribe({
      next: result => {
        this.dishesCategory = result
      },
      error: err => {
        this.mensaje.openSnackBar('No se pudieron obtener las categorías de platillos')
        console.log('Error no se pudieron obtener los platillos', err)
      }
    })
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

  getBebidas() {
    this.orders.getBebidas().subscribe({
      next: result => {
        this.dishes = result
      },
      error: err => {
        this.mensaje.openSnackBar('No se pudo obtener el menú de bebidas')
        console.log('Error no se pudieron obtener los platillos', err)
      }
    })
  }

  agregarPlatillo(item: any) {
    const index = this.dishesOrdered.findIndex((dish: any) => dish.id === item.id);

    if (index !== -1) {
      // Si el platillo ya está en la lista, aumenta la cantidad y recalcula el total por fila
      this.dishesOrdered[index].cantidad++;
      this.dishesOrdered[index].totalPorFila = this.dishesOrdered[index].cantidad * this.dishesOrdered[index].precio;
    } else {
      // Si no está en la lista, agrégalo con cantidad 1 y calcula el total por fila
      item.cantidad = 1;
      item.totalPorFila = item.cantidad * item.precio;
      this.dishesOrdered.push(item);
    }

    this.actualizarTotalGeneral();
    this.mensaje.openSnackBar('Agregado a lista');
  }

  private actualizarTotalGeneral() {
    this.totalGeneral = this.dishesOrdered.reduce((total: number, dish: any) => total + dish.totalPorFila, 0);
  }

  eliminarPlatillo(plato: any) {
    const index = this.dishesOrdered.findIndex((dish: any) => dish.id === plato.id);

    if (index !== -1) {
      if (this.dishesOrdered[index].cantidad > 1) {
        // Si hay más de un platillo, reducir la cantidad en lugar de eliminarlo completamente
        this.dishesOrdered[index].cantidad--;
        this.dishesOrdered[index].totalPorFila = this.dishesOrdered[index].cantidad * this.dishesOrdered[index].precio;
      } else {
        // Si hay un platillo o menos, eliminarlo de la lista
        this.dishesOrdered.splice(index, 1);
      }
      this.actualizarTotalGeneral();
    }
  }


  facturar(){
    console.log('Productos Consumidos: ', this.dishesOrdered, 'Total de su compra: Q',this.totalGeneral)
    this.mensaje.openSnackBar(`Total de su Compra: Q ${this.totalGeneral}`)
  }

}
