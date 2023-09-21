export class totalOrdersModelRequest{
    id?: string;
    total: number;
    propina: number;
    totalConPropina: number;
    fechaCreacion:Date;
    emailMesero: string;


    constructor(total:number, propina:number, totalConPropina: number, emailMesero: string){
        this.propina = propina,
        this.total = total
        this.totalConPropina = totalConPropina
        this.fechaCreacion = new Date();
        this.emailMesero = emailMesero;
    }


}