import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage {

  viajes = [
    { id: 1, destino: 'París', descripcion: 'Una ciudad romántica y llena de arte.' },
    { id: 2, destino: 'Tokio', descripcion: 'Tecnología, cultura y comida japonesa.' },
    { id: 3, destino: 'Patagonia', descripcion: 'Paisajes impresionantes y naturaleza.' },
  ];

  constructor(private navCtrl: NavController) {}

  verDetalle(viaje: any) {
    this.navCtrl.navigateForward('/trip-detail', {
      state: { viaje }
    });
  }
}
