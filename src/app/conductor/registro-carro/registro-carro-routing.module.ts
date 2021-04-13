import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistroCarroPage } from './registro-carro.page';

const routes: Routes = [
  {
    path: '',
    component: RegistroCarroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegistroCarroPageRoutingModule {}
