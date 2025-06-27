import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage {

  usuario = {
    nombre: 'Isaac',
    email: 'isaac@flayingpal.com',
  };

  busqueda: string = '';
  viajes = [];
  favoritos = [];

  topDestinos = [
    {
      id: 1,
      nombre: 'París',
      img: 'assets/lugares/GettyRF_824655732.webp',
      calificacion: 4.8,
      resenas: 1200
    },
    {
      id: 2,
      nombre: 'Machu Picchu',
      img: 'assets/lugares/360_F_4609800_KTe47cgKNxAvaz8knzSNjjFaylOlz299.webp',
      calificacion: 4.9,
      resenas: 850
    },
    {
      id: 3,
      nombre: 'Nueva York',
      img: 'assets/lugares/high-angle-view-of-lower-manhattan-new-york-city.webp',
      calificacion: 4.7,
      resenas: 1100
    }
  ];

  proximosViajes = [
    {
      nombre: 'Tokio',
      img: 'assets/lugares/tokyo-skyline-bei-nacht.webp',
      fecha: '2025-07-10',
      calificacion: 4.7
    },
    {
      nombre: 'Roma',
      img: 'assets/lugares/rome-italy.webp',
      fecha: '2025-08-03',
      calificacion: 4.6
    }
  ];

  logout() {
    console.log('Cierre de sesión simulado');
    
  }

}
