import { Component, OnInit } from '@angular/core';
import { dishesRequest } from 'src/app/core/models/dishes.model';
import { dishesCategoryRequest } from 'src/app/core/models/dishesCategory.model';
import { detailOrderModelRequest } from 'src/app/core/models/detailOrder.model';
import { messageService } from 'src/app/core/services/message.service';
import { ordersService } from 'src/app/core/services/orders.service';
import { totalOrdersModelRequest } from 'src/app/core/models/totalOrder.model';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/core/services/auth.service';

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
  categoria?: number;
  principal: boolean = true;
  cargando: boolean = false;
  texto: string = 'Confirmar orden';
  propina: number = 0; 
  totalGeneralPropina: number = 0;
  totalGeneral: number = 0;
  porcentajePropina: number;
  usuarioActivo: string;

  constructor(
    public mensaje: messageService,
    private orders: ordersService,
    private _ordersService: ordersService,
    private toastr: ToastrService,
    private auth: AuthService
  ) { }

  ngOnInit(): void {
    this.getDishesCategories()
    this.getPropina()
    this.obtenerusuarioActivo()
  }

  setPrincipal() {
    this.principal = true;
    this.categoria = 0;
  }

  obtenerusuarioActivo(){
    this.usuarioActivo = this.auth.getUser().email
  }

  changeCategory(category: number) {
    this.categoria = category
    this.principal = false;

    switch (category) {
      case 1:
        this.getEntradas()
        break;
      case 2:
        this.getDishes()
        break;
        case 3:
        this.getPostres()
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

  getEntradas() {
    this.orders.getEntradas().subscribe({
      next: result => {
        this.dishes = result
      },
      error: err => {
        this.mensaje.openSnackBar('No se pudo obtener el menú de bebidas')
        console.log('Error no se pudieron obtener los platillos', err)
      }
    })
  }

  getPostres() {
    this.orders.getPostes().subscribe({
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
    this.propina = this.totalGeneral * (this.porcentajePropina / 100)
    this.totalGeneralPropina = this.totalGeneral + this.propina
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

   formatearNumeroConDosDecimales(numero: number): string {
    return numero.toFixed(2);
  }

  facturar() {
    this.texto = "Confirmando Orden..."
    this.cargando = true;
    const orden = this.dishesOrdered
    
    orden.forEach((dato: detailOrderModelRequest, index: any) => {
      this._ordersService.guardarDetalleOrden(dato).then(() => {
        this.toastr.success('Orden registrada con exito')
        this.mensaje.openSnackBar('Orden registrada con exito');
        this.cargando = false;
      }, error => {
        console.log(error)
        this.toastr.error('Ocurrió un error', 'Error')
        this.cargando = false;
      });
    })

    const totalOrden: totalOrdersModelRequest = {
      total: this.totalGeneral,
      propina: this.propina,
      totalConPropina: this.totalGeneralPropina,
      fechaCreacion: new Date(),
      emailMesero: this.usuarioActivo,
    }

    this._ordersService.guardarTotalOrden(totalOrden).then(()=>{
      /* this.toastr.success('Total de orden guardado') */
      console.log('Se guardó el total de orden');
    },error =>{
      console.log('No se pudo guardar el total de orden')
    })

    this.dishesOrdered =[]
  }


  mostrar(){
    this.toastr.success('Hola');
  }


  getPropina() {
    this._ordersService.obtenerPorcentajePropnia().subscribe(
      porcentaje => {
        if (porcentaje !== null) {
          this.porcentajePropina = porcentaje
        } else {
          console.log('No se pudo obtener el porcentaje de propina.');
        }
      },
      error => {
        console.error('Error al obtener el porcentaje:', error);
      }
    );
  }
  

}
