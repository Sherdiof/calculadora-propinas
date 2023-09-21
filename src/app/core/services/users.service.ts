import {Injectable} from "@angular/core";
import {of} from "rxjs";
import {dishesMock, usersMock} from "../mocks/mocks";
import {User} from "../models/users.model";
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {AngularFireAuth} from "@angular/fire/compat/auth";

@Injectable({
  providedIn: 'root'
})

export class UserService {

  constructor(private firestore: AngularFirestore, public afAuth: AngularFireAuth) {
  }

  getUsers() {
    return this.firestore.collection('users').ref.where('active', '==', true).get();
  }

  createUser(user: User, password: string) {
    return new Promise(resolve => {
      this.firestore.collection('users').doc(user.email).set(user).then(value => {
        this.afAuth.createUserWithEmailAndPassword(user.email, password).then();
        resolve(value);
      });
    });
  }

  updateUser(user: User) {
    return this.firestore.collection('users').doc(user.email).update(user);
  }

  deleteUser(user: User) {
    /*this.firestore.collection('users').doc(user.email).delete().then(value => {
      this.afAuth.signInWithEmailAndPassword(user.email, user.email).then(value => {
        this.afAuth.currentUser.then(value => {
          value.delete().then();
        });
      });
    });*/

    return this.firestore.collection('users').doc(user.email).update({active: false});
  }

  getUserByEmail(email: string) {
    return this.firestore.collection('users').doc(email).valueChanges();
  }
}
