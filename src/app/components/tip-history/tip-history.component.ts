import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tip-history',
  templateUrl: './tip-history.component.html',
  styleUrls: ['./tip-history.component.css']
})
export class TipHistoryComponent {

  administrador: boolean = false;
  mesero: boolean = true;
}
