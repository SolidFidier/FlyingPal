import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-add-trip',
  templateUrl: './add-trip.page.html',
  styleUrls: ['./add-trip.page.scss'],
})
export class AddTripPage {
  nuevoDestino = {
    nombre: '',
    img: '',
    calificacion: 3,
    comentario: ''
  };

  constructor(private navCtrl: NavController) {}

  guardarDestino() {
    const destinos = JSON.parse(localStorage.getItem('destinos') || '[]');
    destinos.push(this.nuevoDestino);
    localStorage.setItem('destinos', JSON.stringify(destinos));
    this.navCtrl.back();
  }
}