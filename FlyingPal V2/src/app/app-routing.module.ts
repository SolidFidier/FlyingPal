import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'add-trip',
    loadChildren: () => import('./add-trip/add-trip.module').then( m => m.AddTripPageModule)
  },
    {
  path: 'detalle-destino/:id',
  loadChildren: () => import('./detalle-destino/detalle-destino.module').then(m => m.DetalleDestinoPageModule)
  },

  {
    path: 'detalle-destino',
    loadChildren: () => import('./detalle-destino/detalle-destino.module').then( m => m.DetalleDestinoPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
