import {Injectable} from '@angular/core';
import {AngularFireAuth} from '@angular/fire/compat/auth';
import {AngularFirestore} from "@angular/fire/compat/firestore";


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(
    public afAuth: AngularFireAuth,
    public angularFirestore: AngularFirestore) {

  }

  public login(email: string, password: string) {
    return new Promise((resolve, reject) => {
        this.afAuth.signInWithEmailAndPassword(email, password)
          .then(user => {
            const reference = this.angularFirestore.collection<any>('users').ref;
            reference.doc(email).get().then(res => {
              const aux = res.data();
              localStorage.setItem('user', JSON.stringify(aux));
              resolve(aux);
            });
          })
          .catch(err => {
            reject(err);
          })
      }
    );
  }

  public getUser() {
    return JSON.parse(localStorage.getItem('user'));
  }

  public isLogged() {
    return JSON.parse(localStorage.getItem('user'));
  }

  public logout() {
    localStorage.removeItem('user');
    return this.afAuth.signOut();
  }
}
