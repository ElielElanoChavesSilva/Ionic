import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PicanhaPageRoutingModule } from './picanha-routing.module';

import { PicanhaPage } from './picanha.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PicanhaPageRoutingModule
  ],
  declarations: [PicanhaPage]
})
export class PicanhaPageModule {}
