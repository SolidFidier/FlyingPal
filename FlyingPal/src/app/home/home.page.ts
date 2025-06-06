import { Component } from '@angular/core';
import { NavController, MenuController } from '@ionic/angular'; // Importa MenuController aquí
import { Router } from '@angular/router'; // Importa Router

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

  constructor(
    private navCtrl: NavController,
    private router: Router,       
    private menu: MenuController 
  ) {}

  verDetalle(viaje: any) {
    this.navCtrl.navigateForward('/trip-detail', {
      state: { viaje }
    });
  }

  async logout() {
    console.log('Cerrar Sesión clickeado.');

    // Para cerrar menu
    await this.menu.close('main-content'); 

    // Direcciona a la parte de login = cerrar sesion
    this.router.navigateByUrl('/login', { replaceUrl: true });
  }
}