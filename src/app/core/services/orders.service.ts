import { Injectable } from "@angular/core";
import { of } from "rxjs";
import { bebidasMock, dishesCategoriesMock, dishesMock } from "../mocks/mocks";

@Injectable({
    providedIn: 'root'
})

export class ordersService {

    constructor(){

    }

    getDishesCategory(){
        return of(dishesCategoriesMock)
    }

    getDishes(){
        return of(dishesMock)
    }

    getBebidas(){
        return of (bebidasMock)
    }

}
