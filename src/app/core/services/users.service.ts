import { Injectable } from "@angular/core";
import { of } from "rxjs";
import { dishesMock, usersMock } from "../mocks/mocks";

@Injectable({
    providedIn: 'root'
})

export class userService {

    constructor(){

    }

    getUserbyUserPass(usuario: string, contraseña: string){
        return of(usersMock.find(i => i.usuario == usuario && i.contraseña == contraseña ))
    }

}