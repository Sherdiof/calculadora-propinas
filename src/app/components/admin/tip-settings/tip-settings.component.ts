import {Component} from '@angular/core';
import {AngularFirestore} from "@angular/fire/compat/firestore";

@Component({
  selector: 'app-tip-settings',
  templateUrl: './tip-settings.component.html',
  styleUrls: ['./tip-settings.component.css']
})
export class TipSettingsComponent {
  porcentaje = 0;

  constructor(public angularFirestore: AngularFirestore) {
    this.angularFirestore.collection('settings').doc('tips').valueChanges().subscribe((res: any) => {
      this.porcentaje = res.porcentaje;
    });
  }

  modificarPorcentaje(event: any) {
    this.porcentaje = event.target.value;
  }

  public async save() {
    await this.angularFirestore.collection('settings').doc('tips').set({
      porcentaje: this.porcentaje
    });
  }
}
