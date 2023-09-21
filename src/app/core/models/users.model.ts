
export interface User {
  id?: string;
  name: string;
  email: string;
  active?: boolean;
  role: 'admin' | 'waiter';
}

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
