import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalle-destino',
  templateUrl: './detalle-destino.page.html',
  styleUrls: ['./detalle-destino.page.scss'],
})
export class DetalleDestinoPage {
  destino: any;
  destinoIndex: number = 0;
  comentarios: any[] = [];

  nuevoComentario = {
    calificacion: 3,
    comentario: ''
  };

  constructor(private route: ActivatedRoute) {}

  ionViewWillEnter() {
    this.destinoIndex = Number(this.route.snapshot.paramMap.get('id')); // "id" porque ionic por defecto lo pone así en la ruta
    const destinos = JSON.parse(localStorage.getItem('destinos') || '[]');
    this.destino = destinos[this.destinoIndex];

    const allComentarios = JSON.parse(localStorage.getItem('comentarios') || '{}');
    this.comentarios = allComentarios[this.destinoIndex] || [];
  }

  guardarComentario() {
    const allComentarios = JSON.parse(localStorage.getItem('comentarios') || '{}');
    if (!allComentarios[this.destinoIndex]) {
      allComentarios[this.destinoIndex] = [];
    }
    allComentarios[this.destinoIndex].push({ ...this.nuevoComentario });
    localStorage.setItem('comentarios', JSON.stringify(allComentarios));
    this.nuevoComentario = { calificacion: 3, comentario: '' };
    this.ionViewWillEnter(); // Recargar
  }

  promedioCalificacion() {
    if (!this.comentarios.length) return this.destino.calificacion || 0;
    const total = this.comentarios.reduce((sum, c) => sum + c.calificacion, 0);
    return (total / this.comentarios.length).toFixed(1);
  }
  
}
