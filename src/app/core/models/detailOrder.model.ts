export class detailOrderModelRequest {
    id?: number;
    nombre?: string;
    precio?: number;
    descripcion?: string;
    cantidad: number;
    
    constructor( nombre: string, precio: number, descripcion: string, cantidad: number){
        this.nombre = nombre,
        this.precio = precio,
        this.descripcion = descripcion,
        this.cantidad = cantidad
    }
    
}