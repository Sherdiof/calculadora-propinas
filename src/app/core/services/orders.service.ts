import { Injectable } from "@angular/core";
import { of } from "rxjs";
import { dishesMock } from "../mocks/mocks";

@Injectable({
    providedIn: 'root'
})

export class ordersService {

    constructor(){

    }

    getDishes(){
        return of(dishesMock)
    }


}
