import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
    providedIn: 'root',
})

export class userSessionService {

    private isAdmin = new BehaviorSubject<boolean>(false);
    private isWaiter = new BehaviorSubject<boolean>(false);

    constructor() { }

    setAdminStatus(isAdmin: boolean) {
        this.isAdmin.next(isAdmin);
    }

    getAdminStatus() {
        return this.isAdmin.asObservable();
    }

    setWaiterStatus(isWaiter: boolean) {
        this.isWaiter.next(isWaiter);
    }

    getWaiterStatus() {
        return this.isWaiter.asObservable();
    }

}