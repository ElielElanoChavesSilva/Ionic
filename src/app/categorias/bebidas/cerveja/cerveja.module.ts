import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CervejaPageRoutingModule } from './cerveja-routing.module';

import { CervejaPage } from './cerveja.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CervejaPageRoutingModule
  ],
  declarations: [CervejaPage]
})
export class CervejaPageModule {}
