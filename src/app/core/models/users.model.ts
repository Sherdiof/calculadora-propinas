export class usersRequest { 
    id?: number;
    usuario: string;
    contraseña: string;
    rol:number;

    constructor(usuario: string, contraseña: string, rol:number){
        this.usuario = usuario,
        this.contraseña = contraseña,
        this.rol = rol
    }

}