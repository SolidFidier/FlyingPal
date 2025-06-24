import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  topDestinos = [
    {
      nombre: 'París',
      calificacion: 4.8,
      resenas: 1200,
      img: 'https://example.com/paris.jpg'
    },
    {
      nombre: 'Machu Picchu',
      calificacion: 4.9,
      resenas: 850,
      img: 'https://example.com/machu.jpg'
    }
  ];

  proximosViajes = [
    {
      nombre: 'Tokio',
      fecha: '2025-07-10',
      calificacion: 4.7,
      img: 'https://example.com/tokyo.jpg'
    },
    {
      nombre: 'Roma',
      fecha: '2025-08-03',
      calificacion: 4.6,
      img: 'https://example.com/roma.jpg'
    }
  ];
  ionViewWillEnter() {
  const destinosGuardados = JSON.parse(localStorage.getItem('destinos') || '[]');
  this.topDestinos = [...this.topDestinos, ...destinosGuardados];
}

}
