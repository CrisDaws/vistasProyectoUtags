import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'registro-pasajero',
    loadChildren: () => import('./pasajero/registro/registro.module').then( m => m.RegistroPageModule)
  },
  {
    path: 'login-pasajero',
    loadChildren: () => import('./pasajero/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'login-conductor',
    loadChildren: () => import('./conductor/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'registro-conductor',
    loadChildren: () => import('./conductor/registro/registro.module').then( m => m.RegistroPageModule)
  },
  {
    path: 'registro-carro',
    loadChildren: () => import('./conductor/registro-carro/registro-carro.module').then( m => m.RegistroCarroPageModule)
  },
  {
    path: 'menu-conductor',
    loadChildren: () => import('./conductor/menu-conductor/menu-conductor.module').then( m => m.MenuConductorPageModule)
  },
  {
    path: 'menu-pasajero',
    loadChildren: () => import('./pasajero/menu-pasajero/menu-pasajero.module').then( m => m.MenuPasajeroPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
