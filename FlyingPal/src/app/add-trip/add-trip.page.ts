import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-trip',
  templateUrl: './add-trip.page.html',
  styleUrls: ['./add-trip.page.scss'],
})
export class AddTripPage {
  titulo = '';
  descripcion = '';
  lugar = '';
  fecha = '';

  constructor(private router: Router) {}

  publicarViaje() {
    console.log('Viaje publicado:', this.titulo, this.lugar, this.fecha);
    this.router.navigate(['/home']);
  }
}
