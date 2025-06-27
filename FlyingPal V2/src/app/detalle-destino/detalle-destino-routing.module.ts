import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetalleDestinoPage } from './detalle-destino.page';

const routes: Routes = [
  {
    path: '',
    component: DetalleDestinoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetalleDestinoPageRoutingModule {}
