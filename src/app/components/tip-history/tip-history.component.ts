import { Component, OnInit } from '@angular/core';
import { ordersService } from 'src/app/core/services/orders.service';
import { AuthService } from 'src/app/core/services/auth.service';
import { totalOrdersModelRequest } from 'src/app/core/models/totalOrder.model';
import { format } from 'date-fns';
import es from 'date-fns/locale/es';

@Component({
  selector: 'app-tip-history',
  templateUrl: './tip-history.component.html',
  styleUrls: ['./tip-history.component.css']
})
export class TipHistoryComponent implements OnInit {

  usuarioActivo: string;
  ordenes: totalOrdersModelRequest[] = []
  fechaInicio: Date;
  fechaFin: Date;

  constructor(
    private _orderService: ordersService,
    private auth: AuthService
  ) { }

  ngOnInit(): void {
    this.obtenerusuarioActivo()
  }

  listarHistorialPropinas() {
    this._orderService.obtenerOrdenesPorEmailMeseroFecha(this.usuarioActivo).subscribe((ordenes) => {
      this.ordenes = []
      ordenes.forEach((orden: any) => {
        this.ordenes.push({
          id: orden.payload.doc.id,
          ...orden.payload.doc.data()
        })
      })
    })
    console.log(this.ordenes)
  }

  obtenerusuarioActivo() {
    this.usuarioActivo = this.auth.getUser().email
    this.listarHistorialPropinas()
  }

  public obtenerFechaFormateada(fecha: Date): string {
    // Formatea la fecha en español con el formato deseado
    return format(fecha, 'dd/MM/yyyy HH:mm', { locale: es });
  }

  calcularPropina(): number {
    let prop = 0;

    for (const orden of this.ordenes) {
      prop += orden.propina;
    }

    return prop;
  }


}
