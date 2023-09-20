import { Component } from '@angular/core';

@Component({
  selector: 'app-tip-settings',
  templateUrl: './tip-settings.component.html',
  styleUrls: ['./tip-settings.component.css']
})
export class TipSettingsComponent {

  porcentaje = 10;

  modificarPorcentaje(event: any) {
    this.porcentaje = event.target.value;
  }
}
