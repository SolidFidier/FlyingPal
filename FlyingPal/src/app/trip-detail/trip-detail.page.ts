import { Component } from '@angular/core';

@Component({
  selector: 'app-trip-detail',
  templateUrl: './trip-detail.page.html',
  styleUrls: ['./trip-detail.page.scss'],
})
export class TripDetailPage {

  calificacion: number = 0;

  comentarios: { usuario: string; texto: string; fecha: string }[] = [];

  nuevoComentario = {
    usuario: '',
    texto: ''
  };

  constructor() {}

  agregarComentario() {
    if (this.nuevoComentario.usuario && this.nuevoComentario.texto) {
      const nuevo = {
        usuario: this.nuevoComentario.usuario,
        texto: this.nuevoComentario.texto,
        fecha: new Date().toLocaleDateString()
      };
      this.comentarios.push(nuevo);
      this.nuevoComentario.texto = '';
    }
  }

  calificar(v: number) {
    this.calificacion = v;
  }
}
