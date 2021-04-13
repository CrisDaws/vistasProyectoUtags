import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistroCarroPageRoutingModule } from './registro-carro-routing.module';

import { RegistroCarroPage } from './registro-carro.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistroCarroPageRoutingModule
  ],
  declarations: [RegistroCarroPage]
})
export class RegistroCarroPageModule {}
