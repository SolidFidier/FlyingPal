import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetalleDestinoPageRoutingModule } from './detalle-destino-routing.module';

import { DetalleDestinoPage } from './detalle-destino.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetalleDestinoPageRoutingModule
  ],
  declarations: [DetalleDestinoPage]
})
export class DetalleDestinoPageModule {}
