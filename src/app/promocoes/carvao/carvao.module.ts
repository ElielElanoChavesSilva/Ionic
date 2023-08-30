import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CarvaoPageRoutingModule } from './carvao-routing.module';

import { CarvaoPage } from './carvao.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CarvaoPageRoutingModule
  ],
  declarations: [CarvaoPage]
})
export class CarvaoPageModule {}
