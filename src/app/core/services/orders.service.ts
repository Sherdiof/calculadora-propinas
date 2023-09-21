import { Injectable } from "@angular/core";
import { Observable, map, of } from "rxjs";
import { entradasMock, bebidasMock, dishesCategoriesMock, dishesMock, postresMock } from "../mocks/mocks";
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { totalOrdersModelRequest } from "../models/totalOrder.model";
import { tipRequest } from "../models/tip.model";

@Injectable({
    providedIn: 'root'
})

export class ordersService {

    constructor(
        private firebase: AngularFirestore,
        private tip: tipRequest
    ){}

    getDishesCategory(){
        return of(dishesCategoriesMock)
    }

    getDishes(){
        return of(dishesMock)
    }

    getBebidas(){
        return of (bebidasMock)
    }

    getEntradas(){
        return of (entradasMock)
    }

    getPostes(){
        return of (postresMock)
    }

    guardarDetalleOrden(detalleOrden: any): Promise<any>{
       return this.firebase.collection('detalleOrden').add(detalleOrden);
    }

    guardarTotalOrden(orden: totalOrdersModelRequest){
        return this.firebase.collection('totalOrden').add(orden);
    }

    listarOrdenes(): Observable<any>{
        return this.firebase.collection('totalOrden').snapshotChanges()
    }

    public obtenerOrdenesPorEmailMeseroFecha(mesero: string) {
        return this.firebase.collection('totalOrden', ref => ref.where('emailMesero', '==', mesero))
          .snapshotChanges();
      }

    /*   public obtenerOrdenesPorEmailMeseroFecha(mesero: string, fechaInicio: Date, fechaFin: Date) {
        return this.firebase.collection('totalOrden', ref =>
          ref.where('emailMesero', '==', mesero)
             .where('fecha', '>=', fechaInicio)
             .where('fecha', '<=', fechaFin)
        ).snapshotChanges();
      } */

    obtenerPorcentajePropnia() {
        return this.firebase.collection('settings').doc('tips').snapshotChanges()
          .pipe(
            map(doc => {
              const data = doc.payload.data() as tipRequest;
              if (data) {
                return data.porcentaje;
              } else {
                console.log('El documento no existe.');
                return null;  // o podrías devolver un valor predeterminado si el documento no existe
              }
            })
          );
      }
}
