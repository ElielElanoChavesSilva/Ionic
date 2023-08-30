import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LinguicaPageRoutingModule } from './linguica-routing.module';

import { LinguicaPage } from './linguica.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LinguicaPageRoutingModule
  ],
  declarations: [LinguicaPage]
})
export class LinguicaPageModule {}
